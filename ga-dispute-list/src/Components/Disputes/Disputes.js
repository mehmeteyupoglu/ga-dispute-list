import React, { useEffect, useState } from 'react';

const axios = require('axios');
const API = 'https://api.staging.gamerarena.com/disputes/'

const Disputes = () => {


    const [response, setResponse] = useState([]);
    
useEffect(() => {
  
    axios.get(`https://api.staging.gamerarena.com/disputes/`)
    .then(function (response) {
        setResponse(response.data.results)
        console.log(response)
    })
    .catch(function (error) {
        console.log(error);
    })
},[]);
    return (
        <div>
            {
                response.map(item => {
                    return <h1>Creator: {item.creator}</h1>
                })
            }
        </div>
    );
}

export default Disputes;
