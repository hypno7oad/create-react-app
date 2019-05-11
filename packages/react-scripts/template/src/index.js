import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import {Users} from './mocks'
import {App} from '@hypno7oad/platform'
import {DefaultContent} from '@hypno7oad/ui'
import * as clientCustomizations from './Suvoda'

const useSelectedUserState = () => useState(Users[0])

const appConfiguration = {
  Users,
  clientCustomizations,
  useSelectedUserState,
  headerUserBoxWidth: 200,
  ContentComponent: DefaultContent,
  // debug: true
}

ReactDOM.render(<App {...appConfiguration} />, document.getElementById('root'));