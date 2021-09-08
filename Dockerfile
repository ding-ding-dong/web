# Build the site before docker build: PUBLIC_URL=https://mystist.com yarn build

FROM nginx

COPY nginx.conf /etc/nginx/nginx.conf
COPY mystist.com.pem /etc/nginx/mystist.com.pem
COPY mystist.com.key /etc/nginx/mystist.com.key

WORKDIR /app

COPY build .
