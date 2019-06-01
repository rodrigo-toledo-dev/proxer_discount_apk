import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Text, Image, StyleSheet, Dimensions, ImageBackground, StatusBar, Button
} from 'react-native';

import GeneralBackground from '~/components/GeneralBackground';
import Logo from '~/components/Logo';
import { GeneralInputView, GeneralTextInput } from '~/components/inputs';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20,
  },
  fileName: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  instructions: {
    color: '#DDD',
    fontSize: 14,
    marginTop: 20,
    textAlign: 'center',
  },
  logo: {
    height: Dimensions.get('window').height * 0.11,
    marginVertical: Dimensions.get('window').height * 0.11,
    width: Dimensions.get('window').height * 0.11 * (1950 / 662),
  },
  welcome: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default class Login extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func,
    }).isRequired,
  };

  state = {
    email: 'rodrigo@rtoledo.inf.br',
    password: 'asdqwe123',
  };

  signIn = async () => {
    const { email, password } = this.state;

    const { navigation } = this.props;

    // if (email === undefined || email.length === 0 || password === undefined || password.length === 0) {
    //   this.setState({ loading: false, errorMessage: 'Preencha todas as informações' });
    //   return false;
    // }

    this.setState({ loading: true });

    try {
      // await this.checkUserExists(email, password);
      // await this.saveUser(email);

      // const resetAction = NavigationActions.reset({
      //   index: 0,
      //   actions: [
        navigation.navigate({ routeName: 'Main' });
        // ],
      // });
      // this.props.navigation.dispatch(resetAction);
    } catch (err) {
      console.tron.log(err)
      this.setState({ loading: false, errorMessage: 'Erro na autenticação, verifique os dados' });
    }
  };

  render() {
    return (
      <GeneralBackground>
        <StatusBar barStyle="light-content" hidden={true} />
        <Logo />
        <GeneralInputView>
          <GeneralTextInput placeholder='Preencher com seu login' />
        </GeneralInputView>
        <GeneralInputView>
          <GeneralTextInput placeholder='Preencher com sua senha' secureTextEntry={true} />
        </GeneralInputView>
        <Button title="I'm done, sign me out" onPress={this.signIn} />
      </GeneralBackground>
    )
  }
};
