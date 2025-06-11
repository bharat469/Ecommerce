import {Dimensions,PixelRatio} from 'react-native'

const {width:SCREEN_WIDTH,height:SCREEN_HEIGHT} = Dimensions.get('window')


const BASE_WIDTH = 375
const BASE_HEIGHT = 812

export const scale = (size:number)=>(SCREEN_WIDTH/BASE_WIDTH)* size

export const verticalScale = (size:number)=>(SCREEN_HEIGHT/BASE_HEIGHT)*size

export const moderateScale = (size:number,factor=0.5)=> size +(scale(size)-size)*factor;

export const SCREEN={
    WIDTH:SCREEN_WIDTH,
    HEIGHT:SCREEN_HEIGHT,
    isSmallDevice:SCREEN_WIDTH<360,
    isTablet:SCREEN_WIDTH>768
}

export const pixelRatio = PixelRatio.get()