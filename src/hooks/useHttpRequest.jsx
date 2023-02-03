import { useState } from 'react';

const useHttpRequest = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const sendRequest = async (requestConfig, applyData) => {
    let options;
    if (!requestConfig.method) {
      options = {};
    } else {
      options = {
        method: requestConfig.method,
        headers: requestConfig.headers || {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(requestConfig.body),
      };
    }
    try {
      setIsLoading(true);
      const res = await fetch(requestConfig.url, options);

      if (!res.ok) throw new Error('Problem fetching data');

      const data = await res.json();
      setIsLoading(false);
      applyData(data);

      return {
        error,
        isLoading,
        sendRequest,
      };
    } catch (err) {
      setError(err.message);
      console.error(err);
    }
  };
};

export default useHttpRequest;
