import Head from 'next/head'
import {useState} from 'react'
import {QueryClient, QueryClientProvider, useQuery} from 'react-query'
import Planets from "@components/Planets"
import People from '@components/People'

const queryClient = new QueryClient()

export default function Home({page})
{
  return (
    <QueryClientProvider client={queryClient}>
      <div>
      {page == 'planets' ? <Planets/> : <People/> }
      </div>
    </QueryClientProvider>
  )
}
