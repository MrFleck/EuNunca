import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, View, Text, ScrollView, FlatList, TouchableOpacity, Image, Platform, AsyncStorage, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

//Scale
import { scale } from '../assets/scaling'

class Home extends Component {
    state = {
        mostraAviso: false,
    }


    abreAviso() {
        this.setState({ mostraAviso: true }, function () {
            console.log(this.state.mostraAviso)
        })
    }

    fechaAviso() {
        this.setState({ mostraAviso: false }, function () {
            console.log(this.state.mostraAviso)
        })
    }



    render() {
        return (
            <View style={styles.Container}>
                {this.state.mostraAviso &&
                    <View style={{ borderRadius: scale(20), width: scale(300), height: scale(400), position: 'absolute', zIndex: 1, backgroundColor: '#ff8040', opacity: 0.97, marginTop: scale(150), marginLeft: scale(25) }}>
                        <TouchableOpacity onPress={() => this.fechaAviso()} style={{ marginTop: scale(15), marginLeft: scale(250), backgroundColor: '#000', borderRadius: scale(100), width: scale(26), alignItems: 'center' }}>
                            <Icon name="times-circle" size={30} color='#ff8040' />
                        </TouchableOpacity>
                        <View style={{ padding: scale(50), marginTop: scale(10) }}>
                            <Text style={{ color: '#000', fontWeight: 'bold' }}>INFOS DFBSDHFDJSFBDJSHFBJSDHFBDSJHFBJDSHFBJDSHFBDJSHFBIEU DHSHBFDHFBDJHFBDSJHFBDHJSFBDHSJFBHDSB KFMLDKSFNKDJFNDKSJFNDKSJFNKDJFNKSJDNF</Text>
                        </View>
                    </View>

                }
                <View style={{ marginTop: scale(50), marginLeft: scale(20) }}>
                    <TouchableOpacity onPress={() => this.abreAviso()} style={{ backgroundColor: '#000', borderRadius: scale(50), width: scale(30), alignItems: 'center' }}>
                        <Icon name="info-circle" size={36} color='#ff8040' />
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <View style={{ marginTop: scale(90) }}>
                        <Image source={require('../assets/img/Logo.png')} style={{ width: scale(180), height: scale(180) }} resizeMode="contain" />
                    </View>
                    <View style={{ marginTop: scale(90) }}>
                        <TouchableOpacity onPress={() => Actions.askScreen()} style={{ backgroundColor: '#ff8040', borderRadius: scale(20), borderColor: '#000', borderWidth: scale(1.2), height: scale(30), width: scale(250), alignItems: 'center' }}>
                            <Text style={{ marginTop: scale(3), color: '#000', fontFamily: 'Arial', fontWeight: 'bold', fontSize: scale(20) }}> JOGAR </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: scale(240) }}>
                        <Text style={{ textAlign: 'center', width: scale(80), color: '#000', fontFamily: 'Arial', fontWeight: 'bold', }}> KTZ STUDIO V. 0.1</Text>
                    </View>
                </View>
            </View >

        );
    }
}


const styles = StyleSheet.create({
    Container: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#c3c3c3',
        position: 'relative',
        zIndex: 0
    }
});

export default Home;