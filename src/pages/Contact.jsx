// src/pages/Contact.jsx
const Contact = () => {
  return (
    <div className="container py-5 text-center">
      <h2 className="fw-bold mb-4">Contact Us</h2>
      <p><strong>Address:</strong> 233-A, Street#4, F-10/3, Islamabad, Pakistan</p>
      <p><strong>Phone:</strong> (051) 4718112</p>
      <p><strong>Email:</strong> sdp.pakistan24@gmail.com</p>
      <iframe
        title="map"
        className="mt-3 shadow"
        src="https://maps.google.com/maps?q=Islamabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="300"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Contact;
