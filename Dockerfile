FROM nginx:latest

RUN apt-get update && apt-get install -y curl
RUN apt install -y curl software-properties-common gnupg
RUN apt-get install -y apt-utils
RUN curl -fsSL https://deb.nodesource.com/setup_10.x | bash -; apt-get install -y nodejs
RUN apt install -y build-essential libssl-dev

RUN node -v
RUN npm -v
RUN mkdir /usr/share/nginx/temp
COPY . /usr/share/nginx/temp/
WORKDIR /usr/share/nginx/temp/
RUN npm install
RUN npm run build

WORKDIR /usr/share/nginx/html/
RUN cp -r /usr/share/nginx/temp/dist/* /usr/share/nginx/html/

EXPOSE 80
