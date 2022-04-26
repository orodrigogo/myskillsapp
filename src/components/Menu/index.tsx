import React from 'react';
import { MenuItem } from '../MenuItem';

import { Container } from './styles';

export type MenuTypeProps = 'soft' | 'hard';

type Props = {
  type: string;
  setType: (value: MenuTypeProps) => void;
}

export function Menu({ type, setType }: Props) {
  return (
    <Container>
      <MenuItem
        title="Soft Skills"
        isActive={type === "soft"}
        onPress={() => setType("soft")}
      />

      <MenuItem
        title="Hard Skills"
        isActive={type === "hard"}
        onPress={() => setType("hard")}
      />
    </Container>
  );
}