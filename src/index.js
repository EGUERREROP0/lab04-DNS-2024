import express from "express";
import clientesRouter from "./routes/cliente.route.js";
import productosRouter from "./routes/producto.route.js";

const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Bienvenido a la API de mi aplicación Express!");
});

app.use("/clientes", clientesRouter);
app.use("/productos", productosRouter);

app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
