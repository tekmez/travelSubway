import { ScrollView, Text, View } from "react-native";
import React from "react";
import GradientBlur from "@/components/GradientBlur";
import SafeView from "@/components/SafeView";
import Card from "@/components/Card";
import { subwayLines } from "@/constants/SubwayLines";
import { useTranslation } from "react-i18next";

const SubwayList = () => {
  const { t } = useTranslation();

  return (
    <GradientBlur>
      <SafeView isMain={false}>
        <ScrollView className="p-4">
          <Text className="text-white text-center font-bold text-3xl">
            {t("Explore All Metro Lines")}
          </Text>
          <Text className="text-white text-center text-lg">
            {t(
              "Never miss any metro lines. Discover new routes everyday, right here on Metro Quest"
            )}
          </Text>
          <Text className="text-white text-center mb-2">
            {t(
              "Click on any of the metro lines to view the stations and their details"
            )}
          </Text>
          <View className="pb-[100px]">
            {subwayLines.map((item, idx) => (
              <Card key={idx} name={item.name} title={item.title} />
            ))}
          </View>
        </ScrollView>
      </SafeView>
    </GradientBlur>
  );
};

export default SubwayList;
