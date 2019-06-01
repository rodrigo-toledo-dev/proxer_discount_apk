import styled from 'styled-components/native';
import { StyleSheet, ImageBackground } from 'react-native';

const GeneralBackground = styled.ImageBackground.attrs({
    source: require('~/img/background.png'),
    resizeMode: 'cover',
  })`
  flex: 1;
  align-items: center;
  padding-bottom: 20px;
`;

export default GeneralBackground;