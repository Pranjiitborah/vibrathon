import React from 'react';
import Header from '../Common/Header'; 
import Footer from '../Common/Footer'; 

export default class Addadmin extends React.Component{
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
            fields["fname"] = "";
            fields["lname"] = "";
            fields["uname"] = "";
            fields["emailid"] = "";
            fields["photos"] = "";
            fields["aposition"] = "";
            fields["abranch"] = "";
            this.setState({fields:fields});
            alert("Form submitted");
        }
  
      }
  
      validateForm() {
  
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
		
		if (!fields["fname"]) {
          formIsValid = false;
          errors["fname"] = "*Please enter First name.";
        }
		
        if (!fields["lname"]) {
          formIsValid = false;
          errors["lname"] = "*Please enter Last name.";
        }
		
		if (!fields["uname"]) {
          formIsValid = false;
          errors["uname"] = "*Please enter user name.";
        }
		
		if (!fields["emailid"]) {
          formIsValid = false;
          errors["emailid"] = "*Please enter email id.";
        }
		
		if (!fields["photos"]) {
          formIsValid = false;
          errors["photos"] = "*Please enter photo.";
        }
		
		if (!fields["aposition"]) {
          formIsValid = false;
          errors["aposition"] = "*Please enter position.";
        }
		
		if (!fields["abranch"]) {
          formIsValid = false;
          errors["abranch"] = "*Please enter branch.";
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
                            Add Admin
                        </div>
                        <div className="panel-body">
                        <div className="form">
                        <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
                            <div className="form-group">
                                <label for="form2">First Name</label>
                                <input type="text" name="fname" value={this.state.fields.fname} onChange={this.handleChange} className="form-control" placeholder="Enter First Name" />
								<div className="errorMsg">{this.state.errors.fname}</div>
                            </div>
							<div className="form-group">
                                <label for="form2">Last Name</label>
                                <input type="text" name="lname" value={this.state.fields.lname} onChange={this.handleChange} className="form-control" placeholder="Enter Last Name" />
								<div className="errorMsg">{this.state.errors.lname}</div>
                            </div>
							<div className="form-group">
                                <label for="form2">User Name</label>
                                <input type="text" name="uname" value={this.state.fields.uname} onChange={this.handleChange} className="form-control" placeholder="Enter User Name" />
								<div className="errorMsg">{this.state.errors.uname}</div>
                            </div>
							<div className="form-group">
                                <label for="form2">Email Id</label>
                                <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange} className="form-control" placeholder="Enter User Name" />
								<div className="errorMsg">{this.state.errors.emailid}</div>
                            </div>
							<div className="form-group">
                                <label for="form2">Photo</label>
                                <input type="file" name="photos" value={this.state.fields.photos} onChange={this.handleChange} className="form-control" placeholder="Enter User Name" />
								<div className="errorMsg">{this.state.errors.photos}</div>
                            </div>
                            <div className="form-group">
                                <label for="form2">Position</label>
                                <select className="form-control" name="aposition" value={this.state.fields.aposition} onChange={this.handleChange}>
                                  <option>--</option>
                                  <option>df</option>
                                  <option>dfdf</option>
                                </select>
                                <div className="errorMsg">{this.state.errors.aposition}</div>
                            </div>
                            <div className="form-group">
                                <label for="form2">Branch</label>
                                <select className="form-control" name="abranch" value={this.state.fields.abranch} onChange={this.handleChange}>
                                  <option>--</option>
                                  <option>df</option>
                                  <option>dfdf</option>
                                </select>
								<div className="errorMsg">{this.state.errors.abranch}</div>
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