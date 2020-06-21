import React from 'react';
import './App.css';
import { Header, Disputes, NavBar } from './Components' 
import { Container, Row, Col } from 'reactstrap';

import Styled from "styled-components"

export const StyledRow = Styled(Row)`
padding: 100px; 
color: white; 
background-color: #141417; 
box-shadow: 0px 2px 45px #141417; 

`


function App(props) {
  return (
    <div className="App">
      <NavBar />
      <Container>
        <StyledRow>
          <Row>
            <Col sm="12" md={{ size: 8, offset: 2 }}>
              <Header />
              <Disputes />
            </Col>
          </Row>
        </StyledRow>
      </Container>
    </div>
  );
}

export default App;
