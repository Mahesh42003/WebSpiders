# INSTALLATION COMMANDS:
npm init -y npm install express npm install nodemon npm install mongoose npm install dotenv npm install joi

# TASK MANAGEMENT API:

Create a RESTful API for a Task Management Application using Node.js, Express, and MongoDB. The application should demonstrate understanding of backend development, database interactions, and API design. 

# FEATURES:
  1.It is used to add tasks to the database
  2.Used to retrive the tasks from the database 
  3.Used to update a particular id from the database
  4.Used to delete a particular id from the database 
  5.Used to retrive a particular id from the database 

# Technologies:
  1.Node Js
  2.Express Js
  3.Mongodb 
  4.Joi
  5.dotenv

# API END POINTS 
For Uploading Tasks using POST Request 
POST http://localhost:3005/tasks 
! [POST IMAGE] https://i.im.ge/2024/12/08/z5w5jf.Screenshot-302.png

GET http://localhost:3005/tasks 
! [GET IMAGE] https://i.im.ge/2024/12/08/z5w9Wm.Screenshot-303.png
status is Todo https://i.im.ge/2024/12/08/z5wmor.Screenshot-304.png 
status is Todo and priority is LOW https://i.im.ge/2024/12/08/z5wNBT.Screenshot-305.png
Using skip and limit https://i.im.ge/2024/12/08/z5wtsc.Screenshot-306.png 

GET http://localhost:3005/tasks/:id 
![GET IMAGE 1] https://i.im.ge/2024/12/08/z5wyyL.Screenshot-307.png 

PUT http://localhost:3005/tasks/:id 
![PUT IMAGE] https://i.im.ge/2024/12/08/z5wvhY.Screenshot-309.png

DELETE http://localhost:3005/tasks/:id 
![DELETE IMAGE] https://i.im.ge/2024/12/08/z5wBaC.Screenshot-310.png