import styled from "styled-components"

export const StyledApp = styled.div`

.below {
    height: 992px; 
    display: flex; 
    box-shadow: 0px 2px 20px 20px white;
    .side-bar {
        flex: 20%;  
    }
    .main-body {
        background-image: url("https://img.freepik.com/free-photo/3d-grunge-room-interior-with-spotlight-smoky-atmosphere-background_1048-11333.jpg?size=626&ext=jpg");
        background-position: center; 
        background-repeat: no-repeat; 
        background-size: cover;
        height: 350px;  
        flex: 80%; 
        z-index: 1;
    }
}

`