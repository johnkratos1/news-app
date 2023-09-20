import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import Colors from '../Shared/Colors'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import { Share } from 'react-native'
import * as WebBrowser from 'expo-web-browser'
import { ScrollView } from 'react-native-gesture-handler'

const ReadNews = () => {
  const news = useRoute().params.news
  const navigation = useNavigation()

  const ShareNews=()=>{
    Share.share({
      message:news.title+"\nRead More"+news.description
    })
  }

  return (
    <ScrollView style={{backgroundColor: Colors.white, flex: 1}}>
      <View style={{marginTop:10, marginBottom:10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>

        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Ionicons name='arrow-back' size={28} color='black' />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>ShareNews()}>
          <Ionicons name='share-outline' size={28} color='black' />
        </TouchableOpacity>
      </View>

      <Image source={{uri:news.urlToImage}} style={{width:'100%', height: 300, borderRadius:15}} />
      <Text style={{marginTop:10, color:Colors.primary, fontSize:16}}>{news.source.name}</Text>
      <Text style={{marginTop:10, fontSize:22, fontWeight: 'bold'}}>{news.title}</Text>
      <Text style={{marginTop:10, fontSize:20,color:Colors.gray, lineHeight: 30}}>{news.description}</Text>


      <TouchableOpacity onPress={()=>WebBrowser.openBrowserAsync(news.url)}>
        <Text style={{marginTop:10, color:Colors.primary, fontSize:16, fontWeight: 'bold'}}>Read More</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default ReadNews