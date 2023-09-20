import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Colors from '../Shared/Colors'
import { useNavigation } from '@react-navigation/native'

const HeadlineList = ({newsList}) => {
  const navigation = useNavigation()
  return (
    <View>
        <FlatList
              data={newsList}
               renderItem={({item})=>(
                <View>
                <TouchableOpacity onPress={()=>navigation.navigate('read-news', {news:item})}
                  style={{marginTop:10, display:'flex', flexDirection:'row'}}>
                    <Image source={{uri:item.urlToImage}} 
                    style={{height: 130, width: 130, borderRadius: 15}} />
                    <View style={{marginRight: 135, marginLeft: 10}}>
                        <Text numberOfLines={4}
                            style={{marginTop:10, fontSize:18, fontWeight:'bold'}}>{item.title}</Text>
                        <Text style={{marginTop:6, color:Colors.primary}}>{item?.source?.name}</Text>
                    </View>
                </TouchableOpacity>
                <View style={{height:2, backgroundColor:Colors.lightGray, marginTop: 10, marginLeft: -20}}></View>
                </View>
                )}
              />
    </View>
  )
}

export default HeadlineList