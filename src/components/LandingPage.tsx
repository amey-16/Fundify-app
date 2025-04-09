// import React from 'react';

// const LandingPage = () => {
//   return (
//     <div>
//       {/* Navigation */}
//       <header>
//         <div className="container header-container">
//           <div className="logo">
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="primary-text">
//               <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
//             </svg>
//             <span className="logo-text">CommunityBuild</span>
//           </div>

//           <nav>
//             <a href="#projects">Projects</a>
//             <a href="#how-it-works">How It Works</a>
//             <a href="#success-stories">Success Stories</a>
//           </nav>

//           <div className="header-actions">
//             {session ? (
//               <>
//                 <span className="text-sm font-medium">Welcome, {session.user.name}</span>
//                 <a href="/api/auth/signout" className="text-sm font-medium hover:text-primary transition-colors">Logout</a>
//               </>
//             ) : (
//               <>
//                 <a href="/login" className="text-sm font-medium hover:text-primary transition-colors">Login</a>
//                 <button className="px-4 py-2 text-sm font-medium text-primary border border-primary rounded-full hover:bg-primary/10 transition-colors">
//                   Donate Now
//                 </button>
//                 <button className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-full hover:bg-primary/90 transition-colors">
//                   Start a Project
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       </header>

//       <main>
//         {/* Hero Section */}
//         <section className="hero">
//           <div className="hero-bg"></div>
//           <div className="container hero-content">
//             <h1 className="hero-title animate-fade-in">
//               Empower Communities, <br className="hidden-mobile" />
//               <span className="primary-text">One Project at a Time</span>
//             </h1>
//             <p className="hero-subtitle animate-fade-in delay-100">
//               Join thousands of people supporting local initiatives with real-time transparency and measurable impact
//             </p>
//             <div className="hero-actions animate-fade-in delay-200">
//               <button className="btn btn-lg btn-primary">Explore Projects</button>
//               <button className="btn btn-lg btn-outline">Start a Project</button>
//             </div>
//           </div>
//         </section>

//         {/* Featured Projects */}
//         <section id="projects" className="projects">
//           <div className="container">
//             <div className="section-header animate-fade-in">
//               <h2 className="section-title">Featured Projects</h2>
//               <div className="section-divider"></div>
//             </div>

//             <div className="projects-grid">
//               {/* Project Card 1 */}
//               <div className="card animate-scale-up">
//                 <div className="card-image">
//                   <img src="https://placehold.co/400x200" alt="Park Renovation" />
//                   <span className="badge">ENVIRONMENT</span>
//                 </div>
//                 <div className="card-header">
//                   <div className="card-title-wrapper">
//                     <div className="card-icon">
//                       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                         <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
//                         <circle cx="12" cy="10" r="3"></circle>
//                       </svg>
//                     </div>
//                     <h3 className="card-title">Park Renovation</h3>
//                   </div>
//                   <p className="card-description">Help us transform the old city park into a green space with new playground equipment and seating areas.</p>
//                 </div>
//                 <div className="card-content">
//                   <div className="progress-wrapper">
//                     <div className="progress-info">
//                       <span className="progress-raised">$12,500 raised</span>
//                       <span className="progress-goal">$20,000 goal</span>
//                     </div>
//                     <div className="progress-bar">
//                       <div className="progress-value" style={{ width: '65%' }}></div>
//                     </div>
//                   </div>
//                   <div className="card-stats">
//                     <div className="card-stats-item">
//                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                         <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
//                         <circle cx="9" cy="7" r="4"></circle>
//                         <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
//                         <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
//                       </svg>
//                       <span>48 backers</span>
//                     </div>
//                     <div>12 days left</div>
//                   </div>
//                 </div>
//                 <div className="card-footer">
//                   <button className="btn btn-sm btn-outline">Learn More</button>
//                   <button className="btn btn-sm btn-primary">Donate</button>
//                 </div>
//               </div>

//               {/* Project Card 2 */}
//               <div className="card animate-scale-up delay-200">
//                 <div className="card-image">
//                   <img src="https://placehold.co/400x200" alt="School Library" />
//                   <span className="badge">EDUCATION</span>
//                 </div>
//                 <div className="card-header">
//                   <div className="card-title-wrapper">
//                     <div className="card-icon">
//                       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                         <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
//                         <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
//                       </svg>
//                     </div>
//                     <h3 className="card-title">School Library</h3>
//                   </div>
//                   <p className="card-description">Support our initiative to build a new library for Lincoln Elementary School with modern resources.</p>
//                 </div>
//                 <div className="card-content">
//                   <div className="progress-wrapper">
//                     <div className="progress-info">
//                       <span className="progress-raised">$8,400 raised</span>
//                       <span className="progress-goal">$20,000 goal</span>
//                     </div>
//                     <div className="progress-bar">
//                       <div className="progress-value" style={{ width: '42%' }}></div>
//                     </div>
//                   </div>
//                   <div className="card-stats">
//                     <div className="card-stats-item">
//                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                         <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
//                         <circle cx="9" cy="7" r="4"></circle>
//                         <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
//                         <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
//                       </svg>
//                       <span>36 backers</span>
//                     </div>
//                     <div>18 days left</div>
//                   </div>
//                 </div>
//                 <div className="card-footer">
//                   <button className="btn btn-sm btn-outline">Learn More</button>
//                   <button className="btn btn-sm btn-primary">Donate</button>
//                 </div>
//               </div>

