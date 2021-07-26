/* istanbul ignore file */
import React from "react";

const GlobalStyle = (props) => {
  return (
    <div data-testid="globalStyle" className="appContainer">
      {props.children}
      <style jsx="true" global="true">{`
        :root {
          /* Colors */
          --pt-purple: rgba(145, 57, 210, 1);
          --pt-purple-opaque: rgba(145, 57, 210, 0.08);
          --pt-purple-1: rgba(124, 44, 221, 1);
          --pt-purple-dark: rgba(90, 22, 170, 1);
          --white: rgba(255, 255, 255, 1);
          --black: rgba(0, 0, 0, 1);
          --black-opaque-8: rgba(0, 0, 0, 0.08);
          --black-opaque-16: rgba(0, 0, 0, 0.16);
          --black-opaque-32: rgba(0, 0, 0, 0.32);
          --dark-grey: rgba(106, 96, 109, 1);
          --grey: rgba(142, 134, 143, 1);
          --grey-1: rgba(202, 196, 202, 1);
          --grey-1-opaque: rgba(202, 196, 202, 0.16);
          --grey-2: rgba(242, 242, 242, 1);
          --grey-2-opaque: rgba(242, 242, 242, 0.48);
          --grey-3: rgba(248, 248, 248, 1);
          --pink: rgba(255, 170, 195, 1);
          --raspberry: rgba(255, 105, 118, 1);
          --raspberry-opaque: rgba(255, 105, 118, 0.08);
          --light-red: rgba(255, 237, 245, 1);
          --red: rgba(226, 58, 84, 1);
          --orange: rgba(255, 152, 75, 1);
          --light-yellow: rgba(255, 255, 237, 1);
          --yellow: rgba(253, 204, 41, 1);
          --light-mint: rgba(234, 255, 244, 1);
          --dark-mint: rgba(91, 199, 148, 1);
          --mint: rgba(156, 239, 189, 1);
          --light-blue: rgba(232, 244, 255, 1);
          --blue: rgba(84, 122, 243, 1);
          --dark-blue: rgba(46, 56, 191, 1);
          --light-indigo: rgba(214, 217, 255, 1);
          --indigo: rgba(122, 100, 255, 1);
          --purple-light: rgba(246, 238, 255, 1);

          /* font-weight */
          --light-weight: 200;
          --book-weight: 300;
          --regular-weight: 400;
          --medium-weight: 500;
          --black-weight: 900;

          /* font-family */
          --primary-font: Halyard, Inter, Arial, sans-serif;
          --secondary-font: IBM Plex Mono, Monaco, monospace;
        }
        #app,
        #root,
        html,
        body {
          height: 100%;
        }
        * {
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          -o-box-sizing: border-box;
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          -webkit-text-size-adjust: none;
        }
        body {
          background-image: none;
          height: 100%;
          overflow: auto;
          margin: 0;
          padding: 0;
          font-family: var(--primary-font);
          font-display: swap;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          overflow: auto;
        }
        .body-container {
          background-color: #ffffff;
          flex-grow: 1;
          height: 100%;
          display: flex;
          justify-content: stretch;
          flex-direction: row;
          flex-grow: 100;
        }

        .body-content {
          height: 100%;
          flex-grow: 100;
          color: #1f0a28;
          display: flex;
          flex-direction: column;
          overflow: visible;
        }

        #container {
          display: flex;
          flex-direction: column;
          min-height: 100%;
          width: 100%;
        }

        .modal-wrapper {
          height: 100%;
          width: 100%;
        }
        .spinner-wrapper {
          height: 100%;
          width: 100%;
        }
        .card {
          background-color: #fff;
          box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
            0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
          -webkit-transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
          transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .rounded {
          border-radius: 5px;
        }

        .overview-detail-container {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: flex-start;
        }
        .school-entry {
          max-width: 100%;
          min-width: 762px;
          width: auto;
          padding: 0;
          flex-grow: 1;
          margin: 0 8px;
        }
        .overview {
          justify-content: center;
          align-items: center;
          width: 323px;
          padding: 0 !important;
          margin: 0 0 0 8px;
        }
        .coming-soon {
          display: inline-block;
          max-height: 28px;
          border-radius: 14px;
          font-size: 16px;
          line-height: 20px;
          font-weight: 600;
          letter-spacing: 0;
          padding: 4px 14px;
          margin: 2px;
          background: rgb(248, 95, 14);
          background: linear-gradient(
            45deg,
            rgba(248, 95, 14, 1) 0%,
            rgba(144, 49, 237, 1) 100%
          );
          color: #fff;
        }
        hr {
          background-color: #cad3dd;
          width: 100%;
          opacity: 0.5;
          border: 0;
          clear: both;
          display: block;
          height: 1px;
        }

        h1 {
          font-weight: var(--light-weight);
          font-size: 60px;
          color: var(--black);
          line-height: 60px;
        }

        h1.strong {
          font-weight: var(--black-weight);
        }

        h1.alt-text {
          font-weight: var(--book-weight);
          font-size: 56px;
          color: var(--black);
          line-height: 52px;
          text-transform: uppercase;
        }

        .pt-icon.h1 {
          font-weight: var(--light-weight);
          font-size: 54px;
          color: var(--black);
          line-height: 68px;
        }

        h2 {
          font-weight: var(--light-weight);
          font-size: 38px;
          color: var(--black);
          line-height: 38px;
        }

        h2.strong {
          font-weight: var(--black-weight);
        }

        h2.alt-text {
          font-weight: var(--book-weight);
          font-size: 32px;
          color: var(--black);
          line-height: 30px;
          text-transform: uppercase;
        }

        .pt-icon.h2 {
          font-weight: var(--light-weight);
          font-size: 31px;
          color: var(--black);
          line-height: 40px;
        }

        h3 {
          font-weight: var(--light-weight);
          font-size: 26px;
          color: var(--black);
          line-height: 26px;
        }

        h3.strong {
          font-weight: var(--black-weight);
        }

        h3.alt-text {
          font-weight: var(--book-weight);
          font-size: 22px;
          color: var(--black);
          line-height: 22px;
          text-transform: uppercase;
        }

        .pt-icon.h3 {
          font-weight: var(--light-weight);
          font-size: 24px;
          color: var(--black);
          line-height: 32px;
        }

        h4 {
          font-weight: var(--book-weight);
          font-size: 18px;
          color: var(--black);
          line-height: 20px;
        }

        h4.strong {
          font-weight: var(--medium-weight);
        }

        h4.alt-text {
          font-weight: var(--regular-weight);
          font-size: 16px;
          color: var(--black);
          line-height: 18px;
          text-transform: uppercase;
        }

        .pt-icon.h4 {
          font-weight: var(--light-weight);
          font-size: 18px;
          color: var(--black);
          line-height: 24px;
        }

        h5 {
          font-weight: var(--book-weight);
          font-size: 11px;
          color: var(--black);
          line-height: 13px;
        }

        h5.strong {
          font-weight: var(--medium-weight);
        }

        h5.alt-text {
          font-weight: var(--regular-weight);
          font-size: 12px;
          color: var(--black);
          line-height: 14px;
          text-transform: uppercase;
        }

        .pt-icon.h5 {
          font-weight: var(--light-weight);
          font-size: 13px;
          color: var(--black);
          line-height: 18px;
        }

        h6 {
          font-weight: var(--book-weight);
          font-size: 10px;
          color: var(--black);
          line-height: 10px;
        }

        h6.strong {
          font-weight: var(--medium-weight);
        }

        h6.alt-text {
          font-weight: var(--regular-weight);
          font-size: 10px;
          color: var(--black);
          line-height: 13px;
          text-transform: uppercase;
        }

        .pt-icon.h6 {
          font-weight: var(--light-weight);
          font-size: 10px;
          color: var(--black);
          line-height: 14pxpx;
        }

        p {
          font-weight: var(--book-weight);
          font-size: 16px;
          color: var(--black);
          line-height: 24px;
        }

        p.strong {
          font-weight: var(--medium-weight);
        }

        p.alt-text {
          font-weight: var(--regular-weight);
          font-size: 14px;
          color: var(--black);
          line-height: 16px;
          text-transform: uppercase;
        }

        .pt-icon.p {
          font-weight: var(--light-weight);
          font-size: 16px;
          color: var(--black);
          line-height: 22px;
        }

        .all-caps {
          text-transform: uppercase;
        }

        .alt-text {
          font-family: var(--secondary-font);
        }

        a {
          color: var(--pt-purple);
        }

        .grey {
          color: var(--dark-grey);
        }
      `}</style>
    </div>
  );
};

export default GlobalStyle;
