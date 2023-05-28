import logo from './logo.svg';
import './App.css';
import Calculator from './components/Calculator';
import Footer from './components/Footer';

function App() {
  return (
    <div className='p-4 sm:p-8 lg:p-12 bg-gray-500'>
      <Calculator />
      <Footer />
    </div>
  );
}

export default App;
