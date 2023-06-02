import {prismaClient} from "../src/prisma-client.js";

describe("Prisma Client", () => {
    it('should can execute sequential transaction', async () => {
        const [eko, kurniawan] = await prismaClient.$transaction([
            prismaClient.customer.create({
                data: {
                    id: "eko",
                    email: "eko@pzn.com",
                    name: "Eko",
                    phone: "25334534534543"
                }
            }),
            prismaClient.customer.create({
                data: {
                    id: "kurniawan",
                    email: "kurniawan@pzn.com",
                    name: "Kurniawan",
                    phone: "3453453543"
                }
            })
        ], {
            timeout: 5
        })

        expect(eko.name).toBe("Eko");
        expect(kurniawan.name).toBe("Kurniawan");
    });

    it('should can execute interactive transaction', async () => {
        const [eko, kurniawan] = await prismaClient.$transaction(async (prisma) => {
            const eko = await prisma.customer.create({
                data: {
                    id: "eko2",
                    email: "eko2@pzn.com",
                    name: "Eko",
                    phone: "56456464565"
                }
            })
            const kurniawan = await prisma.customer.create({
                data: {
                    id: "kurniawan2",
                    email: "kurniawan2@pzn.com",
                    name: "Kurniawan",
                    phone: "4356345345"
                }
            })

            return [eko, kurniawan];
        }, {
            timeout: 5
        });

        expect(eko.name).toBe("Eko");
        expect(kurniawan.name).toBe("Kurniawan");
    });
})
