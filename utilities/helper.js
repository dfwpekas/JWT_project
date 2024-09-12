const bcrypt = require('bcryptjs'); 

// ** Hash Password.

exports.hashPassword = async password => {
    const salt = await bcrypt.genSalt(13);
    const hash = await bcrypt.hash(password, salt); 
    return hash;
}