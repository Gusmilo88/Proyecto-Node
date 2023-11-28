const verifications = {

    verifyData: (req, res, next)=> {

        const {name, lastName, age} = req.body


        if(!name){
            return res.status(400).json({
                message:"Name are required"
            })
        }
        if(!lastName){
            return res.status(400).json({
                message:"Last name are required"
            })
        }
        if(!age){
            return res.status(400).json({
                message:"Age are required"
            })
        }
        next()
    }
}

module.exports = verifications