import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux'
import { getInfo } from '../../state/Actions'
import DisputeCard from "./DisputeCard"

const axios = require('axios');
const API = 'https://api.staging.gamerarena.com/disputes/'

const Disputes = (props) => {

    return (
        
        <div>
            <DisputeCard />
        </div>
    );
}

const mapStateToProps = state => ({ state: state.apiInfo.apiInfo[0] })

export default connect(mapStateToProps)(Disputes);
