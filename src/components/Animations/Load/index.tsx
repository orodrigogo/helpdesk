import React from 'react';
import { useTheme } from 'styled-components';
import { ActivityIndicator } from 'react-native';

export function Load() {
  const theme = useTheme();

  return (
    <ActivityIndicator
      color={theme.COLORS.PRIMARY}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    />
  );
}