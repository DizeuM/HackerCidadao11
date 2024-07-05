import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, { Marker, Polygon } from 'react-native-maps';
import * as Location from 'expo-location';
import dataAbrigos from '../dataAbrigos.json';
import areas from '../dataAreas.json'; // Certifique-se de ter um arquivo GeoJSON válido

function Map() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [abrigos, setAbrigos] = useState([]);

  // puxa a loc em tempo real do usuario

  useEffect(() => {
    (async () => {

      // puxa a loc em tempo real do usuario

      // let { status } = await Location.requestForegroundPermissionsAsync();
      // if (status !== 'granted') {
      //   setErrorMsg('Permission to access location was denied');
      //   return;
      // }

      // let location = await Location.getCurrentPositionAsync({});
      // setLocation(location.coords);


      // simula loc do usuario em uma area de perigo
      setLocation({
        latitude: -8.1358,
        longitude: -34.9386,
      });
    })();
 
    setAbrigos(dataAbrigos.records);
  }, []);

  useEffect(() => {
    setLocation({
      latitude: -8.1358,
      longitude: -34.9386,
    });
  }, []);

  if (!location) {
    return <Text>Loading...</Text>;
  }
  
  const getColorForRisk = (risk) => {
    switch (risk) {
      case 0:
        return 'rgba(0, 200, 0, 0.5)';
      case 1:
        return 'rgba(255, 255, 0, 0.5)';
      case 2:
        return 'rgba(255, 165, 0, 0.5)';
      case 3:
        return 'rgba(255, 0, 0, 0.5)';
      default:
        return 'rgba(0, 200, 0, 0.5)';
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0045,
          longitudeDelta: 0.0045,
        }}
      >
        <Marker
          coordinate={{ latitude: location.latitude, longitude: location.longitude }}
          title="Minha Localização"
          description="Você está aqui"
          pinColor="#FF650F"
        />

        {abrigos.map((abrigo, index) => (
          <Marker
            key={index}
            coordinate={{ latitude: abrigo[6], longitude: abrigo[7] }}
            title={abrigo[1]}
            description={abrigo[4]}
            pinColor={abrigo[2] === "ABRIGO" ? "#0F82FF" : "#FFA500"}
          />
        ))}

        {areas.features.map((feature, index) => (
          <Polygon
            key={index}
            coordinates={feature.geometry.coordinates[0].map(coord => ({
              latitude: coord[1],
              longitude: coord[0]
            }))}
            fillColor={getColorForRisk(feature.properties.risco)}
            strokeColor="rgba(0,0,0,0.5)"
            strokeWidth={2}
          />
        ))}
      </MapView>
    </View>
  );
}

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});


