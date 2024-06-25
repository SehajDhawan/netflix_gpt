export const checkValidData = (email, password, name, isSignIn) => {
    const ValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const ValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  
    if (!ValidEmail) return "Email ID is not valid";
    if (!ValidPassword) return "Password is not valid";
  
    // Only validate the name if not signing in (i.e., signing up)
    if (!isSignIn) {
      const ValidName = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
      if (!ValidName) return "Name is not valid";
    }
  
    return null;
  };
  