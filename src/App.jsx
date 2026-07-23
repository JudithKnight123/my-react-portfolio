// App.js
import { useState } from 'react';
import Aurora from './components/Aurora';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {

  const [page, setPage] = useState('home');

  // TODO: How doe sthe Layout component know which page to render?

  return (
    <>
<Aurora
  colorStops={["#7cff67","#B497CF","#5227FF"]}
  blend={0.5}
  amplitude={1.0}
  speed={1}
/>
    <Layout selectedPage={page} onSetPage={setPage}>

      {page === 'home' && <HomePage />}
      {page === 'about' && <AboutPage />}
      {page === 'contact' && <ContactPage />}

    </Layout>
    </>
  );
}

export default App;
