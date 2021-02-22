import React from 'react'
import { HashRouter, Route } from "react-router-dom";
import {render} from 'react-dom'
import 'y-code-view/lib/index.css';
import './index.scss';
import './common.scss';
import App from "./App";
import Babel from 'ybabel';

window.Babel = Babel;

render(<HashRouter>
    <Route component={App}/>
</HashRouter>, document.querySelector('#demo'));
