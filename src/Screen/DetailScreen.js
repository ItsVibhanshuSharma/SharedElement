import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default function DetailScreen({route, navigation}) {
  const data = route.params; // Extract the image URL from route params

  return (
    <View style={styles.Container}>
      <Text style={styles.Heading}>Details Screen</Text>
      <View style={styles.Card}>
        <Image source={{uri: data.Image}} style={styles.ImageStyle} />
        <View style={styles.TextWrap}>
          <Text style={styles.ShoeName}>Rs. {data.Rs}</Text>
          <Text style={styles.ShoeName}> {data.Name}</Text>
          <Text style={styles.DescriptionStyle}> {data.Description}</Text>
          {/* Add other details as needed */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
  },
  Heading: {
    fontSize: 26,
    fontWeight: '800',
    marginTop: 20,
    color: '#000000',
    textAlign: 'center',
  },
  Card: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#fefefe',

    padding: 10,
    marginTop: 20,
  },
  ShoeName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000000',
    alignSelf: 'center',
  },
  ImageStyle: {
    height: 300,
    width: 300,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  TextWrap: {
    marginLeft: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  DescriptionStyle: {
    fontSize: 18,
    color: '#000000',
    marginTop: '20%',
    justifyContent: 'center',
  },
});
