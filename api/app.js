import express from "express";
import cors from "cors";
import "./models/index.js";
import ramalRoutes from "./routes/ramalRoutes.js";
import pousadaRoutes from "./routes/pousadaRoutes.js";
import atributosRoutes from "./routes/attributesRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import paymentMethodsRoutes from "./routes/paymentMethodsRoutes.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/ramais", ramalRoutes);
app.use("/pousadas", pousadaRoutes);
app.use("/atributos", atributosRoutes);
app.use("/paymentMethods", paymentMethodsRoutes);
app.use("/users", userRoutes);

export default app;