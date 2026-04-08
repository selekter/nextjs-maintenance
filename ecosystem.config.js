module.exports = {
    apps: [
        {
            name: "nextjs-maintenance",
            script: "node_modules/next/dist/bin/next",
            args: "start -p 3000",
            cwd: "D:/nextjs/nextjs-maintenance",
            instances: 1,
            exec_mode: "fork",
            autorestart: true,
            env: {
                NODE_ENV: "production"
            }
        }
    ]
}