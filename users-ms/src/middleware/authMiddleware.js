import jwt from 'jsonwebtoken';

export const verifyJwt = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Não Autorizado." });
  }

  try {
    // Verificando e decodificando o token
    const payload = jwt.verify(token, process.env.PRIVATE_KEY);

    // Acessando o tempo de expiração diretamente do payload
    const expTime = payload.exp * 1000; // Convertendo o tempo de expiração para milissegundos
    const currentTime = Date.now();

    console.log('Tempo atual:', currentTime);
    console.log('Tempo de expiração do token:', expTime);

    if (currentTime > expTime) {
      return res.status(401).json({ error: "Token expirado." });
    }

    // Armazenando os dados do usuário no objeto de solicitação
    req.user = payload;

    // Prosseguindo para a próxima função de middleware
    next();
  } catch (error) {
    return res.status(403).json({ error: "Token inválido." });
  }
};
