const express = require("express");
const app = express();

// Profile Routes

// app.get("/profile", (req, res) => {
//     const { username } = req.query;
//     console.log(username);
//     // Search username in database
//     res.send("Profile page of " + username);
// });

// app.get("/profile", (req, res) => {



//     const { username, clas, group } = req.query;
//     console.log(username);
//     // Search username in database
//     res.send("Profile page of " + username + clas + group);
// });

app.get("/profile/:id/:username", (req, res) => {
    const { id, username } = req.params;
    console.log(id);
    res.send("Profile page of user " + id + " " + username);
});

app.get("/profile/:id", (req, res) => {
    const { id } = req.params;
    console.log(id);
    res.send("Profile page of user " + id);
});

// User Data
let userData = [
    { id: 1, name: "Raghav", adress: "Delhi" },
    { id: 2, name: "Ram", adress: "Faridabad" },
    { id: 3, name: "Sita", adress: "Hisar" }
];

app.get("/allUsers", (req, res) => {
    res.send(userData);
});

app.get("/oneid_only", (req, res) => {
    let { id } = req.query;
    console.log(id);
    
    let user = userData.find((u) => u.id === parseInt(id)); // Corrected data search

    if (user) {
        return res.send(user);
    } else {
        return res.send("NO user found");
    }
});

// Blog Data
let BlogData = [
    { id: 1, name: "Raghav", adress: "Delhi", message: "be powerful" },
    { id: 2, name: "Ram", adress: "Faridabad", message: "Live alone" },
    { id: 3, name: "Sita", adress: "Hisar", message: "Love everyone" },
    { id: 4, name: "Param", adress: "Canada", message: "Be pardesi" }
];

app.get("/Every_Blog_Data", (req, res) => {
    res.send(BlogData);
});

app.get("/one_Blogger_Data", (req, res) => {
    let { id } = req.query; 
    console.log(id);
    
    let blogger = BlogData.find((blog) => blog.id === parseInt(id)); // Corrected data search

    if (blogger) {
        return res.send(blogger);
    } else {
        return res.send("NO user found");
    }
});

// Start Server (Using a Single Port)
app.listen(5678, () => {
    console.log("Server started on port 5678");
});
