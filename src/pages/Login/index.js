import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StatusBar, Button } from 'react-native';

import GeneralBackground from '~/components/GeneralBackground';
import Logo from '~/components/Logo';
import { GeneralInputView, GeneralTextInput } from '~/components/inputs';

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
    email: '',
    password: '',
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

      navigation.navigate({ routeName: 'Main' });
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
