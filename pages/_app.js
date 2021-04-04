import { Fragment, useState } from 'react'
import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Home from './index'

function MyApp({ Component, pageProps })
{
  const [page,setPage] = useState('planets')
  return (
    <>
      <Navbar setPage={setPage} page={ page}/>
      <Component {...pageProps} page={page} />
    </>
  )
}

export default MyApp
