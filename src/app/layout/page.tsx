"use client";
import Dropdown from "@/component/dropdown";
import DropdownInnerText from "@/component/dropdown/inner/text";
import Footer from "@/component/footer";
import Header from "@/component/header";
// import { isMobile } from "react-device-detect";
import { useMediaQuery } from "react-responsive";

export default function Page() {
  const isDesktop: boolean = useMediaQuery({
    query: "(min-width:1280px)",
  });
  const isTablet: boolean = useMediaQuery({
    query: "(min-width:768px) and (max-width:1280px)",
  });
  const isMobile: boolean = useMediaQuery({
    query: "(max-width:768px)",
  });

  const device = (className: string) => {
    if (isDesktop) return className;
    if (isTablet) return className + " t";
    if (isMobile) return className + " m";
    return className;
  };

  return (
    <div className={`${device("resContainer")}`}>
      <Header />

      <div className="mainWrapper">
        <Dropdown
          title={"Introduction"}
          selected={true}
          child={<DropdownInnerText />}
        />
        <Dropdown title={"Map"} selected={false} />
        <Dropdown title={"NFT shop"} selected={false} />
      </div>
      <Footer />
      {/* 
      <div className={`${device("content")}`}>
        <div className={`${device("boxWrapper")}`}>
          <div className={`${device("box")}`}></div>
          <div className={`${device("box")}`}></div>
          <div className={`${device("box")}`}></div>
          <div className={`${device("box")}`}></div>
          <div className={`${device("box")}`}></div>
        </div>
      </div> */}
      {/* 
      {isDesktop && <p style={{ background: "red" }}>Desktop</p>}
      {isTablet && <p style={{ background: "blue" }}>Tablet</p>}
      {isMobile && <p style={{ background: "green" }}>Mobile</p>} */}
    </div>
  );
}
