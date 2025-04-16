import { useState } from 'react';

import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

const AtividadeVal2 = (props) => {
  const [num1, setNum1] = useState('');
  const carro = 0.10;
  const moto = 0.05;
  const caminhao = 0.15

  const [resultado1, setResultado1] = useState('');
  const [resultado2, setResultado2] = useState('');
  const [resultado3, setResultado3] = useState('');


  return (
    <View style={StyleSheet}>
      <Text>Km</Text>
      <TextInput
        value={num1}
        onChangeText={setNum1}
        style={estilos.input}
        placeholder="Distância Percorrida(Km)"
        keyboardType="numeric"
      />
  
      <View style={estilos.botoes}>
        <Button
          title=" Calcular "
          onPress={() => {
            const resultadoFinal =
              (num1 * carro)
            setResultado1(resultadoFinal.toFixed(2));

             const resultadoFinal2 =
              (num1 * moto);
            setResultado2(resultadoFinal2.toFixed(2));

             const resultadoFinal3 =
              (num1 * caminhao);
            setResultado3(resultadoFinal3.toFixed(2));
          }}
        />
      </View>

      <View style={estilos.resultado1}>
      <Text>Tipo: Carro</Text>
      <Text>Distância: {num1}</Text>
      <Text>Total:R$ {resultado1}</Text>
      </View>

      <View style={estilos.resultado2}>
      <Text>Tipo: Moto</Text>
      <Text>Distância: {num1}</Text>
      <Text>Total:R$ {resultado2}</Text>
      </View>

      <View style={estilos.resultado3}>
      <Text>Tipo: Caminhão</Text>
      <Text>Distância: {num1}</Text>
      <Text>Total:R$ {resultado3}</Text>
      </View>
    </View>
  );
};

const estilos = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    marginTop: 10,
  },
  botoes: {
    marginTop: 5,
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  resultado1: {
    marginTop: 8,
  },
  resultado2: {
    marginTop: 8,
  },
  resultado3: {
    marginTop: 8,
  }
});

export default AtividadeVal2;
