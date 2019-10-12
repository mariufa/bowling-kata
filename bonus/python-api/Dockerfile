FROM python:3.6.8-slim

WORKDIR /opt/app

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY . .

RUN pip install gunicorn
ENV PORT 5000

# Need curl for healthcheck. Not best practice, but better than nothing
RUN apt update && apt install -y curl \
    && rm -rf /var/lib/apt/lists/*

HEALTHCHECK --interval=10s CMD curl --fail http://localhost:5000/healthy || exit 1 

CMD ["sh", "-c", "gunicorn --bind 0.0.0.0:$PORT App:app"]
