import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import SubjectDetails from './components/SubjectDetails';
import NameCollection from './components/NameCollection';

interface UserData {
  name: string;
  email: string;
}

interface UserContextType {
  userData: UserData | null;
  setUserData: React.Dispatch<React.SetStateAction<UserData | null>>;
}

export const UserContext = createContext<UserContextType>({
  userData: null,
  setUserData: () => {},
});

function App() {
  const [userData, setUserData] = useState<UserData | null>(null);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/name-collection" element={<NameCollection />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/subject/:id" element={<SubjectDetails />} />
          <Route path="/" element={
            <div className="min-h-screen bg-black">
              <Hero />
              <About />
              <Projects />
              <Contact />
            </div>
          } />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;