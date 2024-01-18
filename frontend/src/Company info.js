import React from 'react';
import {View, Text, Touchable, TouchableOpacity, Alert} from 'react-native';
import Background from './Background';
import {darkGreen } from './Constants';
import { black } from './Constants';
import Field from './Field';
import Btn from './Btn';
const Company_info = props => {
  return (
    <Background>
      <View style={{alignItems: 'center', width: 365}}>
      

        <View
          style={{
            backgroundColor: 'white',
            height: 800,
            width: 460,
            borderTopLeftRadius: 240,
            paddingTop: 100,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 35, color: darkGreen, fontWeight: 'bold', marginBottom:10}}>
            Let's get started!
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 17,
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            First off, what is your name
          </Text>
          <Field
            placeholder="First name(required)"
            keyboardType={'email-address'}
          />

          <Field placeholder="Last name" secureTextEntry={Boolean} />

          <View
            style={{
              alignItems: 'flex-end',
              width: '78%',
              paddingRight: 30,
              marginTop: 10,
              marginBottom: 160,
            }}>
           
          </View>
          <Btn
            textColor="white"
            bgColor={black}
            btnLabel="Continue"
            
            
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Company_info;
