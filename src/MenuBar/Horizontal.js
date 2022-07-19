import React from "react";
import "./Imgshow_style.css"

const Horizontal = ({ text }) => {
  return (
    <div
      style={{
        width: "88vw",
        textAlign: "center",
        borderBottom: "2px solid #000",
        lineHeight: "0.1em",
        margin: "10px 0 20px",
      }}
    >
      <span className="Fontblank" style={{ background: "#333", padding: "0 10px" }}>{text}</span>
    </div>
  );
};

export default Horizontal;