//               {/* Project Card 3 */}
//               <div className="card animate-scale-up delay-400">
//                 <div className="card-image">
//                   <img src="https://placehold.co/400x200" alt="Community Garden" />
//                   <span className="badge">FOOD SECURITY</span>
//                 </div>
//                 <div className="card-header">
//                   <div className="card-title-wrapper">
//                     <div className="card-icon">
//                       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                         <path d="M2 12a10 10 0 1 1 20 0Z"></path>
//                         <path d="M2 12a10 10 0 0 0 20 0Z"></path>
//                         <path d="M12 2v20"></path>
//                       </svg>
//                     </div>
//                     <h3 className="card-title">Community Garden</h3>
//                   </div>
//                   <p className="card-description">Join us in creating a sustainable community garden to provide fresh produce for local families.</p>
//                 </div>
//                 <div className="card-content">
//                   <div className="progress-wrapper">
//                     <div className="progress-info">
//                       <span className="progress-raised">$15,600 raised</span>
//                       <span className="progress-goal">$20,000 goal</span>
//                     </div>
//                     <div className="progress-bar">
//                       <div className="progress-value" style={{ width: '78%' }}></div>
//                     </div>
//                   </div>
//                   <div className="card-stats">
//                     <div className="card-stats-item">
//                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                         <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
//                         <circle cx="9" cy="7" r="4"></circle>
//                         <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
//                         <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
//                       </svg>
//                       <span>72 backers</span>
//                     </div>
//                     <div>5 days left</div>
//                   </div>
//                 </div>
//                 <div className="card-footer">
//                   <button className="btn btn-sm btn-outline">Learn More</button>
//                   <button className="btn btn-sm btn-primary">Donate</button>
//                 </div>
//               </div>
//             </div>

//             <div className="view-all animate-fade-in">
//               <button className="btn btn-outline">
//                 View All Projects
//                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                   <path d="m9 18 6-6-6-6"></path>
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </section>

//         {/* How It Works */}
//         <section id="how-it-works" className="how-it-works">
//           <div className="container">
//             <div className="section-header animate-fade-in">
//               <h2 className="section-title">How It Works</h2>
//               <div className="section-divider"></div>
//             </div>

//             <div className="steps-grid">
//               <div className="step animate-fade-in">
//                 <div className="step-icon">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="primary-text">
//                     <circle cx="11" cy="11" r="8"></circle>
//                     <path d="m21 21-4.3-4.3"></path>
//                   </svg>
//                 </div>
//                 <h3 className="step-title">Browse & Choose</h3>
//                 <p className="step-description">Find a cause that matters to you from our catalog of community projects.</p>
//               </div>

//               <div className="step animate-fade-in delay-200">
//                 <div className="step-icon">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="primary-text">
//                     <circle cx="12" cy="12" r="10"></circle>
//                     <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
//                     <path d="M12 18V6"></path>
//                   </svg>
//                 </div>
//                 <h3 className="step-title">Contribute Securely</h3>
//                 <p className="step-description">Make a donation via our secure payment system, anonymously or publicly.</p>
//               </div>

//               <div className="step animate-fade-in delay-400">
//                 <div className="step-icon">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="primary-text">
//                     <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"></path>
//                     <path d="M2 20h20"></path>
//                     <path d="M14 12v.01"></path>
//                     <path d="M14 16v.01"></path>
//                     <path d="M8 12v.01"></path>
//                     <path d="M8 16v.01"></path>
//                   </svg>
//                 </div>
//                 <h3 className="step-title">Track Impact</h3>
//                 <p className="step-description">See exactly where your money goes with real-time fund tracking and progress updates.</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Why Choose Us */}
//         <section className="why-choose-us">
//           <div className="container">
//             <div className="section-header animate-fade-in">
//               <h2 className="section-title">Why Choose CommunityBuild</h2>
//               <div className="section-divider"></div>
//             </div>

