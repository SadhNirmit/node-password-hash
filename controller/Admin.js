module.exports.adminInfo = (req,res) => {
    const data = {
        name :"nimrit"
    }
    console.log("data",data);
    res.send(data);
}

module.exports.adminSalary = (req,res) => {
    const data = {
        salary :"92000"
    }
    console.log(data);
    res.send(data);
}

module.exports.textXyz = (req, res) => {
    const data = {
        userName:"api_testing__@#$1",
        time:"10:52PM"
    }
    console.log(data);
    res.send(data);
}