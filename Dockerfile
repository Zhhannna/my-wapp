<<<<<<< HEAD
# --- Stage 1: Build the React app ---
FROM node:18 AS build
=======
# 1. Use official Node image to build the app
FROM node:18-alpine AS build
>>>>>>> 2b66b84470356299839a21592643cd90d4dfe6a1

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

<<<<<<< HEAD
# --- Stage 2: Serve with Nginx ---
=======
# 2. Use a lightweight web server to serve the build
>>>>>>> 2b66b84470356299839a21592643cd90d4dfe6a1
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
