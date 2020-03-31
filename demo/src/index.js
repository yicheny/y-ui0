import React from 'react'
import { HashRouter, Route } from "react-router-dom";
import {render} from 'react-dom'
import App from "./App";
import './index.scss';
import './common.scss';

render(<HashRouter>
    <Route component={App}/>
</HashRouter>, document.querySelector('#demo'));
