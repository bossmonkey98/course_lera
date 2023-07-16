import jwt, { verify } from "jsonwebtoken"

export default verifyToken = async(req,res) => {
    try{
        let token = req.header
        if(!token) res.status(400).json({msg:"Access Denied !!!!"})
        if(token.startsWith("Bearer ")){
            token =token.slice(7,token.length).trimLeft()
        }

        const verified = jwt.verify(token , process.env.JWT_SECRET)

        req.user = verified

        next()

    }catch(err){
        res.status(500).json({error:err.message})
    }
}