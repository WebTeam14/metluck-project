import { Request, Response } from "express";
import { prisma } from "../prisma";
import { sendMail } from "../utils/sendMail";

/* CREATE CONTACT */
export const createContact = async (req: Request, res: Response) => {
  try {

    const { name, email, phone, subject, message } = req.body;

    const contact = await prisma.contact.create({
      data: { name, email, phone, message }
    });

    await sendMail(
      "New Contact Form",
      `
      <h2>Contact Form</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Subject:</b> ${subject}</p>
      <p><b>Message:</b> ${message}</p>
      `
    );

    res.json(contact);

  } catch (error) {
    res.status(500).json({ error: "Failed to submit contact form" });
  }
};

/* GET CONTACTS */
export const getContacts = async (req: Request, res: Response) => {
  try {

    const contacts = await prisma.contact.findMany({
      orderBy: { createdAt: "desc" }
    });

    res.json(contacts);

  } catch (error) {
    res.status(500).json({ error: "Failed to fetch contacts" });
  }
};