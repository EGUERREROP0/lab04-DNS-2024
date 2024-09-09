import express from "express";
const router = express.Router();

const clientes = [
  { id: 1, nombre: "Juan Pérez" },
  { id: 2, nombre: "Ana Gómez" },
  { id: 3, nombre: "Luis Rodríguez" },
];

router.get("/", (req, res) => {
  res.json(clientes);
});

export default router;
