import mongoose from 'mongoose';

const RideSchema = new mongoose.Schema({
  riderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  driverId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  pickupLocation: {
    address: { type: String, required: true },
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
  dropoffLocation: {
    address: { type: String, required: true },
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
  status: { type: String, enum: ['requested', 'accepted', 'in-progress', 'completed', 'cancelled'], default: 'requested' },
  fare: { type: Number },
  distance: { type: Number },
  duration: { type: Number },
  createdAt: { type: Date, default: Date.now },
  completedAt: { type: Date },
});

export default mongoose.models.Ride || mongoose.model('Ride', RideSchema);