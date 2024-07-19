import jwt from "jsonwebtoken";

export const createUserToken = (user) => {
    const options = {
        expiresIn: '10s' // Token expira em 1 hora
      };
      
    const token = jwt.sign({
        username: user.name,
        id: user._id
    }, process.env.PRIVATE_KEY, options);

    return token;
}