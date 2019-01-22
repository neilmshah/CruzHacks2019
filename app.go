package main
import (
    "fmt"
    "encoding/json"
    "github.com/rs/cors"
    "log"
    "time"
    "net/http"
    "github.com/hashgraph/hedera-sdk-go"
    "github.com/gorilla/mux"
)

type Balance struct {
   bal uint64
}

// Generate Keys
func GenKeys(w http.ResponseWriter, r *http.Request) {
    secret, mnemonic := hedera.GenerateSecretKey()
    fmt.Printf("secret   = %v\n", secret)
    fmt.Printf("mnemonic = %v\n", mnemonic)
    public := secret.Public()
    fmt.Printf("public   = %v\n", public)

}

func GetMyBalance(w http.ResponseWriter, r *http.Request) {
    accountID := hedera.AccountID{Account: 1001}

    client, err := hedera.Dial("testnet.hedera.com:51003")
    if err != nil {
        panic(err)
    }

    client.SetNode(hedera.AccountID{Account: 3})
    client.SetOperator(accountID, func() hedera.SecretKey {
        operatorSecret, err := hedera.SecretKeyFromString("<SECRET_KEY>")
        if err != nil {
            panic(err)
        }

        return operatorSecret
    })

    defer client.Close()

// Get the _answer_ for the query of getting the account balance    
    balance, err := client.Account(accountID).Balance().Get()
    if err != nil {
        panic(err)
    }

    respondWithJson(w, http.StatusOK, map[string]uint64{"Balance": balance/100000000.0})

    fmt.Printf("balance = %v tinybars\n", balance)
    fmt.Printf("balance = %.5f hbars\n", float64(balance)/100000000.0)


}

func TransferTokens(w http.ResponseWriter, r *http.Request) {
    // Read and decode the operator secret key
    operatorAccountID := hedera.AccountID{Account: 1001}
    operatorSecret, err := hedera.SecretKeyFromString("<SECRET_KEY>")
    if err != nil {
        panic(err)
    }

    // Read and decode target account
    targetAccountID, err := hedera.AccountIDFromString("0:0:1004")
    if err != nil {
        panic(err)
    }

    //
    // Connect to Hedera
    //

    client, err := hedera.Dial("testnet.hedera.com:51003")
    if err != nil {
        panic(err)
    }

    client.SetNode(hedera.AccountID{Account: 3})
    client.SetOperator(operatorAccountID, func() hedera.SecretKey {
        return operatorSecret
    })

    defer client.Close()

    balance, err := client.Account(targetAccountID).Balance().Get()
    if err != nil {
        panic(err)
    }

    fmt.Printf("account balance = %v\n", balance)

    nodeAccountID := hedera.AccountID{Account: 3}
    response, err := client.TransferCrypto().
        // Move 100 out of operator account
        Transfer(operatorAccountID, -100000000).
        // And place in our new account
        Transfer(targetAccountID, 100000000).
        Operator(operatorAccountID).
        Node(nodeAccountID).
        Memo("[test] hedera-sdk-go v2").
        Sign(operatorSecret). // Sign it once as operator
        Sign(operatorSecret). // And again as sender
        Execute()

    if err != nil {
        panic(err)
    }

    transactionID := response.ID
    fmt.Printf("transferred; transaction = %v\n", transactionID)


    fmt.Printf("wait for 2s...\n")
    time.Sleep(2 * time.Second)

    receipt, err := client.Transaction(*transactionID).Receipt().Get()
    if err != nil {
        panic(err)
    }

    if receipt.Status != hedera.StatusSuccess {
        panic(fmt.Errorf("transaction has a non-successful status: %v", receipt.Status.String()))
    }

    fmt.Printf("wait for 2s...\n")
    time.Sleep(2 * time.Second)



    balance, err = client.Account(operatorAccountID).Balance().Get()
    if err != nil {
        panic(err)
    }
    respondWithJson(w, http.StatusOK, map[string]uint64{"Balance": balance/100000000.0})
}

func respondWithError(w http.ResponseWriter, code int, msg string) {
    respondWithJson(w, code, map[string]string{"error": msg})
}

func respondWithJson(w http.ResponseWriter, code int, payload interface{}) {
    response, _ := json.Marshal(payload)
    w.Header().Set("Content-Type", "application/json")
    w.WriteHeader(code)
    w.Write(response)
}
func init() {
}

func main() {
    r := mux.NewRouter()
    r.HandleFunc("/generatekeys", GenKeys).Methods("GET")
    r.HandleFunc("/getbalance", GetMyBalance).Methods("GET")
    r.HandleFunc("/pay", TransferTokens).Methods("POST")
    corsOpts := cors.New(cors.Options{
    AllowedOrigins: []string{"*"}, //you service is available and allowed for this base url 
    AllowedMethods: []string{
        http.MethodGet,//http methods for your app
        http.MethodPost,
        http.MethodPut,
        http.MethodPatch,
        http.MethodDelete,
        http.MethodOptions,
        http.MethodHead,
    },

    AllowedHeaders: []string{
        "*",//or you can your header key values which you are using in your application

    },
})
    if err := http.ListenAndServe(":3000", corsOpts.Handler(r)); err != nil {
        log.Fatal(err)
    }
}
