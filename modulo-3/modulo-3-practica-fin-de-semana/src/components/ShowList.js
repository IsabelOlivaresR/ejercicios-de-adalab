import React from 'react';
import Show from './Show';

const ShowList = (props) => {
  const shows = props.list.map((item, id) => {
    return (
      <li className='serie' key={item.show.id}>
        <Show
          image={item.show.image}
          name={item.show.name}
          rating={item.show.rating}
          status={item.show.status}
        />
      </li>
    );
  });
  console.log(shows);
  return (
    <div>
      <h1 className='page_title'>Mis series</h1>
      <ul className='serie_info'>{shows}</ul>
    </div>
  );
};
export default ShowList;
