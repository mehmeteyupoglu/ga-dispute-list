import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKhanda, faCircle, faUserPlus, faCalendarAlt, faVectorSquare } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { StyledCard } from "./styles"
import { getInfo } from '../../../state/Actions'

const DisputeCard = (props) => {

    const logo = require('../../../Assets/Game Logo.png')
    const state = useSelector(state => state?.apiInfo?.apiInfo[0]?.results)
    const [response, setResponse] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(getInfo()) ; 
    
    }, [] );
    
    useEffect(() => {
        if(state) {
        //   console.log("State is ", state);
          setResponse(state)
          
        }
    
    }, [state] );

    console.log(response)

    function convertDate(dateString){
        var p = dateString.split(/\D/g)
        return [p[2],p[1],p[0] ].join(".")
        }
    if(!state) {
        return null;
       }
    return (
        <StyledCard>
        <div>
            {
                state.map(item => {
                    return (
                        <div className="component">
                            <div className="logo">
                                <img src={logo} alt="game logo"/>  
                            </div>
                            <div className="names">
                                <div className="content">
                                    <div>doruk {" "} 
                                        <FontAwesomeIcon icon={faKhanda} />
                                        {"  "}gokhan
                                    </div>
                                    <div className="duello">Düello #{`${item.id}  `} 
                                        <FontAwesomeIcon icon={faCircle} className="circle" />
                                        {`  ${item.type}`}
                                    </div>
                                </div>
                                 <div className="verLine"></div>
                            </div>
                            <div className="creator">
                                <div className="content">
                                    <div className="upper-body">
                                        <FontAwesomeIcon icon={faUserPlus} />
                                        {" "}     Oluşturan 
                                    </div>
                                    <div className="lower-body">
                                        {item.creator}
                                    </div>
                                </div>
                                 <div className="verLine"></div>
        
                            </div>
                            <div className="date">
                                <div className="content">
                                    <div className="upper-body">
                                        <FontAwesomeIcon icon={faCalendarAlt} />
                                        {" "} Tarih
                                    </div>
                                    <div className="lower-body">
                                        {
                                            convertDate(item.match.createdAt.slice(0, 10))
                                        } 
                                    </div>    
                                </div>
                                 <div className="verLine"></div>
                            </div>
                            <div className="durum">
                                <div className="upper-body">
                                    <FontAwesomeIcon icon={faVectorSquare} />
                                    {" "} Durum
                                </div>
                                <div className="lower-body">
                                    <div className={
                                            item.statusData === "Bekleniyor" ? "yellow": 
                                            item.statusData === "Kabul Edildi" ? "green": 
                                            "red"}
                                            >{item.statusData}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            
        </div>
        </StyledCard>
    );
}

export default DisputeCard;
