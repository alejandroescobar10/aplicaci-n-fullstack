import express from 'express';
import morgan from 'morgan';
import authRoutes from './routes/auth.routes.js'
import taskRoutes from './routes/task.routes.js'
import cookieParser from 'cookie-parser';//sirve para coger una cookie y convertirla en un objeto Json

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use("/api",authRoutes);
app.use("/api",taskRoutes)

export default app;