import React, { useEffect, useRef, useState } from 'react';
import './assets/style/style.css';
import gsap from 'gsap';
import Slider from './Slider';

const arr = [
  { name: '', startDate: '1988', endDate: '1990' },
  { name: 'Кино', startDate: '1987', endDate: '1991' },
  { name: 'Литература', startDate: '1992', endDate: '1997' },
  { name: '', startDate: '1999', endDate: '2004' },
  { name: 'Наука', startDate: '1988', endDate: '1990' },
  { name: 'Наука', startDate: '2015', endDate: '2022' }
];

export default function App() {
  const [count, setCount] = useState(1);
  const [startDate, setStartDate] = useState(arr[0].startDate);
  const [endDate, setEndDate] = useState(arr[0].endDate);
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef(null);
  const armsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.defaults({
      ease: "power1.out"
    });

    const arms = armsRef.current;
    const space = 360 / arms.length;

    arms.forEach((arm, index) => {
      if (arm) {
        const box = arm.querySelector('.box');
        gsap.set(arm, { rotation: space * index - 60 });
        gsap.set(box, { rotation: -space * index + 60 });
      }
    });

    gsap.to('.box', { rotation: '+=0', duration: 0.2 });
    gsap.to('.arm', { rotation: '-=0', transformOrigin: 'left', duration: 1 });
  }, []);

  const rotate = (num: number) => {
    if (isAnimating) return;

    setIsAnimating(true);

    gsap.to('.box', {
      rotation: `+=${(num - count) * 60}`,
      duration: 1,
      onComplete: () => setIsAnimating(false),
    });

    gsap.to('.arm', {
      rotation: `-=${(num - count) * 60}`,
      transformOrigin: 'left',
      duration: 1,
      onComplete: () => setIsAnimating(false),
    });

    setCount(num);

    const start = { value: startDate };
    const end = { value: endDate };

    gsap.to(start, {
      duration: 1,
      value: arr[num - 1].startDate,
      roundProps: 'value',
      ease: 'power1.out',
      onUpdate() {
        setStartDate(start.value);
      },
    });

    gsap.to(end, {
      duration: 1,
      value: arr[num - 1].endDate,
      roundProps: 'value',
      ease: 'power1.out',
      onUpdate() {
        setEndDate(end.value);
      },
    });

    gsap.to(sliderRef.current, {
      opacity: 0,
      duration: 0.2,
      y: 2,
      onComplete: () => {
        setStartDate(arr[num - 1].startDate);
        setEndDate(arr[num - 1].endDate);
        gsap.delayedCall(0.8, () => {
          gsap.to(sliderRef.current, { opacity: 1, y: 0, duration: 0.2 });
        });
      },
    });
  };

  return (
    <main className='main'>
      <div className='wrapper'>
        <div className='heading__box'>
          <div className='gradient' />
          <h1 className='heading'>Исторические <br /> даты</h1>
        </div>

        <div className='dates'>
          <span className='start__date'>{startDate}</span><br />
          <span className='end__date'>{endDate}</span>
        </div>

        <div className='circle'>
          {arr.map((el, index) => (
            <div
              key={index}
              onClick={() => rotate(index + 1)}
              className="arm"
              ref={(el) => (armsRef.current[index] = el)}
            >
              <div className={`${index + 1 === count ? 'box--hidden' : ''} box`}>{index + 1}</div>
            </div>
          ))}
        </div>
        <hr className='hr' />
        <div className='slider'>
          <div className='switch__box'>
            <span className='switch__value'>{`0${count}/0${arr.length}`}</span>

            <div className='switch__buttons'>
              <button disabled={count <= 1} onClick={() => rotate(count - 1)} className='switch'></button>
              <button disabled={count >= arr.length} onClick={() => rotate(count + 1)} className='switch'></button>
            </div>
          </div>
          <div className='slider__wrapper' ref={sliderRef}>
            <Slider count={count} />
          </div>
        </div>
        <div className='line2' />
        <div className='line1' />
      </div>
    </main>
  );
}
