import React, { useState } from "react";
import "./FormHandling.css";

const FormHandling = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = {
			name,
			email,
			password,
		};
		console.log(formData);
		setName("");
		setEmail("");
		setPassword("");
	};

	return (
		<form className="form-container" onSubmit={handleSubmit}>
			<h2 className="form-title">Sign Up</h2>

			<div className="form-group">
				<label htmlFor="name">Full Name</label>
				<input
					type="text"
					id="name"
					name="name"
					placeholder="Enter your name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
				/>
			</div>

			<div className="form-group">
				<label htmlFor="email">Email</label>
				<input
					type="email"
					id="email"
					name="email"
					placeholder="Enter your email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
			</div>

			<div className="form-group">
				<label htmlFor="password">Password</label>
				<input
					type="password"
					id="password"
					name="password"
					placeholder="Enter your password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
			</div>

			<button type="submit" className="submit-btn">
				Sign Up
			</button>
		</form>
	);
};

export default FormHandling;
