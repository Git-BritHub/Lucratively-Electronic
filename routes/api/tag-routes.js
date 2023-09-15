const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    // find all tags
    const data = await Tag.findAll({
      // be sure to include its associated Product data
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
    // find a single tag by its `id`
    const data = await Tag.findOne({
      where: {
        id: req.params.id
      },
      // be sure to include its associated Product data
      include: [Product]
    });
    if (!data) {
      res.status(404).json({ message: "No Tag Found With This ID!" });
      return;
    };
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  };
});

router.post('/', async (req, res) => {
  try {
    // create a new tag
    const data = await Tag.create(req.body);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  };
});

router.put('/:id', async (req, res) => {
  try {
    // update a tag's name by its `id` value
    const data = await Tag.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    if (!data) {
      res.status(404).json({ message: "No Tag Found With This ID!" });
      return;
    };
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  };
});

router.delete('/:id', async (req, res) => {
  try {
    // delete on tag by its `id` value
    const data = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!data) {
      res.status(404).json({ message: "No Tag Found With This ID!" });
      return;
    };
    res.status(200).json({ message: "Tag was deleted!" });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  };
});

module.exports = router;
