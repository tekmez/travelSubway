import { ScrollView, Text, View } from "react-native";
import React from "react";
import GradientBlur from "@/components/GradientBlur";
import SafeView from "@/components/SafeView";
import Card from "@/components/Card";
import { subwayLines } from "@/constants/SubwayLines";

const SubwayList = () => {
  return (
    <GradientBlur>
      <SafeView isMain={false}>
        <View className="p-4">
          <Text className="text-white text-center font-bold text-3xl">
            Explore All Metro Lines
          </Text>
          <Text className="text-white text-center text-lg mb-2">
            Never miss any metro lines. Discover new routes everyday, right here
            on Metro Quest.
          </Text>
          <ScrollView>
            <View className="flex-row flex-wrap items-center justify-center">
              {subwayLines.map((line) => (
                <Card key={line.name} title={line.name} />
              ))}
            </View>
          </ScrollView>
        </View>
      </SafeView>
    </GradientBlur>
  );
};

export default SubwayList;
