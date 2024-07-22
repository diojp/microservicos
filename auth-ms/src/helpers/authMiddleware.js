import jwt from "jsonwebtoken";

export const createUserToken = (user) => {
    const payload = {
        id: user._id,
        username: user.name
      };
    const options = {
        expiresIn: '1h' // Token expira em 1 hora
      };
      
    const token = jwt.sign(payload, process.env.PRIVATE_KEY, options);

    return token;
}