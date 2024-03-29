import React from "react";
import GlobalStyle from "../GlobalStyle";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  document.body.style = null;
  const navigate = useNavigate();
  return (
    <div id="appContainer">
      <GlobalStyle />
      <div id="errorContent">
        <h1 className="strong white center">
          You do not have authorization to view this page.
        </h1>
        <div className="restricted-barcode" />
        <Button
          label="Homepage"
          leadingIcon={{ name: "chevron-left" }}
          name="homepage"
          onClick={() => navigate("/")}
        />
      </div>
      <style global="true" jsx="true">
        {`
          html {
            height: 100%;
          }

          body {
            height: 100%;
            width: 100%;
            margin: 0;
            padding: 0;
            left: 0;
            top: 0;
            overflow: auto;
            background-color: var(--pt-purple);
            background-image: url(https://books-ui-assets.s3.amazonaws.com/pay_theory_gradient.svg);
            background-size: cover;
            -webkit-font-smoothing: antialiased;
          }

          .white {
            color: var(--white);
          }

          .center,
          #homepage {
            text-align: center;
            margin-left: auto;
            margin-right: auto;
          }

          #appContainer {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            width: 100%;
            overflow: auto;
          }

          #errorContent {
            width: 854px;
            height: auto;
            margin: 12px;
            display: flex;
            flex-direction: column;
          }

          #errorContent > * {
            margin-bottom: 24px;
          }

          .restricted-barcode {
            background-image: url(https://books-ui-assets.s3.amazonaws.com/unauthorized_barcode.svg);
            background-repeat: no-repeat;
            background-size: 85%;
            background-position: 50%;
            height: 141px;
            width: 669px;
            align-self: center;
          }
        `}
      </style>
    </div>
  );
};

export default Unauthorized;
