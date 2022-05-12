import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Protected = () => {
  let navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem('token')
    axios
      .get('http://localhost:5000/protected', {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
        navigate('/login')
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <h1>Protected page accessed</h1>
    </>
  )
}

export default Protected
