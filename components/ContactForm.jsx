import React, { useState, useEffect } from 'react'

const ContactForm = () => {
  const [error, setError] = useState(false)
  const [showLoading, setShowLoading] = useState(false)
  const [showSuccesMessage, setShowSuccesMessage] = useState(false)

  useEffect(() => {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbz4Jh6ZZn8kPx2gcjZI9IStxRX642454D0_mBpd-dMDf829OtabxmGOjAqZFuvT34Z3Yg/exec'
    const form = document.forms['submit-to-google-sheet']

    form.addEventListener('submit', e => {
      setShowLoading(true)
      e.preventDefault()
      if (!form.elements.name.value || !form.elements.email.value || !form.elements.message.value) {
        setError(true)
        return
      }
      setError(false)

      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
          setShowSuccesMessage(true)
          setTimeout(() => {
            setShowSuccesMessage(false)
            setShowLoading(false)
          }, 3000)
        })
        .catch(error => console.error('Error!', error.message))
    })

  }, [])

  return (
    <form name="submit-to-google-sheet" className='bg-white shadow-2xl rounded-lg p-8 pb-12 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>Mail Box</h3>
      <div className="grid grid-cols-1 gap-4 mb-4 ">
        <textarea
          className='p-4 outline-none w-full rounded-lg bg-gray-100 text-gray-700
        focus:ring-2 focus:ring-yellow-100 '
          name='message'
          type='text'
          placeholder='Messages'
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4 ">
        <input
          className='py-2 px-4 outline-none w-full rounded-lg bg-gray-100 text-gray-700
        focus:ring-2 focus:ring-yellow-100 '
          name='name'
          type='text'
          placeholder='Name'
        />
        <input
          className=' bg-gray-100 text-gray-700 py-2 px-4 outline-none w-full rounded-lg focus:ring-2 
        focus:ring-yellow-100 
        invalid:border-pink-500 invalid:text-pink-600
        focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
          type='email'
          name='email'
          placeholder='Email'
        />
      </div>
      {error && <p className='text-xs text-red-500'>All fields are required</p>}
      <div className="mt-8 text-center">
        <button
          className='transition duration-500 ease hover:bg-yellow-500 inline-block bg-red-900 text-lg rounded-full text-white px-8 py-3 cursor-pointer disabled:cursor-wait disabled:bg-red-400 disabled:hover:bg-red-300 disabled:opacity-80"'
          disabled={showLoading}
          type='submit'
        >{showLoading?'Loading...':'Send Message'}</button>
        {showSuccesMessage && <span className='text-xl float-right font-semibold mt-3 text-green-500 '>Message Sent</span>}
      </div>
    </form>
  )
}

export default ContactForm
