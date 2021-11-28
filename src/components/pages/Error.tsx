import React from "react";
import { memo } from "react";
import { Title } from "../atoms/Title";
import { MainTemplate } from "../template/MainTemplate";

export const Error = memo(() => {
  return (
    <div>
      <MainTemplate
        mainBlock={
          <div>
            <div className="error-page">
              <Title title={"ERROR"} />
            </div>
          </div>
        }
      />
    </div>
  );
});
