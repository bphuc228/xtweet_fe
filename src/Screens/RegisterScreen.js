import React from 'react'
import './RegisterScreen.css'

const RegisterScreen = (props) => {

    return (
        <div className="register-container">
            <h1>Join Twitter Today</h1>
            <form>
                {/* <label htmlFor="name">Name:</label>
                <input type="text" id="name" /> */}

                <div style={{ display: 'flex' }}>
                    <div style={{ marginRight: '20px', display: 'flex', alignItems: 'center' }}>
                        <label htmlFor="firstName" style={{ marginRight: '10px' }}>First Name:</label>
                        <input type="text" id="firstName" style={{ padding: '5px', borderRadius: '5px', backgroundColor: '#eef1f3' }} />
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <label htmlFor="lastName" style={{ marginRight: '10px' }}>Last Name:</label>
                        <input type="text" id="lastName" style={{ padding: '5px', borderRadius: '5px', backgroundColor: '#eef1f3' }} />
                    </div>
                </div>




                <label htmlFor="dob">Date of Birth:</label>
                <div>
                    <select id="dobMonth" name="dobMonth" required style={{ display: 'inline-block', marginRight: '10px' }}>
                        <option value="">Month</option>
                        <option value="01">January</option>
                        <option value="02">February</option>
                        <option value="03">March</option>
                        <option value="04">April</option>
                        <option value="05">May</option>
                        <option value="06">June</option>
                        <option value="07">July</option>
                        <option value="08">August</option>
                        <option value="09">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>

                    <select id="dobDay" name="dobDay" required style={{ display: 'inline-block', marginRight: '10px' }}>
                        <option value="">Day</option>
                        {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                            <option key={`day-${day}`} value={day}>{day}</option>
                        ))}
                    </select>

                    <select id="dobYear" name="dobYear" required style={{ display: 'inline-block' }}>
                        <option value="">Year</option>
                        {Array.from({ length: 80 }, (_, i) => new Date().getFullYear() - i).map((year) => (
                            <option key={`year-${year}`} value={year}>{year}</option>
                        ))}
                    </select>
                </div>





                <label htmlFor="username">Username:</label>
                <input type="text" id="username" />

                <label htmlFor="email">Email:</label>
                <input type="text" id="email" />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" />

                <label htmlFor="telephone">Telephone Number:</label>
                <input type="text" id="telephone" name="telephone" required />

                <label htmlFor="sex">Sex:</label>
                <select className="sex" name="sex" required>
                    <option value="">--Select--</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>

                <button type="submit">Sign Up</button>

            </form>
        </div>


    )
}

export default RegisterScreen