import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button, Container } from 'react-bootstrap';
import MainPage from './MainPage';
import Navigationbar from './Navigationbar';
import 'primereact/resources/themes/saga-blue/theme.css'; // Theme
import 'primereact/resources/primereact.min.css'; // Core styles
import 'primeicons/primeicons.css';
import Footer from './Footer';

function App() {
  return (
   <Container fluid className='px-0'>
      <Navigationbar/>
      <MainPage/>  
      <Footer/> 
   </Container>
  );
}

export default App;
