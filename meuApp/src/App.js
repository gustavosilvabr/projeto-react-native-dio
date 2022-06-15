/** @format */

import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Pressable,
  Linking,
} from "react-native";
const colorButton = '#139508';
const colorGithub = "#288689";
const imageProfileGithub ="https://avatars.githubusercontent.com/u/79516858?v=4";

const urlGithub = 'https://github.com/gustavosilvabr';

const App = () => {
  const apertouBotao = async () => {
    console.log('Verificando link');
    const res = await Linking.canOpenURL(urlGithub);
    console.log('Link aprovado');
    if (res) {
      await Linking.openURL(urlGithub);
    }
  }
  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={"red"} barStyle="light-content" />
      <View style={style.content}>
        <Image style={style.avatar} source={{ uri: imageProfileGithub }} />
        <Text style={[style.defaultText, style.nick]}>Gustavo pereira</Text>
        <Text style={[style.defaultText, style.description]}>
          Atualmente Sou estudante de graduação em Analise em desenvolvimento de
          sistemas no SENAC . Já tenho experiencias em algumas linguagens de
          programação .
        </Text>
        <Pressable onPress={apertouBotao}>
          <View>
            <Text style={style.button}>eu sou lindo</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: colorGithub,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    alignItems: "center",
    padding: 50,
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 300,
    borderColor: "white",
    borderWidth: 3,
    marginBottom: 50,
  },
  defaultText: {
    color: "white",
  },
  nick: {
    fontSize: 40,
  },
  description: {
    fontSize: 17,
    fontWeight: "700",
    color: "red",
  },
  button: {
    color: 'white',
    padding: 20,
    margin: 20,
    backgroundColor:colorButton,
    borderRadius: 10,
    fontWeight:"bold",
  },
});
