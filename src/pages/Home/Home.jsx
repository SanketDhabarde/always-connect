import React from "react";
import { FollowCard, Posts, Sidebar } from "../../components";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Sidebar />
      <Posts />
      <FollowCard />
    </div>
  );
}

export default Home;
