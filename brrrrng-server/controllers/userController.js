const { User } = require("../models/User");

const home = async (req, res) => {
    const user = await User.findOne( { name: 'aws' } )

    if(user) return res.json({ message: 'ok' } )
}

module.exports = { home };
