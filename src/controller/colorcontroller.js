const colorService = require('../services/colorservice');



const addcolors = async(req, res) => {
    try{
        const colorArray = req.body.color;
        if (!Array.isArray(colorArray)) {
            return res.status(400).json({ error: "Invalid input. Expecting an array of colors." });
        }
        const newColors = await colorService.createcolors(colorArray);
        res.status(201).json({ newColors });
    } catch(error){
        res.status(500).json({ error: error.message });
    }
}

const getAllcolors = async (req, res) => {
    try {
        const { page = 1, limit = 10} = req.query; 
        const colors = await colorService.getAllcolor(page, limit);
        res.status(200).json(colors);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deletecolors = async (req, res) => {
    try {
        await colorService.deletecolor(req.params.id);
        res.status(204).json({"dd":`deleted sucessfully ${req.params.id}`});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = {
    addcolors,
    getAllcolors,
    deletecolors,
}




