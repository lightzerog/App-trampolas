import React from "react";
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from "react-native";
import { Icon } from 'react-native-elements';
import { Button, ButtonGroup, withTheme } from 'react-native-elements';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default function Tweets() {
    return (
        <TouchableOpacity>
        <View style={styles.card}>

            <View style={{ flexDirection: "row", }}>
                <View style={{ flexDirection: "column" }}>
                    <Image source={{ uri: "https://cdn.discordapp.com/avatars/213349947062353930/f34c414fbd4198f424c65b32dff60458.webp" }} style={{ width: 50, height: 50, borderRadius: 100, marginTop: 10 }} />
                </View>

                <View style={styles.tweet}>
                    <Text style={styles.cardTitle}>Donizetti Oliveira</Text>

                    <Text style={styles.conteudo}>Trabalho com instalações elétricas e manutenção de equipamentos elétricos!</Text>
                </View>


            </View>

            <View style={{ flexDirection: "row", paddingLeft: 65, }}>
                <Button
                    title="4.7"
                    icon={{
                        name: 'star',
                        type: 'FontAwesome5',
                        size: 16,
                        color: '#0000A5',
                    }}
                    iconLeft
                    iconContainerStyle={{ marginLeft: -5, marginRight: -2, marginTop: -6, marginBottom: -6 }}
                    titleStyle={{ fontSize: 12, fontWeight: 'normal', color: '#0000A5', paddingLeft:'2%' }}
                    buttonStyle={{ backgroundColor: '#FFFFFF' }}
                    containerStyle={{ marginLeft: -10, marginTop:0  }}
                />
          
                
            </View>

        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderColor: '#e1e1e1',
        paddingLeft:25,
        paddingRight:25,
        marginTop:8,
        marginBottom:8,
        width: '100%',
        
    },
    cardTitle: {
        color: '#0000A5',
        fontSize: 16,
        fontWeight: 'bold',
        paddingBottom: 3,
        paddingTop: 1,
    },
    cardSubtitle: {
        color: '#9b9b9b',
        fontSize: 14,
    },
    conteudo: {
        fontSize: 13,
        paddingBottom: 0,
        color: '#303030'
    },
    tweet: {
        paddingLeft: 17,
        flex: 1,
    }
});