import {
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View,
  } from "react-native";
  import React, { useState } from "react";
  import IconAdapter from "../helpers/iconAdapter";
  import { scale } from "../helpers/Dimension";
import { COLORS } from "../helpers/colors";
import { KeyboardType } from "../helpers/constants";
  
  type InputProps = {
    placeholder?: string;
    value: string|undefined;
    isIcon?: boolean;
    mainStyle?: any;
    onChangeText: (text: string) => void;
    textStyle?: any;
    secureEntry?: boolean;
    keyBoardType?:KeyboardType
  };
  
  const InputComponent: React.FC<InputProps> = ({
    placeholder = "Enter Details",
    value,
    isIcon = false,
    mainStyle,
    onChangeText,
    textStyle,
    secureEntry = false,
    keyBoardType='default'
  }) => {
    const [isShowPassword, setIsShowPassword] = useState(false);
  
    const handleToggleVisibility = () => {
      setIsShowPassword(!isShowPassword);
    };
  
    return (
      <View style={[styles.inputMainView, mainStyle]}>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          style={[styles.inputField, textStyle]}
          secureTextEntry={secureEntry && !isShowPassword}
          placeholderTextColor={COLORS.secondarColors}
          textContentType='password'
          keyboardType={keyBoardType}
        />
        {isIcon && secureEntry && (
         
            <IconAdapter
              name={isShowPassword ? "eye-off" : "eye"}
              family="Ionicons"
              size={24}
              onPress={handleToggleVisibility}
              color={COLORS.secondarColors}
            />
      
        )}
      </View>
    );
  };
  
  export default InputComponent;
  
  const styles = StyleSheet.create({
    inputMainView: {
      borderWidth: 2,
      borderColor: COLORS.secondarColors,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: scale(6),
      borderRadius: scale(8),
      marginVertical: scale(12),
      paddingVertical:scale(4)
    },
    inputField: {
   
      flex:1,
      paddingVertical: scale(8),
      paddingHorizontal: scale(10),
      fontSize: 16,
     
    },
  });
  