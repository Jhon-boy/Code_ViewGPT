import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Help } from './pages/Help';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Profile } from './components/Profile';
import { Historial } from './components/Historial';
import { Error } from './pages/Error';
import { Contact } from './pages/contact';

function App() {


  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route >
        <Route path='/' element={<Header />}>
          <Route index  element={<Home />} />
          <Route path='/help' element={<Help />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/historial' element={<Historial />} />
          
        </Route>
      </Route>

      <Route path='/register' element={<Register />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='*' element={<Error />} />
    </Routes>
  )
}

export default App;
