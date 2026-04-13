import React, { useState } from "react";

function App() {
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const workshops = [
    { title: "React Basics", date: "20 April 2026" },
    { title: "AI for Beginners", date: "25 April 2026" }
  ];

  const handleSubmit = () => {
    if (name === "" || email === "") {
      setMessage("Please fill all fields");
      return;
    }

    setMessage("Registration Successful ✅");
    setName("");
    setEmail("");
  };

  return (
    <div
      style={{
        fontFamily: "Arial",
        backgroundColor: "#f4f6f8",
        minHeight: "100vh",
        padding: "20px"
      }}
    >
      {/* Title */}
      <h1
        style={{
          textAlign: "center",
          fontSize: "32px",
          marginBottom: "20px",
          color: "#2c3e50"
        }}
      >
        Workshop Portal
      </h1>

      {/* Workshop List */}
      {!selectedWorkshop &&
        workshops.map((workshop, index) => (
          <div
            key={index}
            style={{
              background: "white",
              margin: "15px auto",
              padding: "20px",
              maxWidth: "400px",
              width: "90%",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              transition: "transform 0.2s"
            }}
          >
            <h3 style={{ marginBottom: "10px" }}>{workshop.title}</h3>
            <p style={{ color: "#555" }}>{workshop.date}</p>

            <button
              onClick={() => {
                setSelectedWorkshop(workshop);
                setMessage("");
              }}
              style={{
                marginTop: "10px",
                padding: "10px",
                backgroundColor: "#2ecc71",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer"
              }}
              onMouseOver={(e) =>
                (e.target.style.backgroundColor = "#27ae60")
              }
              onMouseOut={(e) =>
                (e.target.style.backgroundColor = "#2ecc71")
              }
            >
              Register
            </button>
          </div>
        ))}

      {/* Registration Form */}
      {selectedWorkshop && (
        <div
          style={{
            background: "white",
            padding: "20px",
            maxWidth: "400px",
            width: "90%",
            margin: "20px auto",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
          }}
        >
          <h2 style={{ marginBottom: "15px" }}>
            {selectedWorkshop.title}
          </h2>

          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              margin: "10px 0",
              borderRadius: "5px",
              border: "1px solid #ccc"
            }}
          />

          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              margin: "10px 0",
              borderRadius: "5px",
              border: "1px solid #ccc"
            }}
          />

          <button
            onClick={handleSubmit}
            style={{
              padding: "10px",
              backgroundColor: "#3498db",
              color: "white",
              border: "none",
              borderRadius: "5px",
              width: "100%",
              cursor: "pointer"
            }}
          >
            {message === "Registration Successful ✅"
              ? "Done"
              : "Submit"}
          </button>

          {/* Message */}
          {message && (
            <p
              style={{
                marginTop: "10px",
                textAlign: "center",
                color:
                  message === "Registration Successful ✅"
                    ? "green"
                    : "red"
              }}
            >
              {message}
            </p>
          )}

          <button
            onClick={() => {
              setSelectedWorkshop(null);
              setMessage("");
            }}
            style={{
              marginTop: "10px",
              padding: "8px",
              backgroundColor: "gray",
              color: "white",
              border: "none",
              width: "100%",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
}

export default App;