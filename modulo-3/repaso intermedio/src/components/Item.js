import React from 'react';

class Item extends React.Component {
  render() {
    const membersLi = this.props.memebers.map((member, index) => {
      return <li key={index}>{member}</li>;
    });

    return (
      <article>
        <h2>{this.props.name}</h2>
        <span>{this.props.icon}</span>
        <h3>Members:{this.props.members}</h3>
        <ul>{membersLi}</ul>
      </article>
    );
  }
}

export default Item;
