const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(createProxyMiddleware("/input", { target: "https://http-intake.logs.datadoghq.com/v1", changeOrigin: true }));

    app.use(createProxyMiddleware("/events", { target: "https://api.datadoghq.com/api/v1", changeOrigin: true }));
};