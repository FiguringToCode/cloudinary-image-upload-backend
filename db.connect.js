const mongoose = require('mongoose')

const initializeDatabase = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI)
        if(connection){
            console.log('Connected to MongoDB Successfully')
        }
    } catch (error) {
        console.log("Database Connection Failed", error)
    }
}

module.exports = { initializeDatabase }