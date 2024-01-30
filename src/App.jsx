import { Link } from 'react-router-dom';
import './App.css'
import CustomeRoutes from './Routes/CustomeRoutes';



function App() {

  return (
    <>
    <Link to={`/`}>
      <h1>Photo Gallery</h1>
    </Link>
      <CustomeRoutes />
     
    </>
  )
}

export default App
