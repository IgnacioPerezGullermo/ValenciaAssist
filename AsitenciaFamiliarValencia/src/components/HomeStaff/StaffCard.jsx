import React, { useState } from 'react';
import './StaffCard.scss';
import Silvia from '../../assets/silvia-bgless.png';
import Caty from '../../assets/cate-bgless.png';
import { useSpring, animated } from 'react-spring';

export const StaffCard = ({ setFocus, Focus, data, side, pic }) => {
  const handleClick = (info) => {
    if (Focus === 'silvia' || Focus === 'caterina') {
      setFocus('');
    } else {
      setFocus(info);
    }
  };
  const props7 = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
  });
  const props6 = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: false,
  });
  const props5 = useSpring({
    to: {
      width: '40vw',
      top: '20%',
      right: '30%',
      textAlign: 'right',
    },
    from: { width: '29vw', right: '-10%' },
  });
  const props4 = useSpring({
    to: { scale: 1.2, left: '15%', opacity: 1 },
    from: { scale: 1, opacity: 0 },
  });
  const props4alt = useSpring({
    to: { scale: 1.2, left: '70%' },
    from: { scale: 1 },
  });
  const props3 = useSpring({
    to: {
      width: '30vw',
      top: '20%',
      left: '45%',
      opacity: 1,
      textAlign: 'left',
    },
    from: { width: '25vw', marginLeft: '0vw', opacity: 0 },
  });
  const props2 = useSpring({
    to: { width: '100vw' },
    from: { width: '50vw' },
  });
  const props1 = useSpring({
    to: { width: '50vw' },
    from: { width: '100vw' },
  });
  if (Focus === data.name || Focus === '') {
    return (
      <animated.div
        style={Focus === data.name ? props2 : props6}
        className={
          side === 'left'
            ? 'HomeStaff-container-leftSide'
            : 'HomeStaff-container-rightSide'
        }
      >
        {Focus === 'silvia' ? (
          <animated.img
            style={Focus === 'silvia' ? props4 : props7}
            className={
              side === 'left'
                ? 'HomeStaff-container-leftSide-Silvia'
                : 'HomeStaff-container-rightSide-Caty'
            }
            src={pic}
            alt="silvia"
          />
        ) : (
          <animated.img
            style={Focus === 'caterina' ? props4alt : props7}
            className={
              side === 'left'
                ? 'HomeStaff-container-leftSide-Silvia'
                : 'HomeStaff-container-rightSide-Caty'
            }
            src={pic}
            alt="silvia"
          />
        )}
        {Focus === 'silvia' ? (
          <animated.div
            style={Focus === 'silvia' ? props3 : null}
            className={
              side === 'left'
                ? 'HomeStaff-container-leftSide-TextBox'
                : 'HomeStaff-container-rightSide-TextBox'
            }
          >
            <h1>{data.name[0].toUpperCase() + data.name.slice(1, 9)}</h1>
            <h4>{data.desc}</h4>
            {Focus === data.name ? <p>{data.bio}</p> : null}
            <button onClick={() => handleClick(data.name)}>
              {Focus === data.name ? 'Volver' : 'Leer mas'}
            </button>
          </animated.div>
        ) : (
          <animated.div
            style={Focus === 'caterina' ? props5 : null}
            className={
              side === 'left'
                ? 'HomeStaff-container-leftSide-TextBox'
                : 'HomeStaff-container-rightSide-TextBox'
            }
          >
            <h1>{data.name[0].toUpperCase() + data.name.slice(1, 9)}</h1>
            <h4>{data.desc}</h4>
            {Focus === data.name ? <p>{data.bio}</p> : null}
            <button onClick={() => handleClick(data.name)}>
              {Focus === data.name ? 'Volver' : 'Leer mas'}
            </button>
          </animated.div>
        )}
      </animated.div>
    );
  }
};
