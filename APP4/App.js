import React, { Component } from 'react';
import { View, Text, TextInput, Button, Image} from 'react-native';
import { styles } from './styles';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      alcool: 0.00,
      gasolina: 0.00,
      calculo: ''
    };

    this.verificar = this.verificar.bind(this);

  }
 
    verificar(){
    res = this.state.alcool / this.state.gasolina

    if (res < 0.7)
      this.setState({calculo: 'É melhor ir de Álcool'});

    else
      this.setState({calculo: 'É melhor ir de Gasolina'})

  }
 
  render(){
    return(
      <View style={styles.container}>

      <Text style={[styles.titulo]}>Álcool x Gasolina</Text>

      <View style={[styles.image]}>
      <Image 
        source={{uri: 'https://play-lh.googleusercontent.com/L2BtYYgkJuDK3J0xAvOVXgxm6ie5gC7UaSzTBcZMd7DybTBaIITw6-1Rgv4FtOL6uw' }}
          style={{ width: 212, height: 212}}
      />
      </View>
      <Text style={[styles.subtitulo]}>Álcool</Text>
      <TextInput
        style={styles.input}
        placeholder="Preço do Álcool"
        onChangeText={ (texto) => this.setState({alcool: texto})}
      />

      <Text style={[styles.subtitulo]}>Gasolina</Text>
      <TextInput
        style={styles.input}
        placeholder="Preço da Gasolina"
        onChangeText={ (texto) => this.setState({gasolina: texto})}
      />
 
      <Button color='#52b256' title="Verificar" onPress={this.verificar} />
      <Text style={styles.titulo}> {(this.state.calculo)} </Text>
      </View>
    );
  }
}
 
export default App;
