import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import SafeView from "@/components/SafeView";
import GradientBlur from "@/components/GradientBlur";
import { router } from "expo-router";
const App = () => {
  return (
    <View className="flex-1">
      <StatusBar style="light" />
      <GradientBlur>
        <SafeView isMain={true}>
          <View className="p-6 gap-6">
            <Text className="text-white text-center font-bold text-5xl">
              Welcome to Metro Quest
            </Text>
            <Text className="text-white text-center text-lg">
              Our clever algorithm will create the best route for you. No more
              puzzling over complex metro maps.
            </Text>
          </View>
        </SafeView>
        <TouchableOpacity
          className="bg-white h-12 justify-center rounded-lg mx-6 mb-16"
          onPress={() => router.push("/FindRoute")}
        >
          <Text className="text-center text-xl font-semibold">Find Route</Text>
        </TouchableOpacity>
      </GradientBlur>
    </View>
  );
};

export default App;
