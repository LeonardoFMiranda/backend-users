import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors' // Importe o módulo cors
import usersRoute from './routes/users.route';

const app = express();

// Configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Habilitando CORS
app.use(cors());

// Configuração de rotas
app.use(usersRoute);

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ foo: 'Sucesso!' });
});

// Inicialização do servidor
app.listen(5000, () => {
  console.log('Aplicação escutando na porta 5000');
});
