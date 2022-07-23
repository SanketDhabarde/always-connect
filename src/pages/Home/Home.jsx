import React from "react";
import { FollowCard, Posts, Sidebar } from "../../components";
import { useTitle } from "../../hooks";
import "./Home.css";

function Home() {
  useTitle("Home");
  return (
    <div className="container my-2">
      <Sidebar />
      <Posts />
      <FollowCard />
    </div>
  );
}

export default Home;
