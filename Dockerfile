FROM node:12.13.1
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm install @angular/cli -g
COPY . .



#RUN ls -la /home/dists
#RUN ls -la /home/dists/dist*

CMD ng build --prod --output-path "/home/dists/dist-prod" && ng build --output-path "/home/dists/dist-stage"