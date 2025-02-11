import { useState } from "react";
import "./Registration.css";

function Registration() {
    const [FullName, setFullName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    const [PhoneNumber, setPhoneNumber] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents page reload

        if (Password !== ConfirmPassword) {
            alert("Password and Confirm Password must be the same!");
            return;
        }

        alert("Registration Successful!");
        // Here, you can proceed with further logic like sending data to a backend.
    };

    return (
        <div>
            <div className="container">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Full Name</label>
                    <input 
                        value={FullName} 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Enter your full name" 
                        onChange={(event) => setFullName(event.target.value)} 
                        required 
                    />

                    <label htmlFor="email">Email</label>
                    <input 
                        value={Email} 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="Enter your email" 
                        onChange={(event) => setEmail(event.target.value)} 
                        required 
                    />

                    <label htmlFor="password">Password</label>
                    <input 
                        value={Password} 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Create a password" 
                        onChange={(event) => setPassword(event.target.value)} 
                        required 
                    />

                    <label htmlFor="confirm_password">Confirm Password</label>
                    <input 
                        value={ConfirmPassword} 
                        type="password" 
                        id="confirm_password" 
                        name="confirm_password" 
                        placeholder="Confirm your password" 
                        onChange={(event) => setConfirmPassword(event.target.value)} 
                        required 
                    />

                    <label htmlFor="phone">Phone Number</label>
                    <input 
                        value={PhoneNumber} 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        placeholder="Enter your phone number" 
                        onChange={(event) => setPhoneNumber(event.target.value)} 
                        required 
                    />

                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
}

export default Registration;
