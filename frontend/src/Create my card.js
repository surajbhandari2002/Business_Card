import React from 'react';
import {View, Text, Touchable, TouchableOpacity, Alert} from 'react-native';
import Background from './Background';
import {darkGreen} from './Constants';
import {black} from './Constants';
import Field from './Field';
import Btn from './Btn';
const Create_my_card = props => {
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
          <Text
            style={{
              fontSize: 35,
              color: darkGreen,
              fontWeight: 'bold',
              marginBottom: 10,
              marginTop: -50,
            }}>
            Let's get started!
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 20,
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Create an card
          </Text>

          <Field placeholder="Your Name Here" keyboardType={'name-phone-pad'} />

          <Field placeholder="Company Name" keyboardType={'name-phone-pad'} />

          <Field placeholder="Job Title" keyboardType={'name-phone-pad'} />
          <Field placeholder="Work Email" keyboardType={'Email-address'} />
          <Field placeholder="Phone Number" keyboardType={'number-pad'} />
          <Field placeholder="Email" keyboardType={'Email-address'} />
          <Field placeholder="Password" secureTextEntry={Boolean} />
          <View
            style={{
              alignItems: 'flex-end',
              width: '78%',
              paddingRight: 30,
              marginTop: 10,
              marginBottom: 20,
            }}></View>

          <Btn
            textColor="white"
            bgColor={black}
            btnLabel="Continue"
            Press={() => alert('Save your card')}
          />

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}></View>
        </View>
      </View>
    </Background>
  );
};

export default Create_my_card;
