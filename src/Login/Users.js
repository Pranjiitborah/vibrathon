import React from 'react';
import { Link } from 'react-router-dom';

export default class Users extends React.Component{
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
                <input type="text" id="user" class="log-inpu" placeholder="Username" required/>
                <button type="submit" className="btn-login">Use Cart</button>
                <div class="social"> <span>or</span></div>
                <Link to="/Login/Newcart"><h4>Add New Card</h4></Link> <br/ ><br/ >
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