import { Router, Request, Response } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
// TODO: If the user exists and the password is correct, return a JWT token

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await User.findOne({ where: { username } });
  if (!user) {
    res.sendStatus(401);
    return;
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    res.sendStatus(401);
    return;
  }

  const token = jwt.sign({ id: user.id }, 'your_jwt_secret');
  res.json({ token });
};

const router = Router();

// POST /login - Login a user
router.post('/login', login);

export default router;
