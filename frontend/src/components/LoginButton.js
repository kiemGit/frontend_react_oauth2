import React, { useState } from "react";
import axios from "axios";

const ProtectedResource = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const fetchProtectedResource = async () => {
    const accessToken = "10eae574a28495fd181fa92e8ce6d6116ba9b3f7"; // Replace with the actual token

    try {
      const response = await axios.get("http://192.168.0.42:3007/secure", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      setMessage(response.data.message);
    } catch (err) {
      if (err.response) {
        // Server responded with a status other than 2xx
        setError(err.response.data.error || "Unauthorized");
      } else {
        // Other errors like network issues
        setError("An error occurred while fetching the resource.");
      }
    }
  };

  return (
    <div>
      <button onClick={fetchProtectedResource}>Access Protected Resource</button>
      {message && <p>Message: {message}</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
    </div>
  );
};

export default ProtectedResource;
