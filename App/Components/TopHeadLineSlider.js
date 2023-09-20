import { View, Text, FlatList, Image, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import { TouchableOpacity } from 'react-native'
import Colors from '../Shared/Colors'
import { useNavigation } from '@react-navigation/native'

const TopHeadLineSlider = ({newsList}) => {

  const navigation = useNavigation()

  return (
    <View style={{marginTop: 10 }}>
      <FlatList
              data={newsList}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({item})=>(
                <TouchableOpacity onPress={()=>navigation.navigate('read-news', {news:item})}
                    style={{
                        width: Dimensions.get('screen').width*0.80,
                        marginRight: 15
                    }}>
                    <Image source={{uri:item.urlToImage}} 
                    style={{height: Dimensions.get('screen').width*0.77, borderRadius: 10,}} />
                    <Text numberOfLines={3}
                        style={{marginTop:10, fontSize:23, fontWeight:'bold'}}>{item.title}</Text>
                    <Text style={{marginTop:5, color:Colors.primary}}>{item?.source?.name}</Text>
                </TouchableOpacity>
                )}
              />
    </View>
  )
}

export default TopHeadLineSlider