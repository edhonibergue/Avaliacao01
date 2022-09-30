import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';
 
class App extends Component{
  render(){
    return(
      <View>
        <Text style={{color: '#FF0000', fontSize: 20, marginBottom: 2}}>APP MEU PERFIL</Text>
         
        <Image
          source={{uri: 'https://media-exp1.licdn.com/dms/image/C4D03AQFnQ_sSOh1IYw/profile-displayphoto-shrink_800_800/0/1658265903841?e=2147483647&v=beta&t=E7PyjsDlUABlBvGn8dugN7n0hFd34npdu-4KcdgSrGM' }}
          style={{ width: 300, height: 300}}
        />

        <Text style={{color: 'blue', fontSize: 16}}>{"\n"} Dados Pessoais:</Text>
        <Text>Edhoni Bergue Gois Oliveira{"\n"}
        22 anos{"\n"}</Text>

        <Text style={{color: 'blue', fontSize: 16}}>{"\n"} Formação:</Text>
        <Text>Cursando Análise e Desenvolvimento de Sistemas</Text>

        <Text style={{color: 'blue', fontSize: 16}}>{"\n"} Experiência:</Text>
        <Text>Auxiliar de Informática{"\n"}
        Atacadão SA{"\n"}
        Out 2018 - Jul 2021{"\n"}{"\n"}

        Desenvolvedor Low code{"\n"}
        ModalGR{"\n"}
        Jul 2021 - Abr 2022{"\n"}{"\n"}

        Analista de Serviços de TI{"\n"}
        yHub{"\n"}
        Abr 2022 - Atualmente</Text>

        <Text style={{color: 'blue', fontSize: 16}}>{"\n"} Projetos:</Text>
        <Text>Sistema de Gerenciamento de Colaboradores - ModalGR</Text>
      </View>
    )
  }
}
 
export default App;