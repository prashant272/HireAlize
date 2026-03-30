# Use official Node.js alpine image for a small footprint
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package files first to leverage Docker layer caching
COPY package*.json ./

# Install only production dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on (PORT=5000 in .env)
EXPOSE 5000

# Command to start the application
CMD ["npm", "start"]
