import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component{
	constructor(props){
		super(props);
		}
    
  
    render(){
	return(
        <div>
            <nav className="navbar navbar-default navbar-static-top">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">
                        Brand
                    </a>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="dropdown ">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                                My Profile
                                <span className="caret"></span></a>
                                <ul className="dropdown-menu" role="menu">
                                    <li className=""><a href="#">Profile</a></li>
                                    <li className="divider"></li>
                                    <li><a href="#">Logout</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="col-md-2 content">
                <div class="list-group-hover sidebar-widget-1">
	            <ul class="list-unstyled">
                    <li><Link to="/Dashboard" class="list-group-item  bg-active"><i class="fa fa-tachometer"></i> Dashboard <span class="badge">12</span> </Link></li>
                    <li><Link to="/Add/Addorganization" class="list-group-item"><i class="fa fa-user"></i> Add Orgainization</Link> </li>
                    <li><Link to="/Add/Addbranch" class="list-group-item"><i class="fa fa-plus-square"></i> Add Branch</Link> </li>
                    <li><Link to="/Add/Addadmin" class="list-group-item"><i class="fa fa-wrench"></i> Add Admin</Link> </li>
                    <li><a href="" class="list-group-item"><i class="fa fa-power-off"></i> Log Out</a> </li>
                    </ul>
                </div>
                </div>
        </div>
    )
    }
}