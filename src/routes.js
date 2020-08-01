import React, { Component } from 'react';
import { Router, Stack, Scene, Actions } from 'react-native-router-flux';

//Screens 
import Home from './Screens/Home';

class routes extends Component {
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key='home' hideNavBar={true} component={Home}/>
                </Scene>
            </Router>
        )
    }
}

export default routes;