import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useRef, useState } from "react";
import GradientBlur from "@/components/GradientBlur";
import SafeView from "@/components/SafeView";
import useRouteFinder from "@/hooks/useRouteFinder";
import Feather from "@expo/vector-icons/Feather";
import { BlurView } from "expo-blur";
import { useTranslation } from "react-i18next";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import SheetBottomRoute from "@/components/SheetBottomRoute";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useGeneralContext } from "@/store/generalStore";
import SelectableStation from "@/components/SelectableStation";
const FindRoute = () => {
  const { t } = useTranslation();
  const { setStationFor } = useGeneralContext();
  const sheetRef = useRef<BottomSheetModal>(null);
  const [entrance, setEntrance] = useState("");
  const [exit, setExit] = useState("");
  const [error, setError] = useState("");
  const [routes, setRoute] = useState<any>(null);

  const onPressFindRoute = () => {
    if (entrance.trim() === "" || exit.trim() === "") {
      setError("Please fill in both entrance and exit");
      setRoute(null);
      return;
    }
    if (entrance === exit) {
      setError("Entrance and exit cannot be the same");
      setRoute(null);
      return;
    }
    setError("");
    const start = entrance.trim();
    const end = exit.trim();
    const route = useRouteFinder(start, end);
    setRoute(route);
  };
  const handlePresentModalPress = (selected: string) => {
    setStationFor?.(selected);
    sheetRef.current?.present();
  };
  return (
    <GestureHandlerRootView className="flex-1">
      <GradientBlur>
        <SafeView isMain={false}>
          <View className="p-6">
            <View className="gap-4 mb-6">
              <Text className="text-white text-center font-bold text-3xl">
                {t("Adventurous Journey with Metro Quest")}
              </Text>
              <Text className="text-white text-center text-lg">
                {t(
                  "Write the start and end points below and leave the rest to us"
                )}
              </Text>
            </View>
            <View>
              <SelectableStation
                onPress={() => handlePresentModalPress("entrance")}
                label="Entrance"
                station={entrance}
              />
              <SelectableStation
                onPress={() => handlePresentModalPress("exit")}
                label="Exit"
                station={exit}
              />
            </View>
            <TouchableOpacity
              className="bg-white h-12 justify-center items-center rounded-lg mt-2"
              onPress={onPressFindRoute}
            >
              <Text className="font-semibold text-lg">{t("Find Route")}</Text>
            </TouchableOpacity>
            {error && (
              <Text className="text-red-500 text-center text-lg mt-4">
                {t(error)}
              </Text>
            )}
            {routes && (
              <ScrollView
                contentContainerStyle={{
                  paddingTop: 16,
                  paddingBottom: 500,
                }}
              >
                {routes.lines.map((line: any, index: any) => (
                  <View key={index}>
                    <BlurView
                      key={`${line}-${index}`}
                      className="p-4 rounded-lg my-2 overflow-hidden"
                      intensity={60}
                      tint="dark"
                    >
                      <Text className="text-white text-center text-lg">
                        {t("Line")}: {line}
                      </Text>

                      <View className="flex-row justify-center flex-wrap">
                        {routes.stations[index].map(
                          (station: any, stationIndex: any) => (
                            <Text className="text-white" key={stationIndex}>
                              {station}
                              {stationIndex <
                                routes.stations[index].length - 1 && " - "}
                            </Text>
                          )
                        )}
                      </View>
                      {index < routes.transfers.length && (
                        <Text className="text-white text-center">
                          {t("Transfer")}: {routes.lines[index + 1]} -{" "}
                          {routes.transfers[index]}
                        </Text>
                      )}
                    </BlurView>
                    {index !== routes.lines.length - 1 && (
                      <View className="items-center">
                        <Feather name="arrow-down" size={32} color="white" />
                      </View>
                    )}
                  </View>
                ))}
              </ScrollView>
            )}
          </View>
        </SafeView>
      </GradientBlur>
      <SheetBottomRoute
        ref={sheetRef}
        setEntrance={setEntrance}
        setExit={setExit}
      />
    </GestureHandlerRootView>
  );
};

export default FindRoute;
