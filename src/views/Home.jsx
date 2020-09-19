import React from "react";

import Button from "../components/ButtonDemo/Button";
import Header from "../components/HeaderDemo/Header";

import "../assets/css/home.css";

export default function Home() {
  return (
    <div className="home-page">
      <Header />
      <Button />
    </div>
  );
}
