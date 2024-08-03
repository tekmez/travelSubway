import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GradientBlur from "@/components/GradientBlur";
import SafeView from "@/components/SafeView";

const SubwayList = () => {
  return (
    <GradientBlur>
      <SafeView isMain={false}>
        <Text className="text-white">Subway list</Text>
      </SafeView>
    </GradientBlur>
  );
};

export default SubwayList;
