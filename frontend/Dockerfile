FROM node:20.5.0 AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.18.0

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

ENV REACT_APP_VariableName=http://ec2-18-212-200-152.compute-1.amazonaws.com:8080

CMD ["nginx", "-g", "daemon off;"]