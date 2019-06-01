import styled from 'styled-components/native';
import { StyleSheet, View, TextInput } from 'react-native';


export const GeneralInputView = styled.View`
  width: 90%;
  background: rgba(255, 255, 255, .8);
  border-radius: 10px;
  height: 40px;
  margin-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
`;


export const GeneralTextInput = styled.TextInput.attrs(
  props => ({
    placeholder: props.placeholder || 'Favor preencher',
    secureTextEntry: props.secureTextEntry || false,
  }))`
  font-weight: bold;
`;