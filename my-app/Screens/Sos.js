import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Alert,
  Image,
  Pressable,
} from "react-native";
import React, { useEffect } from "react";
import { Accelerometer } from "expo-sensors";
import call from "react-native-phone-call";
const Sos = () => {
  useEffect(() => {
    const subscription = Accelerometer.addListener(({ x, y, z }) => {
      const threshold = 1.5;
      const acceleration = Math.sqrt(x * x + y * y + z * z);
      if (acceleration > threshold) {
        Alert.alert("SOS Detected", "All of your contacts have been informed", [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          {
            text: "Call Emergency No",
            onPress: () => {
              console.log("OK Pressed");
              const args = { number: "112", prompt: true };
              call(args).catch(console.error);
            },
          },
        ]);
        console.log("Shake detected!");
      }
    });
    return () => {
      subscription.remove();
    };
  }, []);
  return (
    <SafeAreaView>
      <View style={{ margin: 20 }}>
        <Text style={{ fontSize: 27, fontWeight: "700" }}>
          What Help Do You Need?
        </Text>
        <View style={{ display: "flex", alignItems: "center", paddingTop: 30 }}>
          <Image
            source={require("../assets/Ambulance-amico.png")} // Adjust the path to your image
            style={styles.image}
          />
        </View>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 40,
            gap: 30,
          }}
        >
          <Pressable
            style={{
              width: 350,
              height: 80,
              backgroundColor: "lightblue",
              borderRadius: 20,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Text style={{ paddingLeft: 20, fontSize: 18, fontWeight: "700" }}>
              Call an Ambulance
            </Text>
          </Pressable>
          <Pressable
            style={{
              width: 350,
              height: 80,
              backgroundColor: "lightblue",
              borderRadius: 20,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Text style={{ paddingLeft: 20, fontSize: 18, fontWeight: "700" }}>
              Inform Nearby Hospital
            </Text>
          </Pressable>
          <Pressable
            style={{
              width: 350,
              height: 80,
              backgroundColor: "lightblue",
              borderRadius: 20,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Text style={{ paddingLeft: 20, fontSize: 18, fontWeight: "700" }}>
              Call Your Emergency Conatct
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Sos;

const styles = StyleSheet.create({
  image: {
    width: 200, // Set the desired width
    height: 200, // Set the desired height
  },
});
