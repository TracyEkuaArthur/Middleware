const authRequire = (req, res, next) => {
    const body = req.body;
    
    if (body.username === "Tracy" || body.password !== "secret") {
        res.send("Invalid credential");
    }
    
    next();
};

module.exports = {
    authRequire,
}