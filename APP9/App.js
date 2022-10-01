import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text,Image} from 'react-native';
 
class App extends Component{
  render(){
    return(
      <View style={styles.container}>
              <View>

                    <Text style={styles.tituloPrincipal}>Anúncio</Text>

              </View>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
          <View style={styles.box1}>
                   <View style={styles.imagemPrincipal}>
                          <Image
                               source={{ uri: 'https://www.mundialmegastore.com.br/wp-content/uploads/2019/03/cadeira-gamer-aviso-thunderx3-ec3-vermelha-48200-2000-198598-1536x1536.jpg'}}
                               style={{ width: 150, height: 150,borderWidth: 2,}}/>
                
              
              <Text style={styles.tituloAnuncio}>{'\n'}Cadeira BLACK HAWK</Text>
              <Text>{'\n'}A cadeira BLACK HAWK tem sua cobertura em poliuretano com detalhes em fibra de carbono. Sua costura remete aos famosos bancos dos carros esportivos enquanto você desfruta do prazer de jogar seus games favoritos.{'\n'}Um assento firme com um pequeno apoio para cabeça e almofada para as costas oferecem um conforto prolongado. Apoie seu antebraço no apoio ajustável que é perfeito para posicionar os cotovelos.Com uma roda de 60mm de diâmetro construída em nylon garante liberdade para movimentar-se para todos os lados. {'\n'}R$:1500,00</Text>
              
                     </View>
            
          </View>
          <View style={styles.box2}>
                        <View style={styles.imagemPrincipal}>
                        <Image
                               source={{ uri: 'https://mlstaticquic-a.akamaihd.net/mouse-gamer-kolke-kgm-256-usb-zetta-D_NQ_NP_920843-MLU32140145225_092019-F.jpg'}}
                               style={{ width: 150, height: 150,borderWidth: 2}}/>
          
                        <Text style={styles.tituloAnuncio}>{'\n'}Mouse Gamer Kolke Kgm-256 Usb Zetta</Text>
                        <Text>{'\n'} Mouse com dpi ajustável e 6 botões programáveis. Tem luzes led. Mouse Gamer Kolke KGM-256 USB ZETTA; Mouse Gamer com 6 botões programáveis; Luz LED Azul; DPI ajustável: 800, 1600, 2000; conector USB R$ 250,00</Text>





                        </View>
          
          </View>
          <View style={styles.box3}>
                    <View style={styles.imagemPrincipal}>
                        <Image
                               source={{ uri: 'https://www.bringit.com.br/media/catalog/product/cache/a0747897611b8ef0f4c13ac621c5b092/t/m/tm273-001-web.jpg'}}
                               style={{ width: 150, height: 150,borderWidth: 2}}/>
          
                        <Text style={styles.tituloAnuncio}>{'\n'}Teclado Mecânico Gamer Sani RGB Redragon Blue K581RGB-1</Text>
                        <Text>{'\n'}O teclado mecânico Sani vem equipado com o switch mecânico Ontemu Blue, proporciona uma experiência completa para jogos e digitação, tem em sua característica o retorno tátil e audível. Portanto, o seu ruído será perceptível.

Para os gamers mais exigentes, este teclado com o switch azul entrega alta performance, resposta rápida e ótima durabilidade.

Seu design é moderno e estiloso, possui textura localizada e iluminação RGB Chroma, é indicado para o usuário que gostaria de um upgrade em seu setup. R$ 329,90</Text>
          
          
                    </View>
          
          </View>
          <View style={styles.box4}>
                                    
                                    <View style={styles.imagemPrincipal}>
                        <Image
                               source={{ uri: 'https://th.bing.com/th/id/OIP.B6Elkcm512QyyjNgD6ZO_gHaHa?pid=ImgDet&rs=1'}}
                               style={{ width: 150, height: 150,borderWidth: 2}}/>
          
                        <Text style={styles.tituloAnuncio}>{'\n'}Fone de Ouvido Headset Gamer Onikuma K11 Preto</Text>
                        <Text>{'\n'}Fone de Ouvido Headset Gamer da marca Onikuma, modelo K11, feito especialmente para gamers exigentes a procura de qualidade de som. Este modelo conta com um desing aprimorado para game, leve e com almofadas super confortáveis, que se torna essencial para longas horas de jogo. A alça do fone pode ser ajustada facilmente a diferentes tamanhos e formatos de cabeça, seja de uma criança ou de um adulto. O microfone conta com cancelamento de ruido, essencial para jogos em grupo. R$: 159,99</Text>
          
          
                    </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container:{
    flex: 1,
    textAlign: 'center',
    margin: 20,
  },
  tituloPrincipal:{
      fontSize: 35,
      textAlign: 'center',
      color: `#b22222`,
      fontWeight: 'bold',
      margin: 10,
      
  },
  tituloAnuncio: {
      fontWeight: 'bold',
    
  },

  imagemPrincipal:{
    flex: 1,
    alignItems: 'center',
    margin: 10,
    
  },
  box1:{
    backgroundColor: 'white',
    width: 300,
    height: 520,
    margin: 5,
    borderWidth: 4,
  },
  box2:{
    backgroundColor: 'white',
    width: 300,
    height: 520,
    margin: 5,
    borderWidth: 4,
  },
  box3:{
    backgroundColor: 'white',
    width: 300,
    height: 520,
    margin: 5,
    borderWidth: 4,
  },
  box4:{
    backgroundColor: 'white',
    width: 300,
    height: 520,
    margin: 5,
    borderWidth: 4,
  }
})

export default App;
