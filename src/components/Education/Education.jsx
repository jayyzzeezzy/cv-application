function Education({
    school,
    handleSchoolChange,
    degree,
    handleDegreeChange,
    location,
    handleLocationChange,
    startDate,
    handleStartDateChange,
    endDate,
    handleEndDateChange,
    formStatus,
    handleSubmit,
    handleEdit
}) {
    return (
        <form>
            <legend>Education</legend>
            {(formStatus == 'edit' || formStatus == 'pending') && 
            <>
                <div className="input">
                    <label htmlFor="school">School</label>
                    <input 
                        id="school" 
                        type="text" 
                        name="school" 
                        value={school} 
                        onChange={handleSchoolChange}
                    />
                </div>
                <div className="input">
                    <label htmlFor="degree">Degree</label>
                    <input 
                        id="degree" 
                        type="text" 
                        name="degree" 
                        value={degree} 
                        onChange={handleDegreeChange}
                    />
                </div>
                <div className="input">
                    <label htmlFor="location">Location</label>
                    <input 
                        id="location" 
                        type="text" 
                        name="location" 
                        value={location} 
                        onChange={handleLocationChange}
                    />
                </div>
                <div className="timeline">
                    <label htmlFor="start-date">Start date</label>
                    <input 
                        id="start-date"
                        type="text" 
                        name="start-date"
                        value={startDate}
                        onChange={handleStartDateChange}
                    />
                    <label htmlFor="end-date">End date</label>
                    <input 
                        id="end-date"
                        type="text" 
                        name="end-date"
                        value={endDate}
                        onChange={handleEndDateChange}
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
    );
};

export default Education;