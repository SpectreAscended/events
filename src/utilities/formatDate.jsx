const formatDate = inputDate => {
  return new Date(inputDate).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};

export default formatDate;
