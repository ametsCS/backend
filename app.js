let express = require('express');
let app = express();

app.use(express.static('public')); //middleware (zerbitzaria konfiguratzen duen kodea, elementu estatikoak kargatzeko)
app.use(express.urlencoded({ extended: false })); // formularioak tratatzeko middleware-a

// GET route
app.get("/", function(req, res) {
    res.send("Kaixo mundua!");
});

app.get('/bezeroa/:izena', function(req, res) {
     res.send("Bezeroaren izena: " + req.params.izena);
});


app.get('/bezero', function(req, res) {
     res.send(`Kaixo ${req.query.izena} ${req.query.abizena}`);
});

// bezeroa POST
app.post("/bezeroa", function(req,res) {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const c_password = req.body.c_password;
    const gender = req.body.gender;
    const dob = req.body.d_o_b;
    const address = req.body.address;
    const city = req.body.city;
    const zip_code = req.body.zip_code;
    const checkbox = req.body.checkbox;
    const radioB = req.body.radio;
    
    
    res.send(`{"name":"${name}", "email":"${email}", "password":"${password}", "confirm-password":"${c_password}", 
    "gender":"${gender}", "dob":"${dob}", "address":"${address}", "city":"${city}", "zip":"${zip_code}", 
    "agree":"${checkbox}", "newsletter":"${radioB}"}`);
});


app.listen( 3000, function() {
 console.log("Zerbitzaria 3000 portuan entzuten");
})