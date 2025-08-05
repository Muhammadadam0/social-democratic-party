// src/pages/Join.jsx
import { motion } from "framer-motion";
import logo from "../assets/logo.jpg";

const Join = () => {
  return (
    <div 
      className="join-page d-flex align-items-center justify-content-center"
      style={{
        background: `url(${logo}) no-repeat center center / 200px`,
        backgroundColor: "rgba(0, 100, 0, 0.1)",
        minHeight: "100vh",
        backgroundAttachment: "fixed",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="card shadow-lg p-4"
        style={{ maxWidth: "500px", width: "100%", borderRadius: "15px" }}
      >
        <h2 className="text-center fw-bold mb-4" style={{ color: "#006400" }}>
          Join Social Democratic Party
        </h2>

        <form>
          <div className="mb-3">
            <label className="form-label fw-bold">Full Name</label>
            <input type="text" className="form-control" placeholder="Enter your name" required />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Father's Name</label>
            <input type="text" className="form-control" placeholder="Enter your father's name" required />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">City</label>
            <input type="text" className="form-control" placeholder="Enter your city" required />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">CNIC</label>
            <input type="text" className="form-control" placeholder="Enter your CNIC number" required />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary w-100 fw-bold"
            style={{ backgroundColor: "#006400", borderColor: "#006400" }}
          >
            Submit
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Join;
