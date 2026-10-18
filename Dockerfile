# ---- build stage ----
FROM node:22.22.0-alpine AS build
WORKDIR /app

# Copiamos dependencias
COPY package*.json ./
RUN npm ci

# Copiamos el resto del proyecto
COPY . .

# Build de Astro
RUN npm run build

# ---- production stage ----
FROM nginx:alpine

# Copiamos el resultado de Astro (dist)
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
