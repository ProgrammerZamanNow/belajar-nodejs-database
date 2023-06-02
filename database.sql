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

select *
from customers;

select *
from customers
where name = 'Eko';

create table products
(
    id       varchar(100) not null,
    name     varchar(100) not null,
    price    int          not null,
    stock    int          not null,
    category varchar(100) not null,
    primary key (id)
) engine innodb;

select *
from products;

insert into products(id, name, price, stock, category)
    value ('P0001', 'A', 1000, 100, 'K1'),
    ('P0002', 'B', 2000, 200, 'K1'),
    ('P0003', 'C', 3000, 300, 'K1'),
    ('P0004', 'D', 4000, 400, 'K1'),
    ('P0005', 'E', 5000, 500, 'K1');

insert into products(id, name, price, stock, category)
    value ('P0006', 'A', 1000, 100, 'K2'),
    ('P0007', 'B', 2000, 200, 'K2'),
    ('P0008', 'C', 3000, 300, 'K2'),
    ('P0009', 'D', 4000, 400, 'K2'),
    ('P0010', 'E', 5000, 500, 'K2');

SELECT *
from products;

create table categories
(
    id   int          not null auto_increment,
    name varchar(100) not null,
    primary key (id)
) engine innodb;

select * from categories;
