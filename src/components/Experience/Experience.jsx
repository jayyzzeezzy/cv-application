function Experience({
    company,
    handleCompanyChange,
    position,
    handlePositionChange,
    location,
    handleLocationChange,
    startDate,
    handleStartDateChange,
    endDate,
    handleEndDateChange,
    description,
    handleDescriptionChange,
    formStatus,
    handleSubmit,
    handleEdit
}) {
    return (
        <>
        <form>
            <legend>Experience</legend>
            {(formStatus == 'edit' || formStatus == 'pending') && 
            <>
                <div className="input">
                    <label htmlFor="company">Company</label>
                    <input 
                        id="company" 
                        type="text" 
                        name="company" 
                        value={company} 
                        onChange={handleCompanyChange}
                    />
                </div>
                <div className="input">
                    <label htmlFor="position-title">Position title</label>
                    <input 
                        id="position-title" 
                        type="text" 
                        name="position-title" 
                        value={position} 
                        onChange={handlePositionChange}
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
                <div className="textarea">
                    <label htmlFor="description">Description</label>
                    <textarea 
                    id="description"
                    name="description" 
                    value={description}
                    onChange={handleDescriptionChange}
                    >
                    </textarea>
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
};

export default Experience;