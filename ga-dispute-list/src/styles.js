import styled from "styled-components"
import pubg from "../src/Assets/pubg.jpeg"


export const StyledApp = styled.div`

.below {
    height: 992px; 
    display: flex; 
    .side-bar {
        flex: 20%; 
        box-shadow: 0px 2px 5px 5px #0d0d0d   ; 
    }
    .main-body {
        position: relative;  
        flex: 80%; 
        .bg-img {  
            background-image: url(${pubg});
            background-position: center; 
            background-repeat: no-repeat; 
            background-size: cover;
            height: 350px;
            opacity: 0.1; 
        }
        .disputes {
            position: absolute; 
            top: 170px;   
        }
    
}

`