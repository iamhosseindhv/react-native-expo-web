/* eslint-disable no-unused-vars */
module.exports = function override(existingConfig, env) {
    const config = existingConfig;

    config.resolve.alias = {
        'react-native': 'react-native-web',
    };

    return config;
};
