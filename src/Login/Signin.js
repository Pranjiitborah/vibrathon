import React from 'react';
import { Link } from 'react-router-dom';

export default class Signin extends React.Component{
	constructor(props){
		super(props);
		}
    
  
    render(){
	return(
    <div>

    <div className="bg-login">
        <div className="container bg-loginfull">
            <h3 className="name">Welcome to</h3>
            <h1 className="name">Tranzledger</h1>
            <form className="bg-loginf">
                <input type="text" id="user" class="log-inpu" placeholder="Username" required/>
                <input type="password" class="log-inpu" placeholder="Password"  required/>
                <button type="submit" className="btn-login">Login</button>
                <div class="social"> <span>or</span></div>
                <div className="social-login">
                <Link to="/Login/Users"><i className="fa fa-google-plus fa-lg"></i> log in with Google</Link>
                </div>
            </form>
        </div>
        <ul className="bg-bubbles">
            <li></li>
        <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>

	</div>

)
    }
}