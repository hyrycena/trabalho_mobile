import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import axios from "axios";

const Tela2 = ({ navigation }) => {
  const [pokemons, setPokemons] = useState([]);
  const [, setPokemonData] = useState();

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    var endpoints = [];
    for (var i = 1; i < 152; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => setPokemons(res));
  };

  const pokemonPickHandler = (pokemonData) => {
    setPokemonData(pokemonData);
    navigation.navigate("Tela3", pokemonData);
  };

  const image = {
    uri: "https://imgs.search.brave.com/S-fZcaEXCDNRrR6rIsbLU0p1A3TQPKr3hKqAxSYC-X0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtd2l4bXAtZWQz/MGE4NmI4YzRjYTg4/Nzc3MzU5NGMyLndp/eG1wLmNvbS9mL2M1/MDY5NzYzLTkwOTgt/NDgwOC1iMjIyLWEw/MDg5YmI1Nzg2ZC9k/Y3Jyb3c5LTZlYjc0/OWU0LTUzMDgtNDk4/NS1hYzBiLTIwZTQz/MmY4NDI1Yy5wbmcv/djEvZmlsbC93XzE2/MDAsaF8yODQ2LHFf/ODAsc3RycC9wb2tl/ZGV4X3Bob25lX3dh/bGxwYXBlcl9ieV9k/cmJveGhlYWRfZGNy/cm93OS1mdWxsdmll/dy5qcGc_dG9rZW49/ZXlKMGVYQWlPaUpL/VjFRaUxDSmhiR2Np/T2lKSVV6STFOaUo5/LmV5SnpkV0lpT2lK/MWNtNDZZWEJ3T2pk/bE1HUXhPRGc1T0RJ/eU5qUXpOek5oTldZ/d1pEUXhOV1ZoTUdR/eU5tVXdJaXdpYVhO/eklqb2lkWEp1T21G/d2NEbzNaVEJrTVRn/NE9UZ3lNalkwTXpj/ellUVm1NR1EwTVRW/bFlUQmtNalpsTUNJ/c0ltOWlhaUk2VzF0/N0ltaGxhV2RvZENJ/NklqdzlNamcwTmlJ/c0luQmhkR2dpT2lK/Y0wyWmNMMk0xTURZ/NU56WXpMVGt3T1Rn/dE5EZ3dPQzFpTWpJ/eUxXRXdNRGc1WW1J/MU56ZzJaRnd2WkdO/eWNtOTNPUzAyWldJ/M05EbGxOQzAxTXpB/NExUUTVPRFV0WVdN/d1lpMHlNR1UwTXpK/bU9EUXlOV011Y0c1/bklpd2lkMmxrZEdn/aU9pSThQVEUyTURB/aWZWMWRMQ0poZFdR/aU9sc2lkWEp1T25O/bGNuWnBZMlU2YVcx/aFoyVXViM0JsY21G/MGFXOXVjeUpkZlEu/bnAta3FOeGNxdVpf/UFFNTVk1Qkl3NDRI/WDJjY2VjN181YXV1/a2xhOGdLYw",
  };

  return (
    <SafeAreaView>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <ScrollView>
          {pokemons.map((pokemon, key) => (
            <View key={key}>
              <TouchableOpacity
                onPress={() => pokemonPickHandler(pokemon.data)}
              >
                <View style={styles.container}>
                  <View style={styles.containerImage}>
                    <Image
                      style={styles.Image}
                      source={{ uri: pokemon.data.sprites.front_default }}
                    />
                  </View>
                  <View style={styles.textContainer}>
                    <Text style={styles.Testu}>
                      Dexnumber: #{pokemon.data.id}
                    </Text>
                    <Text style={styles.Testu}>Name:{pokemon.data.name} </Text>
                    <Text style={styles.Testu}>
                      Type:
                      {pokemon.data.types.map((type, key) => (
                        <Text key={key}> {type.type.name} </Text>
                      ))}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#ADD8E6",
    margin: 10,
    borderRadius: 25,
  },
  containerImage: {
    backgroundColor: "white",
    flexDirection: "row",
    borderRadius: 25,
    width: 100,
    height: 100,
    justifyContent: "center",
    alignContent: "center",
  },
  Image: {
    height: 90,
    width: 100,
  },
  textContainer: {
    height: 150,
    width: 180,
    paddingLeft: 10,
    paddingTop: 5,
  },
  Testu: {
    fontSize: 18,
  },

  imageB: {
    flex: 1,
    justifyContent: "center",
  },
  containerImageB: {
    flex: 1,
  },
});

export default Tela2;
