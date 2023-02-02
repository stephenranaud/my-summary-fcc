import type React from "react";

import "./Button.css";

type Props = {
  type: "button" | "submit" | "reset" | undefined;
  className?: string;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => {};
};

export default function Button({ type, className, children, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`btn ${className ? className : ""}`}
    >
      {children}
    </button>
  );
}
