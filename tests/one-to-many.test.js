import {prismaClient} from "../src/prisma-client.js";

describe('Prisma Client', function () {
    it('should can insert and include', async () => {
        const comment = await prismaClient.comment.create({
            data: {
                customer_id: "eko",
                title: "Insert Comment",
                description: "Description Comment"
            },
            include: {
                customer: true
            }
        });

        console.info(comment);
    });

    it('should can insert and many relation', async () => {
        const customer = await prismaClient.customer.create({
            data: {
                id: "alex",
                name: "Alex",
                email: "alex@pzn.com",
                phone: "9898989898",
                comments: {
                    createMany: {
                        data: [
                            {
                                title: "Comment 1",
                                description: "Description 1"
                            },
                            {
                                title: "Comment 2",
                                description: "Description 2"
                            }
                        ]
                    }
                }
            },
            include: {
                comments: true
            }
        });

        console.info(customer);
    });

    it('should can find many with filter relation', async () => {
        const customers = await prismaClient.customer.findMany({
            where: {
                comments: {
                    some: {
                        title: {
                            contains: "Comment"
                        }
                    }
                }
            },
            include: {
                comments: true
            }
        });

        console.info(JSON.stringify(customers));
    });
});
