import { Request, Response } from "express";

export const uploadImage = (req: Request, res: Response) => {
  try {

    if (!req.file) {
      return res.status(400).json({
        error: "No file uploaded"
      });
    }

    res.json({
      message: "Upload successful",
      filename: req.file.filename,
      path: `/uploads/${req.file.filename}`
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Upload failed"
    });
  }
};