# Stage 1: Install dependencies
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci --legacy-peer-deps

# Stage 2: Build the project
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# ARGs allow Railway to pass variables into the BUILD process
ARG NEXT_PUBLIC_SUPABASE_URL
ARG NEXT_PUBLIC_SUPABASE_ANON_KEY
ARG NEXT_PUBLIC_APP_NAME

# Set ENVs for the build command (Next.js needs these to bake into static pages)
ENV NEXT_PUBLIC_SUPABASE_URL=$NEXT_PUBLIC_SUPABASE_URL
ENV NEXT_PUBLIC_SUPABASE_ANON_KEY=$NEXT_PUBLIC_SUPABASE_ANON_KEY
ENV NEXT_PUBLIC_APP_NAME=$NEXT_PUBLIC_APP_NAME

RUN npm run build

# Stage 3: Production runner
FROM node:20-alpine AS runner
WORKDIR /app

# Set ENVs for the RUNTIME (needed for dynamic routes/SSR)
ENV NODE_ENV=production
ENV PORT 3000

# Re-declare ARGs/ENVs in the final stage to ensure they are available at runtime
ARG NEXT_PUBLIC_SUPABASE_URL
ARG NEXT_PUBLIC_SUPABASE_ANON_KEY
ARG NEXT_PUBLIC_APP_NAME

ENV NEXT_PUBLIC_SUPABASE_URL=$NEXT_PUBLIC_SUPABASE_URL
ENV NEXT_PUBLIC_SUPABASE_ANON_KEY=$NEXT_PUBLIC_SUPABASE_ANON_KEY
ENV NEXT_PUBLIC_APP_NAME=$NEXT_PUBLIC_APP_NAME

# Fix the path so the 'next' executable is found automatically
ENV PATH /app/node_modules/.bin:$PATH

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy artifacts from builder
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

# Only copy public if it exists to avoid build failure
RUN if [ -d /app/public ]; then cp -r /app/public ./public; fi

USER nextjs

EXPOSE 3000

# Now 'npm start' works because .bin is in the PATH and ENVs are present
CMD ["npm", "start"]