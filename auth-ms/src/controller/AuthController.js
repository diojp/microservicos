import { createUserToken } from "../helpers/authMiddleware.js";
import axios from 'axios';
import bcrypt from 'bcrypt';

export class AuthController {
    static async login(req, res) {
        try {
            const { username, password } = req.body;
            
            
            const response = await axios.get(`${process.env.SERVICE_GATEWAY_URL}/users-ms/users/${username}`);
            const user = response.data.user;

            const passwordHash = await bcrypt.compare(password, user.password);

            if(!passwordHash){
                const error = new Error("Usuário Não Autorizado");
                error.statusCode = 405;
                throw error;
            }

            const token = createUserToken(user);

            res.status(200).json({ token, userId : user.id });
        } catch (error) {
            error.statusCode = error.statusCode || 500;
            res.status(error.statusCode).json({ error: error.message });
        }
    }
}