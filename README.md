# Rent A Car Project
Web application, allowing users to browse through a collection of available cars and rent them.

## Application details
- Frontend: ReactJS
- Backend: ASP.NET Core Web API with .NET 6
- Documentation of the available API endpoints: [Swagger UI](https://rent-a-car-backend-server.herokuapp.com/index.html)
- Database: PostgreSQL used for the deployed version, MS SQL Server is used when running the application locally
- ORM: Entity Framework Core

## Specifics
- Every user can rent as many cars as they want.
- Regular users are not allowed to change any information available in the app.
- Users with the role of admin can update and delete each car and user.
- Only registered users can access the application.

## Ways to run/check out the application:
Login credentials: ***email: test@user.com & password: test***
### 1. Access the app directly [Rent A Car UI](https://fancy-crisp-a8fa97.netlify.app/) (Rental confirmation is temporarily unavailable)
### 2. Download the source code as a zip or clone it:  
- Run `npm install` while in the __rent-a-car-client/__ folder to get all of the needed node modules
- Then run `npm start` to start the application
  - When the login screen loads, you can either:
    - Login with the given credentials or
    - Create your own user via the Sign Up button
### 3. Rent A Car Guide:

- Login page  
If you haven't logged in, this is the page you'll see. Here, you can either use an existing user, or choose to Sign Up.

![image](https://user-images.githubusercontent.com/43497483/189588760-601bbd24-89f8-4840-828c-3e47088fd23f.png)

- Register page  
By filling up the info, you'll be creating a new user with the help of which you can login when you're rdirected.

![image](https://user-images.githubusercontent.com/43497483/189588817-41a798c5-694b-403a-99e5-79f14fdf1c91.png)

- Home page  
All of the available for rent cars are present here. You can see all of their information and choose to rent one of them.

![image](https://user-images.githubusercontent.com/43497483/189588920-36c4d5ac-b1e7-4de6-adc8-fafebdf84e4c.png)

- Choose dates  
This is the page you'll be redirected to when you choose a car to rent. Here you can specify the rental dates.

![image](https://user-images.githubusercontent.com/43497483/189589118-43033119-9e9d-4a1b-970f-e24eb48fd8e6.png)

- Rental confirmation  

![image](https://user-images.githubusercontent.com/43497483/189590138-98188147-90b3-40ca-baf5-98bf81e9c010.png)

- All rented cars  
Information about all rented cars by a user can be seen in the "My rentals" tab

![image](https://user-images.githubusercontent.com/43497483/189590278-08635aad-9e54-4101-988b-a6f661f2aac5.png)

- Users page  
Regular users can see all other users in the application, but are not allowed to change anything.

![image](https://user-images.githubusercontent.com/43497483/189589716-e8c230e3-05ba-48b0-97ba-47221d77bec8.png)

- Admin role  
Users with the role of admin are able to edit every car's info as well as every user's info and add new cars to the application.

![image](https://user-images.githubusercontent.com/43497483/189590698-3600d12e-e57a-4b24-9262-7a698f44b4d0.png)

![image](https://user-images.githubusercontent.com/43497483/189590848-ca79af44-a17c-427a-8c85-e0a2e5746128.png)

![image](https://user-images.githubusercontent.com/43497483/189590899-9b9df270-7d53-42d2-9467-b3d845e5e831.png)
