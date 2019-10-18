import React from 'react';
import Header from './Common/Header'; 
import Footer from './Common/Footer'; 
import Chart from "react-apexcharts";


export default class Dashboard extends React.Component{
	constructor(props) {
        super(props);
    
        this.state = {
          options: {
            chart: {
              id: "basic-bar"
            },
            xaxis: {
              categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            }
          },
          series: [
            {
              name: "series-1",
              data: [30, 40, 45, 50, 49, 60, 70, 91]
            }
          ]
        };
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
						<div className="mixed-chart">
                        <Chart
                            options={this.state.options}
                            series={this.state.series}
                            type="line"
                            width="100%"
                            height="400px"
                        />
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