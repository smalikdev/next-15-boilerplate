# Stage 1: Build the application
FROM node:18.17.1 AS build
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./

# Bust cache if dependencies change
RUN rm -rf node_modules
COPY . .

RUN cat .env

RUN npm install
# Copy the rest of the application code

# Build the application
RUN npm run build

# Stage 2: Serve the application
FROM node:18.17.1
WORKDIR /app

# Copy only the necessary files from the build stage
COPY --from=build /app ./

# Expose port 3001
EXPOSE 3001

# Start the Next.js application
CMD ["npm", "start"]
