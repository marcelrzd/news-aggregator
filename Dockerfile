# Use an official Node runtime as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json before other files
# Utilize Docker cache to save re-installing dependencies if unchanged
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the app
RUN npm run build

# Install serve globally to serve the built files
RUN npm install -g serve

# Expose port 3000
EXPOSE 3000

# Specify the command to run on container start
CMD ["serve", "-s", "build", "-l", "3000"]
