# SvelteKit + Supabase App

A modern web application built with SvelteKit, Supabase authentication, and Shadcn UI components.

## Features

- 🏠 **Landing Page** - Beautiful homepage with hero section and features
- 🔐 **Authentication** - Sign in/Sign up with Supabase
- 📊 **Protected Dashboard** - SSR-protected dashboard with sidebar navigation
- 👤 **User Profile** - Profile management page
- ⚙️ **Settings** - Application settings and preferences
- 🎨 **Modern UI** - Built with Tailwind CSS and Shadcn components

## Tech Stack

- **Framework**: SvelteKit
- **Authentication**: Supabase Auth
- **Database**: Supabase (PostgreSQL)
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn-svelte
- **Deployment**: Vercel

## Setup Instructions

### 1. Install Dependencies

First, install the required dependencies:

```bash
npm install @supabase/supabase-js @supabase/auth-helpers-sveltekit
```

### 2. Supabase Configuration

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Go to Settings > API in your Supabase dashboard
3. Copy your project URL and anon key
4. Update the `.env` file:

```env
PUBLIC_SUPABASE_URL=your-project-url-here
PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

### 3. Database Setup

In your Supabase SQL editor, you can run any additional setup queries if needed. The basic auth tables are created automatically.

### 4. Development

Start the development server:

```bash
npm run dev
```

## Project Structure

```
src/
├── lib/
│   ├── components/ui/          # Shadcn UI components
│   ├── stores/                 # Svelte stores
│   ├── auth.ts                 # Authentication utilities
│   ├── supabase.ts             # Supabase client
│   └── utils.ts                # Utility functions
├── routes/
│   ├── +layout.svelte          # Root layout
│   ├── +page.svelte            # Landing page
│   ├── signin/
│   │   └── +page.svelte        # Sign in page
│   ├── signup/
│   │   └── +page.svelte        # Sign up page
│   └── dashboard/
│       ├── +layout.svelte      # Dashboard layout with sidebar
│       ├── +layout.server.ts   # SSR auth protection
│       ├── +page.svelte        # Dashboard home
│       ├── profile/
│       │   └── +page.svelte    # Profile page
│       └── settings/
│           └── +page.svelte    # Settings page
├── app.css                     # Global styles
├── app.d.ts                    # TypeScript declarations
└── hooks.server.ts             # Server-side hooks
```

## Routes

- `/` - Landing page
- `/signin` - Sign in page
- `/signup` - Sign up page
- `/dashboard` - Protected dashboard (requires authentication)
- `/dashboard/profile` - User profile management
- `/dashboard/settings` - Application settings

## Authentication Flow

1. Users can sign up/sign in via email and password
2. Supabase handles authentication and sessions
3. Protected routes check for valid sessions using SSR
4. Unauthenticated users are redirected to `/signin`

## UI Components

The app uses Shadcn-svelte components for a consistent, modern design:

- `Button` - Various button variants
- `Card` - Content containers
- `Input` - Form inputs
- `Label` - Form labels

## Deployment

This app is configured for Vercel deployment with `@sveltejs/adapter-vercel`.

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your environment variables in Vercel dashboard
4. Deploy!

## Environment Variables

```env
PUBLIC_SUPABASE_URL=your-supabase-project-url
PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

## Development Notes

- The app uses Svelte 5 with runes (`$state`, `$props`, etc.)
- Server-side rendering (SSR) is used for authentication protection
- Tailwind CSS is configured with the latest version (4.x)
- TypeScript is enabled throughout the project

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details.
