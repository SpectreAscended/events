const formatDate = inputDate => {
  // For some reason due to timezones, date was returning one day earlier with the 2023-02-20 format, but changing the '-'s to '/'s fixes it.
  return new Date(inputDate.replace(/-/g, '/')).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};

export default formatDate;
