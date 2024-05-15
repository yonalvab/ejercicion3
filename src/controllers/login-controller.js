import jwt from 'jsonwebtoken';

const key = 'prueba123';

const users = [
  {
    email: 'usuario@gmail.com',
    password: 'prueba123'
  }
];

export const verifyUser = (req, res) => {
    
    const { email, password } = req.body;
  
    const user = users.find(u => u.email === email);
  
    if (user) {

        if (user.password ===  password) {
            const token = jwt.sign({ email: user.email }, key, { expiresIn: '1h' });
            res.json({ token });
          }else {
            res.status(403).json({ message: 'La contraseña es Incorrecta' });
            return;
        }

    } else {
      res.status(403).json({ message: 'No existe el Usuario' });
    }
  }