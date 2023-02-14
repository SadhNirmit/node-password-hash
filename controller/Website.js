module.exports.ReactHome = (req,res) => {
    const data = {
        name1:"amazon.com",
        name2:"tesla.com",
        name3:"oneplus.com",
        name4:"nodejs.org",
    };
    console.log(data);
    res.send(data);
}