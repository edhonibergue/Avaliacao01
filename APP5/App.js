import React, { Component } from 'react';
import { View, Text, TextInput, Button, Image} from 'react-native';
import { styles } from './styles';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      peso: 0.00,
      altura: 0.00,
      classificacao: ''
    };

    this.verificar = this.verificar.bind(this);

  }
 
    verificar(){
    imc = (this.state.peso / (this.state.altura * this.state.altura));

    if (imc < 18.5)
      this.setState({classificacao: 'Abaixo do Peso'});

    if ((imc >= 18.5) && (imc <= 24.9))
      this.setState({classificacao: 'Peso Normal'});

    if ((imc >= 25) && (imc <= 29.9))
      this.setState({classificacao: 'Sobrepeso'});

    if ((imc >= 30) && (imc <= 34.9))
      this.setState({classificacao: 'Obesidade Grau I'});

    if ((imc >= 35) && (imc <= 39.9))
      this.setState({classificacao: 'Obesidade Grau II'});

    if (imc > 40)
      this.setState({classificacao: 'Obesidade Grau III Ou Mórbida'});

  }
 
  render(){
    return(
      <View style={styles.container}>

      <Text style={[styles.titulo]}>Cálculo do IMC</Text>

      <View style={[styles.image]}>
      <Image 
        source={{uri: 'https://play-lh.googleusercontent.com/ouL1lfSP_CyUgb5OUvI51jG3cevMfulA1GZGtS63r3Xfa8STYiIxq6KiY3PkMc6PcTk' }}
          style={{ width: 212, height: 212}}
      />
      </View>
      <Text style={[styles.subtitulo]}>Peso</Text>
      <TextInput
        style={styles.input}
        placeholder="kg"
        onChangeText={ (texto) => this.setState({peso: texto})}
      />

      <Text style={[styles.subtitulo]}>Altura</Text>
      <TextInput
        style={styles.input}
        placeholder="metros"
        onChangeText={ (texto) => this.setState({altura: texto})}
      />
 
      <Button color='#52b256' title="Calcular" onPress={this.verificar} />
      <Text style={styles.titulo}> {(this.state.classificacao)} </Text>
      </View>
    );
  }
}
 
export default App;
