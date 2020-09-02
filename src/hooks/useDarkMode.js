import {useLocalStorage} from './useLocalStorage';

export const useDarkMode = useLocalStorage(key, initialValue){

const [someValue, setSomeValue] = useLocalStorage(key, initialValue);

const clearDarkMode = e => {
    e.preventDefault();
    setSomeValues(initialValue);
  };

  const handleChanges = e =>{
      setSomeValue({
          ...values,
          [e.target.name]: e.target.value
      });
  }
  return[values, clearDarkMode, handleChanges];
};

