import React from "react";
import { Stack } from "expo-router";
import "@/i18n/i18n";
import { GeneralProvider } from "@/store/generalStore";
export default function RootLayout() {
  return (
    <GeneralProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </GeneralProvider>
  );
}
