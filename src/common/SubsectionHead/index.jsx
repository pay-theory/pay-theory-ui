import React from "react";

import { SubsectionParent, SubsectionCurrentPage } from "./children";

const SubsectionHead = (props) => {
  return (
    <div className="pt-subsection-head">
      <SubsectionParent />
      <p className="backslash">/</p>
      <SubsectionCurrentPage />
      <style jsx="true">{`
        .pt-subsection-head {
          display: flex;
          flex-direction: row;
          align-items: center;
          height: 32px;
          margin-bottom: 16px;
        }

        .pt-subsection-head .backslash {
          padding: 0px 8px;
        }

        .pt-subsection-head .current-page {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default SubsectionHead;
