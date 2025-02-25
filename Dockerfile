# 🌟 STAGE 1: Build Next.js
# FROM node:18 AS builder
FROM node:18 
WORKDIR /app

# Salin package.json dan package-lock.json (atau yarn.lock jika menggunakan Yarn)
COPY package*.json ./

# Install dependencies
RUN npm install

# Salin semua kode sumber proyek
COPY . .

# Build aplikasi Next.js
# RUN npm run build

# 🌟 STAGE 2: Menjalankan Next.js
FROM node:18-alpine
WORKDIR /app

# Salin hasil build dari tahap sebelumnya
# COPY --from=builder /app ./

# Expose port 3000 (port default Next.js)
EXPOSE 3001

# Jalankan aplikasi Next.js
CMD ["npm", "run", "start"]
