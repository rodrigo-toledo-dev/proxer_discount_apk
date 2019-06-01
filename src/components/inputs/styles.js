import styled from 'styled-components/native';
import { StyleSheet, View, TextInput } from 'react-native';


export const GeneralInputView = styled.View`
  width: 90%;
  background: #FFFFFF;
  border-radius: 10px;
  height: 40px;
  margin-bottom: 10px;
`;


export const GeneralTextInput = styled.TextInput.attrs(
  props => ({
    placeholder: props.placeholder || 'Favor preencher',
    secureTextEntry: props.secureTextEntry || false,
  }))`
`;
