import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Background from './Background';
import {darkGreen, green} from './Constants';
import Btn from './Btn';

const Home = props => {
  return (
    <Background>
      <View style={{marginHorizontal: 38, marginVertical: 100}}>
        <Text style={{color: 'white', fontSize: 27, marginTop: 185}}>
          Create and Share Your
        </Text>
        <Text style={{color: 'white', fontSize: 25, marginBottom: 50}}>
          Business card in seconds
        </Text>
        <Btn
          bgColor={green}
          textColor="white"
          btnLabel="Create my card"
          Press={() => props.navigation.navigate('Create my card')}
        />
        <Btn
          bgColor="white"
          textColor={darkGreen}
          btnLabel="Login"
          Press={() => props.navigation.navigate('Login')}
        />
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({});

export default Home;
