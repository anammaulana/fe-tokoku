# 🌟 STAGE 1: Build Next.js
FROM node:18-alpine AS builder
WORKDIR /app

# Set environment variable for production
ENV NODE_ENV=production

# Salin file dependency terlebih dahulu agar caching lebih efektif
COPY package.json package-lock.json ./ 

# Install dependencies
RUN npm install --only=production

# Salin semua kode sumber proyek
COPY . . 

# Build aplikasi Next.js
RUN npm run build

# 🌟 STAGE 2: Run Next.js Application
FROM node:18-alpine
WORKDIR /app

# Set environment variable for production
ENV NODE_ENV=production

# Hanya salin folder yang diperlukan untuk runtime
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

# Expose port 3000 (default Next.js)
EXPOSE 3000

# Gunakan entrypoint agar bisa override perintah jika perlu
ENTRYPOINT ["npm", "run", "start"]
