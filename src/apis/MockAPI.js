import axios from 'axios';
import React, { useState, useEffect } from 'react';

const MockAPI = () => {
    const [result, setResult] = useState(null)

    useEffect(() => {
        const results = async () => {
            const { data } = await axios.get('https://605b218e27f0050017c063ab.mockapi.io/mid-project/3/articls', {
            })
            setResult(data)
            console.log(data)
            // axios.post(`https://605b218e27f0050017c063ab.mockapi.io/mid-project/3/articls`, { hello: 'world' })
            // const { data2 } = await axios.get('https://605b218e27f0050017c063ab.mockapi.io/mid-project', {
            // })
            // console.log(data2)

        }
        results()
    }, [])

    return (<>
        {result ? result[2].midProject : ''}
        <h1>MockAPI</h1>
    </>
    )
}

export default MockAPI;