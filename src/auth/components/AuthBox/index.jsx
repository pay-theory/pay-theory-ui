//node modules
import React, { Component } from 'react'


//ui root
import AuthBG from '../AuthBG'
import FormHeader from '../FormHeader'
import LogoHeader from '../LogoHeader'


const AuthBox = props => (
  <AuthBG>
    <div className="auth">
      <LogoHeader />
      <div className="auth-outer">
        <FormHeader text={props.formHead} />
        <div className="grey centered full-bottom">
          {props.formText}
        </div>
        {props.children}
      </div>
      <br />
    </div>
  </AuthBG>
)



export default AuthBox
