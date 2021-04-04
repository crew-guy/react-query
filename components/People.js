import React,{useState} from 'react'
import {useQuery} from 'react-query'
import Person from './Person'

const fetchPeople = async (key) =>
{
    const [type, greeting, page] = key.queryKey;
    console.log(greeting)
    const res = await fetch(`https://swapi.dev/api/people/?page=${page}`)
    return res.json()
}

const People = () =>
{
    const [page, setPage] = useState(1)
    const { data, status } = useQuery(['people', 'hello bois', page], fetchPeople, {
        staleTime: 5000,
        // cacheTime: 10,
        onSuccess: () => console.log('data fetched with no problemo')
    })
    switch(status)
        {
            case 'error':
            {
                return (<p>Error fetching from API</p>)
                break
            }
            case 'loading':
                {
                    return ( <p>Loading....</p> )
                    break
                }
            case 'success':
            {
                return (
                    <>
                    <button onClick ={()=>setPage(1)} >Page 1</button>
                    <button onClick ={()=>setPage(2)} >Page 2</button>
                    <button onClick ={()=>setPage(3)} >Page 3</button>
                    {data.results.map(person => (
                    <div className="container">
                        <h3>{person.name} </h3>
                        <p>Gender : {person.gender} </p>
                        <p>Birth year : {person.birth_year} </p>
                    </div>
                    ) )}
                    </>
                )
            }
        }
}

export default People
