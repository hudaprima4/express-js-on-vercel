import express from 'express';
import app from '../api/index.js';

const server = express();
server.use(app);

const PORT = 3000;
server.listen(PORT, () => {
   console.log(`Server berjalan di http://localhost:${PORT}`);
});
