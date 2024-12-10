module.exports = {
    apps: [
        {
            name: "fullstack-template-api",
            script: "./dist/src/index.js",
            instances: "4",
            watch: "dist",
        },
    ],
};
