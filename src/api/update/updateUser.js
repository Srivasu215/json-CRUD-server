import fs from "node:fs";

export function updateUser(req, res) {

    const data =
        JSON.parse(
            fs.readFileSync(
                "./db/users.json",
                "utf8"
            )
        );

    const id =
        Number(req.params.id);

    const user =
        data.users.find(
            user => user.id === id
        );

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    user.name =
        req.body.name ?? user.name;

    user.email =
        req.body.email ?? user.email;

    fs.writeFileSync(
        "./db/users.json",
        JSON.stringify(data, null, 2)
    );

    res.json(user);
}