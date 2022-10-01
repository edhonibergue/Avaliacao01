import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text} from 'react-native';
 
class App extends Component{
  render(){
    return(

      <View style={styles.container}>
      <View>

        <Text style={styles.tituloPrincipal}>Vagas de Emprego</Text>

      </View>

       <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.box1}>
              <View>
                  <Text style={styles.subtitulo}>Desenvolvedor Backend</Text>
                  <Text style={styles.descricao}>{'\n'}Salário R$: 3000,00</Text>
                  <Text style={styles.descricao}>Descrição: Cusando ou concluido a   faculdade de Análises e Desenvolvimento de sistemas ou semelhantes. Habilidades em PYTHON e JAVASCRIPT.</Text>
                  <Text style={styles.descricao}>{'\n'}Contato: (13) 99790-3351</Text>
              
              </View>
          </View>

          <View style={styles.box2}>
          
                  <Text style={styles.subtitulo}>Engenheiro de Dados</Text>
                  <Text style={styles.descricao}>{'\n'}Salário R$: 5000,00 </Text>
                  <Text style={styles.descricao}>Descrição: Cusando ou concluido a   faculdade de Engenharia de Dados ou semelhantes. Habilidades em Big-Data, Data Analytics entre outros semelhantes</Text>
                  <Text style={styles.descricao}>{'\n'}Contato: (13) 99790-3351</  Text>
          
          
          </View>
          <View style={styles.box3}>
              <Text style={styles.subtitulo}>Analista de Sistemas</Text>
                  <Text style={styles.descricao}>{'\n'}Salário R$: 4000,00 </Text>
                  <Text style={styles.descricao}>Descrição: Cusando ou concluido a   faculdade Análises e Desenvolvimento de sistemas ou semelhantes. Ter conhecimentos e certificados em PMP e COBIT </Text>
                  <Text style={styles.descricao}>{'\n'}Contato: (13) 99790-3351</Text>
          </View>

          <View style={styles.box4}>
              <Text style={styles.subtitulo}>Consultor Técnico Jr TI</Text>
                  <Text style={styles.descricao}>{'\n'}Salário R$: 2800,00 </Text>
                  <Text style={styles.descricao}>Descrição: Graduação completa em: Sistemas de Informação, Engenharia da Computação, Análise e Desenvolvimento de Sistemas, Tecnologia da Informação e cursos correlatados à TI. </Text>
                  <Text style={styles.descricao}>{'\n'}Contato: (13) 99790-3351</Text>
          </View>
         

          <View style={styles.box5}>
              <Text style={styles.subtitulo}>Desenvolvedor Sênior</Text>
                  <Text style={styles.descricao}>{'\n'}Salário R$: 7000,00 </Text>
                  <Text style={styles.descricao}>• Bacharel em Ciência da Computação, Engenharia de Computação; Experiência em desenvolvimento de sistemas; Idioma inglês fluente;Bons conhecimentos em análise e desenvolvimento de sistemas utilizando C/C++ ou Java;
 </Text>
                  <Text style={styles.descricao}>{'\n'}Contato: (13) 99790-3351</Text>
          </View>
          
        </ScrollView>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container:{
    flex: 1,
     padding: 2,     
  },
  tituloPrincipal:{
      fontSize: 30,
      textAlign: 'center',
      color: `#b22222`,
      fontWeight: 'bold',
      
  },
  subtitulo:{
      margin: 10,
      fontSize: 19,
      textAlign: 'center',
      color: `#191970`,
      fontWeight: 'bold',
      
  },
  descricao:{
      textAlign: 'center',
      fontSize: 15,
      fontWeight: 'bold',


  },
  box1:{
    backgroundColor: 'white',
    width: 300,
    height: 250,
    margin: 5,
    borderWidth: 4,
  },
  box2:{
    backgroundColor: 'white',
    width: 300,
    height: 250,
    margin: 5,
    borderWidth: 4,
  },
  box3:{
    backgroundColor: 'white',
    width: 300,
    height: 250,
    margin: 5,
    borderWidth: 4,
  },
  box4:{
    backgroundColor: 'white',
    width: 300,
    height: 250,
    margin: 5,
    borderWidth: 4,
  },
  box5:{
    backgroundColor: 'white',
    width: 300,
    height: 250,
    margin: 5,
    borderWidth: 4,
  }
})

export default App;
