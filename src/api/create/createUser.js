import fs from "node:fs";

export function createUser(req, res) {

    const data =
        JSON.parse(
            fs.readFileSync(
                "./db/users.json",
                "utf8"
            )
        );

    const user = {
        id: Date.now(),
        name: req.body.name,
        email: req.body.email
    };

    data.users.push(user);

    fs.writeFileSync(
        "./db/users.json",
        JSON.stringify(data, null, 2)
    );

    res.json(user);
}