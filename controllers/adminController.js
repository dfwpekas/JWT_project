const AsyncHandler = require("express-async-handler");

const Admin = require("../model/admin");

const { hashPassword } = require("../utilities/helper");

exports.registerAdminController = AsyncHandler(async (req, res) => {
    const { username, email, password} = req.body;

    const adminFound = await Admin.findOne({email});

    if(adminFound){
        throw new Error('Admin exists...')
    }

    // Creating User Object
    const user = new Admin({
        username,
        email,
        password: await hashPassword(password)
    });

    // saving the new user obje
    await user.save();

        res.status(201).json({
            status: 'success ✔',
            data: user,
            message: "Admin registered successfully"
        })

})