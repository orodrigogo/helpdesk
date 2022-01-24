import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Title, Load } from './styles';

type Props = RectButtonProps & {
  title: string;
  isLoading?: boolean;
};

export function Button({ title, isLoading = false, ...rest }: Props) {
  return (
    <Container enabled={!isLoading} {...rest}>
      {isLoading ? <Load /> : <Title>{title}</Title>}
    </Container>
  )
}
