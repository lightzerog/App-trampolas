import { KeyboardAvoidingView, StyleSheet, Text, View, Button, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Icon, Input } from 'react-native-elements';
import * as React from 'react';
import Tweets from './Tweets';
import carpinteiro from './assets/icone-profissao/carpinteiro.png';
import artista from './assets/icone-profissao/artista.png';
import limpeza from './assets/icone-profissao/pessoal-de-limpeza.png';
import eletricista from './assets/icone-profissao/eletricista.png';
import projetista from './assets/icone-profissao/projetista.png';
import advogado from './assets/icone-profissao/advogado.png';
import medico from './assets/icone-profissao/medico.png';
import trabalhador from './assets/icone-profissao/trabalhador.png';


export default function Home({ navigation }) {
  return (

    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: '2%', marginBottom: '3%', color: '#000', alignSelf: 'center' }}>Categorias</Text>

        <View style={{ flexDirection: 'row', borderBottomWidth: 6, borderTopLeftRadius: 20, borderBottomLeftRadius: 20, borderTopRightRadius: 20, borderBottomRightRadius: 20, borderColor: '#000', width: '8%', alignSelf: 'center', marginBottom: '2%' }}></View>

        <View style={styles.containerCategoriasHorizontal}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

            <TouchableOpacity activeOpacity={0.5} style={styles.containerCardProfissionais}>
              <View style={styles.containerCardProfissionais}>
                <Image source={carpinteiro}
                  style={styles.containerCategoriasImagem} />
                <Text style={styles.containerTextoCardProfissionais}>Civil</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.5} style={styles.containerCardProfissionais}>
              <View style={styles.containerCardProfissionais}>
                <Image source={eletricista}
                  style={styles.containerCategoriasImagem} />
                <Text style={styles.containerTextoCardProfissionais}>Elétrica</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.5} style={styles.containerCardProfissionais}>
              <View style={styles.containerCardProfissionais}>
                <Image source={advogado}
                  style={styles.containerCategoriasImagem} />
                <Text style={styles.containerTextoCardProfissionais}>Advocacia</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.5} style={styles.containerCardProfissionais}>
              <View style={styles.containerCardProfissionais}>
                <Image source={medico}
                  style={styles.containerCategoriasImagem} />
                <Text style={styles.containerTextoCardProfissionais}>Saúde</Text>
              </View >
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.5} style={styles.containerCardProfissionais}>
              <View style={styles.containerCardProfissionais}>
                <Image source={limpeza}
                  style={styles.containerCategoriasImagem} />
                <Text style={styles.containerTextoCardProfissionais}>Limpeza</Text>
              </View >
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.5} style={styles.containerCardProfissionais}>
              <View style={styles.containerCardProfissionais}>
                <Image source={trabalhador}
                  style={styles.containerCategoriasImagem} />
                <Text style={styles.containerTextoCardProfissionais}>Engenharia</Text>
              </View >
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.5} style={styles.containerCardProfissionais}>
              <View style={styles.containerCardProfissionais}>
                <Image source={projetista}
                  style={styles.containerCategoriasImagem} />
                <Text style={styles.containerTextoCardProfissionais}>Tecnologia</Text>
              </View >
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.5} style={styles.containerCardProfissionais}>
              <View style={styles.containerCardProfissionais}>
                <Image source={artista}
                  style={styles.containerCategoriasImagem} />
                <Text style={styles.containerTextoCardProfissionais}>Arte</Text>
              </View >
            </TouchableOpacity>

          </ScrollView >
        </View >

        <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: '2%', marginBottom: '3%', color: '#000', alignSelf: 'center' }}>Profissionais disponíveis</Text>

        <View style={{ flexDirection: 'row', borderBottomWidth: 6, borderTopLeftRadius: 20, borderBottomLeftRadius: 20, borderTopRightRadius: 20, borderBottomRightRadius: 20, borderColor: '#000', width: '8%', alignSelf: 'center', marginBottom: '2%' }}></View>

        <View style={styles.containerProfissionaisVertical}>

          <Tweets></Tweets>
          <Tweets></Tweets>
          <Tweets></Tweets>
          <Tweets></Tweets>
          <Tweets></Tweets>
          <Tweets></Tweets>
          <Tweets></Tweets>
          <Tweets></Tweets>
          <Tweets></Tweets>

        </View>
      </ScrollView>
      <View style={{ flexDirection: 'row', backgroundColor: '#FFFFFF', position: 'absolute', bottom: 0, width: '100%', height: '8%', borderTopWidth: 0.5, borderTopColor: '#d8d8d8' }}>
        <View style={{ flexDirection: 'column', flex: 1, alignSelf: 'center', alignItems: 'center' }}>
          <TouchableOpacity activeOpacity={0.5}>
            <Icon
              name='home'
              type='FontAwesome'
              color='#0d0d0d'
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
              color='#8b8b8b'
              size={30}
            />

          </TouchableOpacity>
        </View>
      </View>
    </View >

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
    width: 70, height: 70
  },
  containerCardProfissionais: {
    alignSelf: 'center', flexDirection: 'column', backgroundColor: "#E9E9FF", margin: 10, borderRadius: 5
  },
  containerTextoCardProfissionais: {
    alignSelf: 'center', fontSize: 12, fontWeight: 'bold', marginTop: 2, color: '#373737'
  },
});