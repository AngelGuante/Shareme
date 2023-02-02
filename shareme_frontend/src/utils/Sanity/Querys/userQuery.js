export const userQuery = Id =>
    `*[_type == "user" && _id == '${Id}']`