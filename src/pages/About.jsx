// src/pages/About.jsx
import chairman from "../assets/chairman.jpg";

const About = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img src={chairman} alt="Chairman" className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-6">
          <h2 className="fw-bold">About Social Democratic Party</h2>
          <p>
            Founded under the leadership of <strong>Abid Iqbal Khari</strong>,
            our mission is to strengthen democracy, protect human rights, and
            ensure economic justice for all citizens of Pakistan.
          </p>
          <p>
            We stand for equality, transparency, and progress, working to build
            a better future for generations to come.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
