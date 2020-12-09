const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  },
  secure: true
});

exports.handler = function (event, context, callback) {
  const { name, email, type, text } = JSON.parse(event.body).payload.data;

  let mailOptions = {
    from: `"Transpigeon"<fumito.suzuki@transpigeon.com> `,
    to: `${email}`,
    subject: `【Transpigein】お問い合わせありがとうございます。`,
    text: `${name}様
お問い合わせありがとうございます。
お問い合わせの受付が完了しました。

本メールは自動返信メールです。
内容を確認後、あらためて返信をさせていただきますので
今しばらくお待ちくださいますようお願い申し上げます。

お問い合わせ内容[${type}]
${text}`,
    html: `<b>${name}様</b>
<p><b>お問い合わせありがとうございます。<br />
お問い合わせの受付が完了しました。</b></p>
<p>本メールは自動返信メールです。<br />
内容を確認後、あらためて返信をさせていただきますので<br />
今しばらくお待ちくださいますようお願い申し上げます。</p>
<p><b>お問い合わせ内容[${type}]</b><br />
${text}</p>`
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      callback(error);
    } else {
      callback(null, {
        statusCode: 200,
        body: "Ok"
      });
    }
  });
};
