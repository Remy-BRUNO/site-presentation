"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ScrollUp(params) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };


  }, []);
  return (
    <>
    {scrollY>200? <div id="scrollUp" style={{position:"fixed", bottom:"20px", opacity:"0.5",right:"20px"}} >
    <a href="#top"><Image src={"/arrow.svg"} width={50} height={50} alt="arrow top"/></a>
    </div>:<div id="scrollUp" style={{position:"fixed", bottom:"10px", opacity:"0.5",right:"-100px"}} >
    <a href="#top">Top</a>
    </div>}
    </>
  )

  
};
