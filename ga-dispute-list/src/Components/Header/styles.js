import Styled from "styled-components"

export const StyledHeader = Styled.div`

@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,500;0,700;1,500;1,700&display=swap');

width: 930px; 
display: flex; 
justify-content: space-between; 
align-items: center; 
margin-bottom: 50px; 
font-family: Ubuntu; 
font-size: 30px; 
background-image: url("/public/pubg.jpeg");
background-position: center;
background-repeat: no-repeat;
background-size: cover;
opacity: 1; 
color: white; 
padding: 200px 0 0 20px; 


input {
    display: flex; 
    background-color: #1d1d21; 
    height: 2.5em; 
    width: 20em; 
    border: 1.1px solid #232328; 
    border-radius: 0.5em; 
    font-size: 15px; 
}

`