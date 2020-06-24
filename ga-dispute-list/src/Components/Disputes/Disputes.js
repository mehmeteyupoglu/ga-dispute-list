import React, { useEffect, useState } from 'react';
import DisputeCard from "./DisputeCard"

const axios = require('axios');
const API = 'https://api.staging.gamerarena.com/disputes/'

const Disputes = (props) => {


    const [response, setResponse] = useState([]);
    
useEffect(() => {
  
    axios.get(`https://api.staging.gamerarena.com/disputes/`)
    .then(function (response) {
        setResponse(response.data.results)
    })
    .catch(function (error) {
        console.log(error);
    })
},[]);
    return (
        <div>
            <DisputeCard response={response}/>
        </div>
    );
}

export default Disputes;
