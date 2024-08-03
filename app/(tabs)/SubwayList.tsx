import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GradientBlur from "@/components/GradientBlur";
import SafeView from "@/components/SafeView";

const SubwayList = () => {
  return (
    <GradientBlur>
      <SafeView isMain={false}>
        <Text className="text-white">Explore All Metro Lines</Text>
        <Text className="text-white">
          Never miss any metro lines. Discover new routes everyday, right here
          on MetroQuest.
        </Text>
      </SafeView>
    </GradientBlur>
  );
};

export default SubwayList;
