import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Redirect, Tabs, useRouter } from "expo-router";
import { ROUTE_NAME } from "../../src/helpers/routes";
import { COLORS } from "../../src/helpers/colors";
import IconAdapter from "../../src/helpers/iconAdapter";
import AsyncStorage from "@react-native-async-storage/async-storage";


const _layout = () => {
  const router = useRouter()
  let Authenticated = undefined

  if(Authenticated===undefined){
    return <Redirect href='/(beforeAuth)/login'/>
  }


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
