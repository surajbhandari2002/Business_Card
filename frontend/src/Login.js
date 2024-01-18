import React from 'react';
import {View, Text, Touchable, TouchableOpacity, Alert} from 'react-native';
import Background from './Background';
import {darkGreen} from './Constants';
import Field from './Field';
import Btn from './Btn';
const Login = props => {
  return (
    <Background>
      <View style={{alignItems: 'center', width: 365}}>
        <Text
          style={{
            color: 'white',
            fontSize: 50,
            fontWeight: 'bold',
            marginVertical: 10,
          }}>
          Login
        </Text>

        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 460,
            borderTopLeftRadius: 240,
            paddingTop: 100,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 35, color: darkGreen, fontWeight: 'bold'}}>
            Welcome Back
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 17,
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Login to your account
          </Text>
          <Field
            placeholder="Email / username"
            keyboardType={'email-address'}
          />

          <Field placeholder="Password" secureTextEntry={Boolean} />

          <View
            style={{
              alignItems: 'flex-end',
              width: '78%',
              paddingRight: 30,
              marginTop: 10,
              marginBottom: 150,
            }}>
            <TouchableOpacity>
              <Text
                style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
                Forgot Password ?
              </Text>
            </TouchableOpacity>
          </View>
          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnLabel="Login"
            Press={() => alert('Logged In Successfully')}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              {' '}
              Don't have an account ?
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Create my card')}>
              <Text
                style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
                Create card
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Login;
