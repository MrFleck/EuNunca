import React from "react";
import Routes from "./routes";
import "./config/StatusBarConfig";
import { LogBox } from "react-native";

const App = () => (
    <Routes />
)
// console.disableYellowBox = true;
LogBox.ignoreAllLogs(true);
export default App;