const Welcome = (req, res) => {
    res.send("<h1>❤️ Welcome My Love</h1>");
};


const Greet = (req,res) => {
    res.send("<h1>😘...Kisses for greeting</h1>");
};

const protected = (req, res) => {
    res.send("You can see this because you are authenticated");
};


module.exports = {
    Welcome,
    Greet,
    protected,
};