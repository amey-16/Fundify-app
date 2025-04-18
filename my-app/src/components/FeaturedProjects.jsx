"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

function ProjectCard({ icon, category, title, description, progress, raised, goal, backers, daysLeft, imageSrc }) {
  return (
    <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300">
      <div className="relative">
        <Image src={imageSrc || "/placeholder.svg"} alt={title} width={400} height={200} className="w-full h-48 object-cover" />
        <Badge className="absolute top-3 left-3 bg-background/80 backdrop-blur-sm">{category}</Badge>
      </div>
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">{icon}</div>
          <CardTitle>{title}</CardTitle>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium">{raised} raised</span>
            <span className="text-sm text-muted-foreground">{goal} goal</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        <div className="flex justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{backers} backers</span>
          </div>
          <div>{daysLeft} days left</div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm">Learn More</Button>
        <Button size="sm">Donate</Button>
      </CardFooter>
    </Card>
  );
}

const scaleUp = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export default function FeaturedProjects({ projects, isLoading, error }) {
  if (isLoading) {
    return <div className="text-center text-lg text-gray-600">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600">Error: {error.message}</div>;
  }

  if (!projects || projects.length === 0) {
    return <div className="text-center text-gray-600">No projects found.</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <motion.div variants={scaleUp} key={index}>
          <ProjectCard
            icon={<MapPin className="h-5 w-5" />}
            category="ENVIRONMENT"
            title={project.title}
            description={project.description}
            progress={Math.min(100, (project.raised / project.fundingGoal) * 100)}
            raised={project.raised.toLocaleString()}
            goal={project.fundingGoal.toLocaleString()}
            backers={project.backers || 0}
            daysLeft={project.daysLeft || 0}
            imageSrc={project.mediaUrls?.[0] || "/placeholder.svg"}
          />
        </motion.div>
      ))}
    </div>
  );
}
