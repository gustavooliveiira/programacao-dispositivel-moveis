import { View, StyleSheet } from "react-native";
import { Appbar, List, TextInput, FAB, Modal, Button } from "react-native-paper";
import { useState } from "react";

function TaskScreen() {
  const [concluida, setConcluida] = useState(false);
  const [exibeModal, setExibeMoadal] = useState(false);
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Minhas Tarefas"></Appbar.Content>
      </Appbar.Header>
      <List.Item
        onPress={() => setConcluida(!concluida)}
        title="Estudar para prova"
        right={(props) => (
          <List.Icon
            icon={concluida ? "check-circle-outline" : "circle-outline"}
          />
        )}
      />
      <FAB onPress={() => setExibeMoadal (true)} icon="plus" style={styles.fab} />
      <Modal visible ={exibeModal}>
        <TextInput label="Nova tarefa"></TextInput>
        <Button onPress={() => setExibeMoadal (false)}>Salvar</Button>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fab: {
    position: "absolute",
    right: 16,
    bottom: 16,
  },
});

export default TaskScreen;
