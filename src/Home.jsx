import Header from './Header'
import CardPizza from './CardPizza'
import napolitanaImg from './assets/img/napolitana.jpg'
import espanolaImg from './assets/img/espanola.jpg'
import pepperoniImg from './assets/img/pepperoni.jpg'

const Home = () => {
  return (
    <>
      <Header />

      <main className="cards-container">
        <CardPizza
          name="Napolitana"
          price={5950}
          ingredients={['mozzarella', 'tomates', 'jamón', 'orégano']}
          img={napolitanaImg}
        />

        <CardPizza
          name="Española"
          price={6950}
          ingredients={['mozzarella', 'gorgonzola', 'parmesano', 'provolone']}
          img={espanolaImg}
        />

        <CardPizza
          name="Pepperoni"
          price={6950}
          ingredients={['mozzarella', 'pepperoni', 'orégano', 'jamón']}
          img={pepperoniImg}
        />
      </main>
    </>
  )
}

export default Home