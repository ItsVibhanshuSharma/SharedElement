import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
export default function DetailScreen({route, navigation}) {
  // const data = route.params; // Extract the image URL from route params
  console.log('Detail screen', route);
  const data = route.params.item;
  console.log('Dataile Screen', `item.${data.image}.photo`);
  return (
    <View style={styles.Container}>
      <Text style={styles.Heading}>Details Screen</Text>
      <View style={styles.Card}>
        <SharedElement id={`item.${data.image}.photo`}>
          <Image source={{uri: data.image}} style={styles.ImageStyle} />
        </SharedElement>
        <View style={styles.TextWrap}>
          <Text style={styles.ShoeName}>Rs. {data.rs}</Text>
          <Text style={styles.ShoeName}> {data.name}</Text>
          <Text style={styles.DescriptionStyle}> {data.description}</Text>
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
