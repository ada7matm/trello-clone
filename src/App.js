import React from 'react';
import Dashboard from 'components/Dashboard/Dashboard'
import Navbar from 'components/Navbar/Navbar'
import ColumnProvider from 'components/Contexts/ColumnContext';

const App = () => (
  <>
    <Navbar />
    <ColumnProvider>
      <Dashboard title='Mi tablero' />
    </ColumnProvider>
  </>    
)

export default App
