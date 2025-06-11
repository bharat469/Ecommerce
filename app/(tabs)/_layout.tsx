import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { ROUTE_NAME } from "../../src/helpers/routes";
import { COLORS } from "../../src/helpers/colors";
import IconAdapter from "../../src/helpers/iconAdapter";


const _layout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: COLORS.primaryColors }}>
      <Tabs.Screen
        name={ROUTE_NAME.Home}
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
           <IconAdapter family='Entypo' name="home" size={24} color={color} />
          ),
        }}
      />
  
      <Tabs.Screen
        name={ROUTE_NAME.Myorders}
        options={{
          title: "My Orders",
          tabBarIcon: ({ color }) => (
            <IconAdapter family='Entypo' name="shopping-bag" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name={ROUTE_NAME.wishlist}
        options={{
          title: "Wishlist",
          tabBarIcon: ({ color }) => (
            <IconAdapter family='Entypo' name="heart" size={24} color={color} />
          ),
        }}
      />
          <Tabs.Screen
        name={ROUTE_NAME.Profile}
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <IconAdapter family='Entypo' name="user" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({});
