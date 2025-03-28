import { View, StyleSheet } from "react-native";
import { Text, TextInput, Button, IconButton } from "react-native-paper";

function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={[styles.space, styles.center]} variant="headlineLarge">Login</Text>
      <TextInput
        style={styles.space}
        mode="outlined"
        label="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        right={<TextInput.Icon icon="email" />}
      />
      <TextInput
        style={styles.space}
        mode="outlined"
        label="Senha"
        secureTextEntry
        right={<TextInput.Icon icon={"eye"} />}
      />
      <Button style={styles.space} mode="outlined" theme={{colors:"black"}}>Entrar</Button>
      <Text style={[styles.space, styles.center]}variant="labelMedium">Ou entre com:</Text>
      <View style={styles.buttons}>
        <IconButton icon="google" />
        <IconButton icon="facebook" />
        <IconButton icon="instagram" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 16,
    },
    space: {
        marginBottom: 8,
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    center: {
        alignSelf:"center",

    },
});


export default LoginScreen;
