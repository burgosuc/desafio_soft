const validparameters = ( req, res, next) =>{
    const { email, password } = req.body
    if(!email || !password){
        return res.status(400).json({error: "tiene que ingresar email o password"})
    }
    next()
}

export { validparameters }
