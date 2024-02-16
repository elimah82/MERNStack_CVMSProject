import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Register';
import Show from './Show'; 
import Login from './Login';

function Page({store}) {
    return (
    <BrowserRouter>
      <Routes>
        <Route path='/reg' element={<Register />} />
        <Route path='/sho' element={<Show />} />
        <Route path='/log' element={<Login store={store}/>} />
      </Routes>
    </BrowserRouter>
    );
  }

  export default Page