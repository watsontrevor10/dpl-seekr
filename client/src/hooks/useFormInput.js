import { useState, } from "react";

// custom hook to simplify state in form components with many input fields
const useFormInput = callback => {
  const [values, setValues] = useState({});

  const handleSubmit = e => {
    if (e) e.preventDefault()
    callback()
  }

  const handleCheckBox = (e, drop) => {
    let name = drop ? drop : e.target.name
    let value = drop ? e : e.target.value
      if (e.target.checked === true ) {
        value = true
      } else if (e.target.checked === false) {
        value = false
      }
      setValues(values => ({...values, [name]: value}))
  }

  const handleChange = (e, drop) => {
    let name = drop ? drop : e.target.name
    let value = drop ? e : e.target.value
    setValues(values => ({ ...values, [name]: value }))
  }

  return {
    handleChange,
    handleCheckBox,
    handleSubmit,
    values,
    setValues,
  }
};

export default useFormInput