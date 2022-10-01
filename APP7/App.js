import React, { Component } from 'react';
import {Text, TextInput, View, StyleSheet, Switch, Button, Image } from 'react-native';
import { styles } from './styles';

import { Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      idade: '',
      sexo: '',
      escolaridade: '',
      limite: '',
      status: '',
      
      exibirNome: '',
      exibirIdade: '',
      exibirSexo: '',
      exibirEscolaridade: '',
      exibirLimite: '',
      exibirStatus: '',

      sexos: [
      'Selecione um sexo',
      'Masculino',
      'Feminino' ,
      'Outro',
      ],
      escolaridades: [
        'Selecione uma escolaridade',
        'Ensino Fundamental',
        'Ensino Medio',
        'Ensino Superior',
      ],
    };
    this.entrar = this.entrar.bind(this);

  }

entrar(){
  this.setState({
    exibirNome: this.state.nome, 
    exibirIdade: this.state.idade, 
    exibirSexo: this.state.sexo, 
    exibirEscolaridade: this.state.escolaridade, 
    exibirLimite: this.state.limite,
    exibirStatus: this.state.status

  })
}

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Abertura de Conta</Text>

        <View style={[styles.image]}>
      <Image 
        source={{uri: 'https://cdn-icons-png.flaticon.com/512/719/719370.png' }}
          style={{ width: 112, height: 112}}
      />
      </View>

        <Text style={[styles.textoPrincipal]}>Nome</Text>
        <TextInput style={styles.textInput}  placeholder= "  Digite seu nome" onChangeText={value => this.setState({nome:  value })} />
        <Text style={[styles.textoPrincipal]}>Idade</Text>
        <TextInput style={styles.textInput} placeholder= "  Digite sua idade" onChangeText={value => this.setState({idade:  value })}/>

        <Text style={[styles.textoPrincipal]}>Sexo:</Text>
        <Picker
          selectedValue={this.state.sexo}
          onValueChange={value => this.setState({sexo: value})}>
          {this.state.sexos.map((valor, chave) => {
            return (
              <Picker.Item key={chave} value={chave} label={valor} />
            );
          })}
        </Picker>

        <Text style={[styles.textoPrincipal]}>Escolaridade: </Text>
        <Picker selectedValue={this.state.escolaridade} onValueChange={value=> this.setState({escolaridade: value})}>
          {this.state.escolaridades.map((valor, chave) => {
            return (
              <Picker.Item key={chave} value={chave} label={valor} />
            );
          })}
        </Picker>

          <Text style={[styles.textoPrincipal]}>Limite:</Text>
          <Slider minimumValue={0}
            maximumValue={100} onValueChange={value => this.setState({limite: value})}/>
        <Text style={[styles.textoPrincipal]}>Status:</Text>
        <Switch value={this.state.status} onValueChange={(value) => this.setState({status: value})}/>
        
        <Button title='Entrar' onPress={this.entrar}/> 

        <Text style={[styles.textoPrincipal]}>{"\n"}Dados Informados:</Text>   
        <Text style={styles.texto}>Nome: {this.state.exibirNome}</Text>
        <Text style={styles.texto}>Idade: {this.state.exibirIdade}</Text>
        <Text style={styles.texto}>Sexo: { this.state.sexos.filter((value, index) => {
            return index == this.state.exibirSexo ? value : ''
        })}</Text>
        <Text style={styles.texto}>Escolaridade: { this.state.escolaridades.filter((value, index) => {
            return index == this.state.exibirEscolaridade ? value : ''
        })}</Text>
        <Text style={styles.texto}>Limite: {Math.floor(this.state.exibirLimite)}</Text>
        <Text style={styles.texto}>Status: {this.state.exibirStatus ? 'Ativo' : 'Inativo'}</Text>

      </View>
    );
  }
}

export default App;