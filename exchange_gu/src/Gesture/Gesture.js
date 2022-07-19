import { height, width } from '@mui/system';
import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import { useSpring, animated, to } from 'react-spring'
import { useGesture } from 'react-use-gesture'
import './Gesture.css'

const imgs = [
    'https://t1.daumcdn.net/news/202108/24/starnews/20210824081246233jxjq.jpg',
    'https://t1.daumcdn.net/cafeattach/1IHuH/b4637e26d1a53f679cfea61280d56167782ebdb7',
    'https://i.pinimg.com/736x/e3/56/4a/e3564ad950c81ebeab1c36e807cb236c.jpg',
    'https://i.pinimg.com/236x/5d/48/23/5d4823f41738addf6cc705462e2b9cd6.jpg',
    'https://blog.kakaocdn.net/dn/cQ90Hf/btrnTDJt1Wq/jK4EhEln7VHnrpVh2NP9X0/img.jpg',
    'https://mblogthumb-phinf.pstatic.net/MjAyMTA4MThfMjA0/MDAxNjI5Mjk1ODYwMTI2.0kdoOCSDko-80RONK2-zPjJ0UBn10ZWQmuuox1iqUhog.68EEVxFlXdrwPn9CAmHEz9zXcKZZg3-rvmnvrgD0P-Mg.JPEG.alsrud933/IMG_6963.JPG?type=w800',
    'https://pbs.twimg.com/media/E-moH-9VcAQh3D-.jpg:small',
    'https://i.pinimg.com/564x/00/d2/e1/00d2e19253d8b1384900d042bd4714e6.jpg',
    'https://social-phinf.pstatic.net/20211022_152/1634878073703MKBjY_GIF/2.gif',
    'https://t1.daumcdn.net/cafeattach/1IHuH/242a7d0ec8dffdd30842b05bc3ea1a100d70b02f',
    'https://t1.daumcdn.net/cafeattach/1IHuH/25f87848fd92a12b1090011a98db2254bdf7d483',
    'https://t1.daumcdn.net/cafeattach/1IHuH/14b9c23c0a0a4afb367860140951c1142de95503',
    'https://blog.kakaocdn.net/dn/bxbgFF/btro59TcOi5/fRh4RCTM9ePvSOT2rusKFk/img.jpg',
    'http://www.stardailynews.co.kr/news/photo/202109/307026_352486_165.jpg'
  ];
  

const calcX = (y, ly) => -(y - ly - window.innerHeight / 2) / 20
const calcY = (x, lx) => (x - lx - window.innerWidth / 2) / 20

const wheel = (y) => {
  const imgHeight = window.innerWidth * 0.3 - 20
  return `translateY(${-imgHeight * (y < 0 ? 6 : 1) - (y % (imgHeight * 5))}px`
}

document.addEventListener('gesturestart', (e) => e.preventDefault())
document.addEventListener('gesturechange', (e) => e.preventDefault())

function Gesture() {
  const domTarget = React.useRef(null)
  const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, set] = useSpring(() => ({
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    scale: 1,
    zoom: 0,
    x: 0,
    y: 0,
    config: { mass: 5, tension: 350, friction: 40 }
  }))

  const [{ wheelY }, setWheel] = useSpring(() => ({ wheelY: 0 }))
  const [drag, setDrag] = React.useState(false)

  useGesture(
    {
      onDragStart: () => setDrag(true),
      onDrag: ({ offset: [x, y] }) => set({ x, y, rotateX: 0, rotateY: 0, scale: 1 }),
      onDragEnd: () => setDrag(false),
      onPinch: ({ offset: [d, a] }) => set({ zoom: d / 200, rotateZ: a }),
      onMove: ({ xy: [px, py], dragging }) => !dragging && set({ rotateX: calcX(py, y.get()), rotateY: calcY(px, x.get()), scale: 1.1 }),
      onHover: ({ hovering }) => !hovering && set({ rotateX: 0, rotateY: 0, scale: 1 }),
      onWheel: ({ offset: [, y] }) => setWheel({ wheelY: y })
    },
    { domTarget, eventOptions: { passive: false } }
  )

  return (
    <animated.div
      ref={domTarget}
      className={`${drag ? 'dragging' : ''}`}
      style={{ transform: 'perspective(600px)', x, y, scale: to([scale, zoom], (s, z) => s + z), rotateX, rotateY, rotateZ }}
    >
      <animated.div style={{ transform: wheelY.to(wheel) }}>
        {imgs.map((img, i) => (
          <div key={i} style={{ backgroundImage: `url(${img})` }} />
        ))}
      </animated.div>
    </animated.div>
  )
}

export default Gesture;
