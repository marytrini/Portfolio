const validate =()=>{
    let errors = {};
    
    if(!input.name) errors.name="Required field"
    else if (/[^A-Za-z0-9 ]+/g.test(input.name))
    errors.name = "Name cannot contain special characters or written accents"; // may, min,num,  no carac.espec, tildes

    if(!input.email) errors.email="Required field"
    else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/g.test(input.name)
    ) errors.email="Must be a valid email"
}
export default validate;