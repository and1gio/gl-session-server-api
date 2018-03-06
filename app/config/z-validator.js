exports.default = function (app) {
    return {
        zValidator: {
            rootDir: 'validator-rules',
            useZFormat: true,
            format: 'flat',
            log: true
        }
    }
};
