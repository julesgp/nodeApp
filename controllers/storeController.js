exports.myMiddleware = (req, res, next) =>{
    req.name = "middleware active";
    next();
}

exports.homePage = (req, res) => {
    console.log(req.name);
    res.render('index');
}