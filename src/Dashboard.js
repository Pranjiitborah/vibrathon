import React from 'react';
import Header from './Common/Header'; 
import Footer from './Common/Footer'; 
import Chart from "react-apexcharts";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

export default class Dashboard extends React.Component{
	constructor(props) {
        super(props);
    
        this.state = {
          startDate: new Date(),
          startDates: new Date(),
          chead:'Kerla coconut farm',
          ctxt:'1300gm',
          options: {
            chart: {
              id: "basic-bar"
            },
            xaxis: {
              categories: ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
            },
            xaxisa: {
              categoriesa: [2015, 2016, 2017, 2018, 2019]
            }
          },
          series: [
            {
              name: "Oil Storage",
              data: [0, 10, 25, 45, 60, 75, 100]
            }
          ],
          seriesa: [
            {
              name: "Preview",
              data: [20, 15, 30, 50, 70, 75, 100]
            }
          ],
          seriesb: [44, 55, 41, 17, 15],
          labels: ['A', 'B', 'C', 'D', 'E']
        };
         this.handleChange=this.handleChange.bind(this);
         this.handleChanges=this.handleChanges.bind(this)
      }
    
      handleChange(date) {
        this.setState({
          startDate: date
        });
      }
      handleChanges(date) {
        this.setState({
          startDates: date
        });
      }

    render(){
		
	return(
    <div>
            
            <div className="container-fluid main-container">
            <Header/>
                <div className="col-md-10 content">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            Dashboard
                        </div>
                        <div className="panel-body">
                        <div className="col-lg-12">
                            <div className="col-lg-4 col-sm-6">
                            <div className="circle-tile ">
                                <div className="circle-tile-content dark-blue">
                                <div className="circle-tile-description text-faded">Copra Receiption</div>
                                <div className="circle-tile-number text-faded ">265 KG</div>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                            <div className="circle-tile ">
                                <div className="circle-tile-content red">
                                <div className="circle-tile-description text-faded">Oil Extracting</div>
                                <div className="circle-tile-number text-faded ">1000 KG</div>
                                </div>
                            </div>
                            </div> 
                            <div className="col-lg-4 col-sm-6">
                            <div className="circle-tile ">
                                <div className="circle-tile-content packingcolr">
                                <div className="circle-tile-description text-faded">Packing</div>
                                <div className="circle-tile-number text-faded ">10 KG</div>
                                </div>
                            </div>
                            </div> 
                        </div>
						            <hr/>
                        <div className="col-lg-12">
                        <div className="col-lg-8">
						            <div className="mixed-chart dash-bgsclr">
                        <Chart
                            options={this.state.options}
                            series={this.state.series}
                            type="line"
                            width="100%"
                            height="250px"
                        />
                        </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="mixed-chart dash-bgsclr">
                          <Chart
                            options={this.state.options}
                            series={this.state.seriesa}
                            type="bar"
                            width="100%"
                            height="250px"
                          />
                        </div>
                        </div>
                        </div>
                        <div className="col-lg-12">
                        <div className="col-lg-8">
                        <div className="dash-bgsclr">
                        <div className="row">
                          <div className="col-lg-6">
                            <p className="dash-cophead">Copra Supplied</p>
                            <p className="dash-kertxt">&nbsp; {this.state.chead}</p>
                            <p>&nbsp; {this.state.ctxt}</p>
                            <p className="dash-kertxt">&nbsp; {this.state.chead}</p>
                            <p>&nbsp; {this.state.ctxt}</p>
                          </div>
                          <div className="col-lg-6">
                            <p className="dash-cophead">Oil Distributor</p>
                            <table class="table">
                              <tbody>
                                <tr>
                                  <td>Dist</td>
                                  <td>12kg</td>
                                </tr>
                                <tr>
                                  <td>Dist</td>
                                  <td>12kg</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="donut dash-bgsclr">
                          <Chart options={this.state.options} series={this.state.seriesb} type="donut" width="100%" />
                          <div className="row">
                          <div className="col-lg-6">
                          <p className="dash-btms">To</p>
                          <DatePicker className="form-control"
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                          />
                          </div>
                          <div className="col-lg-6">
                          <p className="dash-btms">From</p>
                          <DatePicker className="form-control"
                            selected={this.state.startDates}
                            onChange={this.handleChanges}
                          />
                          </div>
                          </div>
                        </div>
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