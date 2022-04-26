import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background-color: #131016;
  padding: 24px;
  padding-top: ${getStatusBarHeight() + 24}px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #FFF;
  font-weight: bold;
  margin: 24px 0;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 56px;
  border: 1px solid #131016;
  border-radius: 5px;
  padding: 16px;
  background: #FFF;
`;

export const Form = styled.View`
  padding: 24px;
`;

export const FormTitle = styled.Text`
  font-size: 24px;
  color: #131016;
  font-weight: bold;
  margin-bottom: 12px;
`;
