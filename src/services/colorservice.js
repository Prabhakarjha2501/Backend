const db  = require('../models/index.js');
const colors = db.colorModel;




const createcolors = async (colorArray) => {
    console.log(`colorArray: ${colorArray}------------------`);
    try {
        const savedColors = [];
        for (const color of colorArray) {
            const newColor = await colors.create({ color: color });
            savedColors.push(newColor);
        }
        return savedColors;
    } catch (error) {
        console.log(error.message);
        throw error;
    }
};


// this condition is used for checking if the color already exists in thd database

// const createcolors = async(colorArray) => {
//     console.log(`colorArray: ${colorArray}------------------`);
//     try{
//          const savedColors = [];
//          for (const color of colorArray) {
//              const [newcolor, created] = await colors.findOrCreate({
//                  where: { id: color.id },
//                  defaults: { color: color }
//              });
//              savedColors.push(newcolor);
//          }
//          return savedColors;
//     } catch(error){
//           console.log(error.message);
//           throw error;
//     }
//  }
 
 const getAllcolor = async (page, limit) => {
    const offset = (page - 1) * limit;
    return await colors.findAndCountAll({
        limit: parseInt(limit),
        offset: parseInt(offset),
    });
};

const deletecolor = async (taskId) => {
    return await colors.destroy({ where: { id: taskId } });
 };
 

 module.exports ={
     createcolors,
     getAllcolor,
     deletecolor
 }
 
