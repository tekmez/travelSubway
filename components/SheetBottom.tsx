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
const SheetBottom = forwardRef<any, any>((props, ref) => {
  const { i18n, t } = useTranslation();
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
  const changeLanguage = async (lang: string) => {
    await AsyncStorage.setItem("language", lang);
    i18n.changeLanguage(lang);
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
                onPress={() => changeLanguage(item.lng)}
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
