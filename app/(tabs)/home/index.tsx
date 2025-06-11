import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderComponent from '@/src/components/header'
import { COLORS } from '@/src/helpers/colors'

const Home = () => {
  return (
    <View style={styles.homeContainer}>
    <HeaderComponent/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  homeContainer:{
    flex:1,
    backgroundColor:COLORS.whiteColor
  }
})