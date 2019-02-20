module.exports = {
    moduleFileExtensions: ['js', 'json', 'vue'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    },
    transform: {
        '^.+\\.js$': 'babel-jest',
        ".*\\.(vue)$": "vue-jest"
    }
}
