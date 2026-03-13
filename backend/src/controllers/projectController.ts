import { Request, Response } from "express";
import { prisma } from "../prisma";

/* GET ALL PROJECTS */
export const getProjects = async (req: Request, res: Response) => {
  try {
    const projects = await prisma.project.findMany({
      orderBy: {
        createdAt: "desc"
      }
    });

    res.status(200).json(projects);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch projects" });
  }
};


/* CREATE PROJECT */
export const createProject = async (req: Request, res: Response) => {
  try {

    const { title, description, location, image, status } = req.body;

    if (!title || !description || !location) {
      return res.status(400).json({
        error: "Title, description and location are required"
      });
    }

    const project = await prisma.project.create({
      data: {
        title,
        description,
        location,
        image,
        status
      }
    });

    res.status(201).json(project);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create project" });
  }
};


/* UPDATE PROJECT */
export const updateProject = async (req: Request, res: Response) => {
  try {

    const id = Number(req.params.id);

    // CHECK IF PROJECT EXISTS
    const existingProject = await prisma.project.findUnique({
      where: { id }
    });

    if (!existingProject) {
      return res.status(404).json({
        error: "Project not found"
      });
    }

    // UPDATE PROJECT
    const project = await prisma.project.update({
      where: { id },
      data: req.body
    });

    res.json(project);

  } catch (error) {
    console.error("UPDATE ERROR:", error);
    res.status(500).json({
      error: "Failed to update project"
    });
  }
};

/* DELETE PROJECT */
export const deleteProject = async (req: Request, res: Response) => {
  try {

    const id = Number(req.params.id);

    // CHECK IF PROJECT EXISTS
    const existingProject = await prisma.project.findUnique({
      where: { id }
    });

    if (!existingProject) {
      return res.status(404).json({
        error: "Project not found"
      });
    }

    // DELETE PROJECT
    await prisma.project.delete({
      where: { id }
    });

    res.json({
      message: "Project deleted successfully"
    });

  } catch (error) {
    console.error("DELETE ERROR:", error);
    res.status(500).json({
      error: "Failed to delete project"
    });
  }
};