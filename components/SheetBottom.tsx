import React, { forwardRef } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import Icon from "react-native-ico-flags";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTranslation } from "react-i18next";
import { useGeneralContext } from "@/store/generalStore";
type itemTypes = {
  name: string;
  icon: string;
  lng: string;
};
const SheetBottom = forwardRef<any, any>((props, ref) => {
  const { i18n } = useTranslation();
  const { setLng } = useGeneralContext();
  const country = [
    {
      name: "English",
      icon: "united-kingdom",
      lng: "en",
    },
    {
      name: "Turkish",
      icon: "turkey",
      lng: "tr",
    },
    {
      name: "German",
      icon: "germany",
      lng: "de",
    },
    {
      name: "Russian",
      icon: "russia",
      lng: "ru",
    },
  ];
  const changeLanguage = async (item: itemTypes) => {
    await AsyncStorage.setItem("language", item.lng);
    i18n.changeLanguage(item.lng);
    setLng(item);
    ref?.current?.dismiss();
  };
  return (
    <BottomSheetModalProvider>
      <BottomSheetModal ref={ref} index={1} snapPoints={[150, 150]}>
        <BottomSheetView>
          <View className="flex-row justify-center">
            {country.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => changeLanguage(item)}
              >
                <View key={`${item}-${index}`} className="items-center p-4">
                  <Icon name={item.icon} width={50} height={50} />
                  <Text>{item.name}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </BottomSheetView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
});

export default SheetBottom;
