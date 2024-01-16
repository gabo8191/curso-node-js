//FORMA 1
// const templateExports = require('./js-foundation/01-template');
// console.log(templateExports.emailTemplate);

//FORMA 2
// const { emailTemplate } = require('./js-foundation/01-template');
// console.log(emailTemplate);

//require('./js-foundation/02-destructuring');

const { getUserById } = require('./js-foundation/03-callbacks');

getUserById(5, function (error, user) {
    if (error) {
        throw new Error(error);
        return;
    }

    console.log('Usuario: ' + user.name);
});
