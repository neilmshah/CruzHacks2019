import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';



class Hacks extends Component {
    
    constructor(props){
        super(props);
    }


    render() { 
        

        return (
            <div style={{background:'1px solid red'}}>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <h3><b>Glasswindow</b></h3>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto" style={{listStyleType:'none',outside:'none'}}>
                            <li className="nav-item">
                                <a className="nav-link" style={{color:'black'}} href="#">Jobs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{color:'black'}} href="#">Companies</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" style={{color:'black'}} href="#">Salary</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" style={{color:'black'}} href="#">Interviews</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{color:'black'}} href="#">Salary Calculator</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>

                    <div className="row justify-content-center">
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control col-md-3 mr-sm-2" type="search" placeholder="Company" aria-label="Search"/>
                                <ul className="navbar-nav mr-auto ml-sm-3 ">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Jobs
        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a className="dropdown-item" href="#">Companies</a>
                                            <a className="dropdown-item" href="#">Salary</a>
                                            <a className="dropdown-item" href="#">Reviews</a>
                                        </div>
                                    </li>
                                </ul>

                                <input className="form-control mr-sm-1" type="search" placeholder="Location" aria-label="Search"/>
                                    <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
    </form>
</div>

                            <div className="row mt-2 mb-2 justify-content-center" >
                                <div className="col col-md-10">
                                    <h3>Netflix</h3><br/>
                                        <ul className="list-inline mr-auto">
                                            <li className="list-inline-item"><a className="text-xs-center" target="_blank" href="#">Overview</a></li>
                                            <li className="list-inline-item"><a className="text-xs-center" href="#">Reviews</a></li>
                                            <li className="list-inline-item"><a className="text-xs-center" href="#">Jobs</a></li>
                                            <li className="list-inline-item"><a className="text-xs-center" href="#">Salaries</a></li>
                                            <li className="list-inline-item"><a className="text-xs-center" href="#">Interviews</a></li>
                                            <li className="list-inline-item"><a className="text-xs-center" href="#">Benefits</a></li>
                                            <li className="list-inline-item"><a className="text-xs-center" href="#">Photos</a></li>
                                        </ul>
		</div>
                                </div>
                                <div className="row mt-2 mb-2 justify-content-center">
                                    <div className="col-md-10">
                                        <h4>Candidate Reviews for Top Jobs at Netflix</h4>
                                    </div>
                                </div>

                                <div className="row mt-2 mb-2 justify-content-center">
                                    <div className="col-md-10 mt-2 mb-2" style={{border:'1px solid black',color:'white'}}>
                                        <div className="row pt-2 decipher">
                                        
                                            <div className="col-md-3">
                                                <img classNameName="w-100 contain" src="https://img.icons8.com/color/48/7a7a7a/netflix.png" alt="netflix" />
                                            </div>
                                            <div className="col-md-9 mt-2 mb-2">
                            
                                                <ul className="list-inline mr-auto">
                                                    <li className="list-inline-item"><a className="text-xs-center" target="_blank" href="#">Overview</a></li>
                                                    <li className="list-inline-item"><a className="text-xs-center" href="#">No Offer</a></li>
                                                    <li className="list-inline-item"><a className="text-xs-center" href="#">Bad Experience</a></li>
                                                    <li className="list-inline-item"><a className="text-xs-center" href="#">Average Interview</a></li>
                                                </ul>
                                                <h5>Pros</h5>
                                                <p>

                                                    Innovative Product/Platform company. Please love working for this company, and want to be associated to Netflix, as it is one of the fastest growing company in the Streaming industry.</p>
                                                <h5>Cons</h5>
                                                <p>

                                                    No free lunches like many Bay Area Companies</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-10 mt-2 mb-2" style={{border:'1px solid black'}}>
                                        <div className="row pt-2">
                                            <div className="col-md-3">
                                                <img classNameName="w-100 contain" src="https://img.icons8.com/color/48/7a7a7a/netflix.png" alt="netflix" />
                                            </div>
                                            <div className="col-md-9">
                                            <button className="pay_btn">Pay per information</button>
                                                <ul className="list-inline mr-auto">
                                                    <li className="list-inline-item"><a className="text-xs-center" target="_blank" href="#">Overview</a></li>
                                                    <li className="list-inline-item"><a className="text-xs-center" href="#">No Offer</a></li>
                                                    <li className="list-inline-item"><a className="text-xs-center" href="#">Bad Experience</a></li>
                                                    <li className="list-inline-item"><a className="text-xs-center" href="#">Average Interview</a></li>
                                                </ul>
                                                <h5>Pros</h5>
                                                <p>

                                                    Innovative Product/Platform company. Please love working for this company, and want to be associated to ServiceNow, as it is one of the fastest growing company in the SAAS industry.</p>
                                                <h5>Cons</h5>
                                                <p>

                                                    No free lunches like many Bay Area Companies</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-10 mt-2 mb-2" style={{border:'1px solid black'}}>
                                        <div className="row pt-2">
                                            <div className="col-md-3">
                                                <img classNameName="w-100 contain" src="https://img.icons8.com/color/48/7a7a7a/netflix.png" alt="netflix" />
                                            </div>
                                            <div className="col-md-9">
                                                <ul className="list-inline mr-auto">
                                                    <li className="list-inline-item"><a className="text-xs-center" target="_blank" href="#">Overview</a></li>
                                                    <li className="list-inline-item"><a className="text-xs-center" href="#">No Offer</a></li>
                                                    <li className="list-inline-item"><a className="text-xs-center" href="#">Bad Experience</a></li>
                                                    <li className="list-inline-item"><a className="text-xs-center" href="#">Average Interview</a></li>
                                                </ul>
                                                <h5>Pros</h5>
                                                <p>

                                                    Innovative Product/Platform company. Please love working for this company, and want to be associated to ServiceNow, as it is one of the fastest growing company in the SAAS industry.</p>
                                                <h5>Cons</h5>
                                                <p>

                                                    No free lunches like many Bay Area Companies</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


        );
    }
}


export default Hacks;