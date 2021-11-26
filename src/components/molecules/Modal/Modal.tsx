import * as React from "react";
import { memo } from "react";
import "./index.css";

interface IModal {
  active: boolean;
  setActive: (modalActive: boolean) => void;
  children: any;
}
export const Modal = memo(({ active, setActive, children }: IModal) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal-content active" : "modal-content"}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
});

// div modal text вынесни в отдельный компанент и сделать сдесь промп
