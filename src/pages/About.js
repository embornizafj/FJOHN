import "./About.css";
import Navbar from "./Navbar";
import myImage from "./img/fj 1.jpg"

const About = () => {
  return (
    <>
      <Navbar />
      <div id="about-info" className="ontoy">

  <div className="container mt-5">
    <div className="row">
      <div className="col">

      <div id="about">
        <div className="container">
      
            <div className="card shadow p-5">
              <div className="row">
              <div className="col-lg-4">
              <center><img src={myImage} /></center>
              </div>
              <div className="col-lg-8">
                <div className="card box shadow mb-3 p-3">
                <h4 className="text-dark"><span>About Me</span></h4>
              <p className="text-black"> I am Ferie john Emborniza 28 years old and i love playing basketball,soft ball and volleyball. Believing that there is no challenge more challenging than the challenge to improve myself. </p>
          
                </div>
                <div className="card box shadow p-3">
                <h4 className="text-dark"><span>Jeremiah 29:11</span> </h4>
              <p className="text-black"> For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.</p>
              <p> </p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>

    </>
  );
};

export default About;
