const { processCategories } = require('../../services/map/mapdata.services.js')

const getMapData = async (req, res) => {

    try {
        const categoriesData = await processCategories();
        res.status(200).json(categoriesData);    
    } catch (error) {
        console.error('Error in /data route:', error);
        res.status(500).send('Internal Server Error');
    }   

}

module.exports = getMapData;