import React, {Component} from 'react';
import { Text, View, StyleSheet, TextInput, Button, Image } from 'react-native';
import { styles } from './styles';
import Constants from 'expo-constants';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
        num: 0,
        mensagem: ''
    };

    this.num = this.num.bind(this);  
    this.resultado = this.resultado.bind(this);  

  }

  num(texto){
    this.setState({
      num: texto
    });
  }

  resultado(){

    numeroAleatorio = Math.floor(Math.random(this.state.num) * 10)
    if(numeroAleatorio == this.state.num){
      this.setState({mensagem: `Você acertou! o número é ${numeroAleatorio}`}) 
    }
    if(numeroAleatorio != this.state.numero) {
      this.setState({mensagem: `Você errou! o número era ${numeroAleatorio}`}) 
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.titulo}>Número Aleatório</Text>

        <View style={[styles.image]}>
      <Image 
        source={{uri: 'https://cdn-icons-png.flaticon.com/512/7603/7603277.png' }}
          style={{ width: 212, height: 212}}
      />
      </View>

        <Text style={styles.texto}>
          Pense em um nº entre 0 e 10
        </Text>
        <TextInput style={styles.input}
          placeholder=""
          onChangeText={this.numero}>
        </TextInput>

        <Button color='#68182b' title="Descobrir" onPress={this.resultado} />

        <Text style={[styles.titulo]}>{"\n"}Resultado: {"\n"}{this.state.mensagem}</Text>
        
      </View>
    );
  }
}

export default App;