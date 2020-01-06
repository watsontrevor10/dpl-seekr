import { useState, } from "react";

// custom hook to simplify state in form components with many input fields
export const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    onChange: (e) => setValue(e.target.value),
  };
};

export default useFormInput