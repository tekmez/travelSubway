import React, { forwardRef, useMemo, useState } from "react";
import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
  BottomSheetTextInput,
} from "@gorhom/bottom-sheet";
import { useTranslation } from "react-i18next";
import { useGeneralContext } from "@/store/generalStore";
import { subwayLines } from "@/constants/SubwayLines";
import { FlatList } from "react-native-gesture-handler";
const SheetBottomRoute = forwardRef<any, any>(
  ({ setEntrance, setExit }, ref) => {
    const { t } = useTranslation();
    const { stationFor } = useGeneralContext();
    const snapPointsAndroid = useMemo(() => ["50%", "50%", "15%"], []);
    const snapPointsIOS = useMemo(() => ["50%", "50%", "25%"], []);

    const [station, setStation] = useState<string>("");
    const subwayStations = subwayLines.map((line) => line.stations).flat();

    const handleSetStation = (selected: string) => {
      if (stationFor === "entrance") {
        setEntrance(selected);
      }
      if (stationFor === "exit") {
        setExit(selected);
      }
      setStation("");
      ref?.current?.dismiss();
    };

    const renderItem = (item: string) => (
      <TouchableOpacity
        onPress={() => {
          handleSetStation(item);
        }}
        className="p-2"
      >
        <Text className="text-lg text-center text-blue-500">{item}</Text>
      </TouchableOpacity>
    );

    const filterData = subwayStations.filter((item) =>
      item.toLowerCase().includes(station.toLowerCase())
    );
    return (
      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={ref}
          index={0}
          snapPoints={
            Platform.OS === "android" ? snapPointsAndroid : snapPointsIOS
          }
        >
          <BottomSheetView>
            <BottomSheetTextInput
              onChangeText={setStation}
              value={station}
              style={styles.textInput}
              placeholder={t("Search for a subway station")}
              placeholderTextColor={"rgba(0,0,0,0.5)"}
            />
          </BottomSheetView>
          <BottomSheetView>
            <FlatList
              data={filterData}
              keyExtractor={(item, idx) => item + idx}
              renderItem={({ item }) => renderItem(item)}
              style={{ height: Dimensions.get("window").height }}
              contentContainerStyle={{
                paddingHorizontal: 24,
                paddingBottom: Platform.OS === "ios" ? 650 : 550,
              }}
              showsVerticalScrollIndicator={false}
            />
          </BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    );
  }
);
const styles = StyleSheet.create({
  textInput: {
    marginHorizontal: 12,
    marginBottom: 12,
    padding: 12,
    borderRadius: 12,
    backgroundColor: "rgba(0,0,0,0.2)",
    color: "black",
    textAlign: "center",
    fontSize: 16,
    height: Platform.OS === "ios" ? 40 : 45,
  },
});
export default SheetBottomRoute;
