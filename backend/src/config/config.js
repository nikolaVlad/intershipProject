const result = require('dotenv/config');

if (result.error) {
    throw result.error;
}

const env = process.env.NODE_ENV; // dev or test or anything

const dev = {
    app: {
        port: parseInt(process.env.DEV_APP_PORT) || 3000,
    },

    db: {
        host: process.env.DEV_DB_HOST || 'localhost',
        port: parseInt(process.env.DEV_DB_PORT) || 3306,
        database: process.env.DEV_DB_NAME || 'db',
        username: process.env.DEV_DB_USERNAME || 'root',
        password: process.env.DEV_DB_PASSWORD || '',
    },

    thirdpart: {
        url: process.env.THIRDPART_URL,
    },
    
    jwtConfig: {
        secretkey: process.env.JWTPRIVATEKEY,
        salt: parseInt(process.env.SALT),
    },
    
    cryptConfig : 
    {
        secretkey : process.env.CRYPT_SECRETYKEY
    },
    purshaceAppConfig : 
    {
        URL : process.env.PURSHACE_APP_URL
    }
    
};

const config = {
    dev,
};

module.exports = config[env];
