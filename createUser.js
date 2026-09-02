import fs from "node:fs";

export function createUser(req, res) {

    const data =
        JSON.parse(
            fs.readFileSync(
                "./users.json",
                "utf8"
            )
        );

    const user = {
        id: Date.now(),
        name: req.body.name,
        email: req.body.email
    };

    data.push(user);

    fs.writeFileSync(
        "./users.json",
        JSON.stringify(data, null, 2)
    );

    res.json(user);
}