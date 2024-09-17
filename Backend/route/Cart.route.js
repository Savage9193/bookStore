import express from 'express';
import Cart from '../models/Cart.js';

const router = express.Router();

// Get cart for a user
router.get('/:userEmail', async (req, res) => {
  try {
    const cart = await Cart.findOne({ userEmail: req.params.userEmail }).populate('items.bookId');
    if (!cart) return res.status(404).json({ error: 'Cart not found' });
    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add item to cart
router.post('/:userEmail/add', async (req, res) => {
  try {
    const { bookId, quantity } = req.body;
    let cart = await Cart.findOne({ userEmail: req.params.userEmail });

    if (!cart) {
      cart = new Cart({ userEmail: req.params.userEmail, items: [] });
    }

    const itemIndex = cart.items.findIndex(item => item.bookId.equals(bookId));
    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += quantity;
    } else {
      cart.items.push({ bookId, quantity });
    }

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Remove item from cart
router.delete('/:userEmail/remove/:bookId', async (req, res) => {
  try {
    const { userEmail, bookId } = req.params;
    const cart = await Cart.findOne({ userEmail });

    if (!cart) return res.status(404).json({ error: 'Cart not found' });

    cart.items = cart.items.filter(item => !item.bookId.equals(bookId));
    await cart.save();

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
