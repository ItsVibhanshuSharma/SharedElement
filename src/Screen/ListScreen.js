import React from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';

export default function ListScreen() {
  const data = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Nike AirJordan 1',
      rs: 1200,
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Nike Air',
      rs: 1400,
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=2012&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Addidas',
      rs: 2121,
    },
    {
      id: 4,
      image:
        'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Puma Bmw ',
      rs: 1290,
    },
    {
      id: 5,
      image:
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Nike AirJordan 1',
      rs: 6543,
    },
    {
      id: 6,
      image:
        'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&q=80&w=1925&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Spark',
      rs: 9879,
    },
    {
      id: 7,
      image:
        'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&q=80&w=2079&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Puma Bmw ',
      rs: 12909,
    },
    {
      id: 8,
      image:
        'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&q=80&w=2030&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Nike AirJordan 1',
      rs: 4544,
    },
  ];

  return (
    <View style={styles.Container}>
      <View style={{alignSelf: 'center'}}>
        <Text style={styles.Heading}>List Screen</Text>
      </View>
      <ScrollView>
        <View style={{margin: 20}}>
          {data.map((item, index) => {
            return (
              <View style={styles.Card}>
                <View>
                  <Image src={item.image} style={styles.ImageStyle} />
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginStart: 20,
                  }}
                >
                  <Text style={styles.ShoeName}>{item.name}</Text>
                  <Text style={styles.ShoeName}>{item.rs}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
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
  },
  Card: {
    borderWidth: 1,
    borderRadius: 10,
    color: '#fefefe',
    flexDirection: 'row',
    padding: 10,
    marginTop: 20,
  },
  ShoeName: {
    fontSize: 20,
    fontWeight: '600',
  },
  ImageStyle: {
    borderWidth: 2,
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
  },
});
