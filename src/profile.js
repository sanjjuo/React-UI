import React from "react";

function MyProfile() {
  const profileStyle = {
    position: "fixed",
    top: '120px',
    right: '1280px',
    padding: '20px',
    backgroundColor: 'white',
    boxShadow: '2px 4px 8px 0px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    width: '250px',
    borderRadius: '0px',
    zIndex: 1500,
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const nameStyle = {
    fontWeight: 'bold',
  };

  const imageStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    marginBottom: '10px',
  };

  return (
    <div style={profileStyle}>
      <div style={containerStyle}>
        <img src={process.env.PUBLIC_URL + '/imagecafe.jpg'} alt="Profile" style={imageStyle} />
        <p style={nameStyle}>MOHAMED SANJEED</p>
        <p>mohamedsanjeed2001@email.com</p>
      </div>
    </div>
  );
}

export default MyProfile;
