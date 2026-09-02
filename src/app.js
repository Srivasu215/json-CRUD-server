import express from "express";

import {
    createUser
} from "./api/create/createUser.js";

import {
    readUsers
} from "./api/read/readUsers.js";

import {
    updateUser
} from "./api/update/updateUser.js";

import {
    deleteUser
} from "./api/delete/deleteUser.js";

const app = express();

app.use(express.json());

// CREATE
app.post(
    "/api/users",
    createUser
);

// READ
app.get(
    "/api/users",
    readUsers
);

// UPDATE
app.put(
    "/api/users/:id",
    updateUser
);

// DELETE
app.delete(
    "/api/users/:id",
    deleteUser
);

app.listen(
    3000,
    () => {
        console.log(
            "JSON CRUD Server running on port 3000"
        );
    }
);