import React, { Component } from 'react';
import { Router, Stack, Scene, Actions } from 'react-native-router-flux';

//Screens 
import Home from './Screens/Home';
import AskScreen from './Screens/AskScreen';

class routes extends Component {
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key='home' initial={true} hideNavBar={true} component={Home} />
                    <Scene key='askScreen' hideNavBar={true} component={AskScreen} />
                </Scene>
            </Router>
        )
    }
}

export default routes;