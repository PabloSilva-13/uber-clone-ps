import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed';
import tw from 'tailwind-react-native-classnames';

const data = [

    {
        id: '123',
        icon: 'home',
        location: 'Home',
        destination: 'CodeStreet, London, UK'
    },
    {
        id: '456',
        icon: 'briefcase',
        location: 'Work',
        destination: 'London Eye, London, UK'
    },
];


const NavFavourites = () => {
    return (
        <View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={()=>(
                    <View style={[tw`bg-gray-200 h-1`, {height: 1}]} />
                )}
                renderItem={({ item: { location, destination, icon } }) => (
                    <TouchableOpacity style={tw`flex-row items-center p-5`}>
                        <Icon
                            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                            name={icon}
                            type='ionicon'
                            color='black'
                            size={18}
                        />
                        <View>
                            <Text style={tw`font-semibold text-lg`}>{location}</Text>
                            <Text style={tw`text-gray-500`}>{destination}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default NavFavourites

const styles = StyleSheet.create({})