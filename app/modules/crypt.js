const bcrypt = require('bcrypt');
const saltRounds = 10;

const verify = {
    verifyKey: async (key, encriptedKey) => {
        return await bcrypt.compare(key, encriptedKey);
    },
    hashKey: async (key) => {
        return await bcrypt.hash(key, saltRounds);
    },
};

module.exports = verify;
