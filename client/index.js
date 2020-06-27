import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { render } from 'react-dom';
import App from './component/App.jsx';
// import Webpack from "../webpack.config";

render(<Router><App /></Router>, document.getElementById('root'));
