import Styled from "styled-components"

export const StyledHeader = Styled.div`

@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,500;0,700;1,500;1,700&display=swap');

width: 948px; 
display: flex; 
justify-content: space-between; 
align-items: center; 
margin-bottom: 50px; 
font-family: Ubuntu; 
font-size: 30px; 
color: white; 
padding: 0 0 0 20px; 

.wrapper{
    display: flex; 
    justify-content: space-between; 
    align-items: center;
    background-color: #1d1d21; 
    height: 2.5em; 
    width: 20em; 
    border: 1.1px solid #232328; 
    border-radius: 0.7em; 
    font-size: 15px;
    input{
        background-color: #1d1d21;
        border-radius: 0;
        border: 0; 
        margin-left: 10px; 
    }
    .search {
        color: #616162; 
        margin-right: 10px; 
    }
}



`