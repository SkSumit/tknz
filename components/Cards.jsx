/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useState } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

const Cards = ({ data }) => {
  const [state, setstate] = useState(data);

  // swap cards
  const makeChange = (index) => {
    setstate(
      ((stages) => {
        // eslint-disable-next-line no-param-reassign
        [stages[0], stages[index]] = [stages[index], stages[0]];
        return stages;
      })([...state])
    );
  };

  return (
    <>
      <div className='columns is-multiline is-mobile'>
        {state.map((item, index) => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events
          <div
            className={`column is-clickable ${
              index === 0 ? 'is-full' : 'is-half'
            }`}
            role='button'
            key={item.id}
            onClick={() => makeChange(index)}
          >
            <Image
              src={`/${item.url}.png`}
              layout='responsive'
              width={600}
              height={340}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Cards;

Cards.propTypes = {
  data: PropTypes.shape({
    url: PropTypes.string,
    id: PropTypes.number,
  }),
};

Cards.defaultProps = {
  data: {
    url: 'img1',
    id: 1,
  },
};
