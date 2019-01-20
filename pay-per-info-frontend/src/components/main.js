import React, {Component} from 'react';
import {Switch,Route} from 'react-router-dom';
 
//Components

import Hacks from './cruzHacks/cruzhacks.js';
import NewHacks from './cruzHacks/newCruzHacks.js';

class Main extends Component {
    render(){
        return(
            
            <Switch>
                {/*Render Different Component based on Route*/}
                {/*<Route exact path="/checklist" render={()=>(<Checklist />) } />*/}
                <Route exact path="/hacks" component={NewHacks}/>
                <Route exact path="/" component={NewHacks}/>
                <Route exact path="/newhacks" component={NewHacks}/>
                
            </Switch>
            
        )
    }
}
export default Main;
