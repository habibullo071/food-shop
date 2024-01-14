import React from 'react'
import './Home.scss'
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import Orders from '../../components/Orders/Orders'

function Home() {
  return (<div className='Home'>
    <Header/>
    <Main/>
    <Orders/>
  </div>
  )
}

export default Home