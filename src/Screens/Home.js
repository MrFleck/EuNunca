import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import DeviceInfo from 'react-native-device-info';
import { StyleSheet, View, Text, ScrollView, FlatList, TouchableOpacity, Image, Platform, Dimensions, AsyncStorage, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const windowHeight = Dimensions.get('window').height;
const lugarDoTexto = windowHeight - 100

//Scale
import { scale } from '../assets/scaling'

class Home extends Component {
    state = {
        mostraAviso: false,
        iphoneX: false
    }

    componentDidMount() {
        this.setState({ iphoneX: this.isIphoneX() }, function () {
            console.log("É IPHONE X OU SUPERIOR? " + this.state.iphoneX)
        })
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

    isIphoneX() {
        let iphone = DeviceInfo.getModel();
        console.log("QUAL IPHONE É? " + iphone)
        if (iphone == "iPhone X" || iphone == "iPhone XS" || iphone == "iPhone XS Max" || iphone == "iPhone 11 Pro Max" || iphone == "iPhone XR" || iphone == "iPhone 11 Pro" || iphone == "iPhone 11") {
            return true
        } else {
            return false
        }
    }



    render() {
        return (
            <View style={styles.Container}>
                {this.state.mostraAviso &&
                    <View style={{ borderRadius: scale(20), width: scale(300), height: scale(400), position: 'absolute', zIndex: 1, backgroundColor: '#ff8040', opacity: 0.97, marginTop: this.state.iphoneX ? scale(150) : scale(110), marginLeft: scale(25) }}>
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
                    <View style={{ marginTop: this.state.iphoneX ? scale(90) : scale(40) }}>
                        <TouchableOpacity onPress={() => Actions.SelectLevel()} style={{ backgroundColor: '#ff8040', borderRadius: scale(20), borderColor: '#000', borderWidth: scale(1.2), height: scale(30), width: scale(250), alignItems: 'center' }}>
                            <Text style={{ marginTop: scale(3), color: '#000', fontFamily: 'Arial', fontWeight: 'bold', fontSize: scale(20) }}> JOGAR </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: this.state.iphoneX ? scale(220) : scale(160) }}>
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