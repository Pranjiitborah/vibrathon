import React from 'react';
import Header from '../Common/Header'; 
import Footer from '../Common/Footer'; 

export default class Addbranch extends React.Component{
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
            fields["bname"] = "";
            fields["baddress"] = "";
            fields["borg"] = "";
            fields["bproduct"] = "";
            this.setState({fields:fields});
            alert("Form submitted");
        }
  
      }
  
      validateForm() {
  
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
		
		if (!fields["bname"]) {
          formIsValid = false;
          errors["bname"] = "*Please enter branch name.";
        }
		
        if (!fields["baddress"]) {
          formIsValid = false;
          errors["baddress"] = "*Please enter your branch address.";
        }
		
		if (!fields["borg"]) {
          formIsValid = false;
          errors["borg"] = "*Please enter branch orgsanition.";
        }
		
		if (!fields["bproduct"]) {
          formIsValid = false;
          errors["bproduct"] = "*Please enter branch product.";
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
                            Add Branch
                        </div>
                        <div className="panel-body">
                        <div className="form">
                        <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
                            <div className="form-group">
                                <label for="form2">Branch Admin Name</label>
                                <input type="text" name="bname" value={this.state.fields.bname} onChange={this.handleChange} className="form-control" placeholder="Enter Admin Name" />
								                <div className="errorMsg">{this.state.errors.bname}</div>
                            </div>
                            <div className="form-group">
                                <label for="form2">Branch Address</label>
                                <input type="text" name="baddress" value={this.state.fields.baddress} onChange={this.handleChange}  className="form-control" placeholder="Enter Branch Address" />
                                <div className="errorMsg">{this.state.errors.baddress}</div>
                            </div>
                            <div className="form-group">
                                <label for="form2">Organisation</label>
                                <select className="form-control" name="borg" value={this.state.fields.borg} onChange={this.handleChange}>
                                  <option>--</option>
                                  <option>df</option>
                                  <option>dfdf</option>
                                </select>
                                <div className="errorMsg">{this.state.errors.borg}</div>
                            </div>
                            <div className="form-group">
                                <label for="form2">Product</label>
                                <select className="form-control" name="bproduct" value={this.state.fields.bproduct} onChange={this.handleChange}>
                                  <option>--</option>
                                  <option>df</option>
                                  <option>dfdf</option>
                                </select>
								                <div className="errorMsg">{this.state.errors.bproduct}</div>
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