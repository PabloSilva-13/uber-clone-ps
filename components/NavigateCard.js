import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_KEY } from '@env'
import { useDispatch, useSelector } from 'react-redux';
import { selectDestination, setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import NavFavourites from './NavFavourites';
import { Icon } from '@rneui/themed';




const NavigateCard = () => {

    const dispatch = useDispatch();
    const navigation = useNavigation();
    

    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <Text style={tw`text-center  text-xl`}>Good Morning, Pablo</Text>
            <View style={tw`border-t border-gray-200 flex-shrink`}>
                <View>
                    <GooglePlacesAutocomplete
                        enablePoweredByContainer={false}
                        placeholder='Where To?'
                        returnKeyType={'search'}
                        nearbyPlacesAPI='GooglePlacesSearch'
                        debounce={400}
                        minLength={2}
                        styles={toInputBoxStyles}
                        query={{
                            key: GOOGLE_MAPS_KEY,
                            language: 'pt-br',
                        }}

                        fetchDetails={true}

                        onPress={(data, details = null) => {
                            dispatch(setDestination({
                                location: details.geometry.location,
                                description: data.description,
                            }))
                            //navigation.navigate('RideOptionCard')
                        }}

                    />
                </View>
                <NavFavourites/>
            </View>
            <View style={tw`flex-row bg-white justify-evenly py-4  border-t border-gray-100 `}>
                <TouchableOpacity 
                onPress={()=>{navigation.navigate('RideOptionCard')}}
                style={tw`flex justify-between flex-row bg-black w-24 px-4 py-3 rounded-full`}>
                    <Icon
                     name='car' type='font-awesome' color='white' size={16}
                    />
                    <Text style={tw`text-white text-center `} >Rides</Text>

                </TouchableOpacity>
                
                <TouchableOpacity style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full border`}>
                    <Icon
                     name='fast-food-outline' type='ionicon' color='black' size={16}
                    />
                    <Text style={tw`text-black text-center`} >Eats</Text>

                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingTop: 20,
        flex: 0,
    },
    textInput: {
        backgroundColor: '#DDDDDF',
        borderRadius: 0,
        fontSize: 18
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    }
})