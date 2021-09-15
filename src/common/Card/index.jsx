import React from "react";

const Card = ({ border, grey, gradient, width, children }) => {
  const style = () => {
    const result = {};
    if (border) result.borderColor = `var(--${border})`;
    if (grey) result.backgroundColor = "var(--grey-3)";
    if (gradient)
      result.backgroundImage =
        "url(https://books-ui-assets.s3.amazonaws.com/neutral_gradient_1.svg)";
    if (width) result.width = width;
    return result;
  };

  return (
    <div className="pt-card" data-testid="CardRow" style={style()}>
      {children}
      <style jsx="true">{`
        .pt-card {
          display: flex;
          flex-direction: column;
          background-color: var(--white);
          border-radius: 20px;
          border: 1px solid transparent;
          flex-wrap: wrap;
          padding: 8px;
          background-size: cover;
        }
      `}</style>
    </div>
  );
};

export default Card;
