import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

const Tela3 = ({ route }) => {
  const { sprites, name, abilities, moves, id, types } = route.params || {};
  const [hab, setHab] = useState(false);
  const [muv, setMuv] = useState(false);
  const [opn, seopn] = useState(false);

  const abilit = () => {
    if (hab === false) {
      setHab(true);
      seopn(true);
    } else {
      setHab(false);
      seopn(false);
    }
  };

  const mov = () => {
    if (muv === false) {
      setMuv(true);
      seopn(true);
    } else {
      setMuv(false);
      seopn(false);
    }
  };

  return (
    <SafeAreaView>
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

        <View style={styles.textContainers}>
          <Text>Dexnumber: #{id}</Text>
          <Text>Name: {name}</Text>
          <Text>
            Yype:
            {types.map((typeData, key) => (
              <Text key={key}> {typeData.type.name} </Text>
            ))}
          </Text>
        </View>

        <TouchableOpacity onPress={abilit}>
          <View style={styles.textContainer}>
            <Text>Abilities</Text>
          </View>
        </TouchableOpacity>

    

        <TouchableOpacity onPress={mov}>
          <View style={styles.textContainer}>
            <Text>Moves</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.containerMoves}>
          {!opn ? (
            <></>
          ) : (
            <>
              {!muv ? (
                <></>
              ) : (
                <>
                  <ScrollView>
                    {moves.map((moveData, key) => (
                      <Text key={key}>{moveData.move.name} </Text>
                    ))}
                  </ScrollView>
                </>
              )}

              <>
                {abilities.map((abilitData, key) => (
                  <Text key={key}>{abilitData.ability.name}</Text>
                ))}
              </>
            </>
          )}
        </View>
      </View>
    </SafeAreaView>
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
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  container2Image: {
    backgroundColor: "red",
    flexDirection: "row",
    margin: 10,
    borderRadius: 75,
    width: 120,
    height: 120,
    justifyContent: "center",
    alignContent: "center",
  },
  containerAbilitis: {
    justifyContent: "center",
    backgroundColor: "white",
  },
  containerMoves: {
    height: 525,
  },

  textContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
    height: 40,
    margin: 2.4,
    borderRadius: 75,
  },
  textContainers: {
    width: 150,
    paddingLeft: 10,
    paddingTop: 5,
    backgroundColor: "pink",
  },
});
export default Tela3;
