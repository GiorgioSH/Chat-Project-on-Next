async function findUser(username, room) {
    console.log("Error occured when fetching user2");
    try {
        const userExists = await strapi.services.userss.find({ username, room });
        return userExists;
    } catch(err) {
        console.log("error while fetching", err);
    }
}
async function createUser({ username, room, status, socketId }) {
    try {
        const user = await strapi.services.userss.create({
            username,
            room,
            status: status,
            socketId
        });
        return user;
    } catch(err) {
        console.log("User couldn't be created. Try again!")
    }
}
async function userExists(id) {
    try {
        const user = strapi.services.userss.findOne({ id: id });
        return user;
    } catch(err) {
        console.log("Error occured when fetching user", err);
    }
}

module.exports = {
    findUser,
    createUser,
    userExists,
}