import { Text, TouchableOpacity, View } from "react-native";
import React, { useRef } from "react";
import { StatusBar } from "expo-status-bar";
import SafeView from "@/components/SafeView";
import GradientBlur from "@/components/GradientBlur";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import SheetBottom from "@/components/SheetBottom";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import Icon from "react-native-ico-flags";

const App = () => {
  const { t } = useTranslation();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePresentModalPress = () => {
    bottomSheetModalRef.current?.present();
  };

  return (
    <GestureHandlerRootView className="flex-1">
      <StatusBar style="light" />
      <GradientBlur>
        <SafeView isMain={true}>
          <TouchableOpacity
            className="absolute top-14 right-4"
            onPress={handlePresentModalPress}
          >
            <Icon name="united-kingdom" width={40} height={40} />
          </TouchableOpacity>
          <View className="p-6 gap-6">
            <Text className="text-white text-center font-bold text-5xl">
              Welcome to Metro Quest
            </Text>
            <Text className="text-white text-center text-lg">
              {t(
                "Our clever algorithm will create the best route for you. No more puzzling over complex metro maps"
              )}
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
      <SheetBottom ref={bottomSheetModalRef} />
    </GestureHandlerRootView>
  );
};

export default App;
