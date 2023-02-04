import { useState, useEffect } from 'react';

const useValidation = (validation, defaultValue) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validation(enteredValue);

  useEffect(() => {
    if (defaultValue) {
      setEnteredValue(defaultValue);
    }
  }, []);

  const hasError = isTouched && !isValid;

  const changeEnteredValueHandler = e => {
    setIsTouched(false);
    setEnteredValue(e.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const resetValues = () => {
    setIsTouched(true);
    setEnteredValue('');
  };

  return {
    enteredValue,
    changeEnteredValueHandler,
    inputBlurHandler,
    isValid,
    hasError,
    resetValues,
  };
};

export default useValidation;
