import React, { useState } from "react";
import { Alert, KeyboardAvoidingView, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Modal, Pressable } from 'react-native';
import { Avatar, Badge, Icon, withBadge, Button } from 'react-native-elements';
import { SafeAreaView } from "react-native-safe-area-context";
import Octicons from "react-native-vector-icons/Octicons";
import Ionicons from "react-native-vector-icons/Ionicons"

export default function Login({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={{ flexDirection: 'row', position: 'absolute', alignSelf: 'center', top: '35%', width: '60%', height: '20%', backgroundColor: 'white', borderRadius: 6, shadowColor: '#000', shadowOffset: { width: 0, height: 3, }, shadowOpacity: 0.27, shadowRadius: 4.65, elevation: 6 }}>
                        <View style={{ flex: 1 }}>

                            <Text style={{ fontSize: 18, fontWeight: 'bold', alignSelf: 'center', top: 20 }}>Deseja sair da conta?</Text>

                            <View style={{ flexDirection: 'row', bottom: -70 }}>
                                <View style={{ flexDirection: 'column', width:70, left:22 }}>
                                    <Pressable
                                        style={{ flexDirection: 'row', backgroundColor: 'red', borderRadius:3 }}
                                        onPress={() => setModalVisible(!modalVisible)}
                                    >
                                        <Ionicons name="close" size={25} color='white' style={{margin:4}}></Ionicons>
                                        <Text style={{ alignSelf: 'center', color:'white' }}>não</Text>
                                    </Pressable>
                                </View>
                                <View style={{ flexDirection: 'column', width:70, position:'absolute', right:22 }}>
                                <Pressable
                                        style={{ flexDirection: 'row', backgroundColor: 'green', borderRadius:3 }}
                                        onPress={() => setModalVisible(!modalVisible)}
                                    >
                                        <Ionicons name="checkmark" size={25} color='white' style={{margin:4}}></Ionicons>
                                        <Text style={{ alignSelf: 'center', color:'white' }}>sim</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>

                <View style={{ flexDirection: 'column', marginLeft: '7%', marginTop: '7%' }}>
                    <Image source={{ uri: "https://cdn.discordapp.com/avatars/213349947062353930/f34c414fbd4198f424c65b32dff60458.webp" }}
                        style={{ width: 65, height: 65, borderRadius: 100 }}
                    />
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'column', marginTop: '11%', marginLeft: '6%', width: '80%' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#000' }}>Olá, Donizetti</Text>
                        <Text style={{ color: "#929292" }}>donztt.oliveira@gmail.com</Text>
                        <Button
                            title="sair"
                            titleStyle={{ fontSize: 14, fontWeight: 'normal', color: '#0000A5', borderBottomWidth: 1, borderBottomColor: '#0000A5' }}
                            buttonStyle={{ backgroundColor: '#FFFFFF' }}
                            containerStyle={{ flexDirection: 'row-reverse' }}
                            onPress={() => setModalVisible(true)}
                        />
                    </View>
                </View>
            </View>

            <View style={{ flexDirection: 'row', marginTop: '12%' }}>
                <View style={{ flex: 1 }}>

                    <View style={{ width: '90%', height: '43%', alignSelf: 'center', borderWidth: 1, borderRadius: 5, borderColor: '#CACACA', flexDirection: 'column' }}>
                        <Badge value="7" badgeStyle={{ backgroundColor: "#0000A5", }} containerStyle={{ position: 'absolute', top: '6%', left: '84%' }} />

                        <Icon
                            name='bell-o'
                            type='font-awesome'
                            color='#0d0d0d'
                            size={20}
                            containerStyle={{ position: 'absolute', top: '5%', left: '5%' }}
                        />

                        <Text style={{ fontSize: 20, padding: 5, fontWeight: 'bold', color: "#505050", position: 'absolute', top: '62%' }}>Notificações</Text>
                        <Text style={{ fontSize: 11, padding: 5, fontWeight: 'normal', color: "#505050", position: 'absolute', top: '82%' }}>7 não lidas</Text>

                    </View>


                </View>
                <View style={{ flex: 1 }}>
                    <View style={{ width: '90%', height: '43%', alignSelf: 'center', borderWidth: 1, borderRadius: 5, borderColor: '#CACACA', flexDirection: 'row' }}>
                        <Badge value="2" badgeStyle={{ backgroundColor: "#0000A5" }} containerStyle={{ position: 'absolute', top: '6%', left: '84%' }} />

                        <Icon
                            name='credit-card'
                            type='font-awesome'
                            color='#0d0d0d'
                            size={20}
                            containerStyle={{ position: 'absolute', top: '5%', left: '5%' }}
                        />

                        <Text style={{ fontSize: 20, padding: 5, fontWeight: 'bold', color: "#505050", position: 'absolute', top: '62%' }}>Pagamentos</Text>
                        <Text style={{ fontSize: 11, padding: 5, fontWeight: 'normal', color: "#505050", position: 'absolute', top: '82%' }}>Saldo, extrato e mais</Text>
                    </View>
                </View>
            </View>

            <View style={{ flexDirection: 'row' }}>
                <Button
                    title="Informações pessoais"
                    icon={{
                        name: 'user-o',
                        type: 'font-awesome',
                        size: 27,
                        color: '#0000A5',
                    }}
                    iconLeft
                    iconContainerStyle={{ marginRight: '6%' }}
                    titleStyle={{ fontSize: 20, fontWeight: 'normal', color: '#0000A5' }}
                    buttonStyle={{ backgroundColor: '#FFFFFF' }}
                    containerStyle={{}}
                />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Button
                    title="Meus serviços"
                    icon={{
                        name: 'wrench',
                        type: 'font-awesome',
                        size: 27,
                        color: '#0000A5',
                    }}
                    iconLeft
                    iconContainerStyle={{ marginRight: '6%' }}
                    titleStyle={{ fontSize: 20, fontWeight: 'normal', color: '#0000A5' }}
                    buttonStyle={{ backgroundColor: '#FFFFFF' }}
                    containerStyle={{ marginTop: '2%' }}
                />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Button
                    title="Avaliações"
                    icon={{
                        name: 'thumbs-o-up',
                        type: 'font-awesome',
                        size: 27,
                        color: '#0000A5',
                    }}
                    iconLeft
                    iconContainerStyle={{ marginRight: '6%' }}
                    titleStyle={{ fontSize: 20, fontWeight: 'normal', color: '#0000A5' }}
                    buttonStyle={{ backgroundColor: '#FFFFFF' }}
                    containerStyle={{ marginTop: '2%' }}
                />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Button
                    title="Configurações"
                    icon={{
                        name: 'cog',
                        type: 'font-awesome',
                        size: 27,
                        color: '#0000A5',
                    }}
                    iconLeft
                    iconContainerStyle={{ marginRight: '6%' }}
                    titleStyle={{ fontSize: 20, fontWeight: 'normal', color: '#0000A5' }}
                    buttonStyle={{ backgroundColor: '#FFFFFF' }}
                    containerStyle={{ marginTop: '2%' }}
                />
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