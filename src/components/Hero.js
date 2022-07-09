import { Carousel, Container } from 'react-bootstrap'

const Hero = () => {
  return (
    <div className="hero">
      <Container className="justify-content-center">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://images.hdqwalls.com/download/spider-man-spiderweb-2t-1920x1080.jpg"
              alt="First slide"
              width={1000}
              height={400}
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://images.hdqwalls.com/wallpapers/black-adam-the-fire-bg.jpg"
              alt="Second slide"
              width={1000}
              height={400}
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://images.hdqwalls.com/wallpapers/the-green-arrow-4k-rj.jpg"
              alt="Second slide"
              width={1000}
              height={400}
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://i.pinimg.com/originals/33/e9/da/33e9da1d42f09e966817bdb5b3cffd5e.jpg"
              alt="Second slide"
              width={1000}
              height={400}
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://www.wallpaperflare.com/static/28/352/965/game-of-thrones-game-thrones-wallpaper.jpg"
              alt="Second slide"
              width={1000}
              height={400}
            />
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  )
}

export default Hero
