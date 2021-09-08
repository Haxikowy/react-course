import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
   {
      title: 'What is React?',
      content: 'React is a front end javascript framework.',
   },
   {
      title: 'Why use React?',
      content: 'React is a favourite JS library among engineers',
   },
   {
      title: 'How do you use React?',
      content: 'You use React by creating components.',
   },
];

const colorOptions = [
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
   const [selected, setSelected] = useState(colorOptions[0]);
   return (
      <div className="ui segment container">
         <Header />
         <Route path="/">
            <Accordion items={items} />
         </Route>
         <Route path="/list">
            <Search />
         </Route>
         <Route path="/dropdown">
            <Dropdown
               options={colorOptions}
               label="Select a color"
               selected={selected}
               onSelectedChange={setSelected}
            />
            <h1 className="ui header" style={{ color: selected.value }}>
               This text is {selected.value}
            </h1>
         </Route>
         <Route path="/translate">
            <Translate />
         </Route>
      </div>
   );
};

export default App;
