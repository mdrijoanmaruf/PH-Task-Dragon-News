import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const MarqueeItem = ({ data }) => {
  let title = [];
  console.log(data[0].title);
  for(let i = 0; i < 10; i++){
    title.push(data[i].title)
    title.push("'          '")
  }
  console.log(title);
  return (
    <div className=" bg-dark7 p-3 flex items-center gap-4">
      <span className="bg-red px-4 py-2 text-white font-[600]">Latest</span>
      <div className="overflow-hidden">
        <Marquee>
          <pre>
          {title}
          </pre>
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeItem;
