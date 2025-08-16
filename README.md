🌲 Wild Oasis – Visitor App

A Next.js web application for booking cozy hotel cabins in the woods. This app
allows visitors to browse available cabins, make reservations, and manage their
bookings – all without a payment system.

It is connected to a separate CMS app for hotel staff, where cabins can be
created and edited: 👉 Wild Oasis CMS (Admin App)

✨ Features

🔑 Authentication with NextAuth – visitors can sign up / log in securely

🏕 Browse cabins – view details and availability

📅 Make reservations – book your preferred cabin

🗂 Manage reservations – update or cancel your bookings

🔗 Connected to CMS – content is managed via the staff-facing Wild Oasis app

🛠️ Tech Stack

Next.js – React framework

NextAuth.js – authentication

[React Query / SWR] (if used) – data fetching and caching

Tailwind CSS – styling

[PostgreSQL / Prisma / Supabase] (depending on your setup) – database & ORM

🚀 Getting Started

1. Clone the repo git clone
   https://github.com/your-username/wild-oasis-visitor.git cd wild-oasis-visitor

2. Install dependencies npm install

# or

yarn install

3. Configure environment variables

Create a .env.local file and add the required variables:

# NextAuth

NEXTAUTH_URL=http://localhost:3000 NEXTAUTH_SECRET=your-secret-key

# Database connection

DATABASE_URL=your-database-url

(Adjust based on your actual setup, e.g., Supabase/Prisma/PlanetScale/etc.)

4. Run the development server npm run dev

# or

yarn dev

Visit http://localhost:3000 🎉

📦 Deployment

You can deploy this app easily on Vercel (recommended for Next.js).

Push your code to GitHub

Import your repo in Vercel

Add environment variables in Vercel Dashboard

Deploy 🚀

🔗 Related Projects

Wild Oasis CMS (Admin App) – for hotel staff to manage cabins

📜 License

MIT License – feel free to use and modify.
