import React from "react";

const ShadowCard = ({ children, onclick }) => {
  return (
    <>
      <div className={"shadow-card-component"} onClick={onclick}>
        {children}
      </div>
    </>
  );
};

export default ShadowCard;
