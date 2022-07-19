import React, {Component} from 'react';
import { Spring, animated } from 'react-spring'
import { Gesture } from 'react-with-gesture'
import './DeckStyle.css'

import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css'

const pages = [
  'https://d3ihz389yobwks.cloudfront.net/1597460612967931537561713700.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Koo_Kyo-hwan_211012.jpg/500px-Koo_Kyo-hwan_211012.jpg',
  'https://nnycrhhkuqxy896291.gcdn.ntruss.com/1/2022/d8a0/1d8a06aca37017b6fc46c349eab31c40056ef3a2204c186bcd02724e46e7c05b3_o_st.png',
  'https://image.jtbcplus.kr/data/contents/jam_photo/202009/22/8759af5e-c5bc-4c43-aaf8-04c3a2e01724.jpg',
  'https://cdn.mhns.co.kr/news/photo/202204/525651_636565_1713.jpg',
  'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fimg.theqoo.net%2Fimg%2FyFLGG.jpg&type=sc960_832',
  'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA5MjhfMjAy%2FMDAxNjMyODI5ODQxNDcx.Y9pg5ANETsfOgu8vRRRjJxYOwq06GRhzAWE1lRKP-dkg.5OaTGxOWlnEbWInsE-0wzPNXtaeXhcB4ZYygRHb-mE0g.JPEG.bonavy0126%2FIMG_4177.JPG&type=sc960_832',
  'https://cafeptthumb-phinf.pstatic.net/MjAyMTA5MThfODAg/MDAxNjMxOTU0NDQ3MTYx.DyYj8COQw6KSg_SfZyzXnCTDYNd75i0bFmcwrlmLizcg.orbKVXltt6sya7YwJ3kkGlsRQjzSBRjxsYDigAX_XYIg.JPEG/01F48B50-5763-4E4A-AEC0-097672B2A2FD.jpeg?type=w800',
  'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fimg.theqoo.net%2Fimg%2FxmvYA.jpg&type=sc960_832',
  'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA3MTZfMTU2%2FMDAxNjU3OTgyODE2MTQz.ArIg286mIGPLksC08W13aMbiTe_itlN1KudDwrg8Ix0g.46UqjZqdwRVPJqXI1ubwbG-aO0nWfb9U0CvfcefDePog.JPEG.pinkpyh1018%2Foutput_3820556100.jpg&type=sc960_832'
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
                      <animated.div style={{ backgroundImage: `url(${url})`}} />
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
