import { Course } from '../types/courses';

export const getSortedCourses = (active: string, courses: Course[]) => {
  if (active === 'all') return courses;

  return courses.filter(course => course.tags.includes(active));
};
