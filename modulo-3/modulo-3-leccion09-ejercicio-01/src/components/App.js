import React from 'react';
import '../stylesheets/App.css';

const App = () => {
  const users = [
    { name: 'Nymphadora Tonks', time: 9 },
    { name: 'Cedric Diggory', time: 28 },
    { name: 'Cho Chang', time: 35 },
    { name: 'Luna Lovegood', time: 45 },
    { name: 'Gregory Goyle', time: 56 },
  ];
  const [a, b, c] = users;
  console.log(
    `Los ganadores son en el primer puesto ${a.name} con un tiempo de ${a.time} segundos, en el segundo puesto ${b.name} con un tiempo de ${b.time} segundos, en el tercer puesto ${c.name} con un tiempo de ${c.time} segundos.`
  );
  return (
    <p>
      Los ganadores son en el primer puesto {a.name} con un tiempo de {a.time}
      segundos, en el segundo puesto {b.name} con un tiempo de {b.time}{' '}
      segundos, en el tercer puesto {c.name} con un tiempo de {c.time} segundos.
    </p>
  );
};

export default App;
