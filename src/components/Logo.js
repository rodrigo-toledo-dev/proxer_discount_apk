import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Image, View } from 'react-native';

const ImageLogo = styled.Image.attrs({
  source: require('~/img/logo.png'),
})`
  width: 30px;
  height: 30px;
`;

const ViewLogo = styled.View`
  width: 60px;
  height: 60px;
  align-items: center;
  padding-bottom: 20px;
`;

const Logo = () => {
  return (
  <ViewLogo>
    <ImageLogo />
  </ViewLogo>
  );
};

export default Logo;
