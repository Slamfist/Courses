import React from 'react';
import { Course } from '../../types/courses';
import { Wrapper, Image, Name } from './styled';

interface CardProps {
  course: Course;
}

const Card: React.FC<CardProps> = ({ course }) => {
  return (
    <Wrapper>
      <Image img={course.image} bgColor={course.bgColor} />
      <Name>{course.name}</Name>
    </Wrapper>
  );
};

export default Card;
