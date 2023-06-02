import {prismaClient} from "../src/prisma-client.js";

describe('Prisma Client', function () {
    it('should can using or operator', async ()=> {
        const products = await prismaClient.product.findMany({
            where: {
                OR : [
                    {
                        name: "A"
                    },
                    {
                        name: "B"
                    }
                ]
            },
            orderBy: [
                {
                    name: "asc"
                }
            ]
        });

        console.info(products);

        expect(products.length).toBe(4);
        expect(products[0].name).toBe("A");
        expect(products[1].name).toBe("A");
        expect(products[2].name).toBe("B");
        expect(products[3].name).toBe("B");
    });
});
