import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import About from './pages/About';
import Home from './pages/Home';
import BalancedDiet from './pages/BalancedDiet';
import Earth from './pages/Earth';
import Atmosphere from './pages/Atmosphere';
import Planets from './pages/Planets';
import PlanetsInfo from './pages/PlanetsInfo';

import Animal from './pages/Animal';
import Shapes from './pages/Shapes';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/balanced-diet" element={<BalancedDiet />} />
        <Route path="/earth" element={<Earth />} />
        <Route path="/atmosphere" element={<Atmosphere />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/planetsinfo" element={<PlanetsInfo />} />
        <Route path="/animal" element={<Animal />} />
        <Route path="/shapes" element={<Shapes />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}
