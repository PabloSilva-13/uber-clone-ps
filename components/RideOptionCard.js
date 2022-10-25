import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'
import { Icon } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native'

const data = [
  {
    id:'1',
    title:'Uber-x',
    multiplier: 1,
    image:'https://links.papareact.com/3pn',
  },
  {
    id:'2',
    title:'Uber-XL',
    multiplier: 1.2,
    image:'https://links.papareact.com/5w8',
  },
  {
    id:'3',
    title:'Uber-Lux',
    multiplier: 1.75,
    image:'https://links.papareact.com/7pf',
  },
]

const RideOptionCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected]= useState(null);

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
          onPress={() => { navigation.navigate('NavigateCard') }}
          style={tw` absolute top-0 left-5 z-50 p-3 rounded-full`}>
          <Icon name='chevron-left' type='fontawesome ' />
        </TouchableOpacity>
        <Text style={tw`text-center py-1 text-xl`}>Select a Ride </Text>
      </View>

<FlatList 
data={data}
keyExtractor={(item)=> item.id}
renderItem={({item:{id, title, multiplier, image}, item})=>(
  <TouchableOpacity 
  onPress={()=> setSelected(item)}
  style={tw`flex-row items-center justify-between px-10`}>
    <Image 
    style={{
      width:100,
      height:100,
      resizeMode:'contain'
    }}
    source= {{uri: image}}
    />
    <View style={tw`-ml-6`}>
      <Text style={tw`text-xl font-semibold`} >{title}</Text>
      <Text style={tw`text-gray-400 `} >Travel Time</Text>
    </View>
    <Text style={tw`text-xl`} >Preço</Text>
  </TouchableOpacity>
)}
>

</FlatList>

<View>
  <TouchableOpacity 
  disabled={!selected}
  style={tw`bg-black py-3 m-3 ${!selected && 'bg-gray-300'} `}>
    <Text style={tw`text-center text-white text-xl`} >Choose {selected?.title}</Text>
  </TouchableOpacity>
</View>

    </SafeAreaView>
  )
}

export default RideOptionCard

const styles = StyleSheet.create({})