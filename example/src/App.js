import React from 'react'
import 'pay-theory-ui/dist/index.css'

import { TestComponent } from 'pay-theory-ui';

export default function App(props) {

  console.log(typeof null);

  return (
    <div id="app">
      <TestComponent text="this is a test"/>
    </div>
  );
}