import { Course } from '../types/courses';

export const getTags = (courses: Course[]) => {
  const array = courses.map(course => course.tags).flat();
  return Array.from(new Set(array));
};
