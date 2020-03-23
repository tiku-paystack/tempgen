const inquirer = require('inquirer');

const askGithubCredential = () => {
  const questions = [
    {
      name: 'username',
      type: 'input',
      message: 'Enter your GitHub username or e-mail address:',
      validate: function( value ) {
        if (value.length) {
          return true;
        } else {
          return 'Please enter your username or e-mail address.';
        }
      }
    },
    {
      name: 'password',
      type: 'password',
      message: 'Enter your password:',
      validate: function(value) {
        if (value.length) {
          return true;
        } else {
          return 'Please enter your password.';
        }
      }
    }
  ];
  return inquirer.prompt(questions);
}

const askRepoDetails = () => {
  const questions = [
    {
      type: 'input',
      name: 'name',
      message: 'Enter a name for the repository:',
      validate: function( value ) {
        if (value.length) {
          return true;
        } else {
          return 'Please enter a name for the repository.';
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description of the repository:'
    },
    {
      type: 'list',
      name: 'visibility',
      message: 'Public or private:',
      choices: [ 'public', 'private' ],
      default: 'public'
    }
  ];
  return inquirer.prompt(questions);
}

const askRepoDetails = () => {
  const questions = [
    {
      type: 'input',
      name: 'name',
      message: 'Enter a name for the repository:',
      validate: function( value ) {
        if (value.length) {
          return true;
        } else {
          return 'Please enter a name for the repository.';
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description of the repository:'
    },
    {
      type: 'list',
      name: 'visibility',
      message: 'Public or private:',
      choices: [ 'public', 'private' ],
      default: 'public'
    }
  ];
  return inquirer.prompt(questions);
}

module.exports = {
  askGithubCredential,
  askRepoDetails
}