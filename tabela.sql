CREATE TABLE product(
    id INT(9),
    nomeDoProduto VARCHAR(50),
    fabricante VARCHAR(25),
    quantidadeDoProduto INT(10),
    preco DECIMAL(6,2)
);

INSERT INTO product(id, nomeDoProduto, fabricante, quantidadeDoProduto, preco) VALUES(
    12346789,
    "Placa Controladora",
    "HPE",
    936,
    621.23
);

INSERT INTO product(id, nomeDoProduto, fabricante, quantidadeDoProduto, preco) VALUES(
    94039443,
    "Processador i9 Octacore",
    "Intel",
    182,
    100.23
);

INSERT INTO product(id, nomeDoProduto, fabricante, quantidadeDoProduto, preco) VALUES(
    00012789,
    "Memoria RAM",
    "Dell",
    778,
    133.05
);