import React from 'react';
import PropTypes from 'prop-types';

const ProductDetail = ({ data }) => {
  const { title, cardsInPack, price, totalCardsLeft, productInformation } =
    data;
  return (
    <div className='has-text-white py-2 px-3  has-bg-light-grey is-flex is-flex-grow-1 is-flex-direction-column'>
      <h3 className='title is-2 has-text-warning is-spaced'>{title}</h3>
      <h5 className='subtitle is-6 is-spaced'> {cardsInPack} cards in pack</h5>
      <h5 className='title is-4 is-spaced'> $ {price}</h5>
      <div className='buttons'>
        <button className='button is-grey' type='button'>
          <span className='is-counter mr-1'> + </span> 1{' '}
          <span className='is-counter ml-1'> - </span>
        </button>
        <button className='button is-link' type='button'>
          Buy Packs
        </button>
      </div>
      <h5 className='subtitle is-7 is-spaced'> {totalCardsLeft} Total</h5>
      <div className='divider my-3' />
      <h5 className='title is-6 is-spaced '> Pack Details </h5>
      <h5 className='subtitle is-7 is-spaced '>{productInformation}</h5>
    </div>
  );
};

export default ProductDetail;

ProductDetail.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    cardsInPack: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    totalCardsLeft: PropTypes.number.isRequired,
    productInformation: PropTypes.string.isRequired,
  }),
};

ProductDetail.defaultProps = {
  data: {
    title: 'League of Legends',
    cardsInPack: 5,
    price: 49.0,
    totalCardsLeft: '35,563',
    productInformation: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has
      roots in a piece of classical Latin literature from 45 BC, making it over
      2000 years old Richard McClintock, a Latin professor at Hampden-Sydney
      College in Virginia, looked up one of the more obscure Latin words,
      consectetur, from a Text passage, and going through the cites of the word
      in classical literature, discovered the undoubtable source.`,
  },
};
