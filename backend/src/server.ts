import "dotenv/config";
import express from "express";
import cors from "cors";
import projectRoutes from "./routes/projectRoutes";
import contactRoutes from "./routes/contactRoutes";
import careerRoutes from "./routes/careerRoutes";
import uploadRoutes from "./routes/uploadRoutes";
import partnerRoutes from "./routes/partnerRoutes";
import path from "path";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/projects", projectRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/careers", careerRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/partners", partnerRoutes);
app.use(
  "/uploads",
  express.static(path.resolve(__dirname, "../uploads"))
);

app.get("/", (req, res) => {
  res.send("Metluck API running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});