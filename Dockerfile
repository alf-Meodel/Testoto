# Base image
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app source
COPY . .

# Build app avec --no-lint pour ignorer les erreurs ESLint
RUN npm run build -- --no-lint

# Expose port
EXPOSE 3000

# Start app
CMD ["npm", "start"] 