// src/components/Hero.jsx
import { motion } from "framer-motion";
import chairman from "../assets/chairman.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="text-light py-5"
      style={{
        background: "linear-gradient(90deg, #006400 0%, #003366 100%)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side Text Animation */}
          <motion.div
            className="col-md-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="display-4 fw-bold">
              Social Democratic Party
            </h1>
            <p className="lead">
              Led by Chairman <strong>Abid Iqbal Khari</strong>, working for a
              just and prosperous Pakistan.
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary btn-lg mt-3"
              onClick={() => {
                const section = document.getElementById("mission");
                if (section) section.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Right Side Image Animation */}
          <motion.div
            className="col-md-6 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src={chairman}
              alt="Chairman"
              className="img-fluid rounded shadow-lg border border-3 border-white"
              style={{ maxHeight: "450px" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
