import React from 'react'

export default function ButtonFormGroup({children, direction}) {
  return (
    <div className={`button-form-group ${direction}`}>{children}</div>
  )
}
