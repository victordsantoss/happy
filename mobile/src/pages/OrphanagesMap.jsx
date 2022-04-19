import React from 'react';
import { Dimensions, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import mapMarker from '../images/map-marker.png'
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function OrpahnagesMap() {

  const navigation = useNavigation();

  const handleNavigationToOrphanageDetail = () => {
    navigation.navigate('OrphanagesDetails');
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -15.8712156,
          longitude: -48.0691097,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >
        <Marker
          icon={mapMarker}
          calloutAnchor={{
            x: 2.7,
            y: 0.8
          }}
          coordinate={{
            latitude: -15.8712156,
            longitude: -48.0691097
          }}
        >
          <Callout tooltip onPress={handleNavigationToOrphanageDetail}>
            <View style={styles.calloutConteiner}>
              <Text style={styles.calloutText}>
                Lar das Meninas
              </Text>
            </View>
          </Callout>
        </Marker>
      </MapView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          2 Orfanatos encontrados
        </Text>
        <TouchableOpacity style={styles.createOrphanageButton} onPress={() => alert('ola')}>
          <Feather name='plus' size={20} color='#FFF' />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  calloutConteiner: {
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 16,
    justifyContent: 'center',
  },
  calloutText: {
    color: '#0089a5',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Nunito_700Bold'
  },
  footer: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 32,
    backgroundColor: '#FFF',
    borderRadius: 20,
    height: 56,
    paddingLeft: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: {
      width: 5,
      height: 9
    }
  },
  footerText: {
    color: '#8fa7b3',
    fontFamily: 'Nunito_700Bold'
  },
  createOrphanageButton: {
    width: 56,
    height: 56,
    backgroundColor: '#15c3d6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
});