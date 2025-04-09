"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  MapPin,
  Search,
  BookOpen,
  Sprout,
  ChevronRight,
  Eye,
  BarChart2,
  Shield,
  Award,
  Users,
  DollarSign,
  Heart,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"



// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const scaleUp = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5 },
  },
}

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [topProjects, setTopProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  //fetch top three funded projects thath haven gone past the deadline
  useEffect(() => {
    const fetchTopProjects = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await fetch("/api/projects/all");
        const data = await response.json();

        // Filter and sort projects
        const filteredProjects = data
          .filter((project) => new Date(project.deadline) > new Date())
          .sort((a, b) => b.fundedAmount - a.fundedAmount)
          .slice(0, 3);
        // add an etra raised field that is addition of amounts in contibution
        filteredProjects.forEach((project) => {
          project.raised = project.contributions.reduce(
            (total, contribution) => total + contribution.amount,
            0
          );
        });

        setTopProjects(filteredProjects);
        setIsLoading(false);
        console.log(filteredProjects);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchTopProjects();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
      {/* Navigation */}
     

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 z-0" />

          <motion.div
            className="container relative z-10"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 className="text-4xl md:text-6xl font-bold text-center mb-6" variants={fadeIn}>
              Empower Communities, <br className="hidden sm:block" />
              <span className="text-primary">One Project at a Time</span>
            </motion.h1>

            <motion.p className="text-lg text-center text-muted-foreground max-w-3xl mx-auto mb-10" variants={fadeIn}>
              Join thousands of people supporting local initiatives with real-time transparency and measurable impact
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={fadeIn}>
              <Link href="/view_all_projects">
                <Button size="lg" className="bg-primary hover:bg-primary/90 transition-colors">
                  Explore Projects
                </Button>
              </Link>
              <Link href="/login">
                <Button size="lg" variant="outline">
                  Start a Project
                </Button>
              </Link>
            </motion.div>
          </motion.div>

        </section>

        {/* Featured Projects */}
        <section id="projects" className="py-20 bg-muted/50">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-3 gap-8 w-screen"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {topProjects.map(
                (project, index) => (
                  console.log(project),
                  (<motion.div variants={scaleUp} key={index}>
                    <ProjectCard
                      icon={<MapPin className="h-5 w-5" />}
                      category="ENVIRONMENT"
                      title={project.title}
                      description="Help us transform the old city park into a green space with new playground equipment and seating areas."
                      progress={Math.min(100, (project.raised / project.fundingGoal) * 100)}
                      raised={project.raised.toLocaleString()}
                      goal={project.fundingGoal.toLocaleString()}
                      backers={48}
                      daysLeft={12}
                      imageSrc={project.mediaUrls[0]}
                      id={project._id}
                    />
                  </motion.div>
                  )
                )
              )}
            </motion.div>

            <motion.div
              className="flex justify-center mt-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <Link href="/view_all_projects">
  <Button variant="outline" className="group">
    View All Projects
    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
  </Button>
</Link>
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div
                variants={fadeIn}
                className="flex flex-col items-center text-center p-6 rounded-lg bg-card hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Search className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Browse & Choose</h3>
                <p className="text-muted-foreground">
                  Find a cause that matters to you from our catalog of community projects.
                </p>
              </motion.div>

              <motion.div
                variants={fadeIn}
                className="flex flex-col items-center text-center p-6 rounded-lg bg-card hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <DollarSign className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Contribute Securely</h3>
                <p className="text-muted-foreground">
                  Make a donation via our secure payment system, anonymously or publicly.
                </p>
              </motion.div>

              <motion.div
                variants={fadeIn}
                className="flex flex-col items-center text-center p-6 rounded-lg bg-card hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <BarChart2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Track Impact</h3>
                <p className="text-muted-foreground">
                  See exactly where your money goes with real-time fund tracking and progress updates.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-muted/50">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose CommunityBuild</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                className="grid gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
              >
                <motion.div variants={fadeIn} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Real-Time Transparency</h3>
                    <p className="text-muted-foreground">
                      Track every dollar with live fund updates and allocation breakdowns.
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center">
                    <BarChart2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Impact Visualization</h3>
                    <p className="text-muted-foreground">
                      See your contribution's effect with progress photos and impact maps.
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                className="grid gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
              >
                <motion.div variants={fadeIn} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Community Recognition</h3>
                    <p className="text-muted-foreground">
                      Get acknowledged for your support with badges and leaderboards.
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Secure Donations</h3>
                    <p className="text-muted-foreground">
                      Contribute with confidence through our encrypted payment system.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section id="success-stories" className="py-20">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Badge className="w-fit mb-2">PROJECT CREATOR</Badge>
                    <CardTitle>Sarah Johnson</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      "Thanks to CommunityBuild, we raised enough funds to renovate our local playground in just 3
                      weeks. The transparency tools helped us build trust with donors."
                    </p>
                  </CardContent>
                  <CardFooter>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">42 contributors</span>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>

              <motion.div variants={fadeIn}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Badge className="w-fit mb-2">COMPLETED PROJECT</Badge>
                    <CardTitle>Maple Street School</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      "Our new computer lab is now helping 250+ students learn digital skills. We couldn't have done it
                      without the community's support."
                    </p>
                  </CardContent>
                  <CardFooter>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">78 contributors</span>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-primary text-primary-foreground">
          <motion.div
            className="container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <motion.div variants={scaleUp} className="flex flex-col items-center">
                <h3 className="text-4xl font-bold mb-2">500+</h3>
                <p>Projects Funded</p>
              </motion.div>
              <motion.div variants={scaleUp} className="flex flex-col items-center">
                <h3 className="text-4xl font-bold mb-2">$2.5M+</h3>
                <p>Raised</p>
              </motion.div>
              <motion.div variants={scaleUp} className="flex flex-col items-center">
                <h3 className="text-4xl font-bold mb-2">15,000+</h3>
                <p>Contributors</p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" variants={fadeIn}>
                Ready to Make a Difference?
              </motion.h2>
              <motion.p className="text-lg text-muted-foreground mb-8" variants={fadeIn}>
                Join the movement! Start or support a project today.
              </motion.p>
              <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={fadeIn}>
                
                <Button size="lg" className="bg-primary hover:bg-primary/90 transition-colors">
                  Start a Project
                </Button>
                <Button size="lg" variant="outline">
                  Donate Now
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12 bg-muted/30">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <Heart className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">CommunityBuild</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2023 CommunityBuild •{" "}
              <Link href="#" className="hover:text-primary">
                Privacy Policy
              </Link>{" "}
              •{" "}
              <Link href="#" className="hover:text-primary">
                Terms of Service
              </Link>{" "}
              •{" "}
              <Link href="#" className="hover:text-primary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Project Card Component
function ProjectCard({ id, icon, category, title, description, progress, raised, goal, backers, daysLeft, imageSrc }) {
  //const router=useRouter()
  return (
    <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300">
      <div className="relative">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          width={400}
          height={200}
          className="w-full h-48 object-cover"
        />
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
        <Button variant="outline" size="sm">
          Learn More
        </Button>
        <Button size="sm">
          <Link href={`/projects/${id}`}>
            Donate</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

