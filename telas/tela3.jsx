import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
} from "react-native";

const Tela3 = ({ route }) => {
  const { sprites, name, abilities, moves, id, types, stats } =
    route.params || {};
  const [hab, setHab] = useState(false);
  const [muv, setMuv] = useState(false);
  const [opn, seopn] = useState(false);

  const abilit = () => {
    if (hab === false) {
      setHab(true);
      seopn(true);
      setMuv(false);
    } else {
      setHab(false);
      seopn(false);
    }
  };

  const mov = () => {
    if (muv === false) {
      setMuv(true);
      seopn(true);
      setHab(false);
    } else {
      setMuv(false);
      seopn(false);
    }
  };

  const image = {
    uri: "https://imgs.search.brave.com/S-fZcaEXCDNRrR6rIsbLU0p1A3TQPKr3hKqAxSYC-X0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtd2l4bXAtZWQz/MGE4NmI4YzRjYTg4/Nzc3MzU5NGMyLndp/eG1wLmNvbS9mL2M1/MDY5NzYzLTkwOTgt/NDgwOC1iMjIyLWEw/MDg5YmI1Nzg2ZC9k/Y3Jyb3c5LTZlYjc0/OWU0LTUzMDgtNDk4/NS1hYzBiLTIwZTQz/MmY4NDI1Yy5wbmcv/djEvZmlsbC93XzE2/MDAsaF8yODQ2LHFf/ODAsc3RycC9wb2tl/ZGV4X3Bob25lX3dh/bGxwYXBlcl9ieV9k/cmJveGhlYWRfZGNy/cm93OS1mdWxsdmll/dy5qcGc_dG9rZW49/ZXlKMGVYQWlPaUpL/VjFRaUxDSmhiR2Np/T2lKSVV6STFOaUo5/LmV5SnpkV0lpT2lK/MWNtNDZZWEJ3T2pk/bE1HUXhPRGc1T0RJ/eU5qUXpOek5oTldZ/d1pEUXhOV1ZoTUdR/eU5tVXdJaXdpYVhO/eklqb2lkWEp1T21G/d2NEbzNaVEJrTVRn/NE9UZ3lNalkwTXpj/ellUVm1NR1EwTVRW/bFlUQmtNalpsTUNJ/c0ltOWlhaUk2VzF0/N0ltaGxhV2RvZENJ/NklqdzlNamcwTmlJ/c0luQmhkR2dpT2lK/Y0wyWmNMMk0xTURZ/NU56WXpMVGt3T1Rn/dE5EZ3dPQzFpTWpJ/eUxXRXdNRGc1WW1J/MU56ZzJaRnd2WkdO/eWNtOTNPUzAyWldJ/M05EbGxOQzAxTXpB/NExUUTVPRFV0WVdN/d1lpMHlNR1UwTXpK/bU9EUXlOV011Y0c1/bklpd2lkMmxrZEdn/aU9pSThQVEUyTURB/aWZWMWRMQ0poZFdR/aU9sc2lkWEp1T25O/bGNuWnBZMlU2YVcx/aFoyVXViM0JsY21G/MGFXOXVjeUpkZlEu/bnAta3FOeGNxdVpf/UFFNTVk1Qkl3NDRI/WDJjY2VjN181YXV1/a2xhOGdLYw",
  };

  return (
    <View style={{ backgroundColor: "#ADD8E6", flex:1}}>
      <View style={styles.container}>
        <View style={styles.containerImage}>
          <View style={styles.container2Image}>
            <Image
              style={styles.Image}
              source={{ uri: sprites.front_default }}
            />
          </View>
          <View style={styles.container2Image}>
            <Image style={styles.Image} source={{ uri: sprites.front_shiny }} />
          </View>
        </View>

        <TouchableOpacity onPress={abilit}>
          <View style={styles.textContainer}>
            <Text style={styles.Testu}>Abilities</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={mov}>
          <View style={styles.textContainer}>
            <Text style={styles.Testu}>Moves</Text>
          </View>
        </TouchableOpacity>

        <View>
          {!opn ? (
            <View style={styles.textContainers}>
              <Text style={styles.Testu}>Dexnumber: #{id}</Text>
              <Text style={styles.Testu}>Name: {name}</Text>
              <Text style={styles.Testu}>
                Type:
                {types.map((typeData, key) => (
                  <Text key={key}> {typeData.type.name} </Text>
                ))}
              </Text>
              <View>
                <Text style={styles.Testu}>Base stats to {name}:</Text>
                <Text style={styles.Testu}>
                  {stats.map((typeData, key) => (
                    <View style={styles.baseStatsContainers}>
                      <Text key={key}> {typeData.stat.name} </Text>
                      <Text> {typeData.base_stat} </Text>
                    </View>
                  ))}
                </Text>
              </View>
            </View>
          ) : (
            <></>
          )}
        </View>

        <View>
          {!opn ? (
            <></>
          ) : (
            <View style={styles.containerMoves}>
              {!muv ? (
                <>
                  {abilities.map((abilitData, key) => (
                    <View style={{ borderWidth: 1 }}>
                      <Text style={styles.Testu} key={key}>
                        {abilitData.ability.name}
                      </Text>
                    </View>
                  ))}
                </>
              ) : (
                <>
                  <ScrollView>
                    {moves.map((moveData, key) => (
                      <View style={{ borderWidth: 1 }}>
                        <Text style={styles.Testu} key={key}>
                          {moveData.move.name}{" "}
                        </Text>
                      </View>
                    ))}
                  </ScrollView>
                </>
              )}
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,

  },
  input: {
    width: "75%",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  Image: {
    width: 120,
    height: 100,
  },
  containerImage: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  container2Image: {
    backgroundColor: "white",
    flexDirection: "row",
    margin: 10,
    borderRadius: 75,
    width: 120,
    height: 120,
    justifyContent: "center",
    alignContent: "center",
    borderWidth: 1,
  },
  containerMoves: {
    height: 400,
    backgroundColor: "white",
    padding: 10,
    borderWidth: 1,
        justifyContent: "center",
    alignContent: "center",
  },

  textContainer: {
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
    height: 40,
    margin: 2.4,
    borderRadius: 75,
    borderWidth: 1,
    backgroundColor: "white",
  },
  textContainers: {
    width: "100%",
    paddingLeft: 10,
    paddingTop: 5,
    backgroundColor: "white",
    borderWidth: 1,
  },

  baseStatsContainers: {
    flexDirection: "column",
    backgroundColor: "white",
    borderWidth: 1,
    height: 50,
    width: 150,
  },

  imageB: {
    flex: 1,
    justifyContent: "center",
  },
  containerImageB: {
    flex: 1,
  },
  Testu: {
    fontSize: 18,
  },
});
export default Tela3;
