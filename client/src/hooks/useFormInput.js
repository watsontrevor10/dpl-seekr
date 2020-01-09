import { useState, } from "react";

// custom hook to simplify state in form components with many input fields
export const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    e.persist();
    setValue(values => ({...values, [e.target.name]: e.target.value}))
  }

  return {
    value,
    onChange: (e) => setValue(e.target.value),
    handleChange
  };
};

export default useFormInput