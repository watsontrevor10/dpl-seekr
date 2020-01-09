import React, { useState, useEffect } from 'react'
import axios from 'axios'
import useFormInput from '../hooks/useFormInput'

const ContactForm = (props) => {
  const first_name = useFormInput('')
  const last_name = useFormInput('')
  const phone = useFormInput('')
  const email = useFormInput('')
  const position = useFormInput('')
  const department = useFormInput('')
  const description = useFormInput('')
  const [ contact, setContact ] = useState(props.contactProp ? 
    props.contactProp 
    : null
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`/api/jobs/${props.job}/contacts`, 
      { first_name: first_name.value, 
        last_name: last_name.value,
        phone: phone.value,
        email: email.value,
        position: position.value,
        department: department.value,
        description: description.value,
      })
      .then( res => {
        props.add(res.data)
        props.toggle()
      })
  }

  const handleUpdate = (e) => {
    // debugger
    e.preventDefault()
    axios.patch(`/api/jobs/${props.job}/contacts/${contact.id}`, 
    {
      first_name: first_name.value,
      last_name: last_name.value,
      phone: phone.value,
      email: email.value,
      position: position.value,
      department: department.value, 
      description: description.value,
    })
      .then( res => {
        props.toggle()
      })
  }

  // const handleChange = (e) => {
  //   e.preventDefault()
  //   first_name=e.target.value
  //   description= e.target.value
  // }

if (contact) {
  // Edit Form
  return (
    <div>
      <form onSubmit={handleUpdate}>
        <input 
          type='text' 
          name='first_name' 
          label='First Name' 
          placeholder={contact.first_name}
          {...first_name} 
        />
        <input 
          type='text' 
          name='last_name' 
          label='Last Name' 
          placeholder={contact.last_name} 
          {...last_name} 
        />
      <input 
        type='text' 
        name='phone' 
        label='Phone' 
        placeholder={contact.phone} 
        {...phone} 
      />
        <input 
          type='text' 
          name='email' 
          label='Email' 
          placeholder={contact.email} 
          {...email} 
        />
        <input 
          type='text' 
          name='position' 
          label='position' 
          placeholder={contact.position} 
          {...position} 
        />
        <input 
          type='text' 
          name='department' 
          label='department' 
          placeholder={contact.department} 
          {...department} 
        />
        <input 
          type='text' 
          name='description' 
          label='description' 
          placeholder={contact.description} 
          // value={handleChange}
          {...description} 
        />
        <input type='submit' name='Update' />
      </form>  
    </div>
  )
} else {
  // Add Form
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type='text' 
          name='first_name' 
          label='First Name' 
          placeholder='First Name'
          {...first_name} 
        />
        <input 
          type='text' 
          name='last_name' 
          label='Last Name' 
          placeholder='Last Name' 
          {...last_name} 
        />
        <input 
          type='text' 
          name='phone' 
          label='Phone' 
          placeholder='Phone' 
          {...phone} 
        />
        <input 
          type='text' 
          name='email' 
          label='Email' 
          placeholder='Email' 
          {...email} 
        />
        <input 
          type='text' 
          name='position' 
          label='position' 
          placeholder='position' 
          {...position} 
        />
        <input 
          type='text' 
          name='department' 
          label='department' 
          placeholder='department' 
          {...department} 
        />
        <input 
          type='text' 
          name='description' 
          label='description' 
          placeholder='description' 
          {...description} 
        />
        <input type='submit' name='Submit' />
      </form>  
    </div>
  )
  }
}

export default ContactForm