import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect, Stack } from "expo-router";
import { useEffect, useState } from "react";

export default function BeforeAuthlayout() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | undefined>(
    undefined
  );
  useEffect(() => {
    AsyncStorage.getItem("userToken").then((token) => {
      setIsAuthenticated(!!token);
    });
  }, []);

  if (isAuthenticated === undefined) {
    return <Redirect href={"/(beforeAuth)/login"} />;
  }

  if (isAuthenticated) {
    return <Redirect href="/(tabs)/myOrders" />; // ✅ only after root has mounted
  }

  return (
    <Stack initialRouteName="login">
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="register" options={{ headerShown: false }} />
    </Stack>
  );
}
