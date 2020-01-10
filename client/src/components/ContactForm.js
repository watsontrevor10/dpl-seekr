import React, { useState, useEffect } from 'react'
import axios from 'axios'
import useFormInput from '../hooks/useFormInput'

const ContactForm = (props) => {
  // state for editing contacts
  const [ contact, setContact ] = useState(props.contactProp ? 
    props.contactProp 
    : null
  )
  const { values, setValues, handleChange, handleSubmit } = useFormInput(submit)
  const { first_name, last_name, phone, email, position, department, description } = values

  useEffect( () => {
    if (contact) {
      setValues({...contact})
    }
  }, [])

  function submit(e) {
    const newContact = { first_name, last_name, phone, email, position, department, description }
    if (contact) {
      e.preventDefault()
      axios.patch(`/api/jobs/${props.id}/contacts/${contact.id}`, newContact)
        .then( res => {
          setContact(res.data)
          props.toggle()
          props.update()
        })
    } else {
      e.preventDefault()
      axios.post(`/api/jobs/${props.id}/contacts`, newContact)
        .then( res => {
          props.add(res.data)
          props.update()
          props.toggle()
        })
  }

if (contact) {
  // Edit Form
  return (
    <div>
      <form onSubmit={submit}>
        <p>First Name: </p>
        <input 
          type='text' 
          name='first_name' 
          label='First Name' 
          value={first_name}
          {...first_name} 
          onChange={handleChange}
        />
        <p>Last Name: </p>
        <input 
          type='text' 
          name='last_name' 
          label='Last Name' 
          value={last_name} 
          {...last_name} 
          onChange={handleChange}
        />
        <p>Phone: </p>
      <input 
        type='text' 
        name='phone' 
        label='Phone' 
        value={phone} 
        {...phone} 
        onChange={handleChange}
      />
      <p>Email: </p>
        <input 
          type='text' 
          name='email' 
          label='Email' 
          value={contact.email} 
          {...email} 
          onChange={handleChange}
        />
        <p>Position: </p>
        <input 
          type='text' 
          name='position' 
          label='position' 
          value={contact.position} 
          {...position} 
          onChange={handleChange}
        />
        <p>Department: </p>
        <input 
          type='text' 
          name='department' 
          label='department' 
          value={contact.department} 
          {...department} 
          onChange={handleChange}
        />
        <p>Description: </p>
        <input 
          type='text' 
          name='description' 
          label='description' 
          value={contact.description} 
          {...description} 
          onChange={handleChange}
        />
        <input type='submit' name='Update' />
      </form>  
    </div>
  )
} else {
  // Add Form
  return (
    <div>
      <form onSubmit={submit}>
        <input 
          type='text' 
          name='first_name' 
          label='First Name' 
          placeholder='First Name'
          {...first_name} 
          onChange={handleChange}
        />
        <input 
          type='text' 
          name='last_name' 
          label='Last Name' 
          placeholder='Last Name' 
          {...last_name} 
          onChange={handleChange}
        />
        <input 
          type='text' 
          name='phone' 
          label='Phone' 
          placeholder='Phone' 
          {...phone} 
          onChange={handleChange}
        />
        <input 
          type='text' 
          name='email' 
          label='Email' 
          placeholder='Email' 
          {...email} 
          onChange={handleChange}
        />
        <input 
          type='text' 
          name='position' 
          label='position' 
          placeholder='position' 
          {...position} 
          onChange={handleChange}
        />
        <input 
          type='text' 
          name='department' 
          label='department' 
          placeholder='department' 
          {...department} 
          onChange={handleChange}
        />
        <input 
          type='text' 
          name='description' 
          label='description' 
          placeholder='description' 
          {...description} 
          onChange={handleChange}
        />
        <input type='submit' name='Submit' />
      </form>  
    </div>
  )
  }
}

export default ContactForm