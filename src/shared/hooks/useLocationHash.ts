import { useState, useEffect } from 'react';

const useLocationHash = () => {
  const [hash, setHash] = useState('');

  useEffect(() => {
    setHash(window.location.hash);

    const onWindowHashChange = () => {
      setHash(window.location.hash);
    };

    window.addEventListener('hashchange', onWindowHashChange);
    return () => window.removeEventListener('hashchange', onWindowHashChange);
  }, []);

  return hash;
};

export default useLocationHash;
