const { model, Schema } = require("mongoose");

const MovieSchema = new Schema(
  {
    title: { type: String, require: true },
    genre: { type: String, require: true },
    releaseDate: { type: Date, require: true },
    posterImage: { type: String, require: true },
    //ratings: { type: Number, require: false },
  },

  { timestamps: true }
);

module.exports = model("Movie", MovieSchema);
