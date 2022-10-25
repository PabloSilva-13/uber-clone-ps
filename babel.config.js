module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ["module:react-native-dotenv", { 
        moduleName: "@env",
        path: ".env",
       
      }]
    ]
  };
};

{/**plugins: [
      ["module:react-native-dotenv", { // opções disponíveis para a configuração do Babel e seus respectivos valores padrão
        "envName": "APP_ENV",
        moduleName: "@env",
        path: ".env",
        "blocklist": null,
        "allowlist": null,
        "blacklist": null, // DEPRECATED
        "whitelist": null, // DEPRECATED
        "safe": false,
        "allowUndefined": true,
        "verbose": false
      }]
    ]
  }; */}