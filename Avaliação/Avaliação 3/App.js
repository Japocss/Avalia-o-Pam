import {SafeAreaView, StyleSheet,} from 'react-native';

import Calculadora from './components/Calculadora'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <Calculadora/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    alignItems: 'center'
  }
});
