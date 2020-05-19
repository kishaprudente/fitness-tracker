const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// name, type, weight, sets, reps, and duration
const WorkoutSchema = new Schema({
	day: {
		type: Date,
		default: Date.now()
	},
	exercises: [{
		type: {
			type: String,
			trim: true,
			required: "Type should be defined",
		},
		name: {
			type: String,
			trim: true,
			required: "Name should be defined",
		},
		weight: {
			type: Number,
			trim: true,
		},
		sets: {
			type: Number,
			trim: true,
		},
		reps: {
			type: Number,
			trim: true
		},
		duration: {
			type: Number,
			trim: true,
		},
		distance: {
			type: Number,
			trim: true,
		}
	}]

});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
