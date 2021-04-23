import React from "react";
import HeaderCard from "../components/HeaderCard";
import AllAboutMadCard from "../components/home/AllAboutMadCard";
import LatestWorkCard from "../components/home/LatestWorkCard";
import MadHeaderCard from "../components/home/MadHeaderCard";
import RemindersCard from "../components/home/RemindersCard";

const Home = () => {
  return (
    <div className="home">
      <RemindersCard />
      <MadHeaderCard />
      <LatestWorkCard />
      <AllAboutMadCard />

      <HeaderCard header="sup">Hi</HeaderCard>
    </div>
  );
};

export default Home;
