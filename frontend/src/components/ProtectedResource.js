import React, { useEffect, useState } from "react";
import axios from "axios";

const ProtectedResource = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");

    axios
      .get("http://localhost:4000/protected", {
            headers: { Authorization: `Bearer ${accessToken}` },
    })
      .then((response) => {
        setData(response.data); // Save the response data to state
      })
      .catch((error) => {
        console.error("Error fetching protected resource:", error);
        if (error.response && error.response.status === 401) {
          alert("Session expired. Please log in again.");
          window.location = "/";
        }
      });
  }, []);

  if (!data) {
    return <div>Loading protected resource...</div>;
  }

  return (
    <div>
      <h1>Protected Resource</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default ProtectedResource;
  
      
