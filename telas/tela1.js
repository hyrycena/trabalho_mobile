import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";

export default function Tela1({ navigation }) {
  const [name, onChangeText] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [isAble, setIsAble] = useState(true);

  useEffect(() => {
    if ((password === "") | (name === "")) {
      setIsAble(true);
    } else {
      setIsAble(false);
    }
  });

  return (
    <View style={styles.container}>
      <Text>nome</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={name}
        inputMode="email"
      />
      <Text>senha</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        textContentType="password"
      />
      <Button
        title="Entrar"
        onPress={() => navigation.navigate("Tela2")}
        disabled={isAble}
      ></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,         
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "75%",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
