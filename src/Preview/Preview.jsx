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
                <p className="company"></p>
                <p className="position-title"></p>
                <p className="timeline"></p>
                <p className="location"></p>
                <p className="description"></p>
            </div>
        </section>
        </>
        
    );
};

export default Preview;