module.exports = {
    id: "org.community.YourIPTV",
    version: "2.0.0",
    name: "Your EPG IPTV",
    logo: "https://dl.strem.io/addon-logo.png",
    description: "This addon brings all the Live Streams, VOD streams and Series from your IPTV subscription to your Stremio using Xtream API and supports IMDb IDs.",
    types: ["movie", "series", "tv", "channel"],
    background: "https://dl.strem.io/addon-background.jpg",
    resources: ["movie", "series", "tv"],
    catalogs: [],
    idPrefixes: ["yiptv:", "tt"],
    behaviorHints: { configurable: true, configurationRequired: true },
};
