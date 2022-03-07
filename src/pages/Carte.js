//Components
import React from 'react';
import Navigation from'../components/Navigation';
import Footer from'../components/Footer';


const Carte = () => {
  return (
    <div>
      <header>
        <Navigation />
      </header>

      <main>
        <article>
          <h1>La Carte</h1>
          <section className="menu">
            <article className="blocEntrees">
              <h2>Entrées</h2>
              <div className="food-list">
                <ul>
                  <li>
                    Cappuccino de champignons, et œuf fermier -{" "}
                    <strong>10.50€</strong>
                  </li>
                  <li>
                    Nems de volaille aux légumes et basilic (6 pièces) -{" "}
                    <strong>12.00€</strong>
                  </li>
                  <li>
                    Velouté de châtaignes, sot l’y laisse et éclats de noisettes
                    - <strong>12.90€</strong>
                  </li>
                  <li>
                    Saumon fumé maison et blinis, et crème d’aneth -{" "}
                    <strong>12.90€</strong>
                  </li>
                  <li>
                    Escalope de Foie gras poêlée, tatin d’endives, vinaigre de
                    framboises - <strong>16.90€</strong>
                  </li>
                </ul>
              </div>
            </article>

            <article className="blocPlats">
              <h2>Plats</h2>
              <div className="food-list">
                <ul>
                  <li>
                    Plat végétarien : Crozets au sarrasin, velouté de persil et
                    champignons rôtis - <strong>15.90€</strong>
                  </li>
                  <li>
                    Tartare de bœuf coupé au couteau - <strong>17.50€</strong>
                  </li>
                  <li>
                    Civet de sanglier, pomme rôti et groseilles -{" "}
                    <strong>19.90€</strong>
                  </li>
                  <li>
                    Pressé d’ailes de raie aux câpres, beurre nantais -{" "}
                    <strong>12.90€</strong>
                  </li>
                  <li>
                    Carpaccio de poulpes, condiments acidulés -{" "}
                    <strong>21.90€</strong>
                  </li>
                  <li>
                    Quasi de veau en croûte de cèpes, légumes oubliés et jus
                    gourmand - <strong>25.90€</strong>
                  </li>
                  <li>
                    Saint Jacques rôties, butternut confit, sauce au champagne -{" "}
                    <strong>26.90€</strong>
                  </li>
                  <li>
                    Lièvre à la royale, salsifis rôtis (suivant arrivage) -{" "}
                    <strong>29.90€</strong>
                  </li>
                  <li>
                    Filet de Bœuf Charolais, sauce béarnaise -{" "}
                    <strong>29.90€</strong>
                  </li>
                  <li>
                    Filet de Bœuf Charolais, comme un Rossini -{" "}
                    <strong>33.90€</strong>
                  </li>
                  <li>Belle Sole Meunière (suivant arrivage)</li>
                </ul>
              </div>
            </article>

            <article className="blocDesserts">
              <h2>Desserts</h2>
              <div className="food-list">
                <ul>
                  <li>
                    Coupe de fruits frais de saison, sorbet cassis -
                    <strong>7.90€</strong>
                  </li>
                  <li>
                    Parfait glacé à la Chartreuse - <strong>7.90€</strong>
                  </li>
                  <li>
                    Gaufre Liégeoise (crème de marron, chocolat chaud et
                    chantilly) - <strong>6.90€</strong>
                  </li>
                  <li>
                    Entremet intense orange sanguine vanille, sorbet orange
                    sanguine - <strong>7.90€</strong>
                  </li>
                  <li>
                    Finger Passion Chocolat, sorbet passion -{" "}
                    <strong>6.90€</strong>
                  </li>
                  <li>
                    Cookies à la cuillère, marrons orange confite, glace vanille
                    - <strong>7.90</strong>
                  </li>
                  <li>
                    Crêpes Suzette (servies uniquement le soir, préparées en
                    salle) - <strong>6.90€</strong>
                  </li>                      
                  <li>
                    Café Gourmand - <strong>5.90€</strong>
                  </li>
                  <li>
                    Thé Gourmand - <strong>5.90€</strong>
                  </li>

                </ul>
              </div>
            </article>
          </section>
        </article>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Carte;