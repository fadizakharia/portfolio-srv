module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "amazon-ses",
      providerOptions: {
        key: env("AWS_SES_KEY"),
        secret: env("AWS_SES_SECRET"),
        amazon: "https://email.us-east-1.amazonaws.com",
      },
      settings: {
        defaultFrom: "fadi.zakharia@icloud.com",
        defaultReplyTo: "fadi.zakharia@icloud.com",
      },
    },
  },
});