//             <div className="features-grid">
//               <div className="features-column">
//                 <div className="feature animate-fade-in">
//                   <div className="feature-icon">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="primary-text">
//                       <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
//                       <circle cx="12" cy="12" r="3"></circle>
//                     </svg>
//                   </div>
//                   <div className="feature-content">
//                     <h3>Real-Time Transparency</h3>
//                     <p>Track every dollar with live fund updates and allocation breakdowns.</p>
//                   </div>
//                 </div>

//                 <div className="feature animate-fade-in delay-200">
//                   <div className="feature-icon">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="primary-text">
//                       <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"></path>
//                       <path d="M2 20h20"></path>
//                       <path d="M14 12v.01"></path>
//                       <path d="M14 16v.01"></path>
//                       <path d="M8 12v.01"></path>
//                       <path d="M8 16v.01"></path>
//                     </svg>
//                   </div>
//                   <div className="feature-content">
//                     <h3>Impact Visualization</h3>
//                     <p>See your contribution's effect with progress photos and impact maps.</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="features-column">
//                 <div className="feature animate-fade-in delay-300">
//                   <div className="feature-icon">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="primary-text">
//                       <circle cx="12" cy="8" r="6"></circle>
//                       <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
//                     </svg>
//                   </div>
//                   <div className="feature-content">
//                     <h3>Community Recognition</h3>
//                     <p>Get acknowledged for your support with badges and leaderboards.</p>
//                   </div>
//                 </div>

//                 <div className="feature animate-fade-in delay-500">
//                   <div className="feature-icon">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="primary-text">
//                       <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
//                     </svg>
//                   </div>
//                   <div className="feature-content">
//                     <h3>Secure Donations</h3>
//                     <p>Contribute with confidence through our encrypted payment system.</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Success Stories */}
//         <section id="success-stories" className="success-stories">
//           <div className="container">
//             <div className="section-header animate-fade-in">
//               <h2 className="section-title">Success Stories</h2>
//               <div className="section-divider"></div>
//             </div>

//             <div className="stories-grid">
//               <div className="story-card animate-fade-in">
//                 <div className="story-header">
//                   <div className="story-badge">PROJECT CREATOR</div>
//                   <h3 className="story-title">Sarah Johnson</h3>
//                 </div>
//                 <div className="story-content">
//                   <p>"Thanks to CommunityBuild, we raised enough funds to renovate our local playground in just 3 weeks. The transparency tools helped us build trust with donors."</p>
//                 </div>
//                 <div className="story-footer">
//                   <div className="story-stats">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="primary-text">
//                       <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
//                       <circle cx="9" cy="7" r="4"></circle>
//                       <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
//                       <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
//                     </svg>
//                     <span>42 contributors</span>
//                   </div>
//                 </div>
//               </div>

//               <div className="story-card animate-fade-in delay-200">
//                 <div className="story-header">
//                   <div className="story-badge">COMPLETED PROJECT</div>
//                   <h3 className="story-title">Maple Street School</h3>
//                 </div>
//                 <div className="story-content">
//                   <p>"Our new computer lab is now helping 250+ students learn digital skills. We couldn't have done it without the community's support."</p>
//                 </div>
//                 <div className="story-footer">
//                   <div className="story-stats">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="primary-text">
//                       <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
//                       <circle cx="9" cy="7" r="4"></circle>
//                       <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
//                       <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
//                     </svg>
//                     <span>78 contributors</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Stats */}
//         <section className="stats">
//           <div className="container">
//             <div className="stats-grid">
//               <div className="stat animate-scale-up">
//                 <div className="stat-value">500+</div>
//                 <p>Projects Funded</p>
//               </div>
//               <div className="stat animate-scale-up delay-200">
//                 <div className="stat-value">$2.5M+</div>
//                 <p>Raised</p>
//               </div>
//               <div className="stat animate-scale-up delay-400">
//                 <div className="stat-value">15,000+</div>
//                 <p>Contributors</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* CTA */}
//         <section className="cta">
//           <div className="container">
//             <div className="cta-content">
//               <h2 className="cta-title animate-fade-in">Ready to Make a Difference?</h2>
//               <p className="cta-description animate-fade-in delay-100">Join the movement! Start or support a project today.</p>
//               <div className="cta-actions animate-fade-in delay-200">
//                 <button className="btn btn-lg btn-primary">Start a Project</button>
//                 <button className="btn btn-lg btn-outline">Donate Now</button>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer>
//         <div className="container">
//           <div className="footer-content">
//             <div className="footer-logo">
//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="primary-text">
//                 <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
//               </svg>
//               <span className="logo-text">CommunityBuild</span>
//             </div>
//             <div className="footer-links">
//               © 2023 CommunityBuild • 
//               <a href="#">Privacy Policy</a> • 
//               <a href="#">Terms of Service</a> • 
//               <a href="#">Contact Us</a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default LandingPage; 