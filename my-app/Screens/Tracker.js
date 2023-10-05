import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  Image,
} from "react-native";
import React, { useState } from "react";
import CheckBox from "../components/Checkbox";

const Tracker = () => {
  const [aadhar, setAadhar] = useState(false);
  const [bpl, setBpl] = useState(false);
  const [preg, setPreg] = useState(false);
  const [bp, setBp] = useState(false);
  return (
    <SafeAreaView
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: "700",
          paddingTop: 20,
          paddingBottom: 20,
        }}
      >
        Daily Tracker
      </Text>
      <Image
        style={{ width: 150, height: 150 }}
        source={require("../assets/refresh_545661.png")}
      />
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your Hours of Sleep"
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Your Calorie intake"
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your average Heart Rate"
          />
        </View>
        <View style={styles.dropDownContainer}></View>
        <CheckBox
          title="Did you do yoga today ?"
          onPress={() => setAadhar(!aadhar)}
          isChecked={aadhar}
        />
        <CheckBox
          title="Did you eat a heavy breakfast ?"
          onPress={() => setBpl(!bpl)}
          isChecked={bpl}
        />
        <CheckBox
          title="Did you drink 1 litre of water ?"
          onPress={() => setPreg(!preg)}
          isChecked={preg}
        />
        <CheckBox
          title="Are you in any discomfort ?"
          onPress={() => setBp(!bp)}
          isChecked={bp}
        />
      </View>
    </SafeAreaView>
  );
};

export default Tracker;

const styles = StyleSheet.create({
  container: {
    height: 350,
  },
  inputContainer: {
    width: 330,
    marginTop: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "lightgray",
    borderRadius: 10,
    marginTop: 5,
    paddingLeft: 10,
    marginBottom: 20,
    backgroundColor: "white",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 2,
          height: 7,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  dropDownContainer: {
    width: 300,
    borderColor: "lightgray",
    marginTop: 10,

    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 2,
          height: 7,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  dropDown: {
    borderWidth: 0,
    borderRadius: 10,
  },
  dropDownLabel: {
    fontSize: 16,
    color: "black",
  },
});
