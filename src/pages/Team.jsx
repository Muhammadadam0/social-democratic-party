// src/pages/Team.jsx
import team1 from "../assets/team1.jpg";
import team2 from "../assets/team2.jpg";
import team3 from "../assets/team3.jpg";

const Team = () => {
  return (
    <div className="container py-5 text-center">
      <h2 className="fw-bold mb-4">Our Leadership Team</h2>
      <div className="row">
        <div className="col-md-4">
          <img src={team1} alt="Leader" className="img-fluid rounded-circle shadow mb-3" />
          <h5>Ali Khan</h5>
          <p>Vice Chairman</p>
        </div>
        <div className="col-md-4">
          <img src={team2} alt="Leader" className="img-fluid rounded-circle shadow mb-3" />
          <h5>Sara Ahmed</h5>
          <p>General Secretary</p>
        </div>
        <div className="col-md-4">
          <img src={team3} alt="Leader" className="img-fluid rounded-circle shadow mb-3" />
          <h5>Bilal Shah</h5>
          <p>Media Coordinator</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
