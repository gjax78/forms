import React, {useState} from "react";
import './Form.css'

const Form = ({ filterResults, postForm }) => {
  const [item, setItem] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [title, setTitle] = useState('')
  const [money, setMoney] = useState('')
  const [error, setError] = useState('')

  const handleItemChange = (event) => {
    setItem(event.target.value)
  }

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value)
  }

  const handleLastNameChange = (event) => {
    setLastName(event.target.value)
  }

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleMoneyChange = (event) => {
    setMoney(event.target.value)
  }


  const submitSearch = (event) => {
    event.preventDefault()
    const searchQuery = {
      id: Date.now(),
      item: item
    }
    filterResults(searchQuery)
  }

  const submitForm = () => {
    const formResult = {
      id: Date.now(),
      firstName: firstName, 
      lastName: lastName,
      title: title.replace(/\d(?=\d{4})/g, "#"), 
      money: (money * .01).toLocaleString()
    }
    postForm(formResult)
  }
  
  const validateForm = (event) =>  {
    event.preventDefault()
    if (firstName && lastName && title.length === 16 && money) {
      submitForm(event)
    } else {
      setError('Please fill out all input fields.')
    }
  }

  return (
    <form className='form'>
      <input
        className='search'
        type='text'
        placeholder="Search..."
        value={item}
        onChange={event => handleItemChange(event)}
      />
      <div className='button-container'>
        <button className='submit-search' onClick={event => submitSearch(event)}>Submit search</button>
      </div>

      {/* <div className='title-container'>
        <h4 className='name-title'>Name:</h4>
        <h4>Title:</h4>
        <h4>Company:</h4>
        <h4>Employer:</h4>
        <h4>Phone:</h4>
        <h4>Message:</h4>
      </div> */}

    <div className='form-container'>
      <div className='name-container'>
        <input
          className='first-name'
          type='text'
          placeholder='Jane'
          value={firstName}
          onChange={event => handleFirstNameChange(event)}
        />
        <input
          className='last-name'
          type='text'
          placeholder='Doe'
          value={lastName}
          onChange={event => handleLastNameChange(event)}
          />
      </div>

        <input
          className='title'
          type='number'
          placeholder='Credit Card Number'
          value={title}
          onChange={event => handleTitleChange(event)}
        />

        <input
          className='money'
          type='number'
          placeholder='$0.00'
          value={money}
          onChange={event => handleMoneyChange(event)}
        />

        <input
          className='company'
          type='text'
          placeholder='Example company'
        />

        <input
          className='type'
          type='text'
          placeholder='Employer'
        />

        <input
          className='email'
          type='text'
          placeholder='jane@example.com'
        />
        
        <input
          className='phone'
          type='text'
          placeholder='123-456-7890'
        />    

        <textarea
          className='message'
          type='text'
          placeholder="Hi! I'd love to arrange a product demo for our team."
        />

      {error && <p className='error'>{error}</p>}
        <div className='button-container'>
          <button className='submit' onClick={event => validateForm(event)}>GET IN TOUCH</button>
        </div>
      </div>


    </form>
  )
}

export default Form