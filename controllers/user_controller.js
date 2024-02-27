//--------- Importing user model ----------//
const User = require('../models/user_model');

//---------controller for Fetching All User Handle----------//
module.exports.getUsers = async (req, res) =>{
    try{
        const loggedInUserId = req.user._id;

        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

        res.status(200).json(filteredUsers);

    } catch(error){
        console.log("Error in getUsers Controller: ", error.message);
        res.status(500).json({ error: "Internal server error"})
    }
}

//---------controller for Fetching User By Id Handle----------//
module.exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.log("Error in getUserById Controller: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};
  
//---------controller for Updating User By Id Handle----------//
module.exports.updateUser = async (req, res) =>{
    try {
        const { email, password } = req.body;
        const user = await User.findByIdAndUpdate(req.params.id, { email, password }, { new: true });
        if (user) {
            res.json({ message: 'User updated successfully', user });
        } else {
            res.status(404).json({ message: 'User not found' });
        }    
    } catch (error) {
        console.log('Error in updateUser controller:', error.message);
        res.status(500).json({ error: "Internal server error" })    
    }
}
  
//---------controller for Delete User By Id Handle----------//
module.exports.deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: 'User deleted successfully' });     
    } catch (error) {
        console.log("Error in deleteUser Controller: ", error.message);
        res.status(500).json({ error: "Internal server error"}) 
    }
};
