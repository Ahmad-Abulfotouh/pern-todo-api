import jwt from 'jsonwebtoken';
export const generateToken = (payload) => {
    const JWT_SECRET = process.env.JWT_SECRET;
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' });
};
export const verifyToken = (token) => {
    const JWT_SECRET = process.env.JWT_SECRET;
    return jwt.verify(token, JWT_SECRET);
};
//# sourceMappingURL=jwtUtility.js.map