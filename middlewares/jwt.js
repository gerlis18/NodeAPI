const expressJwt = require('express-jwt');
const config = require('config.json');
const animal=require('../controllers/animal');

module.exports = jwt;

function jwt() {
    const secret = config.secret;
    return expressJwt({ secret, isRevoked }).unless({
        path: [
            // public routes that don't require authentication
            
        ]
    });
}

async function isRevoked(req, payload, done) {
    // const aniaml = await animal.getById(payload.sub);

    // revoke token under the given conditions(problem scope not defined in issue)
    // if (!user) {
    //     return done(null, true);
    // }

    done();
};