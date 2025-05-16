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

# Expose the port your app listens on
EXPOSE 3000

# Run your server
CMD ["npm", "start"]
