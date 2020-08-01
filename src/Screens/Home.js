import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, FlatList, TouchableOpacity, Image, Platform, AsyncStorage } from 'react-native';
import { scale } from '../assets/scaling'

class Home extends Component {

    render() {
        return (
            <View style={styles.Container}>
                <View style={{ alignItems: 'center' }}>
                    <View style={{ marginTop: scale(250) }}>
                        <Text style={{ color: '#000' }}> LOGO </Text>
                    </View>
                    <View style={{ marginTop: scale(50) }}>
                        <TouchableOpacity onPress={() => { }} style={{ backgroundColor: '#ff8040', borderRadius: scale(20), borderColor: '#000', borderWidth: scale(1.2), height: scale(30), width: scale(250), alignItems: 'center' }}>
                            <Text style={{ color: '#000', fontFamily: 'Arial-Black', fontWeight: 'bold', fontSize: scale(20) }}> JOGAR </Text>
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
    }
});

export default Home;