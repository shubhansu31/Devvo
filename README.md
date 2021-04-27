# login-demo
Deploying Node js application using docker image

#Steps 
~~~
docker build -t node-login .
~~~

```docker run --name login -d -p 8080:8080 node-login

docker ps 

to check if container is running visit localhost:8080 to view your site

