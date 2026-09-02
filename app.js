import express from "express";

import {
    createUser
} from "./createUser.js";

import {
    readUsers
} from "./readUsers.js";

import {
    updateUser
} from "./updateUser.js";

import {
    deleteUser
} from "./deleteUser.js";

const app = express();

app.use(express.json());

// CREATE
app.post(
    "/users",
    createUser
);

// READ
app.get(
    "/users",
    readUsers
);

// UPDATE
app.put(
    "/users/:id",
    updateUser
);

// DELETE
app.delete(
    "/users/:id",
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