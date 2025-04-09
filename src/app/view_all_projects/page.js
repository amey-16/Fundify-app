'use client';

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [filters, setFilters] = useState({ category: "", fundingStatus: "" });
  const projectsPerPage = 6;

  // const getHoursLeft = (deadlineDate) => {
  //   const now = new Date();
  //   const deadline = new Date(deadlineDate);
  //   return Math.max(0, Math.floor((deadline - now) / (1000 * 60 * 60)));
  // };

  const fetchProjects = async (reset = false) => {
    if (loading) return;
    setLoading(true);

    try {
      let url = `/api/projects/all?page=${page}&limit=${projectsPerPage}`;
      if (filters.category) url += `&category=${filters.category}`;
      if (filters.fundingStatus) url += `&fundingStatus=${filters.fundingStatus}`;

      const res = await fetch(url);
      const newProjects = await res.json();

      newProjects.forEach((project) => {
        project.raised = project.contributions?.reduce((total, contribution) => total + contribution.amount, 0) || 0;
      });

      setHasMore(newProjects.length === projectsPerPage);

      setProjects((prev) => {
        const updatedProjects = reset ? newProjects : [...prev, ...newProjects];
        return updatedProjects.filter(
          (project, index, self) => index === self.findIndex((p) => p._id === project._id)
        );
      });

      setPage((prev) => prev + 1);
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setPage(1); // Reset pagination on filter change
    setProjects([]);
    fetchProjects(true);
  }, [filters]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100 && !loading && hasMore) {
        fetchProjects();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore]);

  return (
    <div className="relative min-h-screen flex flex-col bg-white text-black">
      <AnimatedBackground />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto py-12 px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-2">Projects Dashboard</h1>
        <p className="text-lg text-center text-gray-600 mb-10">Find the projects you want to donate to</p>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-8">
          <select
            className="p-2 border rounded"
            onChange={(e) => setFilters({ ...filters, category: e.target.value })}
          >
            <option value="">All Categories</option>
            <option value="tech">Tech</option>
            <option value="health">Health</option>
            <option value="education">Education</option>
          </select>
          <select
            className="p-2 border rounded"
            onChange={(e) => setFilters({ ...filters, fundingStatus: e.target.value })}
          >
            <option value="">All Status</option>
            <option value="funded">Funded</option>
            <option value="unfunded">Unfunded</option>
          </select>
        </div>

        {/* Anonymous Donation Note */}
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-3 rounded-md text-center mb-6">
          <p className="font-semibold">Donations made without logging in will be processed anonymously.</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project._id}
              className="transform hover:scale-105 transition duration-300 shadow-md rounded-lg overflow-hidden bg-gray-100"
            >
              <Link href={`/projects/${project._id}`}>
                <ProjectCard
                  projectImage={project?.mediaUrls?.[0] || "/placeholder.png"}
                  profileImage={project?.creator?.avatar || "/avatar-placeholder.png"}
                  title={project?.title || "Untitled Project"}
                  progress={Math.min(100, (project.raised / project.fundingGoal) * 100)}
                  username={project?.creator?.name || "Anonymous"}
                  // timeLeft={Math.ceil(getHoursLeft(project.deadline) / 24)}
                  fundingPercent={(project.raised / project.fundingGoal) * 100 || 0}
                  description={project?.description || "No description available"}
                  categories={project?.categories || []}
                />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Loading and No More Projects Message */}
        {loading && <div className="text-center py-4"><div className="loader"></div></div>}
        {!hasMore && projects.length > 0 && <p className="text-center text-gray-500 py-4">No more projects to load</p>}
      </motion.div>
    </div>
  );
}
