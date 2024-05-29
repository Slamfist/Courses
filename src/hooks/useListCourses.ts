import { useEffect, useState } from 'react';
import axios from 'axios';
import { Course } from '../types/courses';

export const useListCourses = () => {
  const [list, setList] = useState<Course[]>([]);

  useEffect(() => {
    axios({ method: 'get', url: 'https://logiclike.com/docs/courses.json' }).then(
      ({ data }) => setList(data),
    );
  }, []);

  return list;
};
