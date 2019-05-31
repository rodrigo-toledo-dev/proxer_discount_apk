import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import Register from '~/pages/Register';
import Login from '~/pages/Login';

const Routes = createAppContainer(createSwitchNavigator({ Main, Register, Login }, { initialRouteName: 'Login' }));

export default Routes;