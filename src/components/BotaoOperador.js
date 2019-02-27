import React from 'react';
import { TouchableHighlight, StyleSheet, Text } from 'react-native';

const BotaoOperador = props => (
  <TouchableHighlight 
    style={styles.botaoOperador}
    onPress={() => props.acaoBotao(props.textoBotao)}
  >
    <Text style={styles.textoBotaoOperador}>{props.textoBotao}</Text>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  botaoOperador: {
    flex: 1,
    backgroundColor: '#585858',
    width: 89,
    height: 104,
    justifyContent: 'center'
  },
  textoBotaoOperador: {
    color: '#fff',
    fontSize: 25,    
    alignSelf: 'center'
  }
});

export { BotaoOperador };
