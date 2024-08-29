import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

const statuses: Array<
  "PLACED" | "APPROVED" | "REJECTED" | "IN_TRANSIT" | "COMPLETED"
> = ["PLACED", "APPROVED", "REJECTED", "IN_TRANSIT", "COMPLETED"];

function getRandomStatus():
  | "PLACED"
  | "APPROVED"
  | "REJECTED"
  | "IN_TRANSIT"
  | "COMPLETED" {
  return statuses[Math.floor(Math.random() * statuses.length)];
}
async function seedData() {
  const batchSize = 1000;
  const totalRecords = 10000;
  const numBatches = Math.ceil(totalRecords / batchSize);

  try {
    for (let i = 0; i < numBatches; i++) {
      const data = Array.from({ length: batchSize }, () => ({
        date: faker.date.anytime(),
        status: getRandomStatus(),
        amount: faker.number.float(),
        customerName: faker.person.fullName(),
      }));

      await prisma.order.createMany({
        data,
        skipDuplicates: true,
      });

      console.log(`Batch ${i + 1} inserted successfully.`);
    }

    console.log("Data seeded successfully!");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seedData();
