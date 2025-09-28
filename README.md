# Snap-form

Snap-form is a modern, AI-assisted form builder that enables users to create, edit, and analyze forms with a minimal and intuitive interface.  
It combines a clean, monochrome design with drag-and-drop features, Google OAuth authentication, and real-time analytics integration.

---

## Index

1. [About the Project](#about-the-project)  
2. [Tech Stack](#tech-stack)  
3. [Features](#features)  
4. [Getting Started](#getting-started)  
5. [Project Structure](#project-structure)  
6. [Contribution Guidelines](#contribution-guidelines)  
7. [License](#license)

---

## About the Project

Snap-form is built to simplify form creation and analysis, offering a smooth, modern user experience inspired by Google Forms but extended with AI assistance.  
Users can create forms, edit existing ones, collect responses, and visualize analytics in real-time.

---

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (Frontend + Backend)  
- **UI:** [shadcn/ui](https://ui.shadcn.com/) with Tailwind CSS (Neutral preset)  
- **Auth:** [BetterAuth](https://better-auth.com/) (OAuth-only, Google)  
- **Database:** PostgreSQL with [Prisma ORM](https://www.prisma.io/)  
- **Storage:** Vercel Object Storage for file uploads  
- **Hosting:** [Vercel](https://vercel.com/)  

---

## Features

- Minimal, modern, and responsive UI  
- Google-only authentication with BetterAuth  
- Drag-and-drop form builder (snippets, sorting, and preview)  
- AI-assisted form creation (planned)  
- Editable forms with prefilled values  
- Analytics dashboard with charts and tables  
- File uploads stored in Vercel Object Storage  

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)  
- PostgreSQL database instance  
- Vercel account (for hosting and object storage)  
- Google OAuth credentials  

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/openlabsdevs/snap-form.git
   cd snap-form
    ````
2. Install dependencies:

   ```bash
   bun install
   ```

3. Configure environment variables:

   * Database URL for PostgreSQL
   * Google OAuth client ID and secret
   * Vercel object storage configuration

4. Run the development server:

   ```bash
   bun dev
   ```

---

## Project Structure

```
/app
  / (landing page)
  /auth
  /dashboard
  /create
  /edit/[id]
  /form/[id]
  /form/[id]/analytics
  /profile
/components
  /ui
  /builder
  /charts
  /auth
/lib
  prisma.ts
  auth.ts
  storage.ts
```

---

## Contribution Guidelines

1. **Fork** the project repository.
2. Do **not** push directly to `main` or `dev` branches.
3. Create a new branch using the format:

   ```
   feature/<username>-<feature>
   ```

   Example: `feature/jane-drag-drop`
4. Commit changes to your branch and push to your fork.
5. Submit a Pull Request for review.

---

## License

All rights reserved © [github.com/openlabsdevs](https://github.com/openlabsdevs)
