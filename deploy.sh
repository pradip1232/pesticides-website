#!/bin/bash

# Navigate to project folder
cd ~/sunfieldagro.com/react/

# Pull the latest code
git pull origin main

# Install dependencies and build the React app
npm install
npm run build

# Copy the build files to the public_html directory
cp -r build/* ../
