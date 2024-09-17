import mongoose from 'mongoose';

const cartSchema = mongoose.Schema({
  userEmail: { type: String, required: true },
  items: [
    {
      bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
      quantity: { type: Number, required: true }
    }
  ]
});

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;
