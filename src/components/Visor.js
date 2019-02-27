import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Visor extends Component {
  render() {
    return (
      <View style={styles.principal}>
        <Text style={styles.textoVisor}>{this.props.textoVisor}</Text> 
        <Text style={styles.textoResultado}>{this.props.resultadoCalculo}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  principal: {
    flex: 1
  },
  textoVisor: {
    backgroundColor: 'white',
    color: '#000',
    fontSize: 50,
    height: 60,    
    textAlign: 'right',
    marginTop: 25
  },
  textoResultado: {    
    fontSize: 25,
    textAlign: 'right',
    height: 60
  }
});

export { Visor };
