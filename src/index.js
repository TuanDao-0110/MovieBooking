import React from "react";
import ReactDOM from "react-dom";
// import "antd/dist/antd.css";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from './redux/type/configStore'
import "antd/dist/antd.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DOMAIN } from "./utilities/Setting/config";
import * as signalR from '@aspnet/signalr'
import reportWebVitals from './reportWebVitals';
import './i18n';
import 'tw-elements';

// this make sure server always be linked to this page
export const connection = new signalR.HubConnectionBuilder().withUrl("http://movieapi.cyberlearn.vn/DatVeHub").configureLogging(signalR.LogLevel.Information).build();


ReactDOM.render(
    <Provider store={store}>
      <App />

    </Provider>
    ,
    document.getElementById('root')
  );

connection.start().then(() => {
 
 
}).catch(errors => {
  console.log(errors);
})



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();