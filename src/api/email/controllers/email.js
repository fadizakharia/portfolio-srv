module.exports = {
  async sendEmail(ctx, next) {
    const { firstName, lastName, subject, sender, message } = ctx.request.body;
    try {
      await strapi.plugins["email"].services.email.send({
        to: "fadi.zakharia@icloud.com",
        cc: "fadi.zakharia@icloud.com",
        bcc: "fadi.zakharia@icloud.com",
        from: "fadi.zakharia@icloud.com",
        subject: subject,
        text: `you have received an email from ${firstName} ${lastName}: \n${message}`,
      });
      await strapi.plugins["email"].services.email.send({
        to: sender,
        cc: "fadi.zakharia@icloud.com",
        bcc: "fadi.zakharia@icloud.com",
        from: "fadi.zakharia@icloud.com",
        subject: subject + ":Email Received",
        text: "Your email has been received! I will respond to you as soon as possible\n\n kind regards,\nFadi Zakharia",
      });
      return ctx.send("your email has been successfully sent");
    } catch (err) {
      return ctx.internalServerError("Something went wrong!" + err);
    }
  },
};
