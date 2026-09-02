import fs from "node:fs";

export function readUsers(req, res) {

    const data =
        JSON.parse(
            fs.readFileSync(
                "./db/users.json",
                "utf8"
            )
        );

    res.json(data.users);
}