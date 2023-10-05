import React from "react";
import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import * as Progress from "react-native-progress";
import { BarChart } from "react-native-chart-kit";

const Nutrients = () => {
  const dataNutrition = {
    labels: ["2-oct", "3-oct", "4-oct", "5-oct"],
    datasets: [
      {
        data: [7.1, 7, 7, 6],
      },
    ],
  };

  const dataSleep = {
    labels: ["2-oct", "3-oct", "4-oct", "5-oct"],
    datasets: [
      {
        data: [3, 4, 2, 5],
      },
    ],
  };

  const screenWidth = 350;
  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    decimalPlaces: 1,
    color: (opacity = 1) => `rgba(30, 144, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    yAxisLabel: "₹",
    yAxisSuffix: "",
    min: 0,
    max: 3,
    stepSize: 3,
  };

  return (
    <ScrollView>
      <Pressable
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "Poppins",
            fontSize: 20,
            fontWeight: "bold",
            marginTop: 60,
          }}
        >
          Daily Expenses
        </Text>
        <Text
          style={{
            fontFamily: "Poppins",
            fontSize: 16,
            fontWeight: "bold",
            marginTop: 30,
            marginBottom: 10,
            color: "#2b6747",
          }}
        >
          September 2023
        </Text>
        <Pressable
          style={{
            display: "flex",
            backgroundColor: "#F1C93B",
            borderRadius: 20,
            marginBottom: 35,
            width: 320,
            padding: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Pressable
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Text style={{ fontFamily: "Poppins", fontWeight: "bold" }}>
              Left to Spend
            </Text>
            <Text
              style={{
                fontFamily: "Poppins",
                marginLeft: 60,
                fontWeight: "bold",
              }}
            >
              Monthly Balance
            </Text>
          </Pressable>

          <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: "Poppins", fontWeight: "bold" }}>
              Nutrition
            </Text>
            <Progress.Bar
              borderColor="transparent"
              animationType="spring"
              unfilledColor="white"
              color="red"
              progress={0.3}
              width={255}
              height={13}
              borderRadius={20}
              borderWidth={-1}
              style={{ marginTop: 5 }}
            />
          </View>

          <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: "Poppins", fontWeight: "bold" }}>
              Sleep
            </Text>
            <Progress.Bar
              borderColor="transparent"
              animationType="spring"
              unfilledColor="white"
              color="blue"
              progress={0.3}
              width={255}
              height={13}
              borderRadius={20}
              borderWidth={-1}
              style={{ marginTop: 5 }}
            />
          </View>

          <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: "Poppins", fontWeight: "bold" }}>
              Steps
            </Text>
            <Progress.Bar
              borderColor="transparent"
              animationType="spring"
              unfilledColor="white"
              color="green"
              progress={0.3}
              width={255}
              height={13}
              borderRadius={20}
              borderWidth={-1}
              style={{ marginTop: 5 }}
            />
          </View>
        </Pressable>
        {/* First BarChart */}
        <Text>Past 5 days Sleep Cycle </Text>
        <BarChart
          style={{ paddingBottom: 30 }}
          data={dataNutrition}
          width={screenWidth}
          height={370}
          chartConfig={chartConfig}
          verticalLabelRotation={30}
          yAxisLabel=""
          yAxisSuffix="%"
          min={0}
          max={3}
        />

        {/* Second BarChart */}
        <Text>Past 5 days Nutrients intake Cycle </Text>
        <BarChart
          style={{}}
          data={dataSleep}
          width={screenWidth}
          height={370}
          chartConfig={chartConfig}
          verticalLabelRotation={30}
          yAxisLabel=""
          yAxisSuffix="%"
          min={0}
          max={5}
        />
      </Pressable>
    </ScrollView>
  );
};

export default Nutrients;

const styles = StyleSheet.create({});
