import { StyleSheet, Text,TouchableOpacity, View,Image } from 'react-native'
import React from 'react';
import dateFormat from 'dateformat';

const IMAGE_WIDTH = 100;

export default function PostListItem({post}) {
    const {thumbnail,title,createdAt,author} = post

    const getThumbnail = (uri)=>{
        if(uri) return {uri};

        return require('../../assets/blank.jpg')
    }
  return (
    <TouchableOpacity style={{flexDirection:'row'}}>
      <Image source={getThumbnail(thumbnail)} style={{width:IMAGE_WIDTH,height:IMAGE_WIDTH / 1.7}} />
      <View style={{flex:1}}>
          <Text style={{fontSize:16,fontWeight:'700', color:'#383838'}}>{title}</Text>
          <Text style={{fontSize:14, color:'#827E7E'}}>{dateFormat(createdAt,"mediumDate")} - {author}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})