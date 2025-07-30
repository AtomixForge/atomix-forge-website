# Atomix Forge Website

The official website for Atomix Forge - a Los Angeles-founded, globally remote software development company specializing in custom web applications.

## Features

- **Modern Tech Stack**: Built with Next.js 15, React 19, and TypeScript
- **Responsive Design**: Tailwind CSS with dark/light theme support
- **Contact Form**: Integrated email functionality with nodemailer
- **Performance Optimized**: Uses Turbopack for fast development builds
- **Type Safe**: Full TypeScript implementation with strict mode

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm
- Docker and Docker Compose

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Set up environment variables by copying `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

4. Configure your SMTP settings in `.env.local` for local development with MailDev:

```env
SMTP_HOST=localhost
SMTP_PORT=1025
SMTP_USER=
SMTP_PASSWORD=
FROM_EMAIL=noreply@atomixforge.com
TO_EMAIL=contact@atomixforge.com
```

5. Start the MailDev server using Docker Compose:

```bash
docker-compose up -d
```

MailDev will run on http://localhost:1080 to view captured emails.

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── (default)/         # Default layout group
│   │   ├── contact/       # Contact page
│   │   └── page.tsx       # Home page
│   ├── api/               # API routes
│   │   └── contact/       # Contact form handler
│   ├── css/               # Global styles
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── ui/               # UI components
│   └── ...               # Feature components
└── public/               # Static assets
```

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS 4.x
- **Theme**: next-themes for dark/light mode
- **Email**: nodemailer for contact form
- **Development**: Turbopack, ESLint, Prettier

## Deployment

The site is optimized for deployment on Vercel:

1. Connect your repository to Vercel
2. Configure environment variables in the Vercel dashboard
3. Deploy automatically on push to main branch

For other platforms, build the project:

```bash
npm run build
npm run start
```

## Contributing

1. Follow the existing code style and conventions
2. Run `npm run lint` and `npm run format` before committing
3. Ensure all TypeScript checks pass
4. Test the contact form functionality

## License

Private - Atomix Forge
