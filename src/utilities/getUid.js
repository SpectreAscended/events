const getUid = () => {
  return JSON.parse(localStorage.getItem('user'));
};

export default getUid;
