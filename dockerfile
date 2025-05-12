# Use official Node image
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy app files
COPY . .

# Install dependencies
RUN npm install express

# Expose the port
EXPOSE 3000

# Run the app
CMD ["node", "server.js"]
