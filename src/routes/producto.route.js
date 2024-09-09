import express from "express";
const router = express.Router();

const productos = [
  { id: 1, nombre: "Producto A" },
  { id: 2, nombre: "Producto B" },
  { id: 3, nombre: "Producto C" },
];

router.get("/", (req, res) => {
  res.json(productos);
});

export default router;
