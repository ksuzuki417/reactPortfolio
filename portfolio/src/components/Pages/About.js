import React from "react";
import family from "/assets/Family2.png";

function About() {
    return (
        <div>
            <h1>About Me</h1>
            <img src={family} alt="Family" />;
            <div className="col-md-9">Welcome to my portfolio! My name is Keita Suzuki. I'm a student of Coding Bootcamp by UTSA. I'm offically a Fullstack Web Developer! 
                I've been working in hospitality indusrty for my career but with this pandemic happeninig, unfortunately, I had make a career shift. 
                Classmates have been very supportive and one thing I truly believe in now is "TEAMWORK". It is amazing how much we can accomplish as a team.
                Here is a list of skills/knowledge I've learned.
            
                <br></br>
                <table className="table">
                    <tbody>
                        <tr>
                            <td>React.js</td>
                            <td>HTML</td>
                            <td>CSS</td>
                            <td>JavaScrip</td>
                            
                        </tr>
                        <tr>
                            <td>JQuery</td>
                            <td>APIs</td>
                            <td>Node</td>
                            <td>OOP</td>
                            
                        </tr>
                        <tr>
                            <td>Express</td>
                            <td>MySQL</td>
                            <td>Sequelize</td>
                            <td>MongoDB</td>
                        </tr>
                    </tbody>
                </table>
                <p>I like to play soccer on my free time. As you can see from my profile picture, 
                    I'm a huge <a href="https://www.liverpoolfc.com">Liverpool FC</a> supporter. You can see my daughter as well. I love watching my daughter growing up. She is constatnly learning and her imagination is unimaginable!
                    She is growing up too fast!!!
                    Please click on Portfolio to see couple of works I've created so far.
                </p>

                <ul>
                    <li>Email Address: <a href="ksuzuki417@gmail.com">ksuzuki417@gmail.com</a></li>
                    <li>Git Hub Profile: <a href="https://github.com/ksuzuki417">ksuzuki417</a></li>
                    <li>LinkedIn Profile: <a href="https://www.linkedin.com/in/keita-suzuki-54a83194/">Keita Suzuki</a></li>
                    <li>Resume: <a href="./images/KeitaSuzukiResume2020v4.pdf">Keita Suzuki Resume</a></li>
                    <li>Phone Number: (404) 428-9319</li>
                </ul>
            </div>

        </div>
    );
}

export default About;