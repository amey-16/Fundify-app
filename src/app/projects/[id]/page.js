"use client";
import ProjectDetail2 from "@/components/ProjectDetails2";
import { useEffect, useState } from "react";

export default function HomePage({ params }) {
    const [projectData, setProjectData] = useState(null);

    const formatDate = (isoDate) => new Date(isoDate).toISOString().split('T')[0];

    const getHoursLeft = (deadlineDate) => {
        const now = new Date();
        const deadline = new Date(deadlineDate);
        const diffInMs = deadline - now;
        return Math.max(Math.floor(diffInMs / (1000 * 60 * 60)), 0);
    };

    useEffect(() => {
        if (!params?.id) return; // Prevent API call if ID is missing

        const getContributorName = async (contributorId, isAnonymous) => {
            if (isAnonymous || !contributorId) return "Anonymous";
            try {
                const response = await fetch(`/api/users/${contributorId}`);
                if (!response.ok) throw new Error();
                const { name } = await response.json();
                return name;
            } catch {
                return "Anonymous";
            }
        };

        const fetchProjectData = async () => {
            try {
                const response = await fetch(`/api/projects/${params.id}`);
                if (!response.ok) throw new Error('Failed to fetch project');

                const project = await response.json();
                project.raised = project.contributions.reduce((tot, c) => tot + c.amount, 0);
                project.ovt = project.contributions.map((c) => ({
                    date: formatDate(c.contributedAt),
                    amount: c.amount,
                }));
                project.hoursLeft = project.deadline ? getHoursLeft(project.deadline) : 0;

                // Fetch contributor names concurrently
                const contributorNames = await Promise.all(
                    project.contributions.map((c) => getContributorName(c.contributor, c.isAnonymous))
                );
                project.contributions.forEach((c, i) => (c.name = contributorNames[i]));

                project.mediaUrls = project.mediaUrls.map((url) => ({ type: "image", url }));

                setProjectData(project);
            } catch (error) {
                console.error("Error fetching project:", error);
            }
        };

        fetchProjectData();
    }, [params?.id]); // Add dependency to re-run when `params.id` changes

    return <div>{projectData && <ProjectDetail2 {...projectData} />}</div>;
}
