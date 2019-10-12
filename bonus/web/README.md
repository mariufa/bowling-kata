# Web application
This is a web application based on ReactJS(create-react-app) and Less

## Getting started
```bash
# Install dependencies
npm install
# Start application on 3000
npm start
```

## Docker
```bash
# Build
docker build -t web .
# Run for local machine
docker run -it --rm --name web --network="host" web
```