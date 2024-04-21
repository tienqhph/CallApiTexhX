import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CallApiFromServer } from '../Api/CallApi'
import { style } from '../Style/styletoDo'

const Home = () => {

const [datatodo ,setdatatodo] = useState([])
   useEffect(()=>{
    CallApiFromServer().then(data => setdatatodo(data))

   },[])
  
   
    const RenderItem = (item:any)=>
        (
            <View style = {style.txttodo1}>
                    <Text style = {style.txtitem}> {item.title}</Text>
            </View>
        )
   
    
  return (
    <View style={style.contener}>
      <Text style = {style.txttodo}>Todo List</Text>
      <FlatList
      
   
      data={datatodo}
      renderItem={({item}) => RenderItem(item)}
    />
 
    </View>
  )
}

export default Home