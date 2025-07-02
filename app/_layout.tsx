import { Redirect, Slot, Stack, useRouter, useSegments } from "expo-router";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { useOpenSansFonts } from "@/src/helpers/fontFamily";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function RootLayout() {
  const [fontLoaded] = useOpenSansFonts();
  if (!fontLoaded) return null;
  return (
    <SafeAreaProvider>
      <ExpoStatusBar style="auto" />
      <SafeAreaView style={{ flex: 1 }}>
        <Slot/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
