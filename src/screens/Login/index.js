import React, { useState, useEffect } from 'react';
import { Animated, StyleSheet, Keyboard } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import {
  StyledKeyBoardAvoidView,
  StyledTouchableOpacity,
  StyledText,
  StyledContainerLogo,
  StyledRegister,
  StyledRegisterText,
} from './styles';

import Input from '../../components/Input';

import icLogo from '../../assets/images/logo.png';

export default function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const { navigate } = useNavigation();

  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 100 }));
  const [logo] = useState(new Animated.ValueXY({ x: 130, y: 155 }));
  const [opacity] = useState(new Animated.Value(0));

  const [errorMail, setErrorMail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  function keyboardDidShow() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 55,
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.timing(logo.y, {
        toValue: 65,
        duration: 100,
        useNativeDriver: false,
      }),
    ]).start();
  }

  function keyboardDidHide() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 130,
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.timing(logo.y, {
        toValue: 155,
        duration: 100,
        useNativeDriver: false,
      }),
    ]).start();
  }

  function addingListener() {
    keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      keyboardDidShow
    );

    keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      keyboardDidHide
    );
  }

  function LoadingAnimated() {
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 30,
        useNativeDriver: false,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1800,
        useNativeDriver: false,
      }),
    ]).start();
  }

  useEffect(() => {
    addingListener();
    LoadingAnimated();
  }, []);

  function onLogin() {
    setErrorMail(email == ''|| email == null);
    setErrorPassword(password == '' || password == null);

    if (email && password) {
      navigate('Home');
    }
  }

  return (
    <StyledKeyBoardAvoidView>
      <StyledContainerLogo>
        <Animated.Image
          source={icLogo}
          style={{ width: logo.x, height: logo.y }}
        />
      </StyledContainerLogo>

      <Animated.View
        style={[
          styles.container,
          {
            opacity: opacity,
            transform: [
              {
                translateY: offset.y,
              },
            ],
          },
        ]}
      >
        <Input
          testID='txtEmail'
          placeholder='Email'
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
          error={errorMail}
          errorMessage='Email is required'
        />

        <Input
          testID='txtPassword'
          placeholder='Password'
          autoCorrect={false}
          value={password}
          secureTextEntry
          onChangeText={setPassword}
          error={errorPassword}
          errorMessage='Password is required'
        />

        <StyledTouchableOpacity testID='btnSignIn' onPress={onLogin}>
          <StyledText>Sign In</StyledText>
        </StyledTouchableOpacity>

        <StyledRegister>
          <StyledRegisterText>Register new account</StyledRegisterText>
        </StyledRegister>
      </Animated.View>
    </StyledKeyBoardAvoidView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 50,
  },
});
