import MAIN_URL from '../common/MainUrl';
const MAIN_URL_PUBLIC = `${MAIN_URL}/jsonstore`;

  export const getCategoryQuizzes = () => {
    return fetch(`${MAIN_URL_PUBLIC}/quizzes`)
      .then((res) => res.json());
  };
