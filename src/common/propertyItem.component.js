import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class PropertyItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDetailsClick = this.handleDetailsClick.bind(this);
  }

  handleDetailsClick() {
    const { property, onDetailsClick } = this.props;
    onDetailsClick(property.id);
  }

  render() {
    const { property } = this.props;
    return (
      <div>
        <p>Property item</p>
        <Link
          to={'/property/'.concat(property.id)}
          onClick={this.handleDetailsClick}
        >
            Details
        </Link>
      </div>
    );
  }
}

PropertyItem.propTypes = {
  property: PropTypes.object.isRequired,
  onDetailsClick: PropTypes.func,
};

PropertyItem.defaultProps = {
  onDetailsClick: () => {},
};
