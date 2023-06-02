create table sample
(
    id   varchar(100) not null,
    name varchar(100) not null,
    primary key (id)
) engine innodb;

SELECT *
FROM sample;

create table customers
(
    id    varchar(100) not null,
    name  varchar(100) not null,
    email varchar(100) not null,
    phone varchar(100) not null,
    primary key (id),
    constraint customers_email_unique unique (email),
    constraint customers_phone_unique unique (phone)
) engine innodb;

select * from customers;

select * from customers where name = 'Eko';
