import React, { useEffect } from "react";
import { Navigation } from "../molecules/Navigation";

interface IMainTemplate {
  mainBlock: React.ReactNode;
}

export const MainTemplate = ({ mainBlock }: IMainTemplate) => {
  return (
    <div className="main-template">
      <Navigation />
      <div className="main-template-wrapper">
        <div>{mainBlock}</div>
      </div>
    </div>
  );
};
