import React from 'react';

import { Wrapper, Text } from './styled';

interface SideMenuProps {
  tags: string[];
  active: string;
  setActive: (arg: string) => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ tags, active, setActive }) => {
  return (
    <Wrapper>
      <Text active={active === 'all'} onClick={() => setActive('all')}>
        Все темы
      </Text>

      {tags.map((tag, index) => {
        return (
          <Text key={index} active={active === tag} onClick={() => setActive(tag)}>
            {tag}
          </Text>
        );
      })}
    </Wrapper>
  );
};

export default SideMenu;
