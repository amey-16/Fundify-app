// src/app/api/projects/[id]/updates/route.js

import { NextResponse } from "next/server";
import db from "@/utils/db";
import Project from "@/app/models/projectscheme";
import { getToken } from "next-auth/jwt";

// Add update to project
export async function POST(request, { params }) {
  try {
    const session = await getToken({ req: request, secret: process.env.JWT_SECRET });
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    await db();

    const project = await Project.findOneAndUpdate(
      { _id: params.id, creator: session.user.id },
      {
        $push: {
          progressUpdates: {
            description: body.description,
            mediaUrls: body.mediaUrls
          }
        }
      },
      { new: true }
    );

    if (!project) {
      return NextResponse.json({ error: "Project not found or unauthorized" }, { status: 404 });
    }

    return NextResponse.json(project);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}