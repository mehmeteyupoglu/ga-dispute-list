import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKhanda } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { StyledCard } from "./styles"

const DisputeCard = (props) => {
    const [response, setState ] = useState(props)
    
    useEffect(() => {
  
        setState(props)
        console.log(response)
    });

    return (
        <StyledCard>
        <div>
            {
                response.response.map(item => {
                    return (
                        <div className="component">
                            <div className="logo">
                                <img src="/Assets/Game Logo.png" alt="game logo"/>  
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
                                {Date(`${item.match.createdAt}`)}
                                    
                                </div>
                            </div>
                            <div className="durum">
                                <div className="upper-body">
                                    Durum
                                </div>
                                <div className="lower-body">
                                    {item.statusData}
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
