// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import productDetails from '../../data/api';

export default (req, res) => {
  res.status(200).json(productDetails);
};
