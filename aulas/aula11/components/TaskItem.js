import { List, IconButton } from "react-native-paper";

function TaskItem ({ item}){
    return ( 
        <List.Item
        title ={item.descricao}
        description ={item.concluida ? "Concluida" : "Pedente"}
        lef={() => <IconButton />}
        right={() => <IconButton icon="delete" onPress={() => {} } />}
    />
    )
}

export default TaskItem;