import React from 'react'
import 'pay-theory-ui/dist/index.css'

import { PortalHead, NavigationDrawer, GlobalStyle, BooksHooks }from 'pay-theory-ui';
import { BrowserRouter as Router } from 'react-router-dom'

export default function App(props) {

  const generateDocumentationMenu = () => {
    return {
      listHead: "Documentation Test",
      menu: [
        {
          className: "active",
          tag: "install",
          label: "Install",
          isCategory: true,
          subContent: [
            {
              to: "import-install-npm",
              className: "active",
              tag: 'import-install-npm',
              label: "Install NPM"
            }
          ]
        },
        {
          className: "active",
          tag: "usage",
          label: "Usage",
          isCategory: true,
          subContent: [
            {
              to: 'usage-import',
              className: "active",
              tag: 'usage-import',
              label: "Import"
            },
            {
              to: 'usage-configure',
              className: "active",
              tag: 'usage-configure',
              label: "Configure"
            },
            {
              to: 'usage-process-payments',
              className: "active",
              tag: 'usage-process-payments',
              label: "Process payments"
            }
          ]
        }
      ]
    };
  };

  const docsStyle = {
    background: '#F4F4F4',
    hoverBackground: '#E8ECEF',
    fontColor: '#A3B3C4',
    hoverFontColor: '#6B7887'
}

  const paged = {
    title: "Pay Theory UI",
    subtitle: "UI Playground"
  };

  const pageMenu = generateDocumentationMenu();

  return (
    <div id="app">
      <Router>
     <BooksHooks.context.menu.Provider value={pageMenu.menu}>
                <GlobalStyle />
                <BooksHooks.context.page.Provider value={paged}>
                    <div id='container'>
                        <PortalHead />
                        <div className='body-container'>
                            <NavigationDrawer
                                style={docsStyle}
                                listHead={pageMenu.listHead}
                            />
                            <div className='body-content'>{props.children}</div>
                        </div>
                    </div>
                </BooksHooks.context.page.Provider>
        </BooksHooks.context.menu.Provider>
        </Router>
    </div>
  );
}