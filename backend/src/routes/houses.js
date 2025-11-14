const express = require('express');
const { body, validationResult, param } = require('express-validator');
const multer = require('multer');
const path = require('path');
const House = require('../models/House');
const { requireAuth, requireRole } = require('../middleware/auth');

const router = express.Router();

// multer storage
const uploadDir = process.env.UPLOAD_DIR || 'uploads';
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}_${Math.random().toString(36).slice(2)}${ext}`);
  }
});
const upload = multer({ storage });

// add house (client only)
router.post(
  '/',
  requireAuth,
  requireRole('client'),
  upload.array('photos', 10),
  [
    body('title').notEmpty(),
    body('location').notEmpty(),
    body('price').isNumeric()
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) return res.status(400).json({ success: false, errors: errors.array() });

      const { title, description = '', location, price, rooms = 1, videos = [] } = req.body;
      const photos = (req.files || []).map(f => `/${uploadDir}/${f.filename}`);

      const house = await House.create({
        title, description, location, price: Number(price), rooms: Number(rooms), photos, videos, owner: req.user._id
      });
      res.status(201).json({ success: true, data: house });
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, message: 'Server error' });
    }
  }
);

// get all houses
router.get('/', async (req, res) => {
  try {
    const houses = await House.find().populate('owner', 'name email role');
    res.json({ success: true, data: houses });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// get house details
router.get('/:id', async (req, res) => {
  try {
    const house = await House.findById(req.params.id).populate('owner', 'name email role');
    if (!house) return res.status(404).json({ success: false, message: 'House not found' });
    res.json({ success: true, data: house });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// get by city
router.get('/city/:city', async (req, res) => {
  try {
    const city = req.params.city;
    const houses = await House.find({ location: { $regex: new RegExp(city, 'i') } }).populate('owner', 'name email role');
    res.json({ success: true, data: houses });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// update house (owner only)
router.put('/:id', requireAuth, requireRole('client'), upload.array('photos', 10), async (req, res) => {
  try {
    const house = await House.findById(req.params.id);
    if (!house) return res.status(404).json({ success: false, message: 'House not found' });
    if (house.owner.toString() !== req.user._id.toString()) return res.status(403).json({ success: false, message: 'Forbidden' });

    const updates = {};
    const allowed = ['title', 'description', 'location', 'price', 'rooms', 'videos'];
    for (let k of allowed) if (req.body[k] !== undefined) updates[k] = req.body[k];

    if (req.files && req.files.length) {
      const photos = req.files.map(f => `/${(process.env.UPLOAD_DIR || 'uploads')}/${f.filename}`);
      updates.photos = (house.photos || []).concat(photos);
    }

    const updated = await House.findByIdAndUpdate(req.params.id, updates, { new: true });
    res.json({ success: true, data: updated });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// delete house (owner only)
router.delete('/:id', requireAuth, requireRole('client'), async (req, res) => {
  try {
    const house = await House.findById(req.params.id);
    if (!house) return res.status(404).json({ success: false, message: 'House not found' });
    if (house.owner.toString() !== req.user._id.toString()) return res.status(403).json({ success: false, message: 'Forbidden' });

    await house.remove();
    res.json({ success: true, message: 'House removed' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// my houses for logged-in client
router.get('/my/list', requireAuth, requireRole('client'), async (req, res) => {
  try {
    const houses = await House.find({ owner: req.user._id });
    res.json({ success: true, data: houses });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
