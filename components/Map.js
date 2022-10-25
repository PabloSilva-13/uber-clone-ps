import { Platform, StyleSheet } from 'react-native'
import React, { useEffect, useRef } from 'react'
import MapView, { Marker } from 'react-native-maps'
import tw from 'tailwind-react-native-classnames'
import { useSelector } from 'react-redux'
import { selectDestination, selectOrigin } from '../slices/navSlice'
import MapViewDirections from 'react-native-maps-directions'
import { GOOGLE_MAPS_KEY } from '@env'


const Map = () => {

    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);
    const mapRef = useRef();


    useEffect(() => {

        if (!origin || !destination) return;


        //Zoom and fit to markes
        mapRef.current.fitToSuppliedMarkers(['ori', 'dest'], {
            edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },//n funcionaprecisa de um refresh para funcionar

        })

    }, [origin, destination])

    useEffect(() => {

        const getTravelTime = async () => {
            if (!origin || !destination) return;
            fetch(
                `https://maps.googleapis.com/maps/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAPS_KEY}`)
                .then((res) => res.json())
                .then(data => {
                    console.log(data)
                })
        }
        getTravelTime();
    }, [origin, destination, GOOGLE_MAPS_KEY])

    console.log(origin)
    //console.log( '-1')
    console.log(destination)
    //console.log('-2')

    return (
        <MapView

            style={tw`flex-1`}
            mapType={Platform.OS === 'ios' ? 'mutedStandard' : 'standard'}
            initialRegion={{
                latitude: origin.location.lat,
                longitude: origin.location.lng,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }}

            ref={mapRef}
        >

            {/**dESCRIÇÃO */}
            {origin && destination && (
                <MapViewDirections
                    origin={origin.description}
                    destination={destination.description}
                    apikey={GOOGLE_MAPS_KEY}
                    strokeWidth={3}
                    strokeColor='black'
                />
            )}

            {/** Origem local*/}
            {origin?.location && (
                <Marker

                    coordinate={{
                        latitude: origin.location.lat,
                        longitude: origin.location.lng,
                    }}
                    title='Origin Local'
                    description={origin.description}
                    identifier='ori'
                />
            )}

            {/**Destino local */}
            {destination?.location && (
                <Marker

                    coordinate={{
                        latitude: destination.location.lat,
                        longitude: destination.location.lng,
                    }}
                    title='Destination Lo'
                    description={destination.description}
                    identifier='dest'
                />
            )}


        </MapView>


    )
}

export default Map

const styles = StyleSheet.create({})