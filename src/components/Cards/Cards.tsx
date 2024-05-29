import React from 'react';

import { Wrapper } from './styled';
import { Course } from '../../types/courses';
import Card from '../Card';

interface CardsProps {
  courses: Course[];
}

const Cards: React.FC<CardsProps> = ({ courses }) => {
  return (
    <Wrapper>
      {courses.map(course => {
        return <Card course={course} />;
      })}
    </Wrapper>
  );
};

export default Cards;
