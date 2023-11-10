const awasomeFunction = (req, res, next) => {
    res.json('Awesome person');
};

const AnotherPerson = (req, res, next) => {
    res.json('Another awesome person');
};

module.exports = {awasomeFunction, AnotherPerson};