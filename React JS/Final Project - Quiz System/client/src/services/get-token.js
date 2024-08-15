
const accessToken = () => {

  const accessToken = localStorage.getItem('accessToken');

  if (!accessToken) {
    return '';
  }

  return accessToken;
};

export default accessToken;
