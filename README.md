# Elevate-AI

Elevate-AI is an AI-powered career growth platform that provides industry insights, resume building, and professional development tools. It is built using **React (Frontend)**, **Next.js (Backend)**, and integrates **Gemini API** for AI insights and resume generation. Additionally, it leverages **Inngest API** for weekly updates and **Clerk** for authentication.

## 🚀 Features

### 📊 Industry Insights & Dashboard

- Get real-time industry trends, market outlook, and key insights.
- AI-powered analysis of industry growth, demand levels, and top skills.
- Salary ranges and job opportunities.

### 📝 Resume Builder

- AI-generated professional summaries using **Gemini API**.
- Customize and export resumes in multiple formats.
- Add skills, experience, education, and projects.

### 🔥 Growth Tools

- Resume and cover letter builder.
- AI-driven interview preparation.
- Weekly updates on industry trends via **Inngest API**.

### 🔐 Authentication

- Secure sign-up and login using **Clerk**.
- User dashboard with personalized insights.

## 📂 Project Structure

```
ElevateAI/
├── app/
│   ├── (main)/
│   │   ├── dashboard/
│   │   │   ├── _components/
│   │   │   │   └── dashboard-view.jsx
│   │   ├── resume/
│   │   │   ├── _components/
│   │   │   │   └── resume-builder.jsx
│   ├── lib/
│   │   ├── schema.js
│   ├── page.js
├── components/
│   ├── header.jsx
│   ├── ui/
│   │   ├── button.jsx
│   │   ├── dropdown-menu.jsx
│   │   ├── card.jsx
│   │   ├── badge.jsx
│   │   ├── progress.jsx
├── public/
│   ├── favicon.ico
│   ├── cc.png
├── README.md
├── package.json
├── next.config.js
├── .env.local
```

## 🛠️ Tech Stack

- **Frontend**: React, Tailwind CSS

- **Backend**: Next.js (App Router)

- **AI & Insights**: Gemini API (Google AI)

- **Authentication**: Clerk

- **Automation & Updates**: Inngest API

-

  ### 🗄️ Database

- **Primary Database**: Neon DB (PostgreSQL)

## ⚙️ Setup & Installation

### 1️⃣ Clone the Repository

```bash
https://github.com/ashutoshg-2005/ElevateAI.git
cd ElevateAI
```

### 2️⃣ Install Dependencies

```bash
npm install  # or yarn install
```

### 3️⃣ Set Up Environment Variables

Create a `.env.local` file and add the required API keys:

```ini
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_key
NEXT_PUBLIC_INNGEST_API_KEY=your_inngest_key
DATABSE_URL=your_neondb_key
```

### 4️⃣ Run the Development Server

```bash
npm run dev  # or yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

Below is the deplyed website 

[Elevate AI Beta](https://elevate-ai-beta.vercel.app/)



## 📖 Learn More

- [Next.js Docs](https://nextjs.org/docs)
- [Clerk Docs](https://clerk.com/docs)
- [Gemini API Docs](https://ai.google.dev/)
- [Inngest Docs](https://inngest.com/docs)

## 🤝 Contributing

Contributions are welcome! Feel free to open issues and pull requests.

## 📜 License

This project is licensed under the [MIT License](LICENSE).


