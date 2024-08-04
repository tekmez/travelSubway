import { FlatList, ScrollView, Text, View } from "react-native";
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
          <FlatList
            data={subwayLines}
            renderItem={({ item }) => (
              <Card key={item.name} name={item.name} title={item.title} />
            )}
            keyExtractor={(_, idx) => idx.toString()}
            contentContainerStyle={{ paddingBottom: 200 }}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </SafeView>
    </GradientBlur>
  );
};

export default SubwayList;
