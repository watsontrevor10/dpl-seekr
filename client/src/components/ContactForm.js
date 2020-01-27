import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NumberFormat from 'react-number-format';
import useFormInput from '../hooks/useFormInput'

const ContactForm = (props) => {
  // state for editing contacts
  const [contact, setContact] = useState(props.contactProp ?
    props.contactProp
    : null
  )
  const { values, setValues, handleChange } = useFormInput(submit)
  const { first_name, last_name, phone, email, position, department, description } = values

  useEffect(() => {
    if (contact) {
      setValues({ ...contact })
    }
  }, [])

  function submit(e) {
    const newContact = { first_name, last_name, phone, email, position, department, description }
    if (contact) {
      e.preventDefault()
      axios.patch(`/api/jobs/${props.id}/contacts/${contact.id}`, newContact)
        .then(res => {
          setContact(res.data)
          props.toggle()
          props.update()
        })
    } else {
      e.preventDefault()
      axios.post(`/api/jobs/${props.id}/contacts`, newContact)
        .then(res => {
          props.add(res.data)
          props.update()
          props.toggle()
        })
    }
  }

  if (contact) {
    // Edit Form
    return (
      <>
        <form onSubmit={submit} className="jobview-form contact-form">
          <div className="all-inputs">
            <div className="form-input">
              <h3>First Name</h3>
              <input
                type='text'
                name='first_name'
                label='First Name'
                value={first_name}
                required
                {...first_name}
                onChange={handleChange}
              />
            </div>
            <div className="form-input">
              <h3>Last Name</h3>
              <input
                type='text'
                name='last_name'
                label='Last Name'
                value={last_name}
                {...last_name}
                onChange={handleChange}
              />
            </div>
            <div className="form-input">
              <h3>Phone</h3>
              <NumberFormat
                format="(###) ###-####" mask="_"
                type='text'
                name='phone'
                label='Phone'
                value={phone}
                {...phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-input">
              <h3>Email</h3>
              <input
                type='email'
                name='email'
                label='Email'
                value={email}
                {...email}
                onChange={handleChange}
              />
            </div>
            <div className="form-input">
              <h3>Job Title</h3>
              <input
                type='text'
                name='position'
                label='position'
                value={position}
                {...position}
                onChange={handleChange}
              />
            </div>
            <div className="form-input">
              <h3>Department</h3>
              <input
                type='text'
                name='department'
                label='department'
                value={department}
                {...department}
                onChange={handleChange}
              />
            </div>
            <div className="form-input">
              <h3>Description</h3>
              <textarea
                type='text'
                name='description'
                label='description'
                value={description}
                {...description}
                onChange={handleChange}
              />
            </div>
            <div className="btns">
              <button
                className="jobinfo-save-btn info fill2"
                type="submit" value="Submit"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </>
    )
  } else {
    // Add Form
    return (
      <>
        <form onSubmit={submit} className="jobview-form contact-form">
          <div className="all-inputs">
            <div className="form-input">
              <h3>First Name </h3>
              <input
                type='text'
                name='first_name'
                label='First Name'
                placeholder='First Name'
                required
                {...first_name}
                onChange={handleChange}
              />
            </div>
            <div className="form-input">
              <h3>Last Name </h3>
              <input
                type='text'
                name='last_name'
                label='Last Name'
                placeholder='Last Name'
                {...last_name}
                onChange={handleChange}
              />
            </div>
            <div className="form-input">
              <h3>Phone</h3>
              <NumberFormat
                format="(###) ###-####" mask="_"
                type='text'
                name='phone'
                label='Phone'
                value={phone}
                {...phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-input">
              <h3>Email</h3>
              <input
                type='email'
                name='email'
                label='Email'
                placeholder='Email'
                {...email}
                onChange={handleChange}
              />
            </div>
            <div className="form-input">
              <h3>Position</h3>
              <input
                type='text'
                name='position'
                label='position'
                placeholder='position'
                {...position}
                onChange={handleChange}
              />
            </div>
            <div className="form-input">
              <h3>Department</h3>
              <input
                type='text'
                name='department'
                label='department'
                placeholder='department'
                {...department}
                onChange={handleChange}
              />
            </div>
            <div className="form-input">
              <h3>Description</h3>
              <textarea
                type='text'
                name='description'
                label='description'
                placeholder='description'
                {...description}
                onChange={handleChange}
              />
            </div>
            <div className="btns">
              <button
                className="jobinfo-save-btn info fill2"
                type="submit" value="Submit"
                >
                Save
              </button>
            </div>
          </div>
        </form>
      </>
    )
  }
}

export default ContactForm