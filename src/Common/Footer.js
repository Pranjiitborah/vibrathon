import React from 'react';

export default class Footer extends React.Component{
	constructor(props){
		super(props);
		}
    
  
    render(){
	return(
        <div>
            <footer className="pull-left footer">
                <p className="col-md-12">
                    <hr className="divider" />
                    Copyright @2019 <a href="#">Vibrathon</a>
                </p>
            </footer>
        </div>
    )
    }
}