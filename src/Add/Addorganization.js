import React from 'react';
import Header from '../Common/Header'; 
import Footer from '../Common/Footer'; 


export default class Addorganization extends React.Component{
	constructor(props) {
        super(props);
        
      }
    
    render(){
	return(
    <div>
            
            <div className="container-fluid main-container">
            <Header/>
                <div className="col-md-10 content">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            Add Organization
                        </div>
                        <div className="panel-body">
                        <div className="form">
                            <div className="form-group">
                                <label for="form2">Thumbnail</label>
                                <input type="file" id="form2" className="form-control" placeholder="" />
                            </div>
                            <div className="form-group">
                                <label for="form2">Organisation Name</label>
                                <input type="text" id="form2" className="form-control" placeholder="Enter" />
                            </div>
                            <div className="form-group">
                                <label for="form2">Head Address</label>
                                <input type="text" id="form2" className="form-control" placeholder="Enter" />
                            </div>
                            <div className="form-group">
                                <label for="form2">Certificate</label>
                                <input type="text" id="form2" className="form-control" placeholder="Enter" />
                            </div>
                            <div className="form-group text-center">
                                <button type="button" className="btn btn-default vibrathon-btn"><span>Submit</span></button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
    </div>
    )
    }
    }