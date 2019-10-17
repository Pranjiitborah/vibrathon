import React from 'react';
import { Link } from 'react-router-dom';

export default class Newcart extends React.Component{
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
            <p>Use an existing card from your wallet</p>
            <form className="bg-loginf">
                <p>Add New Card</p>
                <input type="file" id="user" class="log-inpu" placeholder="Username" required/>
                <input type="text" id="user" class="log-inpu" placeholder="Username" required/>
                <Link to="/Dashboard"> <button type="submit" className="btn-login">Sign In</button></Link>
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