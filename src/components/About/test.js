import React, { useState } from "react";
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Nav from './components/Nav';

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [ categories ] = useState([
    {
      name: 'movie-finder',
      description: 'find what streaming service your favorite movies are on',
    },
    {
      name: 'recipe-me',
      description: 'find and create recipes',
    }
  ]);

  const [ currentCategory, setCurrentCategory ] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
      {!contactSelected ? (
          <>
            <Portfolio currentCategory={currentCategory}></Portfolio>
            <About></About>
          </>
        ) : (
            <Contact></Contact>
          )}
      </main>
    </div>
  );
}

export default App;