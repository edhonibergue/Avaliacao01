import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
     container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
      titulo:{
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 25,
        color: '#68182b',
      },
      texto:{
        textAlign: 'center',
        fontSize: 18,
      }
});

  export {styles};