import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button} from 'react-native';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      counter: 0
    };
    
    this.aumentar = this.aumentar.bind(this);
    this.diminuir = this.diminuir.bind(this);
  }
 
  aumentar(){
    this.setState({counter: this.state.counter+1});

  }

  diminuir(){
    this.setState({counter: this.state.counter-1});
 
  }

  render(){
    return(
      <View style={styles.area}>

      <Text style={[styles.texto]}>Contador de Pessoas</Text>
     <Text style={[styles.texto]}>{"\n"}Número de Pessoas: {this.state.counter}{"\n"}{"\n"}</Text>

      <Button color='green' title="+" onPress={this.aumentar} />
      
      <Button color='red' title="-" onPress={this.diminuir} />
 
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  input:{
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto:{
    textAlign: 'center',
    fontSize: 25,
  }
})
 
export default App;
