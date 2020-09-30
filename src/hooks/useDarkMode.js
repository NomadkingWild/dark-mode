import {useLocalStorage} from './useLocalStorage';

export const useDarkMode = (key, initialValue)=>{

const [someValue, setSomeValue] = useLocalStorage(key, initialValue);

const clearDarkMode = e => {
    e.preventDefault();
    setSomeValues(initialValue);
  };

  const handleChanges = e =>{
      setSomeValue({
          ...someValue,
          [e.target.name]: e.target.someValue
      });
  };

  return[someValue, clearDarkMode, handleChanges];
};

