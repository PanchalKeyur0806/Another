const mongoose = require("mongoose");
const Hotel = require("./hotelModel");
const { default: slugify } = require("slugify");

const tourSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A tours must have a name"],
      trim: true,
      maxlength: [40, "A tours must have less or equal 40 charactes"],
      minlength: [5, "A tour must have more or equal to 5 characters"],
    },
    slug: String,
    duration: {
      type: Number,
      required: [true, "A tour must have duration"],
    },
    maxGroupSize: {
      type: Number,
      required: [true, "A tour must have atleast group members"],
      min: [1, "A tour must have atleast one group member"],
      max: [15, "A tour must have maximum 15 group members"],
    },
    ratingAverage: {
      type: Number,
      default: 4.5,
      min: [1, "A tour must have atleast 1.0 star"],
      max: [5, "A tour rating must be below 5.0 star"],
    },
    ratingQuantity: {
      type: Number,
      default: 0,
    },
    guides: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
    ],
    location: {
      type: {
        type: String,
        enum: ["Point"],
        default: "Point",
      },
      coordinates: {
        type: [Number],
        default: [true, "Tour must have a coordinates"],
      },
      address: String,
      city: String,
    },
    hotel: {
      type: mongoose.Schema.ObjectId,
      ref: "Hotel",
    },
    price: {
      type: Number,
      required: [true, "A tour must have price"],
    },
    priceDiscount: {
      type: Number,
    },
    description: {
      type: String,
      required: [true, "A Tour must have description"],
    },
    imageCover: {
      type: String,
      required: [true, "A tour must have images"],
    },
    startDate: {
      type: Date,
      required: [true, "Tour must have a start Date"],
    },
    endDate: {
      type: Date,
      required: [true, "Tour must have end Date"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

tourSchema.index({ location: "2dsphere" });

// set reivew after each fields
tourSchema.virtual("review", {
  ref: "Review",
  foreignField: "tour",
  localField: "_id",
});

// ADD SLUG BEFORE SAVING THE DOUCMENT
tourSchema.pre("save", async function (next) {
  this.slug = slugify(this.name);

  // find the neareast hotel
  const neareastHotel = await Hotel.findOne({
    location: {
      $near: {
        $geometry: {
          type: "Point",
          coordinates: this.location.coordinates,
        },
        $maxDistance: 10000, // 10km
      },
    },
  });

  if (neareastHotel) {
    this.hotel = neareastHotel._id; // store hotel object id
  }
  // go to next middleware
  next();
});

// MADE MODAL OUTOF TOURSCHEMA
const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
