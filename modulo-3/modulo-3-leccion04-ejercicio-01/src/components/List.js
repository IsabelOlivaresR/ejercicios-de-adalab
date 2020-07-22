import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const arrayOfItems = [
  {
    name: 'Cereales con chocolate',
    description: 'Cereales rellenos de chocolate',
    quantity: 2,
    category: 'Cereales',
    price: 5,
  },
  {
    name: 'Hamburguesa con queso',
    description: 'Hamburguesa rica y saludable',
    quantity: 1,
    category: 'Fast-food',
    price: 15,
  },
  {
    name: 'Agua mineral',
    description: 'Agua de un charco del Himalaya',
    quantity: 2,
    category: 'Bebida',
    price: 5,
  },
  {
    name: 8,
    description: 'Agua de un charco del Himalaya',
    quantity: 2,
    category: 'Bebida',
    price: 6,
  },
];

class List extends React.Component {
  render() {
    const arrayOfItemsBelow10 = arrayOfItems.filter((item) => item.price < 10);

    const arrayOfItemsJSX = arrayOfItemsBelow10.map((element, index) => {
      return (
        <li key={index}>
          <Item
            name={element.name}
            description={element.description}
            quantity={element.quantity}
            category={element.category}
            price={element.price}
          />
        </li>
      );
    });

    return <ul className='item-list'>{arrayOfItemsJSX}</ul>;
  }
}

Item.defaultProps = {
  description: 'No hay descripción',
};
Item.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
export default List;
