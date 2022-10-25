import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Map from '../components/Map'
import MapView from 'react-native-maps'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import NavigateCard from '../components/NavigateCard'
import RideOptionCard from '../components/RideOptionCard'

const MapScreen = () => {

  const Stak = createNativeStackNavigator();

  return (
    <View>
      
      <View style={tw`h-1/2`} >
        <Map />
      </View>

      <View style={tw`h-1/2`} >
        <Stak.Navigator>
          <Stak.Screen
            name='NavigateCard'
            component={NavigateCard}
            options={{
              headerShown: false
            }}
          />

          <Stak.Screen
            name='RideOptionCard'
            component={RideOptionCard}
            options={{
              headerShown: false
            }}
          />
        </Stak.Navigator>
      </View>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})