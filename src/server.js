const express = require('express')
const app = express();
const mysql= require('mysql')

//Remove these secure values before committing code else move it to secure vault
const db = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD, 
    database: process.env.MYSQL_DB,
    port: 3306
});

//Get all the email booked by or booked for given email
app.get("/api/get-bookings-by-employee",(req,res) => {
    const email = req.query.email; 
    
    const sqlGetBookingsByEmail = "SELECT * from bookings where bookedBy = ? or bookedFor = ? order by date";
    console.log(email);
    db.query(sqlGetBookingsByEmail,[email,email], (err,result) => {
        if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
    });
});

// get all the bookings 
app.get("/api/get-bookings",(req,res) => {
    const sqlGetBookings = "SELECT * from bookings order by date";
    db.query(sqlGetBookings, (err,result) => {
        if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
    });
});

//get all the bookable assets
app.get("/api/get-assets",(req,res) => {
    const sqlGetResources = "SELECT * from assets where isbookable = 1";
    db.query(sqlGetResources, (err,result) => {
        if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
    });
});

//get list of employees
app.get("/api/get-employees",(req,res) => {
    const sqlGetEmployees = "SELECT * from employees";
    db.query(sqlGetEmployees, (err,result) => {
        if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
    });
});

app.post("/api/add-booking",(req,res) => {
    const sqlCreateBooking = "Insert into bookings(resId,date,bookedBy,bookedFor) Values (?,?,?,?)";
    db.query(sqlCreateBooking, [resId,date,bookedBy,bookedFor]  ,  
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Booking Made");
            }
        }
    );
});



app.listen(3001,() =>{
    console.log("--Workplace API Server--")
    console.log("Running on port 3001")
});