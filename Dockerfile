# 🌟 STAGE 1: Build Next.js
FROM node:18-alpine AS builder
WORKDIR /app

# Set environment untuk production
ENV NODE_ENV=production

# Salin file dependency terlebih dahulu agar layer cache lebih efektif
COPY package.json package-lock.json ./ 

# Install dependencies termasuk Tailwind CSS
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

# Hanya salin yang dibutuhkan untuk runtime
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

# Expose port Next.js
EXPOSE 3000

# Jalankan aplikasi
ENTRYPOINT ["npm", "run", "start"]
