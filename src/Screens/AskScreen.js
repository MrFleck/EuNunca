import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, FlatList, TouchableOpacity, Image, Platform, AsyncStorage, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

//Scale
import { scale } from '../assets/scaling'

class AskScreen extends Component {

    state = {
        index: null,
        mostraAviso: true,
        perguntas: [
            pergunta0 = "disse adeus.",
            pergunta1 = "disse que amo alguém sem querer ou sem sentir.",
            pergunta2 = "dormi no cinema.",
            pergunta3 = "usei um alimento que passou da validade e depois todo mundo ficou com caganeira.",
            pergunta4 = "engoli algo que não era de comer.",
            pergunta5 = "entendi uma piada e ri de mentira.",
            pergunta6 = "enviei fotos das minhas fezes para alguém.",
            pergunta7 = "espirrei catarro em público.",
            pergunta8 = "estive acordado por dois dias seguidos."
        ],
        pergunta: ''
    }

    componentDidMount() {
        let max = this.state.perguntas.length;
        console.log("TAMANHO DO PERGUNTAS: ", max)
        let index = this.randomInt(0, max)

        this.setState({ pergunta: this.state.perguntas[index], index: index })
    }

    randomInt(min, max) {
        return min + Math.floor((max - min) * Math.random());
    }

    proximo() {
        let max = this.state.perguntas.length;
        let indexPrimo = this.randomInt(0, max)
        console.log("max no proximo: ", max)
        console.log("index no proximo: ", indexPrimo)
        if (indexPrimo == this.state.index) {
            console.log("Caiu no if do index == index")
            if (indexPrimo == max) {
                indexPrimo = indexPrimo - 1
                this.setState({ pergunta: this.state.perguntas[indexPrimo] })
            } else {
                indexPrimo = indexPrimo + 1
                this.setState({ pergunta: this.state.perguntas[indexPrimo] })
            }
        } else {
            this.setState({ pergunta: this.state.perguntas[indexPrimo] })
        }
    }


    render() {
        return (
            <View style={styles.Container}>
                <View style={{ marginTop: scale(50), marginLeft: scale(-123) }}>
                    <Image source={require('../assets/img/layout.png')} style={{ width: scale(600), height: scale(550), position: 'absolute', zIndex: 1 }} resizeMode="contain" />
                </View>
                <View style={{ height: scale(200), width: scale(300), marginLeft: scale(30), marginTop: scale(200) }}>
                    <Text style={{ textAlign: 'center', fontSize: scale(20) }}>{this.state.pergunta}</Text>
                </View>
                <View style={{ marginTop: scale(50), alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => this.proximo()} style={{ backgroundColor: '#ff8040', borderRadius: scale(20), borderColor: '#000', borderWidth: scale(1.2), height: scale(30), width: scale(250), alignItems: 'center' }}>
                        <Text style={{ marginTop: scale(3), color: '#000', fontFamily: 'Arial', fontWeight: 'bold', fontSize: scale(20) }}> PROXIMO </Text>
                    </TouchableOpacity>
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

export default AskScreen;