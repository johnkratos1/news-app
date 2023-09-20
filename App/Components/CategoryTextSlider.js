import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Colors from '../Shared/Colors'

const CategoryTextSlider = ({selectCategory}) => {

    const [active, setActive] = useState(1)
    const categoryList = [
        {
            id:1,
            name:'Latest'
        },
        {
            id:2,
            name:'World'
        },
        {
            id:3,
            name:'Business'
        },
        {
            id:4,
            name:'Sport'
        },
        {
            id:5,
            name:'Life'
        },
        {
            id:6,
            name:'Movie'
        },
    ]
    const onCategoryClick=(id)=>{
        setActive(id)
    }
  return (
    <View style={{marginTop: 10}}>
        <FlatList 
        data={categoryList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=>(
            <TouchableOpacity onPress={()=>{onCategoryClick(item.id); selectCategory(item.name)}}>
                <Text style={
                    item.id==active? styles.selectText : styles.unSselectText
                    }>
                        {item.name}
                </Text>
            </TouchableOpacity>
        )}
        /> 
    </View>
  )
}

const styles = StyleSheet.create({
    unSselectText:{
        marginRight: 20, 
        fontSize:22, 
        fontWeight: '800',
        color:Colors.gray
    },
    selectText:{
        marginRight: 20, 
        fontSize:22, 
        fontWeight: '900',
        color:Colors.primary
    },
})

export default CategoryTextSlider