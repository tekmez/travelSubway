import React from "react";
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#000",
        tabBarStyle: {
          paddingTop: 7,
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          borderLeftWidth: 0.2,
          borderRightWidth: 0.2,
          position: "absolute",
          overflow: "hidden",
        },
      }}
    >
      <Tabs.Screen
        name="FindRoute"
        options={{
          title: "Find Route",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "subway" : "subway-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="subway"
        options={{
          title: "Subway List",
          tabBarIcon: ({ color, focused }) => (
            <Entypo name="list" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
