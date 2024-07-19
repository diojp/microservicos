import jwt from "jsonwebtoken";

export const verifyJwt = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader?.split(" ")[1];

    if(!token){
        res.status(401).json({error: "Não Autorizado."});
        return;
    }

    try{
        const payload = jwt.verify(token, process.env.PRIVATE_KEY, (err, decoded) => {
            if (err) {
              if (err.name === 'TokenExpiredError') {
                console.error('O token está expirado.');
              } else {
                console.error('Token inválido:', err.message);
              }
            } else {
              console.log('Token válido:', decoded);
            }
          });
          
        req.user = payload;

        next();
    }catch(error){
        res.status(403).json({error: "Token inválido."});
        return;
    }
}