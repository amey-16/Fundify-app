# 🌍 Fundify – Community Crowdfunding Platform

**Fundify** is a transparent and impactful web platform built to empower individuals to create, support, and track small community-driven projects. From school renovations to neighborhood cleanups, Fundify ensures donations are secure, traceable, and result in real change.

---

## 🚀 Features

### ✅ Project Creation
- Launch community projects with descriptions, goals, deadlines, and images
- Clearly communicate the project vision and expected impact

### 💰 Contribute to Projects
- Browse projects by category, location, or urgency
- Donate securely through **Stripe**
- Option to contribute anonymously or publicly

### 📊 Real-Time Fund Tracking
- Live progress of funds raised vs. goal
- Visual graphs showing funding trends and contributor count
- Milestone alerts (e.g., 50%, 100% funded)

### 💬 Community Engagement
- Contributors can post **comments** on projects
- **FAQs** section for each project to improve clarity and trust
- **Top contributors** are recognized via badges or leaderboards
- **Project updates** help backers stay informed about progress

---

## 🛠️ Tech Stack

| Frameworks       | Backend & APIs        | Database | Auth            | Payments     | Styling         |
|------------------|------------------------|----------|------------------|---------------|------------------|
| Next.js, React.js | API Routes (Next.js)   | MongoDB  | NextAuth.js      | Stripe API    | Tailwind CSS     |

---

## 📌 Key Highlights

- Full-stack project using **Next.js** for both frontend and backend
- Secure payment integration with **Stripe**
- Authenticated user flows via **NextAuth.js**
- Real-time tracking and visual feedback for community projects
- Designed to **promote transparency** and **community trust**

---

## 📸 Screenshots


---

## 🧠 What I Learned

- Implementing secure payment systems using Stripe and handling real-time updates
- Managing authentication and session handling using NextAuth.js
- Structuring a scalable and maintainable full-stack app with Next.js
- Designing intuitive and responsive UIs with Tailwind CSS
- Building community-first features like FAQs, updates, and top contributor highlights

---



---

## 📁 Run Locally

```bash
# Clone the repository
git clone https://github.com/yourusername/fundify.git

# Navigate into the project
cd fundify

# Install dependencies
npm install

# Create a .env.local file and add your environment variables:
# Example:
MONGODB_URI=your_mongo_connection_string
NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=http://localhost:3000
STRIPE_SECRET_KEY=your_stripe_key
STRIPE_PUBLIC_KEY=your_stripe_publishable_key

# Run the development server
npm run dev
