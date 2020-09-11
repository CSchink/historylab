import React, { Component } from 'react'
import Select from 'react-select'

const options = [
  { value: 'history', label: 'History Lab' },
  { value: 'philosophy', label: 'Philosophy Lab' },
  { value: 'science', label: 'Science Lab' }
]



const MultiSelect = () => (
  <Select options={options} />
)

export default MultiSelect