import { Router } from 'express';
import jwt from 'jsonwebtoken';

const router = Router();
const key = 'prueba123';

const users = [
  {
    email: 'usuario@gmail.com',
    password: 'prueba123'
  }
];

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    const token = jwt.sign({ email: user.email }, key, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(403).json({ message: 'No existe el Usuario' });
  }
});

export default router;
