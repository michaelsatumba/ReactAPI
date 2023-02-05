import React, {useState, useEffect} from 'react'

const Quotes = ()=>{
    const [quotes, setQuotes]=useState([])
    const [error, setError]=useState(null)

    useEffect(()=>{
        fetch("http://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            // if (!response.ok){
            //     throw new Error(response.statusText)
            // }
           // console.log(response.json())
            return response.json()})
        .then((data)=> {
          //  console.log(data)
            setQuotes(data)})
        .catch((err)=>{
            setError(err.message)
        })
    }, [])

    return(
        <div>
        {error ? (
            <p>Error Occured: {error}</p>
        ): (
    
        <ul>
            {quotes.map(quote =>
                <li key={quote.id} >"{quote.quote}"-{quote.author}</li>
            )}
        </ul>
        )}
        </div>
    )
}

export default Quotes