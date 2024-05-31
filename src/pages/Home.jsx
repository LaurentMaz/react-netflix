import React from "react";
import Hero from "../components/Hero";
import Row from "../components/Row";
import { requests } from "../Requests";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="ml-10">
        <Row title="A venir" fetchURL={requests.requestUpcoming} />
        <Row title="Populaires" fetchURL={requests.requestPopular} />
        <Row title="Tendances" fetchURL={requests.requestTrending} />
        <Row title="Mieux notés" fetchURL={requests.requestTopRated} />
      </div>
    </div>
  );
};

export default Home;
