import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import DeviceInfo from 'react-native-device-info';
import { StyleSheet, View, Text, ScrollView, FlatList, TouchableOpacity, Image, Platform, AsyncStorage, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

//Scale
import { scale } from '../assets/scaling'

class AskScreen extends Component {

    state = {
        index: null,
        mostraAviso: true,
        perguntas: this.props.perguntas,
        pergunta: '',
        iphoneX: false

    }

    componentDidMount() {
        let max = this.state.perguntas.length;
        console.log("TAMANHO DO PERGUNTAS: ", max)
        let index = this.randomInt(0, max)
        console.log("index inicial: " + index)

        this.setState({ pergunta: this.state.perguntas[index], index: index })
        this.setState({ iphoneX: this.isIphoneX() }, function () {
            console.log("É IPHONE X OU SUPERIOR? " + this.state.iphoneX)
        })
    }

    randomInt(min, max) {
        return min + Math.floor((max - min) * Math.random());
    }

    proximo() {
        let max = this.state.perguntas.length - 1;
        let indexProximo = this.randomInt(0, max)
        let indexAtual = this.state.index;
        console.log("max no proximo: ", max)
        console.log("index no atual: ", indexProximo)
        console.log("index anterior: " + indexAtual)
        if (indexProximo == indexAtual) {
            console.log("Caiu no if, index anterior: " + this.state.index + " | proximo atual: " + indexProximo)
            if (indexProximo == max) {
                indexProximo = indexProximo - 1
                this.setState({ pergunta: this.state.perguntas[indexProximo], index: indexProximo })
                console.log("index depois de setado no state: " + indexProximo)
            } else {
                indexProximo = indexProximo + 1
                this.setState({ pergunta: this.state.perguntas[indexProximo], index: indexProximo })
                console.log("index depois de setado no state: " + indexProximo)
            }
        } else {
            this.setState({ pergunta: this.state.perguntas[indexProximo], index: indexProximo })
        }
    }


    isIphoneX() {
        let iphone = DeviceInfo.getModel();
        console.log("QUAL IPHONE É? " + iphone)
        if (iphone == "iPhone X" || iphone == "iPhone XS" || iphone == "iPhone XS Max" || iphone == "iPhone 11 Pro Max" || iphone == "iPhone XR"
            || iphone == "iPhone 11 Pro" || iphone == "iPhone 11") {
            return true;
        } else {
            return false;
        }
    }


    render() {
        return (
            <View style={styles.Container}>
                <View style={{ marginTop: this.state.iphoneX ? scale(50) : scale(30), marginLeft: scale(20) }}>
                    <TouchableOpacity onPress={() => Actions.pop()}>
                        <Icon name="chevron-left" size={30} color='#ff8040' />
                    </TouchableOpacity>
                </View>
                <View style={styles.Container}>
                    <View style={{ marginTop: scale(12), marginLeft: scale(-123) }}>
                        <Image source={require('../assets/img/layout.png')} style={{ width: scale(600), height: scale(550), position: 'absolute', zIndex: 1 }} resizeMode="contain" />
                    </View>
                    <View style={{ height: scale(200), width: scale(300), marginLeft: scale(30), marginTop: scale(200) }}>
                        <Text style={{ textAlign: 'center', fontSize: scale(20), textTransform: 'uppercase' }}>{this.state.pergunta}</Text>
                    </View>
                    <View style={{ marginTop: scale(50), alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => this.proximo()} style={{ position: 'absolute', zIndex: 1, backgroundColor: '#ff8040', borderRadius: scale(20), borderColor: '#000', borderWidth: scale(1.2), height: scale(30), width: scale(250), alignItems: 'center' }}>
                            <Text style={{ marginTop: scale(3), color: '#000', fontFamily: 'Arial', fontWeight: 'bold', fontSize: scale(20) }}> PRÓXIMO </Text>
                        </TouchableOpacity>
                    </View>
                </View >
            </View>

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

export default AskScreen;