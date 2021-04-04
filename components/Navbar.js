import React from 'react'

const Navbar = ({setPage, page}) => {
    return (
        <>
        <h1>Star Wars</h1>
        <div>
                <button onClick={() =>
                {
                    setPage('people')
                }} >
                    People
                </button>
                <button onClick={() =>
                {
                        setPage('planets')
                }} >Planets</button>
        </div>
        </>
    )
}

export default Navbar
