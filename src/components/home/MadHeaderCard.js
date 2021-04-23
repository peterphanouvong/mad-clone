import React from "react";
import { Link } from "react-router-dom";
import HeaderlessCard from "../HeaderlessCard";

const MadHeaderCard = () => {
  return (
    <HeaderlessCard className="mad-header-card">
      <h1 className="title">MAD designs and develops digital products.</h1>
      <p className="subtitle">
        We're a team of strategists, designers and technologists that unlock
        creative potential in progressive organisations.
      </p>
      <Link to="/about" className="link">
        {">"}
      </Link>
    </HeaderlessCard>
  );
};

export default MadHeaderCard;
