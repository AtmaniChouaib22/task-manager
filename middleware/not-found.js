const notFound = (req, res, next) => {
    res.status(404).send("rout not found")
}
module.exports = notFound ;