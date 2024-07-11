import "./Experience.css";
import Navbar from "./Navbar";
import PC2Image from "./img/pic 1.jpg"
import PC1Image from "./img/pic 2.jpg"
import PC3Image from"./img/pic 8.jpg"
const Experience = () => {
  return (
    <>
      <Navbar />
      <div id="experience-info" className="ontoy">

        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold display-1 text-center mt-2 pt-2 text-white">
                Experiences
              </h1>
    <div className="exp">
    <div className="container">
          <hr/>
          <div className="row mb-5">
            <h3 className="text-center">On-the Job in Training Supply Office</h3>
            <hr />
          <div className="col-lg-4">
          <img className="two" src={PC1Image} />
          <h4 className="three text-white">Get the serial number of printers</h4>
          </div>
          <div className="col-lg-4">
          <img className="one" src={PC2Image} />
          <h4 className="three text-white">Assist to receive the new stock</h4>
          </div>
          <div className="col-lg-4">
          <img className="three" src={PC3Image} />
          <h4 className="three text-white">The CPSU main campus give the certificate of our farternity the MEGALITH NU SIGMA PHI (MEGANS) </h4>
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

export default Experience;
