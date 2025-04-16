import { useState } from 'react';

import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

const AtividadeVal3 = (props) => {
  const [num1, setNum1] = useState('');
  const bandaver = 0.50;
  const bandaama = 0.55;
  const bandaverm1 = 0.60;
  const bandaverm2 = 0.70;

  const [resultado1, setResultado1] = useState('');
  const [resultado2, setResultado2] = useState('');
  const [resultado3, setResultado3] = useState('');
  const [resultado4, setResultado4] = useState('');


  return (
    <View style={StyleSheet}>
      <Text>Consumo em kWh</Text>
      <TextInput
        value={num1}
        onChangeText={setNum1}
        style={estilos.input}
        placeholder="kWh"
        keyboardType="numeric"
      />
  
      <View style={estilos.botoes}>
        <Button
          title=" Calcular "
          onPress={() => {
            const resultadoFinal =
              (num1 * bandaver)
            setResultado1(resultadoFinal.toFixed(2));

             const resultadoFinal2 =
              (num1 * bandaama);
            setResultado2(resultadoFinal2.toFixed(2));

             const resultadoFinal3 =
              (num1 * bandaverm1);
            setResultado3(resultadoFinal3.toFixed(2));

             const resultadoFinal4 =
              (num1 * bandaverm2);
            setResultado4(resultadoFinal4.toFixed(2));
          }}
        />
      </View>

      <View style={estilos.resultado1}>
      <Text>Bandeira: Bandeira Verde</Text>
      <Text>Consumo: {num1}</Text>
      <Text>Total: R$ {resultado1}</Text>
      </View>

      <View style={estilos.resultado2}>
      <Text>Bandeira: Bandeira Amarela</Text>
      <Text>Consumo: {num1}</Text>
      <Text>Total: R$ {resultado2}</Text>
      </View>

      <View style={estilos.resultado3}>
      <Text>Bandeira: Bandeira Vermelha 1</Text>
      <Text>Consumo: {num1}</Text>
      <Text>Total: R$ {resultado3}</Text>
      </View>

      <View style={estilos.resultado4}>
      <Text>Bandeira: Bandeira Vermelha 2</Text>
      <Text>Consumo: {num1}</Text>
      <Text>Total: R$ {resultado4}</Text>
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
  },
  resultado4: {
    marginTop: 8,
  }
});

export default AtividadeVal3;