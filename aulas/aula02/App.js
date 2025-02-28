import { useState } from "react";
import { Text, Button, StyleSheet } from "react-native";

function Titulo(props){
  return <Text>{props.children}</Text>; //titulo
}

function App(){
  const [estado, setEstado] = useState(0);
  return (
    <>
      <Titulo>Meu App</Titulo>;
      <Text style= { styles.titulo}>Olá! Pessoal</Text>; 
      <Text style= {styles.titulo}>{estado}</Text>;
      <Button title="Clique aqui" onPress={() => setEstado(estado + 1)}/>
    </>
  );
}

const styles = StyleSheet.create({
  titulo : {
    fontSize : 24,
    padding : 24
  }
});
export default App;