// src/pages/Home.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";

import team1 from "../assets/team6.jpg";
import team2 from "../assets/team4.jpg";
import team3 from "../assets/team99.jpg";
import team4 from "../assets/team101.jpg";
import team5 from "../assets/team102.jpg";
import team6 from "../assets/team.jpg";

const Home = () => {
  const teamMembers = [
    {
      name: "Youth Forum Discussion",
      role: "Discussion and consultation with the Youth Forum of the Social Democratic Party: If my nation's youth are brave and valiant, my free-spiritedness is no less than Alexander's grandeur.",
      img: team2,
    },
    {
      name: "Youth Forum Delegation",
      role: "Walid Asghar, the driving force behind the Social Democratic Party London Chapter, along with Youth Forum members Usman Irshad Advocate, Umar Wattoo, Muhammad Umar, Muhammad Hamid, and Shahbaz Irshad from Faisalabad, met Chairman Abid Iqbal and Think Tank President Dr. Abdul Baqi at the party secretariat in Islamabad.",
      img: team1,
    },
    {
      name: "Media Policy Meeting",
      role: "A detailed meeting was held between Social Democratic Party Chairman Abid Iqbal, key party officials, and Pakistan's renowned film, documentary, and TV drama mogul, and CEO of Bling Motion Pictures, Mr. Hassan Naeem Ghani, to discuss the formulation of the party's media policy and narrative.",
      img: team3,
    },
    {
      name: "Abid Iqbal Discusses Quaid-e-Azam's Vision on Sach TV",
      role: "Chairman of the Social Democratic Party, Abid Iqbal, participated in Sach TV's program discussing the thoughts and character of Quaid-e-Azam, alongside Dr. Sajid Awan from Quaid-e-Azam University, Professor Kishwar Sultana from Allama Iqbal Open University, hosted by Mehwish Khan and Azhar Abidi.",
      img: team4,
    },
    {
      name: "Abid Iqbal and Shazia Bajwa Present SDP’s Vision on City 41",
      role: "Chairman of the Social Democratic Party, Mr. Abid Iqbal, and Political Council member from Faisalabad, Ms. Shazia Bajwa, discussed the party's vision and objectives on City 41's morning show, sharing a new spirit and progressive ideas for a bright and developed future of Pakistan.",
      img: team5,
    },
    {
      name: "SDP Chairman Strengthens Ties with Islamabad Bar Association",
      role: "SDP Chairman Abid Iqbal visited the Islamabad Bar Association to congratulate the newly elected President, Mr. Naeem Ali Gujjar, and his cabinet. He engaged with prominent lawyers, reaffirming SDP's commitment to building strong ties with the legal community and advancing justice and progress. Special appreciation was extended to SDP lawyers Amir Raza Adv, Aysha Tanveer Adv, Sardar Amir Ahmed Adv, Rizwan Majeed Adv, and Umar Zafar Kasana Adv for their invaluable support and contributions to the party's vision. Other notable SDP members, including Dr. Ghazala Khan, Shazia Afridi Sahiba, Shahid Javed, and Nabeel Anwar, were also present.",
      img: team6,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* Mission Section */}
      <motion.section
        id="mission"
        className="py-5 bg-light"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Our Mission</h2>
          <p className="lead">
            The Social Democratic Party envisions a just, fair, and democratic
            Pakistan where every citizen enjoys equal opportunities, freedom,
            and prosperity.
          </p>
        </div>
      </motion.section>

      {/* Vision Section */}
      <motion.section
        id="vision"
        className="py-5"
        style={{ backgroundColor: "#f0f4f7" }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Our Vision</h2>
          <p className="lead">
            We strive to build a prosperous Pakistan based on transparency,
            justice, education, and economic growth for all citizens.
          </p>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        id="team"
        className="py-5 bg-light"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Our Team</h2>
          <p className="lead mb-5">
            Our dedicated team is working tirelessly to bring real change in the
            lives of the people of Pakistan.
          </p>

          <div className="row">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-md-4 mb-4">
                <motion.div
                  className="card shadow-lg border-0 h-100"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="card-img-top"
                    style={{ height: "300px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{member.name}</h5>
                    <p className="card-text text-muted">{member.role}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Join Us Section */}
      <motion.section
        id="join"
        className="py-5"
        style={{ backgroundColor: "#f0f4f7" }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Join Our Movement</h2>
          <p className="lead mb-4">
            Become a part of the Social Democratic Party and help us make a
            difference in Pakistan's future.
          </p>
          <Link to="/join">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary btn-lg"
            >
              Join Now
            </motion.button>
          </Link>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-5 bg-light"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        
      </motion.section>
    </>
  );
};

export default Home;
