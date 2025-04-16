import {View} from 'react-native'

const Quadrado = (props) => {
  return (
    <View style={
      {
      height: props.lado || 50,
      width: props.lado || 50,
      backgroundColor: props.cor || '#fad928'  
      }  
    }>
    </View>
  )
}

export default Quadrado