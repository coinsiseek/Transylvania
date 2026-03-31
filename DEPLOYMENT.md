# Deployment Guide

This guide explains how to deploy the Neo-Retro Dashboard to various hosting platforms.

## Prerequisites

Before deploying, make sure you have:

1. A production build of the application
2. Environment variables configured
3. A hosting account with one of the supported platforms

## Vercel Deployment (Recommended)

Vercel is the easiest way to deploy Next.js applications.

1. Sign up for a free account at [vercel.com](https://vercel.com)
2. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. Deploy your app:
   ```bash
   vercel
   ```
4. Follow the prompts to configure your project

Vercel will automatically detect your Next.js app and configure the deployment settings.

## Manual Build and Deploy

If you prefer to build and deploy manually:

1. Build the production version:
   ```bash
   ./build.sh
   ```
   Or run:
   ```bash
   npm run build
   ```

2. The built files will be in the `.next` directory

3. Upload the following to your server:
   - `.next` directory
   - `public` directory (if it exists)
   - `package.json`
   - `next.config.js`

4. Install production dependencies on your server:
   ```bash
   npm install --production
   ```

5. Start the production server:
   ```bash
   npm start
   ```

## Environment Variables

Make sure to set the following environment variables on your hosting platform:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Docker Deployment

To deploy using Docker:

1. Build the Docker image:
   ```bash
   docker build -t neo-retro-dashboard .
   ```

2. Run the container:
   ```bash
   docker run -p 3000:3000 neo-retro-dashboard
   ```

## Nginx Configuration

If deploying behind Nginx, use this sample configuration:

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## Troubleshooting

Common deployment issues:

1. **Environment Variables Not Set**: Make sure all required environment variables are configured on your hosting platform.

2. **Build Failures**: Check that your Node.js version meets the requirements (Node.js 18+ recommended).

3. **Runtime Errors**: Verify that all dependencies are correctly installed in your production environment.

4. **Performance Issues**: Consider enabling Next.js's automatic static optimization where possible.

## Monitoring

After deployment, consider setting up monitoring:

- Error tracking with Sentry
- Performance monitoring with tools like New Relic
- Uptime monitoring with services like UptimeRobot