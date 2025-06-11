import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ImageAdapter from "../helpers/imageAdapter";
import { moderateScale, scale, verticalScale } from "../helpers/Dimension";
import IconAdapter from "../helpers/iconAdapter";
import { COLORS } from "../helpers/colors";
import { FONT } from "../helpers/fontFamily";

const HeaderComponent = () => {
  return (
    <View style={styles.headerStyle}>
      <View style={styles.leftContainer}>
        <ImageAdapter style={styles.imageStyle} />
        <View style={styles.titleText}>
          <Text style={styles.headerText}>Hi ,Jonathan</Text>
          <Text style={styles.constantStyle}>Let's go shopping</Text>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <IconAdapter family="FontAwesome" name="search" style={{marginHorizontal:scale(12)}} color={COLORS.primaryColors}/>
        <IconAdapter family="Entypo" name="shopping-cart" color={COLORS.primaryColors}/>
      </View>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  headerStyle:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginHorizontal:scale(12),
    marginVertical:verticalScale(6)
  },
    imageStyle: {
    width: scale(40),
    height: verticalScale(40),
    borderRadius: moderateScale(50),
  },
  leftContainer:{
    flexDirection:'row',
    alignItems:'center'
  },
  titleText:{
    marginHorizontal:scale(12)
  },
  rightContainer:{
    flexDirection:'row',
    alignItems:'center'
  },
  headerText:{
    fontFamily:FONT.bold,
    fontSize:moderateScale(15),
    color:COLORS.primaryColors,
    letterSpacing:0.1
  },
  constantStyle:{
    fontFamily:FONT.bold,
    fontSize:moderateScale(12),
    color:COLORS.secondarColors,
    letterSpacing:0.1
  }
});
