import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKhanda } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { StyledCard } from "./styles"



const DisputeCard = (props) => {

    const logo = require('../../../Assets/Game Logo.png')
    const [response, setState ] = useState(props)
    
    useEffect(() => {
  
        setState(props)
        console.log(response)
    });

    function convertDate(dateString){
        var p = dateString.split(/\D/g)
        return [p[2],p[1],p[0] ].join(".")
        }

    return (
        <StyledCard>
        <div>
            {
                response.response.map(item => {
                    return (
                        <div className="component">
                            <div className="logo">
                                <img src={logo} alt="game logo"/>  
                            </div>
                            <div className="names">
                                <div>doruk {" "} 
                                    <FontAwesomeIcon icon={faKhanda} />
                                    {"  "}gokhan
                                </div>
                                <div className="duello">Düello #{`${item.id}  `} 
                                    <FontAwesomeIcon icon={faCircle} className="circle" />
                                    {`  ${item.type}`}
                                 </div>
                            </div>
                            <div className="creator">
                                <div className="upper-body">
                                    Oluşturan 
                                </div>
                                <div className="lower-body">
                                    {item.creator}
                                </div>
                            </div>
                            <div className="date">
                                <div className="upper-body">
                                    Tarih
                                </div>
                                <div className="lower-body">
                                {
                                    convertDate(item.match.createdAt.slice(0, 10))
                                } 
                                </div>
                            </div>
                            <div className="durum">
                                <div className="upper-body">
                                    Durum
                                </div>
                                <div className="lower-body">
                                    <p className={
                                        item.statusData === "Bekleniyor" ? "yellow": 
                                        item.statusData === "Kabul Edildi" ? "green": 
                                        "red"
                                    }>{item.statusData}</p>
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
