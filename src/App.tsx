import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';

function App() {

  return (
    <>
      <Nav />
      <h1>Welcome to World Builder!</h1>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default App
