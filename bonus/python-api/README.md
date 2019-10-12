# Python Flask application
Flask server to serve json

## Getting started
```bash
# Setting up virtual env in python 3
python3 -m venv venv
# Activating virutal env
. venv/bin/activate
# Install dependencies
pip install -r requirements.txt
# Start application on 5000
python App.py
```

## Docker
```bash
# Build
docker build -t python-api .
# Run for local machine
docker run -it --rm --name python-api --network="host" python-api
```
