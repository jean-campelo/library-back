async function initial(res) {
    return res.status(200).send("initial config");
}

const libraryController = {
    initial,
};

export default libraryController;
