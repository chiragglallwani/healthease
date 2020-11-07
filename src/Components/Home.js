import React from 'react'
import Covid1 from '../images/1.jpg'
import Covid2 from '../images/3.png'

const Home = () => {
    return (
        <div>
         <div className="row my-5 p-4">
            <div className="col bg-secondary col-3 pl-4" style={{borderRadius: "24px"}}>
                <h3 className="text-center">About Website</h3>
                <p style={{fontSize: "20px"}}>HealthEase website provides
                    the free services to the 
                    international students or the
                    visitors in Canada. The main
                    aim of this website is to 
                    reduce the pressure on 
                    medical service providers 
                    because of increase patient
                    flow during this pandemic.
                    However, this website does
                    not provide the test of
                    COVID-19 but with the help
                    of Medical Assessment 
                    Service, it can advice the 
                    patient to take preventive
                    measure to safe itself and 
                    others.
                    Note:-  All the assessment 
                    provide my website is for 
                    information purpose only.
                </p>

            </div>
            <div className="col">
                <div className="row">
                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner p-3">
                            <div class="carousel-item active">
                                <img src={Covid1} class="d-block w-100" alt="corona__image__1" style={{height: "250px"}}/>
                            </div>

                            <div class="carousel-item">
                                <img src={Covid2} class="d-block w-100" alt="corona__image__2" style={{height: "250px"}}/>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>

                </div>
                <div className="row pl-3">
                    <div className="col  bg-secondary col-5 mx-4" style={{borderRadius: "24px"}}>
                        <h3 className="text-center">Quick Assessment</h3>
                        <p style={{fontSize: "20px"}}>This website provides simple and quick assessment features to know the users having a probability of COVID-19 by answering the questions only with YES or NO.</p>

                    </div>
                    <div className="col  bg-secondary col-5 mx-4" style={{borderRadius: "24px", paddingLeft:"15px"}}>
                        <h3 className="text-center">Find Location</h3>
                        <p style={{fontSize: "20px"}}>
                        This website will also 
                            help the new comers
                            to find the pharmacy 
                            near by, where they 
                            can purchase the 
                            medicine. Note: This website will only suggest the pharmaacy found in Google Maps.
                        </p>

                    </div>
                </div>
            </div>
            <div className="col bg-secondary col-2" style={{borderRadius: "24px"}}>
                <h3 className="text-center">ABOUT US</h3>
                <p style={{fontSize: "20px"}}>
                HealthEase website
                is build by the team
                name "Innovation
                SkyLine" consist of
                team of 3 members.
                This website specifically
                target the users who
                are new to Canada 
                and our finding
                problems regarding the
                checkup of COVID-19.
                This website is build 
                by Kulrajbir Sandhu, 
                Sneh Patel and Chirag
                Lalwani to help the 
                new students during
                this pandemic.
                </p>
            </div>
            </div>
            
        </div>
    )
}

export default Home
