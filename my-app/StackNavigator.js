import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Sos from "./Screens/Sos";
import Dashboard from "./Screens/Dashboard";
import Nutrients from "./Screens/Nutrients";
import Community from "./Screens/Community";
import Tracker from "./Screens/Tracker";
import { NavigationContainer } from "@react-navigation/native";
const StackNavigator = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
  const CustomTabBarButton = ({ children, onPress }) => (
    <TouchableOpacity
      style={{
        top: -15,
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={onPress}
    >
      <View
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
          backgroundColor: "#e32f45",
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
  const BottomTabs = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            elevation: 0,
            backgroundColor: "white",
            borderRadius: 15,
            height: 90,
          },
        }}
      >
        <Tab.Screen
          name="Schemes"
          component={Dashboard}
          options={{
            tabBarLabel: "Schemes",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: 10,
                }}
              >
                <Image
                  source={require("./assets/paper_2541979.png")}
                  resizeMode="contain"
                  style={{
                    width: 27,
                    height: 27,
                    tintColor: focused ? "#e32f45" : "#748c94",
                  }}
                />
                <Text
                  style={{
                    color: focused ? "#e32f45" : "#748c94",
                    fontSize: 13,
                    paddingTop: 7,
                  }}
                >
                  Schemes
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Tracker"
          component={Tracker}
          options={{
            tabBarLabel: "Tracker",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: 10,
                }}
              >
                <Image
                  source={require("./assets/gps_5287771.png")}
                  resizeMode="contain"
                  style={{
                    width: 27,
                    height: 27,
                    tintColor: focused ? "#e32f45" : "#748c94",
                  }}
                />
                <Text
                  style={{
                    color: focused ? "#e32f45" : "#748c94",
                    fontSize: 13,
                    paddingTop: 7,
                  }}
                >
                  Tracker
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Education"
          component={Sos}
          options={{
            tabBarLabel: "Education",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Image
                source={require("./assets/sos-warning.png")}
                resizeMode="contain"
                style={{
                  width: 40,
                  height: 40,
                  tintColor: focused ? "white" : "white",
                }}
              />
            ),
            tabBarButton: (props) => (
              // Return the CustomTabBarButton component
              <CustomTabBarButton {...props} />
            ),
          }}
        />
        <Tab.Screen
          name="Community"
          component={Community}
          options={{
            tabBarLabel: "Community",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: 10,
                }}
              >
                <Image
                  source={require("./assets/people_1769041.png")}
                  resizeMode="contain"
                  style={{
                    width: 27,
                    height: 27,
                    tintColor: focused ? "#e32f45" : "#748c94",
                  }}
                />
                <Text
                  style={{
                    color: focused ? "#e32f45" : "#748c94",
                    fontSize: 13,
                    paddingTop: 7,
                  }}
                >
                  Community
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Nutrients"
          component={Nutrients}
          options={{
            tabBarLabel: "Nutrients",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: 10,
                }}
              >
                <Image
                  source={require("./assets/expenses_5501384.png")}
                  resizeMode="contain"
                  style={{
                    width: 27,
                    height: 27,
                    tintColor: focused ? "#e32f45" : "#748c94",
                  }}
                />
                <Text
                  style={{
                    color: focused ? "#e32f45" : "#748c94",
                    fontSize: 13,
                    paddingTop: 7,
                  }}
                >
                  Expenses
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
