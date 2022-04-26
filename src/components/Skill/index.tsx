import React from 'react';
import { Entypo } from '@expo/vector-icons';

import { Container, Icon, Name, Options, Option } from './styles';

export type SkillProps = {
  id: string;
  name: string;
  type: string;
}

type Props = {
  data: SkillProps;
  onRemove: () => void;
  onEdit: () => void;
}

export function Skill({ data, onRemove, onEdit }: Props) {
  return (
    <Container>
      <Icon type={data.type}>
        <Entypo
          name={data.type === "soft" ? "user" : "tools"}
          color="#FFF"
          size={20}
        />
      </Icon>

      <Name>{data.name}</Name>

      <Options>
        <Option onPress={onEdit}>
          <Entypo
            name="edit"
            color="#FEDC43"
            size={20}
          />
        </Option>

        <Option onPress={onRemove}>
          <Entypo
            name="trash"
            color="#EE3B45"
            size={20}
          />
        </Option>
      </Options>
    </Container>
  );
}