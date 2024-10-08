import { Request, Response, NextFunction } from "express"; 
import jwt from "jsonwebtoken"; 


declare global {
    namespace Express {
        interface Request {
            id: string;
        }
    }
}

export const isAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "User is not authenticated"
            });
        }
        //verify the token
        const decode = jwt.verify(token, process.env.SECRET_KEY!) as jwt.JwtPayload;
        //checking  if decode is successful
        if (!decode) {
            return res.status(401).json({
                success: false,
                message: "Invalid token"
            });
        }
        req.id = decode.userId;
        next();

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });

    }
}