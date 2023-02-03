import { useState } from 'react';

const useValidation = validation => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validation(enteredValue);

  const hasError = isTouched && !isValid;

  const changeEnteredValueHandler = e => {
    setIsTouched(true);
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
