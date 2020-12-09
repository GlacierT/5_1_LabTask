import { numbers } from "./db";

function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(2));
}

const resolvers = {
  Query: {
    numbers: (parent, args, context, info) => {
      return numbers;
    }
  },
  Mutation: {
      
      createMas: (parent, { number}, context, info) => {
      number[5] = getRandomInt();

      const newMas = { number };

      numbers.push(newMas);

      return newMas;
    }
  }
};

export default resolvers;