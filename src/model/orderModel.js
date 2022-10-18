const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema({
  userId: {
    type: ObjectId,
    ref: 'User',
    required: true
  },
  items: [{
    productId: {
      type: ObjectId,
      ref: 'Product',
      required: true
    },
    quantity: { type: Number, required: true, min: 1 }//minimun items should be 1
  }],
  totalPrice: {
    type: Number, required: true,
    trim: true
  },//, comment: "Holds total price of all the items in the cart"},
  totalItems: {
    type: Number, required: true,
    trim: true
  },// comment: "Holds total number of items in the cart"},
  totalQuantity: {
    type: Number, required: true,
    trim: true
  }, //comment: "Holds total number of quantity in the cart"},
  cancellable: {
    type: Boolean, default: true,
    trim: true
  },
  status: { type: String, default: 'pending', enum: ["pending", "completed", "cancled"] },
  deletedAt: { type: Date, default: undefined },
  isDeleted: { type: Boolean, default: false }
}, { timestamp: true })

module.exports = mongoose.model("Order", orderSchema)