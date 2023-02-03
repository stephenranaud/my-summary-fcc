import type React from "react";

type Props = {
  className?: string;
  id?: string;
  selector?: string;
};

import "./ButtonMenu.css";
import { useState } from "react";

export function ButtonMenu({ id, className, selector }: Props) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    if (selector) {
      const selected = document.querySelector(`.${selector}`);
      if (selected) selected.classList.toggle("active");
    }
    setActive(!active);
  };

  return (
    <button
      id={id}
      type="button"
      className={`btn-menu ${className ? className : ""}`}
      onClick={handleClick}
    >
      <div className={`container-tired ${active ? "active" : ""}`}>
        <div className="container-tired__tired container-tired--top"></div>
        <div className="container-tired__tired container-tired--bottom"></div>
      </div>
    </button>
  );
}
