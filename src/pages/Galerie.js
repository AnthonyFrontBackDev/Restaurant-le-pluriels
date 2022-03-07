import React from 'react';
import Navigation from'../components/Navigation';
import Footer from'../components/Footer';

const Galerie = () => {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        <article>
          <section>
            <h2>Galerie</h2>

            <div className="grille">
              <div className="grid-items"></div>
              <div className="grid-items"></div>
              <div className="grid-items"></div>
              <div className="grid-items"></div>
              <div className="grid-items"></div>
              <div className="grid-items"></div>
              <div className="grid-items"></div>
              <div className="grid-items"></div>
              <div className="grid-items"></div>
              <div className="grid-items"></div>
              <div className="grid-items"></div>
              <div className="grid-items"></div>
            </div>

          </section>
        </article>
      </main>
      <footer>
        <Footer />        
      </footer>

    </div>
  );
};

export default Galerie;