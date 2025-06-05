# Use official Node image
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy dependency files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app code
COPY . .

# Expose port 80 instead of 3000
EXPOSE 80

# Run your server
CMD ["npm", "start"]
