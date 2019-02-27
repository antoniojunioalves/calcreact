import React from 'react';
import { TouchableHighlight, StyleSheet, Text } from 'react-native';

const BotaoNumerico = props => (
  <TouchableHighlight 
    style={styles.botaoNumerico}
    onPress={() => props.acaoBotao(props.textoBotao)}
  >
    <Text style={styles.textoBotaoNumerico}>{props.textoBotao}</Text>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  botaoNumerico: {
    flex: 1,
    backgroundColor: '#2E2E2E',
    width: 89,
    height: 104,
    justifyContent: 'center'    
  },
  textoBotaoNumerico: {
    color: '#fff',
    fontSize: 35,    
    alignSelf: 'center'
  }
});

export { BotaoNumerico };
