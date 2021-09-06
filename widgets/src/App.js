import React, { useState } from 'react';
// import Accordion from './components/Accordion';
// import Search from './components/Search';
import Dropdown from './components/Dropdown';

// const items = [
//    {
//       title: 'What is React?',
//       content: 'React is a front end javascript framework.',
//    },
//    {
//       title: 'Why use React?',
//       content: 'React is a favourite JS library among engineers',
//    },
//    {
//       title: 'How do you use React?',
//       content: 'You use React by creating components.',
//    },
// ];

const options = [
   {
      label: 'Red',
      value: 'red',
   },
   {
      label: 'Green',
      value: 'green',
   },
   {
      label: 'Blue',
      value: 'blue',
   },
];

const App = () => {
   const [selected, setSelected] = useState(options[0]);

   return (
      <div className="ui segment container">
         <Dropdown
            selected={selected}
            onSelectedChange={setSelected}
            options={options}
            label="Select a color"
         />
      </div>
   );
};

export default App;
