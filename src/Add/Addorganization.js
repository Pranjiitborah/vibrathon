import React from 'react';
import Header from '../Common/Header'; 
import Footer from '../Common/Footer'; 


export default class Addorganization extends React.Component{
	constructor() {
        super();
        this.state = {
          fields: {},
          errors: {}
        }
  
        this.handleChange = this.handleChange.bind(this);
        this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
  
      };
  
      handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
          fields
        });
  
      }
  
      submituserRegistrationForm(e) {
        e.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            fields["thumbsnails"] = "";
            fields["orgname"] = "";
            fields["haddress"] = "";
            fields["certificates"] = "";
            this.setState({fields:fields});
            alert("Form submitted");
        }
  
      }
  
      validateForm() {
  
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
		
		if (!fields["thumbsnails"]) {
          formIsValid = false;
          errors["thumbsnails"] = "*Please enter thumbnail.";
        }
		
        if (!fields["orgname"]) {
          formIsValid = false;
          errors["orgname"] = "*Please enter your organisation name.";
        }
  
        if (typeof fields["orgname"] !== "undefined") {
          if (!fields["orgname"].match(/^[a-zA-Z ]*$/)) {
            formIsValid = false;
            errors["orgname"] = "*Please enter alphabet characters only.";
          }
        }
		
		if (!fields["haddress"]) {
          formIsValid = false;
          errors["haddress"] = "*Please enter head address.";
        }
		
		if (!fields["certificates"]) {
          formIsValid = false;
          errors["certificates"] = "*Please enter certificate.";
        }
  
        this.setState({
          errors: errors
        });
        return formIsValid;
		
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
                        <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
                            <div className="form-group">
                                <label for="form2">Thumbnail</label>
                                <input type="file" name="thumbsnails" value={this.state.fields.thumbsnails} onChange={this.handleChange} className="form-control" placeholder="" />
								                <div className="errorMsg">{this.state.errors.thumbsnails}</div>
                            </div>
                            <div className="form-group">
                                <label for="form2">Organisation Name</label>
                                <input type="text" name="orgname" value={this.state.fields.orgname} onChange={this.handleChange}  className="form-control" placeholder="Enter Organisation Name" />
                                <div className="errorMsg">{this.state.errors.orgname}</div>
                            </div>
                            <div className="form-group">
                                <label for="form2">Head Address</label>
                                <input type="text" name="haddress" value={this.state.fields.haddress} onChange={this.handleChange} className="form-control" placeholder="Enter Address" />
								<div className="errorMsg">{this.state.errors.haddress}</div>
                            </div>
                            <div className="form-group">
                                <label for="form2">Certificate</label>
                                <input type="file" name="certificates" value={this.state.fields.certificates} onChange={this.handleChange} className="form-control" placeholder="Enter Certificate" />
								<div className="errorMsg">{this.state.errors.certificates}</div>
                            </div>
                            <div className="form-group text-center">
                                <button type="submit" className="button btn btn-default vibrathon-btn"><span>Submit</span></button>
                            </div>
                        </form>
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