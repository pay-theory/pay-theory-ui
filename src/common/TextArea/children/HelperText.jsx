import React from "react";

export default ({ show, children, valid }) => {
  return (
    <React.Fragment>
      <div className="helper-line">
        <div
          data-testid="helper"
          className={`helper-text ${show ? "opaque" : "transparent"} ${valid}`}
        >
          {children}
        </div>
      </div>
      <style jsx="true">{`
        .helper-line {
          display: -webkit-box;
          display: flex;
          -webkit-box-pack: justify;
          justify-content: space-between;
          box-sizing: border-box;
          padding: 1px 16px 0px 16px;
        }
        .helper-text {
          font-smoothing: antialiased;
          font-size: 11px;
          text-decoration: inherit;
          text-transform: inherit;
          display: block;
          transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
          will-change: opacity;
          color: var(--grey);
        }
        .helper-text.invalid {
          color: var(--red);
        }
        .opaque {
          opacity: 1;
        }
        .transparent {
          opacity: 0;
        }
      `}</style>
    </React.Fragment>
  );
};
