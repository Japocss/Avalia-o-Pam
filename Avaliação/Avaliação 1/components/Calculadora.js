import { useState } from 'react';

import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

const AtividadeVal1 = (props) => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const horanormais = 160;
  const hora = parseFloat(num2) + horanormais

  const [resultado, setResultado] = useState('');

  return (
    <View style={StyleSheet}>
      <Text>Salário</Text>
      <TextInput
        value={num1}
        onChangeText={setNum1}
        style={estilos.input}
        placeholder="Salario Base"
        keyboardType="numeric"
      />
      <TextInput
        value={num2}
        onChangeText={setNum2}
        style={estilos.input}
        placeholder="Horas extra feitas"
        keyboardType="numeric"
      />

      <View style={estilos.botoes}>
        <Button
          title=" Calcular "
          onPress={() => {
            const salario = parseFloat(num1);
            const horasExtra = parseFloat(num2);
            const resultadoFinal =
              (salario / horanormais) * 1.5 * (horasExtra - horanormais) + salario;
            setResultado(resultadoFinal.toFixed(2));
          }}
        />
      </View>
      <Text>Salário base: {num1}</Text>
      <Text>Horas Normais Trabalhadas: {horanormais}</Text>
      <Text>Horas Extra: {num2}</Text>
      <Text>Salário Final: {resultado}</Text>
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
});

export default AtividadeVal1;
