import React from "react";
const PortalLogo = (props) => {
  return (
    <div className="portal-head-logo">
      <style jsx="true">{`
        .portal-head-logo {
          background-image: url(https://books-ui-assets.s3.amazonaws.com/paytheory_logo_main_color.svg);
          background-repeat: no-repeat;
          background-size: 100%;
          background-position: center;
          height: 52px;
          width: 131px;
          margin-right: 12px;
        }
      `}</style>
    </div>
  );
};

export default PortalLogo;
