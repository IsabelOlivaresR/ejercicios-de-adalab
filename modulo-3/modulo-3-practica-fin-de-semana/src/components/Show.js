import React from 'react';

class Show extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className='card'>
        <img
          className='serie_img'
          src={
            this.props.image
              ? this.props.image.medium
              : 'https://via.placeholder.com/210x295/ffffff/666666/?text=No+imagen.'
          }
          alt={this.props.name}
        />
        <h2 className='serie_name'>{this.props.name}</h2>
        <p className='serie_rating'>{this.props.rating.average}</p>
        <p className='serie_status'>{this.props.status}</p>
      </div>
    );
  }
}

export default Show;
