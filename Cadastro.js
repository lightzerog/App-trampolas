import { TextInput, StatusBar, KeyboardAvoidingView, StyleSheet, Text, View, Button, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import DatePicker from 'react-native-date-picker';

import {
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
} from '@expo-google-fonts/roboto';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Cadastro({ navigation }) {
    

    let [fontsLoaded] = useFonts({
        Roboto_300Light,
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold
    });

    if (!fontsLoaded) {
        return <AppLoading />
    }

    return (
        <SafeAreaView style={styles.containerMain}>
            <StatusBar
                barStyle='light-content'
                backgroundColor="#222222"
                hidden={false}
            />
            <View style={styles.logoAnimadoLogin}>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <Text style={styles.logoTextoSmar}>smar</Text>
                    <Text style={styles.logoTextoThings}>things</Text>
                </View>
                <Text style={styles.logoTextoCadastrese}>cadastre-se aqui</Text>
            </View>

            <Text style={styles.textoLogin}>preencha tudo e pronto, é rapidinho</Text>

            <TextInput style={styles.formEmail}
                placeholder="email"
            />
            <TextInput style={styles.formSenha}
                placeholder="senha"
            />



            <TouchableOpacity style={styles.botaoLogin}>
                <Text style={styles.BotaoLoginTexto}>fazer login</Text>
            </TouchableOpacity>

            <View style={styles.textoCadastroView}>
                <Text style={styles.textoCadastro}>ainda não tem conta?</Text>
                <TouchableOpacity><Text style={styles.textoCadastroBold}>crie agora.</Text></TouchableOpacity>
            </View>

            <TouchableOpacity><Text style={styles.textoEsqueceuSenhaBold}>esqueceu a senha?</Text></TouchableOpacity>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    containerMain: {
        backgroundColor: '#ffffff', flex: 1,
    },
    logoAnimadoLogin: {
        alignItems: 'center', backgroundColor: '#222222', height: '15%', borderBottomLeftRadius: 20, borderBottomRightRadius: 20, shadowColor: 'black'
    },
    textoChamativoApp: {
        color: '#7e32b5', fontSize: 16, fontFamily: 'Roboto_300Light', marginTop: '15%'
    },
    textoChamativo2App: {
        color: '#ff136a', fontSize: 16, fontFamily: 'Roboto_300Light',
    },
    logoTextoSmar: {
        color: '#ff136a', fontSize: 26, fontFamily: 'Roboto_400Regular',
    },
    logoTextoThings: {
        color: '#ff136a', fontSize: 26, fontFamily: 'Roboto_700Bold',
    },
    logoTextoCadastrese: {
        color: '#ffffff', fontSize: 18, fontFamily: 'Roboto_700Bold', marginTop: 20
    },
    logoImagem: {
        width: 160, height: 160, marginTop: '5%'
    },
    formEmail: {
        alignSelf: 'center', flexDirection: 'row', backgroundColor: "#f3edf7", borderRadius: 3, borderColor: '#ff136a', borderWidth: 4, width: '80%', height: '6%', marginTop: '5%', paddingLeft: 10, color: '#373737'
    },
    formSenha: {
        alignSelf: 'center', flexDirection: 'row', backgroundColor: "#f3edf7", borderRadius: 3, borderColor: '#ff136a', borderWidth: 4, width: '80%', height: '6%', marginTop: '5%', paddingLeft: 10, color: '#373737'
    },
    textoLogin: {
        alignSelf: 'center', fontSize: 18, fontWeight: 'bold', marginTop: 2, color: '#373737', marginTop: '15%'
    },
    textoCadastroView: {
        flexDirection: 'row', alignSelf: 'center', marginTop: 10
    },
    textoCadastro: {
        fontSize: 14, fontWeight: 'normal', color: '#373737',
    },
    textoCadastroBold: {
        fontSize: 16, fontWeight: 'bold', color: '#373737', marginTop: -2.5, marginLeft: 5
    },
    textoEsqueceuSenhaBold: {
        alignSelf: 'center', fontSize: 14, fontWeight: 'bold', color: '#373737', marginTop: 5
    },
    botaoLogin: {
        alignSelf: 'center', backgroundColor: '#ff136a', borderRadius: 1, borderColor: '#ff136a', width: '45%', height: '6%', marginTop: 25
    },
    BotaoLoginTexto: {
        alignSelf: 'center', fontSize: 20, fontWeight: 'bold', color: '#ffffff', paddingTop: 10
    },
});