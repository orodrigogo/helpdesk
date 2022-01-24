import React from 'react';

import { Container } from './styles';
import { Header } from '@components/Layout/Header';
import { Orders } from '@components/Lists/Orders';
import { NewOrder } from '@components/Controllers/NewOrder';

export function Home() {
  return (
    <Container>
      <Header />
      <Orders />
      <NewOrder />
    </Container>
  );
}