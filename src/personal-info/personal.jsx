import { useState } from "react";

function Personal() {
    const [fullName, setFullName] = useState('');

    function handleNameChange(e) {
        setFullName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(fullName);
    };


    return (
        <>
            <form onSubmit={handleSubmit}>
                <legend>Personal Information</legend>
                <div className="input">
                    <label htmlFor="full-name" className="full-name">Full Name</label>
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
                    <input id="tel" type="tel" name="tel"/>
                </div>
                
                <div className="input">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" name="email" />
                </div>

                <div className="input">
                    <label htmlFor="City">City</label>
                    <input id="city" type="text" name="city" />
                </div>

                <div className="submit">
                    <button type="button" onClick={handleSubmit}>Save</button>
                </div>
            </form>
        </>
    );
}

export default Personal;