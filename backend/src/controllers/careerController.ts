import { Request, Response } from "express";
import { prisma } from "../prisma";
import { sendMail } from "../utils/sendMail";

/* CREATE CAREER APPLICATION */

export const createCareer = async (req: Request, res: Response) => {

  try {

    const { name, email, phone, position } = req.body;

    if (!name || !email || !phone || !position) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const career = await prisma.career.create({
      data: {
        name,
        email,
        phone,
        position
      }
    });

    await sendMail(
      "New Job Application",
      `
      <h2>Career Application</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Position:</b> ${position}</p>
      `
    );

    res.json({
      message: "Application submitted successfully",
      data: career
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      error: "Failed to submit application"
    });

  }

};


/* GET ALL APPLICATIONS */

export const getCareers = async (req: Request, res: Response) => {

  try {

    const careers = await prisma.career.findMany({
      orderBy: { createdAt: "desc" }
    });

    res.json(careers);

  } catch (error) {

    res.status(500).json({
      error: "Failed to fetch applications"
    });

  }

};