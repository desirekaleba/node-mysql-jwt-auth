const bcrypt = require('bcryptjs');

const hash = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(10));

const compare = (password, hashedPassword) => bcrypt.compareSync(password, hashedPassword);

module.exports = {
    hash,
    compare
}