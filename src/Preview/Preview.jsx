function Preview({
    fullName,
    city,
    phoneNumber,
    email,
    state,
    school,
    degree,
    location,
    startDate,
    endDate,
    company,
    position,
    jobLocation,
    jobStartDate,
    jobEndDate,
    description

}) {
    return (
        <>
        <h1 className="name">{fullName}</h1>
        <section className="personal-info">
            <div>
                <p className="phone-number">{phoneNumber}</p>
                <p className="email">{email}</p>
                <p className="city">{city + ' , ' +state}</p>
            </div>
        </section>
        <hr />
        <section className="education">
            <h1>Education</h1>
            <div className="education-split">
                <div className="left">
                    <p className="education-timeline">{startDate + ' - ' + endDate}</p>
                    <p className="education-location">{location}</p>
                </div>
                <div className="right">
                    <p className="school">{school}</p>
                    <p className="degree">{degree}</p>
                </div>
            </div>
        </section>
        <hr />
        <section className="experience">
            <h1>Experience</h1>
            <div className="experience-split">
                <div className="left">
                    <p className="experience-timeline">{jobStartDate + ' - ' + jobEndDate}</p>
                    <p className="experience-location">{jobLocation}</p>
                </div>
                <div className="right">
                    <p className="company">{company}</p>
                    <p className="position-title">{position}</p>
                    <p className="experience-description">{description}</p>
                </div>
            </div>
        </section>
        </>
        
    );
};

export default Preview;