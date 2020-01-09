import React, { useState, useEffect } from 'react'
import axios from 'axios'
import useFormInput from '../hooks/useFormInput'

const ContactForm = (props) => {
  // state for editing contacts
  const [ contact, setContact ] = useState(props.contactProp ? 
    props.contactProp 
    : null
  )
  // state for creating new contacts
  const first_name = useFormInput(contact ? contact.first_name : '')
  const last_name = useFormInput(contact ? contact.last_name : '')
  const phone = useFormInput(contact ? contact.phone : '')
  const email = useFormInput(contact ? contact.email : '')
  const position = useFormInput(contact ? contact.position : '')
  const department = useFormInput(contact ? contact.department : '')
  const description = useFormInput(contact ? contact.description : '')

  // handle submission of new contacts
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`/api/jobs/${props.id}/contacts`, 
      { first_name: first_name.values.first_name, 
        last_name: last_name.values.last_name,
        phone: phone.values.phone,
        email: email.values.email,
        position: position.values.email,
        department: department.values.department,
        description: description.values.description,
      })
        .then( res => {
          props.add(res.data)
          props.toggle()
        })
  }

  // function to update a contact
  const handleUpdate = (e) => {
    e.preventDefault()
    axios.patch(`/api/jobs/${props.job}/contacts/${contact.id}`, 
    {
      first_name: first_name.values.first_name, 
      last_name: last_name.values.last_name,
      phone: phone.values.phone,
      email: email.values.email,
      position: position.values.email,
      department: department.values.department,
      description: description.values.description,
    })
      .then( res => {
        setContact(res.data)
        props.toggle()
        props.update()
      })
  }

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
          onChange={first_name.handleChange}
        />
        <input 
          type='text' 
          name='last_name' 
          label='Last Name' 
          placeholder={contact.last_name} 
          {...last_name} 
          onChange={last_name.handleChange}
        />
      <input 
        type='text' 
        name='phone' 
        label='Phone' 
        placeholder={contact.phone} 
        {...phone} 
        onChange={phone.handleChange}
      />
        <input 
          type='text' 
          name='email' 
          label='Email' 
          placeholder={contact.email} 
          {...email} 
          onChange={email.handleChange}
        />
        <input 
          type='text' 
          name='position' 
          label='position' 
          placeholder={contact.position} 
          {...position} 
          onChange={position.handleChange}
        />
        <input 
          type='text' 
          name='department' 
          label='department' 
          placeholder={contact.department} 
          {...department} 
          onChange={department.handleChange}
        />
        <input 
          type='text' 
          name='description' 
          label='description' 
          placeholder={contact.description} 
          {...description} 
          onChange={description.handleChange}
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
          onChange={first_name.handleChange}
        />
        <input 
          type='text' 
          name='last_name' 
          label='Last Name' 
          placeholder='Last Name' 
          {...last_name} 
          onChange={last_name.handleChange}
        />
        <input 
          type='text' 
          name='phone' 
          label='Phone' 
          placeholder='Phone' 
          {...phone} 
          onChange={phone.handleChange}
        />
        <input 
          type='text' 
          name='email' 
          label='Email' 
          placeholder='Email' 
          {...email} 
          onChange={email.handleChange}
        />
        <input 
          type='text' 
          name='position' 
          label='position' 
          placeholder='position' 
          {...position} 
          onChange={position.handleChange}
        />
        <input 
          type='text' 
          name='department' 
          label='department' 
          placeholder='department' 
          {...department} 
          onChange={department.handleChange}
        />
        <input 
          type='text' 
          name='description' 
          label='description' 
          placeholder='description' 
          {...description} 
          onChange={description.handleChange}
        />
        <input type='submit' name='Submit' />
      </form>  
    </div>
  )
  }
}

export default ContactForm