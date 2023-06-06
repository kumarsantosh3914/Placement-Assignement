const isAuthenticated = (req, res, next) => {
    const isAuthenticated = false;

    if (isAuthenticated) {
        next();
    } else {
        res.status(401).json({ error: 'Unauthorized' })
    }
};

module.exports = isAuthenticated;