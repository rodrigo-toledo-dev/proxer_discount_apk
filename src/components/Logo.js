import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Image, View } from 'react-native';

const ImageLogo = styled.Image.attrs({
  source: require('~/img/logo.png'),
})`
  width: 200px;
  height: 200px;
`;

const ViewLogo = styled.View`
  border: 10px solid rgba(255, 255, 255, .3);
  width: 200px;
  height: 200px;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: 20px;
  border-radius: 100px;
  overflow: hidden;
`;

const Logo = () => {
  return (
  <ViewLogo>
    <ImageLogo />
  </ViewLogo>
  );
};

export default Logo;
