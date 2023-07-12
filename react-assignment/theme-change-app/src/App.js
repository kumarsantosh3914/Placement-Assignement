import React from 'react';
import { ThemeProvider } from './ThemeContext';
import Dashboard from './componenets/Dashboard';

function App() {
  return (
    <ThemeProvider>
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
