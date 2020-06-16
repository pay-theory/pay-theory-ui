import React from 'react'
import 'test/dist/index.css'

import { BrowserRouter as Router } from "react-router-dom";

import {
  GlobalStyle,
  PortalHead,
  NavigationDrawer,
  BooksHooks,
  BodyHead
} from "test";

const generateAdminMenu = () => {
  return [
    {
      to:'/',
      className: "active",
      tag: "manage-districts",
      icon: "school",
      label: "Manage Districts",
      isCategory: false
    },
    {
      to: '/',
      className: "active",
      tag: "manage-partners",
      icon: "building",
      label: "Manage partners",
      isCategory: false
    },
    {
      to: '/',
      className: "inactive",
      tag: "manage-administrators",
      icon: "users-cog",
      label: "Manage Administrators",
      isCategory: false
    }
  ];
};

export default function App(props) {
  const demoDistrict = {
    district: "demo-district",
    districtName: "demo district"
  };
  const demoAccount = {
    display_name: "Demo Account"
  };

  console.log(typeof null);

  return (
    <div id="app">
      <Router>
        <BooksHooks.menu.Provider value={generateAdminMenu()}>
          <BooksHooks.district.Provider value={demoDistrict}>
            <BooksHooks.account.Provider value={demoAccount}>
              <GlobalStyle />
              <BooksHooks.page.Provider
                value={{
                  title: "Playground",
                  subtitle: "Test Playground"
                }}
              >
                <BooksHooks.parent.Provider
                  value={{
                    parent: "Parent Demo",
                    route: "/",
                    forDistrict: "demo-district",
                    districtName: "demo district"
                  }}
                >
                  <div className="spinner-wrapper">
                    <div className="modal-wrapper">
                      <div id="container">
                        <PortalHead logout={() => {}} />
                        <div className="body-container">
                          <NavigationDrawer />
                          <div className="body-content">
                            <BodyHead />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </BooksHooks.parent.Provider>
              </BooksHooks.page.Provider>
            </BooksHooks.account.Provider>
          </BooksHooks.district.Provider>
        </BooksHooks.menu.Provider>
      </Router>
    </div>
  );
}