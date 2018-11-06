import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Container, Row, Col } from 'reactstrap';

import Property from '../property/property.component';
import Contact from '../contact/contact.component';
import Mortgage from '../mortgage/mortgage.component';
import SimilarProperties from '../similarProperties/similarProperties.component';

export class PropertyPage extends React.Component {
  constructor(props) {
    super(props);

    this.reloadSimilarPropertiesHolder = {};
    this.reloadPropertyHolder = {};

    this.handlePropertyDetailsClick = this.handlePropertyDetailsClick.bind(this);
  }

  handlePropertyDetailsClick(propertyId) {
    this.reloadPropertyHolder.holder.reload(propertyId);
    this.reloadSimilarPropertiesHolder.holder.reload(propertyId);
  }

  render() {
    const { propertyId } = this.props;
    return (
      <Container>
        <Row>
          <Col>
            <Property
              propertyId={propertyId}
              reloadHolder={this.reloadPropertyHolder}
            />
          </Col>
          <Col xs="auto">
            <Contact />
            <Mortgage />
          </Col>
        </Row>
        <Row>
          <Col>
            <SimilarProperties
              propertyId={propertyId}
              onDetailsClick={this.handlePropertyDetailsClick}
              reloadHolder={this.reloadSimilarPropertiesHolder}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

PropertyPage.propTypes = {
  propertyId: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const { propertyId } = ownProps.match.params;

  return {
    propertyId,
  };
};

export default connect(mapStateToProps, null)(PropertyPage);
