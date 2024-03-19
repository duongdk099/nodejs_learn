"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Woods",
      [
        {
          name: "Pine",
          type: "softwood",
          hardness: "tender",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Teak",
          type: "exotic wood",
          hardness: "medium-hard",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Maple",
          type: "noble and hardwoods",
          hardness: "hard",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    // Add commands to revert seed here
    await queryInterface.bulkDelete("Woods", null, {});
  },
};
