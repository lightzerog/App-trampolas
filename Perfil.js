import React, { useState } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, View, Button, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements';
import { SafeAreaView } from "react-native-safe-area-context";

export default function Perfil({ navigation }) {

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flexDirection: 'column', marginLeft: '7%', marginTop: '8%' }}>
                    <Image source={{ uri: "https://cdn.discordapp.com/avatars/213349947062353930/f34c414fbd4198f424c65b32dff60458.webp" }}
                        style={{ width: 65, height: 65, borderRadius: 100 }}
                    />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'column', marginTop: '11%', marginLeft: '6%', width: '80%' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#000' }}>Olá, Donizetti</Text>
                        <Text style={{ color: "#929292" }}>donztt.oliveira@gmail.com</Text>
                    </View>
                </View>
            </View>

            <View style={{ flexDirection: 'row', marginTop: '10%' }}>
                <View style={{ flexDirection: 'column', flex: 1 }}>

                    <View style={{ width: '90%', height: '43%', alignSelf: 'center', borderWidth: 1, borderRadius: 5, borderColor: '#CACACA', flexDirection: 'column' }}>
                        <Badge value="7" badgeStyle={{ backgroundColor: "#0000A5", }} containerStyle={{ position: 'absolute', top: '6%', left: '84%' }} />

                        <Icon
                            name='bell-o'
                            type='font-awesome'
                            color='#0d0d0d'
                            size={20}
                            containerStyle={{position:'absolute', top:'5%', left:'5%'}}
                        />

                        <Text style={{ fontSize: 18, position:'absolute', top:'80%', left:'4%', fontWeight: 'bold', color: "#505050" }}>Notificações</Text>

                    </View>


                </View>
                <View style={{ flexDirection: 'column', flex: 1 }}>
                    <View style={{ width: '90%', height: '43%', alignSelf: 'center', borderWidth: 1, borderRadius: 5, borderColor: '#CACACA', flexDirection: 'row' }}>
                        <Badge value="7" badgeStyle={{ backgroundColor: "#0000A5" }} containerStyle={{ position: 'absolute', top: '-6%', left: '93%' }} />
                        <View style={{ flexDirection: 'row' }}>

                            <Text style={{ fontSize: 18, padding: 5, fontWeight: 'bold', color: "#505050", alignSelf: 'flex-end' }}>Pagamentos</Text>
                        </View>
                    </View>
                </View>
            </View>


            <View style={{ flexDirection: 'row', backgroundColor: '#FFFFFF', position: 'absolute', bottom: 0, width: '100%', height: '8%', borderTopWidth: 0.2, borderTopColor: '#d8d8d8' }}>
                <View style={{ flexDirection: 'column', flex: 1, alignSelf: 'center', alignItems: 'center' }}>
                    <TouchableOpacity activeOpacity={0.5}
                        onPress={() => navigation.navigate('Home')}>
                        <Icon
                            name='home'
                            type='FontAwesome'
                            color='#8b8b8b'
                            size={30}
                        />

                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'column', flex: 1, alignSelf: 'center', alignItems: 'center' }}>
                    <TouchableOpacity activeOpacity={0.5}
                        onPress={() => navigation.navigate('Buscar')}>
                        <Icon
                            name='search'
                            type='FontAwesome'
                            color='#8b8b8b'
                            size={30}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'column', flex: 1, alignSelf: 'center', alignItems: 'center' }}>
                    <TouchableOpacity activeOpacity={0.5}
                        onPress={() => navigation.navigate('Perfil')}>
                        <Icon
                            name='person'
                            type='FontAwesome'
                            color='#0d0d0d'
                            size={30}
                        />

                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF', width: '100%', height: '100%'
    },
    containerCategoriasHorizontal: {
        flexDirection: 'row', height: '10%', backgroundColor: '#FFFFFF'
    },
    containerProfissionaisVertical: {
        flexDirection: 'column', height: '80%', backgroundColor: '#FFFFFF'
    },
    containerCategoriasImagem: {
        width: 70, height: 70, marginRight: 25, marginLeft: 12, borderRadius: 4
    },
    containerCardProfissionais: {

    }
});