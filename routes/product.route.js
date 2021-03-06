const express = require('express');
const router = express.Router();
const {
  getAll,
  getByCatId,
  getById,
  create,
  update,
  remove,
  search,
} = require('../controllers/product.controller');

router.get('/', getAll);
router.get('/search', search);
router.get('/cat/:id', getByCatId);
router.get('/:id', getById);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', remove);

module.exports = router;
