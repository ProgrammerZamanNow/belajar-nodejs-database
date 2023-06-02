import {prismaClient} from "../src/prisma-client.js";

describe('Prisma Client', function () {
    it('should can insert many to many relation', async ()=> {
        const like = await prismaClient.like.create({
            data: {
                customer_id: "joko",
                product_id: "P0001"
            },
            include: {
                customer: true,
                product: true
            }
        });

        console.info(like);
    });

    it('should can find one with many to many relation', async ()=> {
        const customer = await prismaClient.customer.findUnique({
            where: {
                id: "eko"
            },
            include: {
                likes : {
                    include: {
                        product: true
                    }
                }
            }
        });

        console.info(JSON.stringify(customer));
    });

    it('should can find many with many to many relation', async ()=> {
        const customers = await prismaClient.customer.findMany({
            where: {
                likes: {
                    some: {
                        product: {
                            name: {
                                contains: "A"
                            }
                        }
                    }
                }
            },
            include: {
                likes : {
                    include: {
                        product: true
                    }
                }
            }
        });

        console.info(JSON.stringify(customers));
    });

    it('should create implicit relation', async ()=> {
        const customer = await  prismaClient.customer.update({
            where: {
                id : "eko"
            },
            data: {
                loves: {
                    connect: [
                        {
                            id: "P0001"
                        },
                        {
                            id: "P0002"
                        }
                    ]
                }
            },
            include: {
                loves: true
            }
        })

        console.info(customer);
    });

    it('should find many implicit relation', async ()=> {
        const customers = await prismaClient.customer.findMany({
            where: {
                loves: {
                    some: {
                        name: {
                            contains: "A"
                        }
                    }
                }
            },
            include: {
                loves: true
            }
        });

        console.info(customers);
    });
});
