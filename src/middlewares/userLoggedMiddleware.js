module.exports = (req, res, next) => {
    // Si existe el usuario en session
    res.locals.isLogged = false;

    if(req.session && req.session.user ){
        res.locals.isLogged = true;
        res.locals.user = req.session.user;
    }
    
    next();
}