import React, {Component} from 'react';
import { Spring, animated } from 'react-spring'
import { Gesture } from 'react-with-gesture'
import './DeckStyle.css'

const pages = [
  'https://image.news1.kr/system/hp/2022/4/27/5339999',
  'https://image.news1.kr/system/hp/2022/4/27/5339999',
  'https://image.news1.kr/system/hp/2022/4/27/5339999',
  'https://image.news1.kr/system/hp/2022/4/27/5339999',
  'https://image.news1.kr/system/hp/2022/4/27/5339999',
  'https://image.news1.kr/system/hp/2022/4/27/5339999'
]

class Deck extends Component {
  gone = {} // used for tracking of removed cards - not using state as we're updating during render

  calculateX(index, down, xDir, xDelta) {
    if (this.gone[index]) {
      // calculate a position off-screen & use x direction to decide on which side of screen
      return (200 + window.innerWidth) * (xDir < 0 ? -1 : 1)
    } else {
      // track cursor if touched
      return down ? xDelta : 0
    }
  }

  render() {
    return pages.map(
      (url, index) =>
        !this.gone[index] && (
          <Gesture key={index}>
            {({ down, delta: [xDelta], direction: [xDir], velocity }) => {
              // Attention! Order matters - first check if gone than calculate x position
              if (!down && velocity > 1.5 && !this.gone[index]) {
                this.gone[index] = true
              }

              const x = this.calculateX(index, down, xDir, xDelta)
              return (
                <Spring native to={{ x }} immediate={down} config={{ friction: 50, tension: 500 }}>
                  {({ x }) => (
                    <animated.div style={{ transform: x.interpolate(x => `translate3d(${x}px,${index * -4}px,0)`) }}>
                      <animated.div style={{ backgroundImage: `url(${url})` }} />
                    </animated.div>
                  )}
                </Spring>
              )
            }}
          </Gesture>
        )
    )
  }
}



export default Deck;
