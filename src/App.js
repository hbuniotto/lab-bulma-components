
import React from 'react';
import Navbar from './navbar/Navbar';
import FormField from './formfield/FormField';
import CoolButton from './CoolButton/CoolButton';

const App = () => {
  return (
    <>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <CoolButton isSmall isDanger className="is-rounded my-class">Button Test</CoolButton>
      <CoolButton isSmall isSuccess>Button 2</CoolButton>
    </>
  );
};

export default App;