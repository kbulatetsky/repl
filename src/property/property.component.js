import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as loaderActions from '../common/loader.actions';
import * as actions from './property.actions';

export class Property extends Component {
  constructor(props) {
    super(props);

    this.loaderId = 'property_loader';

    const { reloadHolder } = this.props;
    reloadHolder.holder = this;
  }

  componentDidMount() {
    const { createLoader, propertyId } = this.props;
    createLoader(this.loaderId);
    this.reload(propertyId);
  }

  componentWillUnmount() {
    const { deleteLoader } = this.props;
    deleteLoader(this.loaderId);
  }

  reload(propertyId) {
    const { propertyActions } = this.props;
    propertyActions.resetProperty();
    propertyActions.loadProperty(this.loaderId, propertyId);
  }

  render() {
    const { property } = this.props;
    if (property) {
      return (
        <div>
          <p>
            Loaded Property:
            {property.id}
          </p>
        </div>
      );
    }

    return (
      <div>
        <p>Property</p>
      </div>
    );
  }
}

Property.propTypes = {
  reloadHolder: PropTypes.object.isRequired,
  propertyId: PropTypes.string.isRequired,
  property: PropTypes.object,
  createLoader: PropTypes.func.isRequired,
  deleteLoader: PropTypes.func.isRequired,
  propertyActions: PropTypes.object.isRequired,
};

Property.defaultProps = {
  property: null,
};

const mapStateToProps = (state) => {
  const { property } = state;

  return {
    property,
  };
};

const mapDispatchToProps = dispatch => ({
  createLoader: id => dispatch(loaderActions.createCreateLoader(id)),
  deleteLoader: id => dispatch(loaderActions.createDeleteLoader(id)),
  propertyActions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Property);
