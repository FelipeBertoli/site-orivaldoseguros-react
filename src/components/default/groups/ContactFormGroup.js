import React from 'react';
import './style.css'

export default function ContactFormGroup({children, ref, onSubmit}) {
  return (
    <form ref={ref} onSubmit={onSubmit} className='contact-form-group'>{children}</form>
  )
}
