const bcrypt = require('bcrypt');

const generatePass = (unhash_pass)=>{
    const salt = bcrypt.genSaltSync();
    const securePass = bcrypt.hashSync(unhash_pass, salt);

    return securePass;
} ;

console.log(generatePass('password'));

module.exports = {generatePass};

