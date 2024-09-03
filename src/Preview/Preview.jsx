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
            <div>
                <p className="school">{school}</p>
                <p className="degree">{degree}</p>
                <p className="timeline">{startDate + ' - ' + endDate}</p>
                <p className="location">{location}</p>
            </div>
        </section>
        <hr />
        <section className="experience">
            <div>
                <p className="company">{company}</p>
                <p className="position-title">{position}</p>
                <p className="timeline">{jobStartDate + ' - ' + jobEndDate}</p>
                <p className="location">{jobLocation}</p>
                <p className="description">{description}</p>
            </div>
        </section>
        </>
        
    );
};

export default Preview;