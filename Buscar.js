import { Keyboard, KeyboardAvoidingView, StyleSheet, Text, View, Button, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Icon, Input } from 'react-native-elements';
import Tweets from './Tweets';
import React, { useState, useEffect } from 'react';

export default function Buscar({ navigation }) {
  const [shouldShow, setshouldShow] = useState(true);
  const [keyboardStatus, setKeyboardStatus] = useState(undefined);
  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus("1"), setshouldShow(false);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus("2"), setshouldShow(true);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);
  return (
    <View style={styles.container}>
      <Input
        focus
        placeholder='o que você procura?'
        leftIcon={
          <Icon
            name='search'
            size={20}
            color='black'
          />
        }
      />
      <View style={styles.containerCategoriasVertical}>
        <Tweets></Tweets>

      </View >
      {
        shouldShow ? (
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
              <TouchableOpacity activeOpacity={0.5}>
                <Icon
                  name='search'
                  type='FontAwesome'
                  color='#0d0d0d'
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
                  color='#8b8b8b'
                  size={30}
                />

              </TouchableOpacity>
            </View>
          </View>
        ) : null
      }

    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF', width: '100%', height: '100%'
  },
  containerCategoriasHorizontal: {
    flexDirection: 'row', height: '15%', backgroundColor: '#FFFFFF'
  },
  containerCategoriasVertical: {
    flexDirection: 'column', height: '79%', backgroundColor: '#FFFFFF'
  },
  containerCategoriasImagem: {
    width: 70, height: 70, marginRight: 12, marginLeft: 12, borderRadius: 4
  }
});