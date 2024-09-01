function Personal({
    fullName, 
    handleNameChange,
    phoneNumber,
    handlePhoneChange,
    email,
    handleEmailChange,
    city,
    handleCityChange
}) {    
    function handleSubmit(e) {
        e.preventDefault();
        console.log(fullName);
        // console.log(phoneNumber);
        // console.log(email);
        // console.log(city);
    };


    return (
        <>
            <form onSubmit={handleSubmit}>
                <legend>Personal Information</legend>
                <div className="input">
                    <label htmlFor="full-name">Full Name</label>
                    <input 
                        id="full-name" 
                        type="text" 
                        name="full-name" 
                        value={fullName} 
                        onChange={handleNameChange}
                    />
                </div>

                <div className="input">
                    <label htmlFor="tel">Phone Number</label>
                    <input 
                        id="tel" 
                        type="tel" 
                        name="tel"
                        value={phoneNumber}
                        onChange={handlePhoneChange}
                    />
                </div>
                
                <div className="input">
                    <label htmlFor="email">Email</label>
                    <input 
                        id="email" 
                        type="email" 
                        name="email" 
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>

                <div className="input">
                    <label htmlFor="City">City</label>
                    <input 
                        id="city" 
                        type="text" 
                        name="city" 
                        value={city}
                        onChange={handleCityChange}
                    />
                </div>

                <div className="submit">
                    <button type="button" onClick={handleSubmit}>Save</button>
                </div>
            </form>
        </>
    );
}

export default Personal;