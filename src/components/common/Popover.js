import React from "react";

export default function Popover({ message, children }) {
  return (
    <div className="popover">
      <p className="popover-content">{message}</p>
      {children}
    </div>
  );
}
