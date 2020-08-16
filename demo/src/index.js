import React from 'react'
import { HashRouter, Route } from "react-router-dom";
import {render} from 'react-dom'
import 'y-code-view/lib/index.css';
import './index.scss';
import './common.scss';
import * as Babel from './utils/babel.min.js';
import App from "./App";

window.Babel = Babel;

render(<HashRouter>
    <Route component={App}/>
</HashRouter>, document.querySelector('#demo'));
