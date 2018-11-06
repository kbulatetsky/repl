import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PropertyItem from '../common/propertyItem.component';

import * as loaderActions from '../common/loader.actions';
import * as actions from './ourSelection.actions';

export class OurSelection extends Component {
  constructor(props) {
    super(props);

    this.loaderId = 'our_selection_loader';
  }

  componentDidMount() {
    const { createLoader, ourSelectionActions } = this.props;
    createLoader(this.loaderId);
    ourSelectionActions.clearOurSelection();
    ourSelectionActions.loadOurSelection(this.loaderId);
  }

  componentWillUnmount() {
    const { deleteLoader } = this.props;
    deleteLoader(this.loaderId);
  }

  render() {
    const { properties } = this.props;
    return (
      <div>
        {properties.map(item => <PropertyItem key={item.id} property={item} />)}
      </div>
    );
  }
}

OurSelection.propTypes = {
  properties: PropTypes.array.isRequired,
  createLoader: PropTypes.func.isRequired,
  deleteLoader: PropTypes.func.isRequired,
  ourSelectionActions: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  properties: state.ourSelection,
});

const mapDispatchToProps = dispatch => ({
  createLoader: id => dispatch(loaderActions.createCreateLoader(id)),
  deleteLoader: id => dispatch(loaderActions.createDeleteLoader(id)),
  ourSelectionActions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(OurSelection);
