"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: "Alice",
          lastName: "Smith",
          email: "alice.smith@example.com",
          password: "password123", 
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Bob",
          lastName: "Brown",
          email: "bob.brown@example.com",
          password: "password123", 
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    // Add commands to revert seed here
    await queryInterface.bulkDelete("Users", null, {});
  },
};
