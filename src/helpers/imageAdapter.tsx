import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { STATIC_IMAGE_LINKS } from './imageUrl'

type ImageProps={
    source?:string,
    style:any,

}

const ImageAdapter:React.FC<ImageProps> = ({source=STATIC_IMAGE_LINKS.ProfilePic,style}) => {
  return (
 <Image
 source={source}
 style={style}
 resizeMode='cover'
 />
  )
}

export default ImageAdapter

const styles = StyleSheet.create({})