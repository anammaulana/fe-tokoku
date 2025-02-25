# 🌟 STAGE 1: Build Next.js
FROM node:18-alpine AS builder
WORKDIR /app

# Set environment untuk production
ENV NODE_ENV=production

# Salin file dependency terlebih dahulu agar layer cache lebih efektif
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --frozen-lockfile

# Salin semua kode proyek
COPY . .

# Build aplikasi Next.js
RUN npm run build

# 🌟 STAGE 2: Run Next.js
FROM node:18-alpine
WORKDIR /app

# Set environment untuk production
ENV NODE_ENV=production

# Install only production dependencies
COPY package.json package-lock.json ./
RUN npm install --production --frozen-lockfile

# Salin hasil build dari builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/tailwind.config.js ./tailwind.config.js
COPY --from=builder /app/postcss.config.js ./postcss.config.js

# Expose port Next.js
EXPOSE 3000

# Jalankan aplikasi
CMD ["npm", "run", "start"]
