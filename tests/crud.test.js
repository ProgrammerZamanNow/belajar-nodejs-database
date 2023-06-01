import {prismaClient} from "../src/prisma-client.js";

describe("Prisma Client", () => {
    it('should be able to create customer', async () => {
        const customer = await prismaClient.customer.create({
            data: {
                id: "khannedy",
                email: "khannedy@pzn.com",
                name: "Eko Khannedy",
                phone: "0821241243124"
            }
        });

        expect(customer.id).toBe("khannedy");
        expect(customer.email).toBe("khannedy@pzn.com");
        expect(customer.name).toBe("Eko Khannedy");
        expect(customer.phone).toBe("0821241243124");
    });

    it('should be able to update customer', async () => {
        const customer = await prismaClient.customer.update({
            data: {
                name: "Eko Kurniawan Khannedy"
            },
            where: {
                id: "khannedy"
            }
        });

        expect(customer.id).toBe("khannedy");
        expect(customer.email).toBe("khannedy@pzn.com");
        expect(customer.name).toBe("Eko Kurniawan Khannedy");
        expect(customer.phone).toBe("0821241243124");
    });

    it('should be able to read customer', async () => {
        const customer = await prismaClient.customer.findUnique({
            where: {
                id: "khannedy"
            }
        });

        expect(customer.id).toBe("khannedy");
        expect(customer.email).toBe("khannedy@pzn.com");
        expect(customer.name).toBe("Eko Kurniawan Khannedy");
        expect(customer.phone).toBe("0821241243124");
    });

    it('should be able to delete customer', async () => {
        const customer = await prismaClient.customer.delete({
            where: {
                id: "khannedy"
            }
        });

        expect(customer.id).toBe("khannedy");
        expect(customer.email).toBe("khannedy@pzn.com");
        expect(customer.name).toBe("Eko Kurniawan Khannedy");
        expect(customer.phone).toBe("0821241243124");
    });
})
