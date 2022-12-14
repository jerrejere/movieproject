import React from 'react';

const About = () => {
    return (
        <div>
            <div className="about-container text-center">
                <div className="about-container-clone d-flex justify-content-center align-items-center">
                    <div>
                        <h1 className="display-1 text-black shadow-lg">WELCOME TO ABOUT PAGE</h1>
                    </div>
                </div>
            </div>

            {/*  */}
            <div className="container my-5 py-md-5">
                <h1 className="display-3 text-primary mb-4">ABOUT US</h1>
                <p className="fs-5">TibaSasa offers patients and doctors an opportunity to schedule treatment plans. The application engages  with specialized medical and nursing staff and medical equipment.[1] There are standby medical professionals ready to attend to emergency situations and treat urgent health problems ranging from fire and accident victims to a sudden illness. Areas of treatment include trauma centers, rehabilitation hospitals, children's hospitals, seniors' (geriatric) hospitals, and hospitals for dealing with specific medical needs such as psychiatric treatment (see psychiatric hospital) and certain disease categories.</p>
            </div>

            {/* Overview */}
            <div style={{background: "#cdcdcd"}}>
            <div className="container py-5">
                <div className="courses-header text-center">
                    <h2 className="card-header text-white courses-heading py-4 mt-lg-5 display-3 bg-dark">OVERVIEW</h2>
                    
                </div>

                <div>
                <table className="table table-light table-striped table-responsive table-bordered fs-4 p-2">
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Established.</td>
                                    <td>2003</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Diagnosis</td>
                                    <td>Over 100</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Division</td>
                                    <td>5</td>
                                </tr>

                                <tr>
                                    <td>4</td>
                                    <td>Period</td>
                                    <td>3 in a year</td>
                                </tr>

                                <tr>
                                    <td> 5</td>
                                    <td>Department</td>
                                    <td> 20</td>
                                    
                                </tr>

                                <tr>
                                    <td> 6</td>
                                    <td>Program</td>
                                    <td> 34</td>
                                    
                                </tr>

                                <tr>
                                    <td> 7</td>
                                    <td>Library</td>
                                    <td>8</td>
                                    
                                </tr>

                                <tr>
                                    <td> 8</td>
                                    <td> Lab</td>
                                    <td>56</td>
                                    
                                </tr>
                            </tbody>
                        </table>
                </div>
            </div>
            </div> 
        </div>
    );
};

export default About;