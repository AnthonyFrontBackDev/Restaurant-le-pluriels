//Components
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

// assets import
import image from '../assets/presentation.jpg';
import imgCuisine from "../assets/imagecuisine.jpg";
import imgExemplePlat from "../assets/exempleplatcuisine.jpg";
import imgVinFromage from "../assets/vinfromage.jpg";


const Accueil = () => {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        <article>
          
            <h1>Le Restaurant</h1>
          
          <section>

            <article className="blocPresentation">
                <img src={image} />              
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequuntur nulla corporis, modi similique aut voluptatibus repellat voluptatum unde distinctio vel facere veritatis adipisci debitis? Laborum, porro! Placeat nam esse beatae, perferendis saepe libero nisi, repellendus mollitia aperiam voluptate incidunt dolores obcaecati vitae cupiditate quis fuga quo tenetur nobis aspernatur Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptas assumenda delectus repudiandae modi illo, ullam esse qui sunt quam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti similique harum sint deserunt repellendus expedita sequi temporibus quae fuga velit nemo hic veniam tenetur repudiandae cum doloribus id quia esse maxime, impedit dolores adipisci? Ratione ut doloribus distinctio sint quod.
                  .</p>
            </article>

            <div className="imgTransition">
              {/* <img src={imgTransition} /> */}
            </div>

            <h2>La Cuisine</h2>

            <article className="blocCuisine">
              <img src={imgCuisine} />              
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequuntur nulla corporis, modi similique aut voluptatibus repellat voluptatum unde distinctio vel facere veritatis adipisci debitis? Laborum, porro! Placeat nam esse beatae, perferendis saepe libero nisi, repellendus mollitia aperiam voluptate incidunt dolores obcaecati vitae cupiditate quis fuga quo tenetur nobis aspernatur Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptas assumenda delectus repudiandae modi illo, ullam esse qui sunt quam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti similique harum sint deserunt repellendus expedita sequi temporibus quae fuga velit nemo hic veniam tenetur repudiandae cum doloribus id quia esse maxime, impedit dolores adipisci? Ratione ut doloribus distinctio sint quod..</p>
            </article>

            <article className="blocExemplePlat">        
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequuntur nulla corporis, modi similique aut voluptatibus repellat voluptatum unde distinctio vel facere veritatis adipisci debitis? Laborum, porro! Placeat nam esse beatae, perferendis saepe libero nisi, repellendus mollitia aperiam voluptate incidunt dolores obcaecati vitae cupiditate quis fuga quo tenetur nobis aspernatur Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptas assumenda delectus repudiandae modi illo, ullam esse qui sunt quam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti similique harum sint deserunt repellendus expedita sequi temporibus quae fuga velit nemo hic veniam tenetur repudiandae cum doloribus id quia esse maxime, impedit dolores adipisci? Ratione ut doloribus distinctio sint quod..</p>
                <img src={imgExemplePlat} />
            </article>

            <div className="imgTransition1">
              {/* <img src={imgTransition} /> */}
            </div>

            <h2>Un peu plus...</h2>

            <article className="blocVinFromage">
              <img src={imgVinFromage} />              
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequuntur nulla corporis, modi similique aut voluptatibus repellat voluptatum unde distinctio vel facere veritatis adipisci debitis? Laborum, porro! Placeat nam esse beatae, perferendis saepe libero nisi, repellendus mollitia aperiam voluptate incidunt dolores obcaecati vitae cupiditate quis fuga quo tenetur nobis aspernatur Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptas assumenda delectus repudiandae modi illo, ullam esse qui sunt quam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti similique harum sint deserunt repellendus expedita sequi temporibus quae fuga velit nemo hic veniam tenetur repudiandae cum doloribus id quia esse maxime, impedit dolores adipisci? Ratione ut doloribus distinctio sint quod..</p>
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

export default Accueil;