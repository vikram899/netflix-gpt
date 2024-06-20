export const isSignDataValid = (email, password) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const passwordRegex =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  if (!emailRegex.test(email)) return "Email is not valid";
  if (!passwordRegex.test(password)) return "Password is not valid";

  return "";
};
