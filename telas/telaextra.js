import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
} from "react-native";

export default function Telaextra({ navigation }) {
  const [name, onChangeText] = React.useState("");
  const [email, onChangeEmail] = React.useState("");
  const [tel, onChangeTel] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [isAble, setIsAble] = useState(true);

  const image = {
    uri: "https://imgs.search.brave.com/S-fZcaEXCDNRrR6rIsbLU0p1A3TQPKr3hKqAxSYC-X0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtd2l4bXAtZWQz/MGE4NmI4YzRjYTg4/Nzc3MzU5NGMyLndp/eG1wLmNvbS9mL2M1/MDY5NzYzLTkwOTgt/NDgwOC1iMjIyLWEw/MDg5YmI1Nzg2ZC9k/Y3Jyb3c5LTZlYjc0/OWU0LTUzMDgtNDk4/NS1hYzBiLTIwZTQz/MmY4NDI1Yy5wbmcv/djEvZmlsbC93XzE2/MDAsaF8yODQ2LHFf/ODAsc3RycC9wb2tl/ZGV4X3Bob25lX3dh/bGxwYXBlcl9ieV9k/cmJveGhlYWRfZGNy/cm93OS1mdWxsdmll/dy5qcGc_dG9rZW49/ZXlKMGVYQWlPaUpL/VjFRaUxDSmhiR2Np/T2lKSVV6STFOaUo5/LmV5SnpkV0lpT2lK/MWNtNDZZWEJ3T2pk/bE1HUXhPRGc1T0RJ/eU5qUXpOek5oTldZ/d1pEUXhOV1ZoTUdR/eU5tVXdJaXdpYVhO/eklqb2lkWEp1T21G/d2NEbzNaVEJrTVRn/NE9UZ3lNalkwTXpj/ellUVm1NR1EwTVRW/bFlUQmtNalpsTUNJ/c0ltOWlhaUk2VzF0/N0ltaGxhV2RvZENJ/NklqdzlNamcwTmlJ/c0luQmhkR2dpT2lK/Y0wyWmNMMk0xTURZ/NU56WXpMVGt3T1Rn/dE5EZ3dPQzFpTWpJ/eUxXRXdNRGc1WW1J/MU56ZzJaRnd2WkdO/eWNtOTNPUzAyWldJ/M05EbGxOQzAxTXpB/NExUUTVPRFV0WVdN/d1lpMHlNR1UwTXpK/bU9EUXlOV011Y0c1/bklpd2lkMmxrZEdn/aU9pSThQVEUyTURB/aWZWMWRMQ0poZFdR/aU9sc2lkWEp1T25O/bGNuWnBZMlU2YVcx/aFoyVXViM0JsY21G/MGFXOXVjeUpkZlEu/bnAta3FOeGNxdVpf/UFFNTVk1Qkl3NDRI/WDJjY2VjN181YXV1/a2xhOGdLYw",
  };

  useEffect(() => {
    if ((name === "") | (email === "")| (tel === "")| (password === "")) {
      setIsAble(true);
    } else {
      setIsAble(false);
    }
  });


  return (
    <View style={styles.containerImage}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.container}>
          <Text style={{ color: "white" }}>Nome</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={name}
            textContentType="password"
          />

          <Text style={{ color: "white" }}>Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
            inputMode="email"
          />
          <Text style={{ color: "white" }}>Telefone</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeTel}
            value={tel}
            textContentType="password"
          />
          <Text style={{ color: "white" }}>Senha</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            value={password}
            textContentType="password"
          />

          <Button
            title="Cadastro"
            disabled={isAble}
            onPress={() => navigation.navigate("Home")}
          ></Button>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "75%",
    height: 40,
    margin: 5,
    borderWidth: 1,
    borderRadius: 75,
    padding: 10,
    borderColor: "white",
    backgroundColor: "white",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  containerImage: {
    flex: 1,
  },
});
