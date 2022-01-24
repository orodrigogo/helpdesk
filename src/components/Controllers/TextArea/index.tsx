import React from 'react';
import { TextInputProps } from 'react-native';

import { Container } from './styles';

export function TextArea({ ...rest }: TextInputProps) {
  return <Container multiline {...rest} />
}
