import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PropertyItem from '../common/propertyItem.component';

import * as loaderActions from '../common/loader.actions';
import * as actions from './similarProperties.actions';

export class SimilarProperties extends Component {
  constructor(props) {
    super(props);

    this.loaderId = 'similar_properties_loader';

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
    const { similarPropertiesActions } = this.props;
    similarPropertiesActions.clearSimilarProperties();
    similarPropertiesActions.loadSimilarProperties(this.loaderId, propertyId);
  }

  render() {
    const { properties, onDetailsClick } = this.props;
    return (
      <div>
        {properties.map(
          item => (<PropertyItem
            key={item.id}
            property={item}
            onDetailsClick={onDetailsClick}
          />
          ),
        )}
      </div>
    );
  }
}

SimilarProperties.propTypes = {
  reloadHolder: PropTypes.object.isRequired,
  propertyId: PropTypes.string.isRequired,
  properties: PropTypes.array.isRequired,
  createLoader: PropTypes.func.isRequired,
  deleteLoader: PropTypes.func.isRequired,
  similarPropertiesActions: PropTypes.object.isRequired,
  onDetailsClick: PropTypes.func,
};

SimilarProperties.defaultProps = {
  onDetailsClick: () => {},
};

const mapStateToProps = state => ({
  properties: state.similarProperties,
});

const mapDispatchToProps = dispatch => ({
  createLoader: id => dispatch(loaderActions.createCreateLoader(id)),
  deleteLoader: id => dispatch(loaderActions.createDeleteLoader(id)),
  similarPropertiesActions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SimilarProperties);
