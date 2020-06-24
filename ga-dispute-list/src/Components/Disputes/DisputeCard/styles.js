import styled from "styled-components"

export const StyledCard = styled.div`

.component {

    @import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    margin-bottom: 18px; 
    margin-left: 20px; 
    color: white; 
    font-family: Ubuntu; 
    font-weight: 200; 
    width: 928px;
    height: 123px;
    background: #1C1C21;
    border-radius: 6px;

    .logo {
        display: flex; 
        flex: 10%; 
    }
    .names {
        display: flex; 
        flex: 35%; 
        flex-direction: column; 
        .duello{
            font-size: 12px;
            line-height: 14px;
            color: #9B9B9B; 
            .circle {
                font-size: 7px;
            }
        }
    }
    .creator {
        display: flex; 
        flex: 15%; 
        flex-direction: column; 
        
    }
    .date {
        display: flex; 
        flex: 15%; 
        flex-direction: column; 
        
    }
    .durum {
        display: flex; 
        flex: 25%; 
        flex-direction: column; 
        
    }
    .upper-body {
        color: #9B9B9B;
        font-size: 13px;
        line-height: 15px; 
    }
    

}





`