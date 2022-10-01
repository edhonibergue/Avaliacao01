import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Button} from 'react-native';
import {Picker} from '@react-native-picker/picker';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      valor: 0.00,
      resultado: '',
      de: 0,
      depicker: [
      {nome: 'Dólar', valor: 'd1'},
      {nome: 'Real', valor: 'r1'},
      {nome: 'Euro', valor: 'e1'},
            ],
      para: 0,
      parapicker: [
      {nome: 'Dólar', valor: 'd2'},
      {nome: 'Real', valor: 'r2'},
      {nome: 'Euro', valor: 'e2'},
            ]
       };

    this.converter = this.converter.bind(this);
  }

  converter(){

    if ((de == 'd1') && (para == 'r2'))
      this.setState({resultado: ((this.setState.valor) * 5.41)});
    if((de == 'd1') && (para == 'e2'))
      this.setState({resultado: ((this.setState.valor) * 1.02)});
    if((de == 'r1') && (para == 'd2'))
      this.setState({resultado: ((this.setState.valor) * 0.18)});
    if((de == 'r1') && (para == 'e2'))
      this.setState({resultado: ((this.setState.valor) * 0.19)});
    if((de == 'e1') && (para == 'd2'))
      this.setState({resultado: ((this.setState.valor) * 0.98)});
    if((de == 'e1') && (para == 'r2'))
      this.setState({resultado: ((this.setState.valor) * 5.31)});
    else
      this.setState({resultado: 'Conversão Inválida'})
  }

  render(){
        let deItem = this.state.depicker.map( (valor, chave) => {
        return <Picker.Item key={chave} value={chave} label={valor.nome} />
    })

         let paraItem = this.state.parapicker.map( (valor, chave) => {
         return <Picker.Item key={chave} value={chave} label={valor.nome} />
    })
    return(

<View style={styles.area}>

<Text style={styles.titulo}>
          Conversor de Moedas
</Text>
<Text style={styles.text}>
          Dólar, Real e Euro
</Text>

<Text style={styles.formulario}>
          Valor:
</Text>

<TextInput
      style={styles.input}
      placeholder="Digite o valor"
      onChangeText={ (texto) => this.setState({valor: texto})}
      />

<Text style={styles.formulario}>
          De:
</Text>

<Picker
      selectedValue={this.state.de}
      onValueChange={ (itemValue, itemIndex) => this.setState({de: itemValue}) }
      >
 
{deItem}
 
</Picker>

<Text style={styles.formulario}>
          Para:
</Text>

<Picker
      selectedValue={this.state.para}
      onValueChange={ (itemValue, itemIndex) => this.setState({para: itemValue}) }
      >
 
{paraItem}
 
</Picker>


<Text style={styles.formulario}>

</Text>

<Button tyle={styles.buttom} title="Converter" onPress={this.converter} />

<Text style={styles.resultadoTitulo}>
          RESULTADO: 
</Text>

<Text style={styles.resultado}>
          {(this.state.resultado)}
</Text>

</View>
    );
  }
}



const styles = StyleSheet.create({

  titulo:{
    textAlign: 'center',
    fontSize: 25,
    marginTop: 30,
    marginBottom: 10,
    color: '#FFA500'
  },

  text:{
    textAlign: 'center',
    fontSize: 25,
    marginBottom: 10,
    color: '#20B2AA'
  },

  resultadoTitulo:{
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
    marginBottom: 30,
    color: '#90EE90'
  },

  resultado:{
    textAlign: 'center',
    fontSize: 40,
  },

  input:{
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    marginBottom: 20,
    fontSize: 20,
    padding: 10,
  },

  formulario:{
    textAlign: 'left',
    fontSize: 20,
    marginTop: 10,
    color: '#00FF7F'
  }
})

export default App;