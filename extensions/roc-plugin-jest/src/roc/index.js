import config from '../config/roc.config.js';
import meta from '../config/roc.config.meta.js';

export default {
    config,
    meta,
    dependencies: {
        uses: {
            jest: '^16.0.2',
            'babel-jest': '^16.0.0'
        }
    },
    hooks: {
        'babel-config': {}
    },
    commands: {
        development: {
            test: (commandObj) => {
                process.env.NODE_ENV = 'test';

                const jest = require('jest');
                const argv = process.argv.splice(3);

                const jestConfig = {
                    moduleFileExtensions: ['jsx', 'js', 'json'],
                    testPathIgnorePatterns: ['<rootDir>/(build|docs|node_modules)/'],
                    testEnvironment: 'node',
                    scriptPreprocessor: require.resolve('./jest-resolver.js')
                };

                argv.push('--config', JSON.stringify(jestConfig));

                jest.run(argv);
            }
        }
    }
};
