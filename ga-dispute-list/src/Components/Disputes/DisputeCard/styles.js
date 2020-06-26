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
    font-weight: 500; 
    width: 928px;
    height: 123px;
    background: #1C1C21;
    border-radius: 6px;

    .logo {
        display: flex; 
        flex: 10%; 
        padding-left: 10px; 
    }
    .names {
        color: white;  
        display: flex; 
        flex: 35%; 
        justify-content: space-between; 
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
        flex-direction: row; 
        justify-content: space-between;  
        }
   
    }
    .date {
        display: flex; 
        flex: 15%;
        justify-content: space-between;  
        
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

    
    .red {
        color: #EB2C44
    }

    .yellow {
        color: #EEB502;
    }

    .green {
        color: #00C202;
    }
    .content{
            display: flex; 
            flex-direction: column; 
            justify-content: center; 
        }

    .verLine {
        width: 1px;
        height: 65px;
        border: 1px solid #FFFFFF;
        opacity: 0.23;
        margin-right: 15px; 
        }
}

`