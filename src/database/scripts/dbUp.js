const { logger } = require('../../utils/logger');
const { createDB: createDBQuery } = require('../queries');

(() => {
    require('../../config/db.config.init').query(createDBQuery, (err, _) => {
        if (err) {
            logger.error(err.message);
            return;
        }
        logger.info('DB created!');
        process.exit(0);
    });
})();
