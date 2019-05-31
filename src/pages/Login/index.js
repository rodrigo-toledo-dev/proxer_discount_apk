import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Text, Image, StyleSheet, Dimensions, ImageBackground, StatusBar, Button
} from 'react-native';
import { NavigationActions } from 'react-navigation';

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
          NavigationActions.navigate({ routeName: 'Main' }),
        // ],
      // });
      this.props.navigation.dispatch(resetAction);
    } catch (err) {
      console.tron.log(err)
      this.setState({ loading: false, errorMessage: 'Erro na autenticação, verifique os dados' });
    }
  };

  render() {
    return (
      <ImageBackground
        source={{
          uri: 'https://s3-sa-east-1.amazonaws.com/rocketseat-cdn/background.png',
        }}
        style={styles.container}
        resizeMode="cover"
      >
        <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
        <Image
          source={{
            uri: 'https://s3-sa-east-1.amazonaws.com/rocketseat-cdn/rocketseat_logo.png',
          }}
          style={styles.logo}
          resizeMode="contain"
        />
        <Button title="I'm done, sign me out" onPress={this.signIn} />
      </ImageBackground>
    )
  }
};
