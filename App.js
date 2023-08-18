import React, {useState} from 'react';
import { Text, SafeAreaView, StyleSheet, View, TextInput, Button, TouchableOpacity } from 'react-native';

export default function App() {
  function calculoCombustivel(){
    const resultado = km / combustivel 
    alert('O consumo do seu carro é: ' + resultado)
  }

  const [km, setKm] = useState('');
  const [combustivel, setCombustivel]= useState('');

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.paragraph}>
        Consumo de Combustivel
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite os Km percorridos"
        keyboardType="numeric"
        placeholderTextColor="white"
        onChangeText={(Km)=>setKm(km)}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite a quantidade de combustivel"
        keyboardType="numeric"
        placeholderTextColor="white"
        onChangeText={(combustivel)=>setCombustivel(combustivel)}
      />

      <TouchableOpacity style={styles.btn} onPress={calculoCombustivel}>
        <Text style={styles.textbtn}>
          Calcular o consumo
        </Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom:60
  },
  input:{
    fontSize:17,
    padding:20,
    backgroundColor:'black',
    borderRadius:10,
    margin:15,
    color:'white'
  },
  btn:{
    alignItems:'center',
    backgroundColor:'yellow',
    margin:15,
    padding:15,
    borderRadius:10,
    marginBottom:50
  },
  textbtn:{
    fontSize:30,
    color:'#FFF'
  }
});
