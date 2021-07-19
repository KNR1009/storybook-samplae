module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: "select",
        name: "level",
        message: "Which Atomic Design category?",
        choices: ["atoms", "molecules", "organisms"],
      },
      {
        type: "input",
        name: "name",
        message: "What is the component name?",
      },
    ];
    return inquirer.prompt(questions).then((answers) => {
      const { level, name } = answers;
      return { level, name };
    });
  },
};
