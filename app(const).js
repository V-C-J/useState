import { useState } from "react";
import {Text, View, Button} from "react-native";

export default function App(){
  const [numero, setNumero] = useState(0); 

  function mais(){
    setNumero(numero + 1)
  };
  function menos(){
      setNumero(numero - 1)
  };
  
  return(
    <View>
      <Text>Vinicius Carvalho Jorge</Text>
      <Text>{numero}</Text>
      <Button title="+" onPress={mais}/>
      <Button title="-" onPress={menos}/>      
    </View>
  ); 
}
