const fs = require('fs');

// generate  HTML
const createHTML = html =>
{
    return new Promise((resolve, reject) =>
    {
        fs.writeFile('./generatedHTML/index.html', html, err =>
        {
            if (err)
            {
                reject(err);
                return;
            }

            console.log("HTML Created");
            resolve({
                ok: true,
                message: 'Done'
            });
        });
    });
}

module.exports = createHTML;