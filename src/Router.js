import React from "react";
import {ReactDOM, render} from 'react-dom';
import{
	BrowserRouter,
	Switch,
	Route,
	Redirect,
	HashRouter,
	ReactRoter
} from "react-router-dom";

import Signin from './Login/Signin';
import Users from './Login/Users';
import Newcart from './Login/Newcart';
import Addorganization from './Add/Addorganization';
import Dashboard from './Dashboard';

const appRoute =[
   {
   	path:"/",
   	isExactPath: true,
   	component: <Signin />
   },
   {
    path:"Login/Signin",
   	isExactPath: true,
   	component: <Signin />
   },
   {
    path:"Login/Users",
   	isExactPath: true,
   	component: <Users />
   },
   {
    path:"Login/Newcart",
   	isExactPath: true,
   	component: <Newcart />
   },
   {
    path:"Add/Addorganization",
   	isExactPath: true,
   	component: <Addorganization />
   },
   {
    path:"/Dashboard",
   	isExactPath: true,
   	component: <Dashboard />
   },
];

//HashRouter  also apply # 

const routes= (
	<BrowserRouter>
	<Switch>
		{appRoute.map((route, idx) => {
			console.log(route,"1");
			return <Route
			    key={route.path}
			    path={route.path}
			    exact={route.isExactPath}
			    render={(params) => {
			    	 return route.component;
			    }}
		/>;
		})}
	</Switch>
	</BrowserRouter>
);

export default routes;