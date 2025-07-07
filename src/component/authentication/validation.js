const validatefirstName = (firstName , setFirstNameErr) =>{
    if (!firstName){
        setFirstNameErr("please enter firstname")
        return false;
    }
    else if (firstName.length <= 3) {
        setFirstNameErr ("First name must be more than 3 characters long")
    return false
    } else {
        setFirstNameErr('')
        return true;
    }
}
const validatelastName = (lastName , setLastNameErr) =>{
    if (!lastName){
        setLastNameErr("please enter lastName")
        return false;
    } else if (lastName.length<=3){
        setLastNameErr ('lastname must be at least 3 character long')
    } else {
        setLastNameErr ('')
        return true;
    }
}
const validatePassword = (password , setPasswordErr) =>{
    if (password.length < 8) {
    setPasswordErr("Password must be at least 8 characters long.")
    return false;
  } else if
    (!/[A-Z]/.test(password)) {
    setPasswordErr("Password must contain at least one uppercase letter.")
    return false;
  } else if (!/[0-9]/.test(password)) {
    setPasswordErr("Password must contain at least one number.")
    return false;
  } else {
    setPasswordErr('')
    return true;
  }
}

const validateName = (name , setNameErr)=>{
    if (name.length < 5){
        setNameErr ('enter both first and lastname')
        return false;
    } else {
        setNameErr('')
        return true;
    }
}
const validateMessage = (message , setMessageErr)=>{
    if (message < 50){
        setMessageErr('message must be up to 50 character long')
        return false;
    }else {
        setMessageErr("")
        return true;
    }
}
export {
    validatePassword,
    validatefirstName,
    validatelastName,
    validateName,
    validateMessage
}