Testing backend app for deployment in ECS

# membrane-backend

> A simple express server dockerized

## Steps to run

Run the dockerized app
```sh
docker build . -t jkauze/membrane-backend

# run in background
docker run -p 80:8080 -d jkauze/membrane-backend:latest

# run in foreground
docker run -p 80:8080  jkauze/membrane-backend:latest
```
## Valid server endpoint

 - http://localshot/health 
 - http://localhost/
