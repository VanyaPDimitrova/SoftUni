
export const STUDENT_ROLE = 'student';
export const TEACHER_ROLE = 'teacher';

export const isTeacher = (user) => user?.role === TEACHER_ROLE;
export const isStudent = (user) => user?.role === STUDENT_ROLE;
