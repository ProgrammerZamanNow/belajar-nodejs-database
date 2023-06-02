import {prismaClient} from "../src/prisma-client.js";

describe("Prisma Client", () => {
    it('should be able to create with auto increment primary key', async () => {
        const category = await prismaClient.category.create({
            data: {
                name: "Food"
            }
        });

        console.info(category);
        expect(category).toHaveProperty("id");
    });
})
