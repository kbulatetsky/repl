import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import Search from '../search/search.component';
import Welcome from '../welcome/welcome.component';
import Advantages from '../advantages/advantages.component';
import Contact from '../contact/contact.component';
import OurSelection from '../ourSelection/ourSelection.component';

function HomePage() {
  return (
    <Container>
      <Row>
        <Col>
          <Search />
        </Col>
      </Row>
      <Row>
        <Col>
          <Welcome />
          <Advantages />
        </Col>
        <Col xs="auto">
          <Contact />
        </Col>
      </Row>
      <Row>
        <Col>
          <OurSelection />
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
