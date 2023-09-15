const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    // find all categories
    const data = await Category.findAll({
      // be sure to include its associated Products
      include: [Product]
    });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  };
});

router.get('/:id', async (req, res) => {
  try {
    // find one category by its `id` value
    const data = await Category.findOne({
      where: {
        id: req.params.id
      },
      // be sure to include its associated Products
      include: [Product]
    });
    if (!data) {
      res.status(404).json({ message: "No Category Found With This ID!" });
      return;
    };
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  };
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const data = await Category.create(req.body);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  };
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const data = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    if (!data) {
      res.status(404).json({ message: "No Category Found With This ID!" });
      return;
    };
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  };
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const data = await Category.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!data) {
      res.status(404).json({ message: "No Category Found With This ID!" });
      return;
    };
    res.status(200).json({ message: "Category was deleted!" });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  };
});

module.exports = router;
