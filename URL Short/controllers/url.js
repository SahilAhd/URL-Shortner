const shortid = require('shortid');
const URL = require('../model/url.js');

async function shorturl(req, res) {
    const body = req.body;
    
    if (!body.url) {
        return res.status(400).json({ error: "URL is required" });
    }
    
    const id = shortid.generate();
    
    try {
        await URL.create({
            shortid: id,
            redirecturl: body.url,  // Corrected variable name
            visithistory: []        // Corrected variable name
        });
        
        return res.json({ id: id });
    } catch (error) {
        console.error('Error creating URL entry:', error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = {
    shorturl
};
