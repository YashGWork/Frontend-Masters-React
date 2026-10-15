import React from "react";
import { Link } from "react-router-dom";

export default function InvalidDetails() {
  return (
    <div>
      <div style={{ padding: "3rem" }}>
        No such country exist, <Link to="/">return!</Link>
      </div>
      ;
    </div>
  );
}
