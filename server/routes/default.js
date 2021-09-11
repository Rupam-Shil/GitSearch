const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const axios = require('axios');

router.post(
	'/signup',
	body('email', 'Please enter a valid email').isEmail(),
	body('password', 'Please enter a password more than 6 character').isLength({
		min: 6,
	}),
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			res.json({ errors: errors.array()[0].msg });
		} else {
			let { name, email, password } = req.body;
			email = email.toLowerCase();
			const checkUser = await User.findOne({ email });
			if (checkUser) {
				res.json({
					errors: 'User already exists! Please Log In Instead!',
					login: true,
				});
			} else {
				const hashedPassword = await bcrypt.hash(password, 10);
				try {
					const user = new User({
						name: name,
						email: email,
						password: hashedPassword,
					});
					const newUser = await user.save();
					res.json(newUser);
				} catch (err) {
					console.log(err);
				}
			}
		}
	}
);
router.post('/login', async (req, res) => {
	let { email, password } = req.body;
	email = email.toLowerCase();

	const user = await User.findOne({ email });
	if (user) {
		const hashedPassword = user.password;
		const passwordMatched = await bcrypt.compare(password, hashedPassword);
		if (passwordMatched) {
			res.json(user);
		} else {
			res.json({ errors: 'invalid credentials' });
		}
	} else {
		res.json({ errors: 'User Do Not Exist! please Sign Up', signup: true });
	}
});
router.post('/user-details', async (req, res) => {
	try {
		const value = await axios.get(
			`https://api.github.com/users/${req.body.name}`
		);
		res.json(value.data);
	} catch (err) {
		res.json({ errors: "User doesn't exists" });
	}
});

module.exports = router;
