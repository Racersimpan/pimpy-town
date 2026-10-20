import { Component } from 'react'
import Footer from '../components/Footer'
import LikeButton from '../components/LikeButton'

class Home extends Component {
  render() {
    return (
      <>
        <h1>Där fisk och ris blir bra!</h1>

        <section className="content-grid" aria-label="Om Fatima Sushi Bar">
          <article className="content-block">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              vulputate magna quam, bibendum varius sem pulvinar vel. Donec
              turpis odio, lacinia sit amet nisl id, ullamcorper malesuada
              sapien. Fusce et lectus at dui auctor mattis.
            </p>
          </article>

          <div className="content-block">
            <video controls autoPlay muted className="in-block">
              <source src="/images/3297822-uhd_4096_2160_25fps.mp4" />
              Din webbläsare kan inte spela upp videon.
            </video>
          </div>

          <div className="content-block">
            <img className="in-block" src="/images/bimbibop.jpg" alt="Bimbibop" />
          </div>

          <div className="content-block">
            <LikeButton />
          </div>
        </section>

        <Footer />
      </>
    )
  }
}

export default Home
