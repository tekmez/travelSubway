import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import GradientBlur from "@/components/GradientBlur";
import SafeView from "@/components/SafeView";
import SearchableInput from "@/components/SearchableInput";
import useRouteFinder from "@/hooks/useRouteFinder";
import Feather from "@expo/vector-icons/Feather";
import { BlurView } from "expo-blur";
const FindRoute = () => {
  const [entrance, setEntrance] = useState("");
  const [exit, setExit] = useState("");
  const [error, setError] = useState("");
  const [routes, setRoute] = useState<any>(null);
  // useEffect(() => {
  //   if (entrance.trim() === "" || exit.trim() === "") return;
  //   if (entrance === exit) {
  //     setError("Entrance and exit cannot be the same");
  //   } else {
  //     setError("");
  //   }
  // }, [entrance, exit]);

  const onPress = () => {
    if (entrance.trim() === "" || exit.trim() === "") {
      setError("Please fill in both entrance and exit");
      return;
    }
    if (entrance === exit) {
      setError("Entrance and exit cannot be the same");
      return;
    }
    setError("");
    if (error) {
      return;
    }

    const start = entrance.trim();
    const end = exit.trim();
    const route = useRouteFinder(start, end);
    setRoute(route);
  };
  return (
    <GradientBlur>
      <SafeView isMain={false}>
        <View className="p-6">
          <View className="gap-4 mb-6">
            <Text className="text-white text-center font-bold text-3xl">
              Adventurous Journey with Metro Quest
            </Text>
            <Text className="text-white text-center text-lg">
              Pick your start and finish destinations from the drop-down menu
              and leave the rest to us.
            </Text>
          </View>
          <View>
            <SearchableInput
              label="Entrance"
              value={entrance}
              onChange={setEntrance}
              placeholder="Search for a subway entrance"
            />
            <SearchableInput
              label="Exit"
              value={exit}
              onChange={setExit}
              placeholder="Search for a subway exit"
            />
          </View>
          {error && <Text className="text-red-500 text-center">{error}</Text>}
          <TouchableOpacity
            className="bg-white h-12 justify-center items-center rounded-lg mt-2"
            onPress={onPress}
          >
            <Text className="font-semibold text-lg">Find Route</Text>
          </TouchableOpacity>
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
                      Hat: {line}
                    </Text>

                    <View className="flex-row justify-center flex-wrap">
                      {routes.stations[index].map(
                        (station: any, stationIndex: any) => (
                          <Text className="text-white" key={stationIndex}>
                            {station}
                            {stationIndex < routes.stations[index].length - 1 &&
                              " - "}
                          </Text>
                        )
                      )}
                    </View>
                    {index < routes.transfers.length && (
                      <Text className="text-white text-center">
                        Transfer: {routes.lines[index + 1]} -{" "}
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
  );
};

export default FindRoute;
