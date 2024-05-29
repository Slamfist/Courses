import React, { useState } from 'react';

import { Wrapper } from './styled';
import { SideMenu, Cards } from './components';
import { useListCourses } from './hooks';
import { getTags, getSortedCourses } from './helpers';

export const App = () => {
  const [active, setActive] = useState('all');

  const courses = useListCourses();
  const tags = getTags(courses);
  const sortedCourses = getSortedCourses(active, courses);

  return (
    <Wrapper>
      <SideMenu tags={tags} active={active} setActive={setActive} />

      <Cards courses={sortedCourses} />
    </Wrapper>
  );
};

export default App;
