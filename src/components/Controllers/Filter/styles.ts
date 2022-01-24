import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export type FilterProps = {
  backgroundColor: string;
}

export const Container = styled(TouchableOpacity) <FilterProps>`
  flex: 1;  
  background-color: ${({ backgroundColor }) => backgroundColor};
  align-items: center;
  padding: 10px;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONTS.TEXT};
`;