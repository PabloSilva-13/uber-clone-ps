import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed';
import tw from 'tailwind-react-native-classnames'
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';



const data = [
    {
        id: '12',
        title: 'Get a Ride',
        image: 'https://links.papareact.com/3pn',
        screen: 'MapScreen',
    },
    {
        id: '34',
        title: 'Order Food',
        image: 'https://links.papareact.com/28w',
        screen: 'EatsScreen',
    },

];

const NavOptions = () => {

    const navigation = useNavigation();
    const origin = useSelector(selectOrigin);

  return (
    <FlatList
            data={data}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity
                    onPress={() => navigation.navigate(item.screen)}
                    style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
                    disabled={!origin}
                >
                    <View style={tw`${!origin && 'opacity-20'}`}>
                        <Image
                            style={{ width: 120, height: 120, resizeMode: 'contain' }}
                            source={{ uri: item.image }}
                        />
                        <Text style={tw`mt-2 text-lg font-semibold`} >{item.title}</Text>
                        <Icon
                            type='antdesign' 
                            name='arrowright' 
                            color='white' 
                            style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                        />
                    </View>
                </TouchableOpacity>
            )}
        ></FlatList>
  )
}

export default NavOptions