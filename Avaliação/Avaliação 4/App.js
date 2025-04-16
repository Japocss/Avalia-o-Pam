import { SafeAreaView, StyleSheet, View } from 'react-native';
import FlexBox from './components/FlexBox';
import FlexBox2 from './components/FlexBox2';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.board}>
      <View style={styles.coluna}>
        <FlexBox />
        <FlexBox2 />        
        <FlexBox />
        <FlexBox2 />
        <FlexBox />
        <FlexBox2 />
        <FlexBox />
        <FlexBox2 />
      </View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

  coluna: {
  width: '100%',
  flex: 5/10, 
  flexDirection: 'center', 
  },

  board: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#784008'
  },
});
