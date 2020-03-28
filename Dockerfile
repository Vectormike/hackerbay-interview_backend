FROM node:10

RUN mkdir -p /usr/src/app

RUN npm install babel-cli -g

# Change directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Install dependencies
RUN npm install

# Bundle app source
COPY . .

# Expose the port the app runs in
EXPOSE 3000


# Serve the app
CMD ["npm", "start"]
