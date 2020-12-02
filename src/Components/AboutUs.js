import React from 'react'
import Footer from './Footer';
import Header from './Header';

const AboutUs = () => {
    return (
        <div>
            <Header/>
            <div className="row">
                <h1 className="mx-5">Team Name: Innovation Skyline</h1>
            </div>
            <div className="row">
                <h1 className="mx-5">Team Members: Kulrajbir Singh Sandhu, Sneh Patel, Chirag Lalwani</h1>
            </div>
            <div className="row">
                <div className="col-3 mx-5 my-3 bg-primary" style={{borderRadius: "25px"}} >
                    <h2 className="text-center my-2" style={{color: 'white'}}>
                        Kulrajbir Singh Sandhu
                    </h2>
                    <h3 className="m-2 font-weight-light" style={{color: 'white'}} >
                    I am 2nd year computer
                    science student at
                    Thompson Rivers 
                    University. Mine potential
                    contribution to this
                    website is handling the 
                    backend of the website,
                    also helped in design
                    analysis, data gathering
                    and maintaining the 
                    documentation of the
                    project.
                    </h3>

                </div>
                <div className="col-3 mx-5 my-3 bg-primary" style={{borderRadius: "25px"}} >
                <h2 className="text-center my-2" style={{color: 'white'}}>
                    Sneh Patel
                </h2>
                <h3 className="m-2 font-weight-light" style={{color: 'white'}}>
                I am a Computer Science 
                student at Thompson 
                Rivers University. I am
                having a solid grasp in
                UI/UX designing, also
                have a basic knowledge 
                of website building such
                as HTML, CSS and 
                JavaScript, also know 
                how to make a responsive 
                website by using Bootstrap. 
                        </h3>

                </div>
                <div className="col-3 mx-5 my-3 bg-primary" style={{borderRadius: "25px"}}>
                <h2 className="text-center my-2" style={{color: 'white'}}>
                    Chirag Lalwani
                </h2>
                <h3 className="m-2 font-weight-light" style={{color: 'white'}}>
                I am a Computer Science
                Student at Thompson 
                Rivers University. I am 
                having a good understanding
                of JavaScript Library such as
                React. The website is build by
                using the React Hooks also
                the use of Material-UI help
                the website to become to 
                more interactive and user-
                friendly.
                        </h3>

                </div>
            </div>
            <div className="container py-5">
                <div className="row mx-5 my-5 bg-primary justify-content-center" style={{borderRadius: "25px"}}>
                    <h3 className="row mx-5" style={{color: "#FFF", textAlign:"center", justifySelf:"center"}}>Contact Us</h3>
                    <div className="w-100"></div>
                    <h4 className="row mx-5" style={{color: "#FFF", textAlign:"center", justifySelf:"center"}}>Address</h4>
                    <div className="w-100"></div>
                    <p className="row mx-5" style={{fontSize: "25px", color: "#FFF"}}>
                        Thompson Rivers University <br/>
                        805, TRU Way, Kamloops, <br/>
                        B.C. V2C0C8
                    </p>
                    <div className="w-100"></div>
                    <h4 className="row mx-5" style={{color: "#FFF", textAlign:"center", justifySelf:"center"}}>For Feedback</h4>
                    <div className="w-100"></div>
                    <a href="mailto:healthease2407@gmail.com" className="row mx-5 pb-2" style={{fontSize: "25px", color: "#FFF"}}>
                        healthease2407@gmail.com
                    </a>
                </div>
            </div>
            <footer className="bg-primary footer" style={{overflow: "hidden"}} >
                <Footer/>
            </footer>
        </div>
    )
}

export default AboutUs
