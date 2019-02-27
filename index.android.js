import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet, StatusBar } from 'react-native'; 
import { Visor, BotaoNumerico, BotaoOperador } from './src/components'; 

class AppTeste extends Component {  
  constructor(props) {
    super(props);

    this.state = { visor: '', resultadoCalculo: '' };

    this.inserirValorNoVisor = this.inserirValorNoVisor.bind(this);
    this.calcularValores = this.calcularValores.bind(this);
    this.limparVisor = this.limparVisor.bind(this);
  }

  calcularValores() {
    const textoCompleto = this.state.visor;
    let num1 = '';
    let retorno = '';

    for (let i = 0; i < textoCompleto.length; i++) {
      num1 += textoCompleto[i];

      if (textoCompleto[i] === '+') {
        retorno = parseFloat(num1) + parseFloat(textoCompleto.substr(i + 1, textoCompleto.length));
      } 
      if (textoCompleto[i] === '-') {
        retorno = parseFloat(num1) - parseFloat(textoCompleto.substr(i + 1, textoCompleto.length));
      } 
      if (textoCompleto[i] === 'x') {
        retorno = parseFloat(num1) * parseFloat(textoCompleto.substr(i + 1, textoCompleto.length));
      }
      if (textoCompleto[i] === '÷') {
        retorno = parseFloat(num1) / parseFloat(textoCompleto.substr(i + 1, textoCompleto.length));
      } 
    } 
    this.setState({ resultadoCalculo: retorno }); 
  }

  inserirValorNoVisor(valorTextoVisor) {
    this.setState({ visor: this.state.visor + valorTextoVisor });
  }

  limparVisor() {
    this.setState({ visor: '', resultadoCalculo: '' });
  }

  render() {      
      return (
          <View style={styles.principal}>
              <StatusBar backgroundColor='#585858' />
              <View style={styles.containerVisor}>
                  <Visor 
                      textoVisor={this.state.visor}
                      resultadoCalculo={this.state.resultadoCalculo}
                  />
              </View>

              <View style={styles.todaParteAbaixoVisor}>
                  <View style={styles.containerNumeros}>
                      <View style={styles.fileiras}>
                          <BotaoNumerico textoBotao={'7'} acaoBotao={this.inserirValorNoVisor} />
                          <BotaoNumerico textoBotao={'8'} acaoBotao={this.inserirValorNoVisor} />
                          <BotaoNumerico textoBotao={'9'} acaoBotao={this.inserirValorNoVisor} />
                      </View>

                      <View style={styles.fileiras}>
                          <BotaoNumerico textoBotao={'4'} acaoBotao={this.inserirValorNoVisor} />
                          <BotaoNumerico textoBotao={'5'} acaoBotao={this.inserirValorNoVisor} />
                          <BotaoNumerico textoBotao={'6'} acaoBotao={this.inserirValorNoVisor} />
                      </View>
                      
                      <View style={styles.fileiras}>
                          <BotaoNumerico textoBotao={'1'} acaoBotao={this.inserirValorNoVisor} />
                          <BotaoNumerico textoBotao={'2'} acaoBotao={this.inserirValorNoVisor} />
                          <BotaoNumerico textoBotao={'3'} acaoBotao={this.inserirValorNoVisor} />
                      </View>
                      
                      <View style={styles.fileiras}>
                          <BotaoNumerico textoBotao={','} acaoBotao={this.inserirValorNoVisor} />
                          <BotaoNumerico textoBotao={'0'} acaoBotao={this.inserirValorNoVisor} />
                          <BotaoNumerico textoBotao={'='} acaoBotao={this.calcularValores} />
                      </View>
                  </View>
                  <View style={styles.containerOperadores}>
                      <BotaoOperador textoBotao={'DEL'} acaoBotao={this.limparVisor} />
                      <BotaoOperador textoBotao={'÷'} acaoBotao={this.inserirValorNoVisor} />
                      <BotaoOperador textoBotao={'x'} acaoBotao={this.inserirValorNoVisor} />
                      <BotaoOperador textoBotao={'-'} acaoBotao={this.inserirValorNoVisor} />
                      <BotaoOperador textoBotao={'+'} acaoBotao={this.inserirValorNoVisor} />
                  </View>
              </View>
          </View>
      ); 
  }
}

const styles = StyleSheet.create({
  principal: {
    flex: 1,
    backgroundColor: 'gray'
  },
  containerVisor: {
    flex: 3, 
    backgroundColor: 'white',
    justifyContent: 'center'
  },
  todaParteAbaixoVisor: {
    flex: 5, 
    backgroundColor: 'red', 
    flexDirection: 'row' 
  },
  containerNumeros: {
    flex: 3, 
    backgroundColor: 'white',
    justifyContent: 'flex-end' 
  },
  containerOperadores: {
    flex: 1, 
    backgroundColor: '#585858',
    justifyContent: 'flex-end'
  },
  fileiras: {
    flexDirection: 'row'
  }
});

AppRegistry.registerComponent('AppTeste', () => AppTeste);
