import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Fontisto from "@expo/vector-icons/Fontisto";
import Foundation from "@expo/vector-icons/Foundation";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Octicons from "@expo/vector-icons/Octicons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import Zocial from "@expo/vector-icons/Zocial";
import { COLORS } from "./colors";

type IconFamilyMap = {
  AntDesign: typeof AntDesign;
  Entypo: typeof Entypo;
  EvilIcons: typeof EvilIcons;
  Feather: typeof Feather;
  FontAwesome: typeof FontAwesome;
  FontAwesome5: typeof FontAwesome5;
  Fontisto: typeof Fontisto;
  Foundation: typeof Foundation;
  Ionicons: typeof Ionicons;
  MaterialCommunityIcons: typeof MaterialCommunityIcons;
  MaterialIcons: typeof MaterialIcons;
  Octicons: typeof Octicons;
  SimpleLineIcons: typeof SimpleLineIcons;
  Zocial: typeof Zocial;
};

const iconFamilies: IconFamilyMap = {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
};

type IconProps = {
  family: keyof typeof iconFamilies;
  name: string;
  size?: number;
  color?: string;
  onPress?:()=>void;
  style?:any
};

const IconAdapter: React.FC<IconProps> = ({
  family,
  name,
  size = 24,
  color = COLORS.blackColor,
  style,
  onPress=()=>{}
}) => {
  const IconComponent = iconFamilies[family];
  if (!IconComponent) {
    return <Foundation name="alert" size={24} color="red" />;
  }
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <IconComponent name={name as any} size={size} color={color} style={style} />
    </TouchableWithoutFeedback>
  );
};

export default IconAdapter;

const styles = StyleSheet.create({});
