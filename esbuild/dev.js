const path = require("path")
const { watch } = require("chokidar")
const { build } = require("./base")

const devConfig = {
    sourcemap: "inline",
    define: {
        "process.env.NODE_ENV": JSON.stringify("development")
    },
    inject: [path.join(__dirname, "sourcemaps.js")]
}

const watcher = watch(["./src/**/*"])

build(devConfig)

watcher.on("change", () => {
    build(devConfig)
})
