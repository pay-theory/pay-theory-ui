import React from 'react'
import 'pay-theory-ui/dist/index.css'

import { PortalHead, NavigationDrawer, GlobalStyle, BooksHooks, Checkbox }from 'pay-theory-ui';
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
  

 

  const paged = {
    title: "Pay Theory UI",
    subtitle: "UI Playground"
  };

  const parent = { parent: 'test-parent', route: '/test' }

  const tabArray = [
    {
      id: "test",
      action: () => {},
      active: "active-tab",
      label: "test"
    },
    {
      id: "test2",
      action: () => {},
      active: "",
      label: "test 2"
    }
  ]

  

  const pageMenu = generateDocumentationMenu();

  return (
    <div id="app">
      <Router>
        <BooksHooks.context.parent.Provider value={parent}>
     <BooksHooks.context.menu.Provider value={pageMenu.menu}>
                <GlobalStyle />
                <BooksHooks.context.page.Provider value={paged}>
                    <div id='container'>
                        <PortalHead />
                        <div className='body-container'>
                            <NavigationDrawer
                                listHead={pageMenu.listHead}
                            />
                            <div className='body-content'>
                              <h2>Test</h2>
                            </div>
                        </div>
                    </div>
                </BooksHooks.context.page.Provider>
        </BooksHooks.context.menu.Provider>
        </BooksHooks.context.parent.Provider>
        </Router>
    </div>
  );
}