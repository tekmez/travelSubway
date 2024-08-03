import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import GradientBlur from "@/components/GradientBlur";
import SafeView from "@/components/SafeView";
import SearchableInput from "@/components/SearchableInput";
import useRouteFinder from "@/hooks/useRouteFinder";

const FindRoute = () => {
  const [entrance, setEntrance] = useState("");
  const [exit, setExit] = useState("");
  const [error, setError] = useState("");
  const [routes, setRoute] = useState<any>([]);
  useEffect(() => {
    if (entrance === exit) {
      setError("Entrance and exit cannot be the same");
    } else {
      setError("");
    }
  }, [entrance, exit]);

  const onPress = () => {
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
        <Text className="text-white text-center font-bold text-3xl">
          Adventurous Journey with Metro Quest
        </Text>
        <Text className="text-white text-center text-lg">
          Pick your start and finish destinations from the drop-down menu and
          leave the rest to us.
        </Text>
        {/* <SearchableInput
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
        /> */}
      </SafeView>
    </GradientBlur>
  );
};
export default FindRoute;
