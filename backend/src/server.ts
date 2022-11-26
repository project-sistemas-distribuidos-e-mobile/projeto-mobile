import expres from 'express';
import {routes} from './routes';
import cors from 'cors';

//inicializa o serviço de servidor do express
const app = expres();

//consição para realizar requisições para o servidor a partir do mesmo host
app.use(cors({
    origin: 'http://localhost:8100'
}));

//utilização das rotas criadas no arquivo de rotas
app.use(routes);

//indicação da porta de escuta do servidor
app.listen(5000, () => {
    console.log('Server is running.');
})