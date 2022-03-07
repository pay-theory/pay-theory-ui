import React, { useContext } from "react";
import { NavigationCategory, NavigationItem } from "./children";
import PropTypes from "prop-types";

import * as BooksHooks from '../../hooks'

const NavigationDrawer = ({ background, listHead }) => {
  const partner = useContext(BooksHooks.Context.Partner);
  const menuItems = useContext(BooksHooks.Context.Menu);
  const createItem = (item) => {
    return <NavigationItem item={item} key={item.tag} />;
  };
  const createCategory = (item) => {
    return (
      <NavigationCategory item={item} createItem={createItem} key={item.tag} />
    );
  };
  return (
    <div id="drawer" data-testid="nav-drawer" className="nav-drawer">
      <ul>
        {/* If list head is present it takes priority if not it checks for a merchant name and if none is present nothing is rendered */}
        {listHead ? (
          <p className="nav-header">{listHead}</p>
        ) : partner.merchantName ? (
          <p className="nav-header">{partner.merchantName}</p>
        ) : null}
        {Array.isArray(menuItems) ? (
          menuItems.map((item) => {
            if (item.isCategory) {
              return createCategory(item);
            } else {
              return createItem(item);
            }
          })
        ) : (
          <li>no menu items provided</li>
        )}
      </ul>
      <style jsx="true" global="true">{`
        .nav-drawer {
          background: var(--${background});
          min-width: 290px;
          max-width: 290px;
          height: auto;
          padding-top: 20px;
          overflow-y: scroll;
          scrollbar-width: none;
          box-shadow: 2px 2px 2px var(--black-opaque-8);
        }

        .nav-drawer::-webkit-scrollbar {
          display: none;
        }

        /* List Styling */

        .nav-drawer ul {
          list-style-type: none;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          -webkit-touch-callout: none; /* iOS Safari */
          -webkit-user-select: none; /* Safari */
          -khtml-user-select: none; /* Konqueror HTML */
          -moz-user-select: none; /* Old versions of Firefox */
          -ms-user-select: none; /* Internet Explorer/Edge */
          user-select: none; /* Non-prefixed version, currently
                                        supported by Chrome, Edge, Opera and Firefox */
        }

        .nav-drawer a:link,
        .nav-drawer a:visited,
        .nav-drawer details summary {
          color: var(--black);
          height: 48px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          width: 274px;
          text-decoration: none;
          font-weight: var(--regular-weight);
          position: relative;
          border-radius: 16px;
          margin-bottom: 4px;
        }

        /* Icon Styling */

        .nav-drawer .pt-icon {
          color: var(--grey);
        }

        .nav-drawer a:link .pt-icon.leading,
        .nav-drawer a:visited .pt-icon.leading,
        .nav-drawer summary .pt-icon.leading {
          margin: 15px;
          width: 18px;
          height: 18px;
        }

        /* Hover Styling */

        .nav-drawer a:hover,
        .nav-drawer summary:hover {
          color: var(--black);
          background: var(--grey-1-opaque);
          -webkit-transition: all 0.2s ease-in-out;
          transition: all width 0.2s ease-in-out;
        }

        .nav-drawer a.active .pt-icon,
        .nav-drawer a:hover .pt-icon,
        .nav-drawer summary:hover .pt-icon {
          color: var(--pt-purple) !important;
        }

        /* Active Styling */

        .nav-drawer a.active:link,
        .nav-drawer a.active:visited {
          color: var(--black);
          background: var(--grey-1-opaque);
        }

        .nav-drawer a.active:link .label,
        .nav-drawer a.active:visited .label {
          font-weight: var(--black-weight);
        }

        /* Header Styling */

        .nav-drawer .nav-header {
          display: flex;
          height: 46px;
          padding: 0px 24px;
          margin-top: -20px !important;
          list-style: none;
          color: var(--black);
          align-items: center;
          text-transform: uppercase;
          text-align: left;
          letter-spacing: 0.45px;
          width: 100%;
        }

        /* Sub-List Styling */
        .nav-drawer .sub-list a {
          margin-left: 40px;
          padding-left: 24px;
          width: 234px;
          height: 40px;
        }

        .nav-drawer .sub-list {
          height: 0px;
          overflow: hidden;
          -webkit-transition: all 0.2s ease-in-out;
          transition: all 0.2s ease-in-out;
        }

        .nav-drawer .sub-list.details-open {
          height: auto;
        }

        /* Badge Styling */

        .nav-drawer .pt-badge {
          height: 32px;
          width: 32px;
          margin-right: 48px;
        }

        .nav-drawer summary .pt-badge,
        .nav-drawer .sub-list .pt-badge {
          margin-right: 0px;
        }
      `}</style>
    </div>
  );
};

NavigationDrawer.propTypes = {
  background: PropTypes.string,
  listHead: PropTypes.string
};

NavigationDrawer.defaultProps = {
  background: "grey-3",
  listHead: ""
};

export default NavigationDrawer;
