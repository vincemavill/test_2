
import './App.css';

import logo from './assets/logo.png';
import logo2 from './assets/logo2.png';

import { Button, Container,Table , Navbar, Nav, Form, FormControl, Modal,Carousel } from 'react-bootstrap';

import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';

import icon1 from './assets/icon/icon1.png';
import icon2 from './assets/icon/icon2.png';
import icon3 from './assets/icon/icon3.png';
import icon4 from './assets/icon/icon4.png';

import menu from './assets/icon/menu (1).svg';
import x from './assets/icon/x.svg';

import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      open: false
     }
  }
  render() { 
    return ( 
      <div>

      
      <Navbar className="nav_border " expand="lg">
        <Container>
          <Navbar.Brand className="p-0 m-0 logo1_d" >
            <img src={logo} className="img-fluid mb-1 mr-4 " width="300" alt="image" />

          </Navbar.Brand>

          <Navbar.Brand className=" logo2_d mx-auto" >
           
            <img src={logo2} className="img-fluid  " width="130" alt="image" />
          </Navbar.Brand>

    
          <Navbar.Toggle  className="border-0" onClick={()=>{
            if(this.state.open){
              this.setState({ open:false })
            } else {
              this.setState({ open:true })
            }
          }}>
            {
              this.state.open
              ?
              <img src={x} className="img-fluid" width="25" alt="image" />
              :
              <img src={menu} className="img-fluid" width="25" alt="image" />
            }

          </Navbar.Toggle>



          <Navbar.Collapse id="basic-navbar-nav " className="">
            <Nav className="border_custom">
              <Nav.Link  className="nav_margin">Home</Nav.Link>
              <Nav.Link  className="nav_margin">About Us</Nav.Link>
              <Nav.Link  className="nav_margin">Insights</Nav.Link>
              <Nav.Link  className="nav_margin">Events</Nav.Link>
              <Nav.Link  className="nav_margin">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
      </Navbar>
 

      <div className="bg_c1">
       <Container className="">
          <div className="row align-items-center">
            <div className="col-lg-6">
          
              <div className="border_banner">
                <h1 className="font-weight-normal text-white">ACME Wealth
                Management Platforms</h1>

                <h3 className="font-weight-light text-white">Investment excellence.<br/>
                Diversity of thought.<br/>
                Organizational strength.</h3>
              </div>
              
            </div>
            <div className="col-lg-6">
           
            </div>
          </div>

        </Container>

     

      </div>

      
      <div className="acme_bg">
       <Container className="py-5 ">
         <div className="acme_txt">
         <h3>ACME Insights</h3>
         <p>How are factors being used around the world?</p>
         </div>





        <div className="table-responsive p-4">
        <div className="acme">
          <div className="row">
              <div className="col">
                <div className="img_c1 bg-white shadow p-3">
                <img src={img1} className="img-fluid mb-1 mr-4" width="" alt="image" />

                <h3 className="color1 m-0">Global Factor<br></br>Investing Study</h3>
                </div>
              </div>
              <div className="col">
                <div className="img_c2 bg-white shadow p-3">
                <img src={img2} className="img-fluid mb-1 mr-4" width="" alt="image" />

                <h3 className="color2 m-0">2019 <br></br>
  Outlook</h3>
                </div>
              </div>
              <div className="col">
                <div className="img_c3 bg-white shadow p-3">
                <img src={img3} className="img-fluid mb-1 mr-4" width="" alt="image" />

                <h3 className="color3 m-0">Capital Market<br></br>
  Assumptions</h3>
                </div>
              </div>
          </div>
        </div>
        </div>



       </Container>
       </div>

       <div className="bg_c2">
       <Container className="">
   
              <div className="border_banner text-center">
                <h1 className="font-weight-normal text-white">Our Commitment to Professionals</h1>

                <h5 className="font-weight-light text-white">
                We help our partners deliver industry leading results with a commitment to excellence, thought-provoking insights and experienced distribution. We are laser focused on our shared goal – helping clients achieve their objectives. 
                </h5>
                <Button size="lg" variant="outline-light rounded-0 px-4 mt-5">Contact Us</Button>
              </div>
      

        </Container>

     

      </div>








    

       <Container className="py-5 ">
         <h3>Upcoming Events</h3>
         <p>This needs a great tagline, but I’ll fill it in later</p>

         <div className="table-responsive p-4">
         <div className="upcoming">

         <div className="row">
            <div className="col">
              <div class="pt-5">
              <div className="bg1 ">
                <div className="pl-4">
                <div className="bg2 text-white box">
                  <p className="m-0 text-center mt-1">JAN</p>
                  <h3 className="m-0 text-center">28</h3>
                </div>
                </div>
                  <div className="pt-5 pl-3 pr-3 pb-3">
                  <h4 className="text-white pt-3">Insight Exchange Network</h4>
                  <p className="text-white"><small>Join us for this conference showcasing innovation.</small></p>
                  <Button  variant="outline-light rounded-0 my-3">Get More Insight</Button>
                  </div>
                  <div class="text-right bg-white bottom-box p-2">
                  <h5>Chicago, IL</h5>
                </div>
                
              </div>
               
              </div>
            </div>

            <div className="col">
              <div class="pt-5">
              <div className="bg1 ">
                <div className="pl-4">
                <div className="bg2 text-white box">
                  <p className="m-0 text-center mt-1">FEB</p>
                  <h3 className="m-0 text-center">12</h3>
                </div>
                </div>
                  <div className="pt-5 pl-3 pr-3 pb-3">
                  <h4 className="text-white pt-3">Citywide Buyer’s Retreat</h4>
                  <p className="text-white"><small>Find out how banks are responding to the changing future of interest...</small></p>
                  <Button  variant="outline-light rounded-0 my-3">Get More Insight</Button>
                  </div>
                  <div class="text-right bg-white bottom-box p-2">
                  <h5>The Wagner, New York </h5>
                </div>
                
              </div>
               
              </div>
            </div>

            <div className="col">
              <div class="pt-5">
              <div className="bg1 ">
                <div className="pl-4">
                <div className="bg2 text-white box">
                  <p className="m-0 text-center mt-1">MAY</p>
                  <h3 className="m-0 text-center">6</h3>
                </div>
                </div>
                  <div className="pt-5 pl-3 pr-3 pb-3">
                  <h4 className="text-white pt-3">Research Exchange</h4>
                  <p className="text-white"><small>Find the best online resources to help with your investments...</small></p>
                  <Button  variant="outline-light rounded-0 my-3">Get More Insight</Button>
                  </div>
                  <div class="text-right bg-white bottom-box p-2">
                    <h5>London, England</h5>
                  </div>
                
              </div>
               
              </div>
            </div>

       

            </div>
       </div>
        
         </div>
       </Container>
    


       <div className="bg3">
       <Container className="pb-4 pt-3">


        <div className="row">
        <div className="col-lg-6">
        <p className="text-white">Call us at 111-222-3333<br></br>
        for more information </p>
        </div>
          <div className="col-lg-6 text-right">
          <p className="text-white">Social Share {"       "}
          <img src={icon1} className="img-fluid mb-1 mr-2" width="" alt="image" />
          <img src={icon2} className="img-fluid mb-1 mr-2" width="" alt="image" />
          <img src={icon3} className="img-fluid mb-1 mr-2" width="" alt="image" />
          <img src={icon4} className="img-fluid mb-1 mr-2" width="" alt="image" />
          </p>
          </div>
        </div>

       </Container>
       </div>


     
     
    </div>
     );
  }
}
 
export default App;

