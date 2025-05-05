import React, { use } from "react";
import LogoBar from "../components/Header/LogoBar";
import MarqueeItem from "../components/Header/MarqueeItem";
import NavBar from "../components/Header/NavBar";
import { Outlet } from "react-router";
import CategoryNav from "../components/AllCategory/CategoryNav";

const newsData = fetch("/news.json").then((res) => res.json());

const Home = () => {
  const data = use(newsData);
  console.log(data);
  return (
    <div className="max-w-11/12 mx-auto">
      <MarqueeItem data={data}></MarqueeItem>
      <NavBar></NavBar>
      <div className="gird grid-cols-3 gap-6">
        <aside>
          <CategoryNav></CategoryNav>
        </aside>
        <main></main>
        <aside></aside>
      </div>
    </div>
  );
};

export default Home;
