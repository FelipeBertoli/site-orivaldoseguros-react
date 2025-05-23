import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { AuthProvider } from './utils/context/AuthContext';
import { Footer, Header } from './components/ComponentsModule';
import HomePublic from './screens/public/Home';

function App() {
  const navList = [
    { label: "Início", link: "#inicio" },
    { label: "Seguros", link: "#seguros" },
    { label: "Sobre", link: "#sobre" },
    { label: "Contato", link: "#contato" }
  ];

  return (

    <AuthProvider>
      <Router>
      <div className="app-wrapper">
          <Header navStyle="text" navList={navList} />
     
            <Routes>
              <Route path="/" element={<HomePublic />} />
            </Routes>
  
          <Footer type="modern" navList={navList} />
        </div>
      </Router>
    </AuthProvider>

  );
}

export default App;
