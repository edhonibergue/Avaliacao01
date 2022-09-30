import React, { Component } from 'react';
import { View, Text, TextInput, Button, Image} from 'react-native';
import { styles } from './styles';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      number1: 0,
      number2: 0,
      resultado: '0'
    };

    this.calcular = this.calcular.bind(this);

  }
 
    calcular(){
    this.setState({resultado: this.state.number1*this.state.number2});

  }

  render(){
    return(
      <View style={styles.container}>

      <Text style={[styles.titulo]}>Multiplicador de Números</Text>

      <View style={[styles.image]}>
      <Image 
        source={{uri: 'https://cdn-icons-png.flaticon.com/512/4341/4341087.png' }}
          style={{ width: 212, height: 212}}
      />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Digite o primeiro n°"
        onChangeText={ (texto) => this.setState({number1: texto})}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite o segundo n°"
        onChangeText={ (texto) => this.setState({number2: texto})}
      />
 
      <Button color='#52b256' title="Calcular" onPress={this.calcular} />

      <Text style={[styles.titulo]}>{"\n"}Resultado: {this.state.resultado}</Text>
      </View>
    );
  }
}
 
export default App;
