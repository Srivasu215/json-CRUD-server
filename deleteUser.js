import fs from "node:fs";

export function deleteUser(req, res) {

    const data =
        JSON.parse(
            fs.readFileSync(
                "./users.json",
                "utf8"
            )
        );

    const id =
        Number(req.params.id);

    const index =
        data.findIndex(
            user => user.id == id
        );

    if (index === -1) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    const deletedUser =
        data.splice(index, 1);

    fs.writeFileSync(
        "./users.json",
        JSON.stringify(data, null, 2)
    );

    res.json({
        message: "User deleted",
        user: deletedUser[0]
    });
}