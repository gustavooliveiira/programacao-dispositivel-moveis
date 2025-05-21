import { View, FlatList } from "react-native";
import { Button, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const categorias = [
    "Restaurantes",
    "Lanchonetes",
    "Bares",
    "Pizzarias",
    "Mercados",
    "Soverterias",
    "Cafeterias",
  ];
  
function Grid() {
    const navigation = useNavigation();

  return (
    <View style={{ }}>
      <Text variant="titleMedium" style={{marginBottom:8}}>Categorias</Text>
      <FlatList
        data={categorias}
        numColumns={2}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => (
          <View style={{ flex: 1, marginBottom: 8, marginRight: 8 }}>
            <Button mode="outlined" onPress={() => navigation.navigate("Lojas", {
                categorias:item})}
            >
              {item}
            </Button>
          </View>
        )}
      />
    </View>
  );
}

export default Grid;
