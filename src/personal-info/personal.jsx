function Personal({
    fullName, 
    handleNameChange,
    phoneNumber,
    handlePhoneChange,
    email,
    handleEmailChange,
    city,
    handleCityChange,
    state,
    handleStateChange,
    formStatus,
    handleSubmit,
    handleEdit
}) {    
    return (
        <>
            <form>
                <legend>Personal Information</legend>
                {(formStatus == 'edit' || formStatus == 'pending') && 
                <>
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
                        <label htmlFor="city">City</label>
                        <input 
                            id="city" 
                            type="text" 
                            name="city" 
                            value={city}
                            onChange={handleCityChange}
                        />
                    </div>

                    <div className="input">
                        <label htmlFor="state">State</label>
                        <input 
                        id="state"
                        type="text"
                        name="state"
                        value={state}
                        onChange={handleStateChange} 
                        />
                    </div>

                    <div className="submit">
                        <button type="button" onClick={handleSubmit}>Submit</button>
                    </div>
                </>}
                {(formStatus == 'submitted') &&
                <div className="edit">
                    <button type="button" onClick={handleEdit}>Edit</button>
                </div>
                }
            </form>
        </>
    );
}

export default Personal;