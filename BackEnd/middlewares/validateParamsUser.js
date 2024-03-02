const validateParametersUser = (req, res, next) => {
    const { email, password, rol, lenguage} = req.body
    if (!email || !password || !rol || !lenguage) {
        return res.status(400).json({ error: "debe ingresar el email, password, rol y lenguage" })
    }
    next()
}

export { validateParametersUser }
