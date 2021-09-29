import React from "react";
import GlobalStyle from "../GlobalStyle";
import Button from "../Button";
import { useHistory } from "react-router-dom";

const NotFound = () => {
  document.body.style = null;
  const history = useHistory();
  return (
    <div id="appContainer">
      <GlobalStyle />
      <div id="errorContent">
        <h1 className="strong white center">This page does not exist.</h1>
        <div className="not-found-barcode" />
        <Button
          label="Homepage"
          leadingIcon={{ name: "chevron-left" }}
          name="homepage"
          onClick={() => history.push("/")}
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

          .not-found-barcode {
            background-image: url(https://books-ui-assets.s3.amazonaws.com/404_barcode.svg);
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

export default NotFound;
