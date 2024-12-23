import { Request, Response, NextFunction } from 'express';

export const checkRole = (roles: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const userRole = req.user?.role;

        if (!userRole || !roles.includes(userRole)) {
            res.status(403).json({ message: 'Access forbidden: Insufficient role' });
            return;
        }

        next();
    };
};
