import express from 'express';
const router = express.Router();

// Define your course routes here
router.get('/', (req, res) => {
  res.send('Course route works!');
});

export default router;
