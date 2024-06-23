use mydb;

insert into empresa(id, nome) values('1','World Beauty');

INSERT INTO cpf(valor, dataEmissao) VALUES('24681012147', '1995-06-12 14:30:00.000');
INSERT INTO cpf(valor, dataEmissao) VALUES('35791347562', '2001-03-15 10:45:00.000');
INSERT INTO cpf(valor, dataEmissao) VALUES('46813579234', '1987-02-20 16:15:00.000');
INSERT INTO cpf(valor, dataEmissao) VALUES('57924681035', '2010-08-22 12:00:00.000');
INSERT INTO cpf(valor, dataEmissao) VALUES('68035791346', '1992-11-18 09:30:00.000');
INSERT INTO cpf(valor, dataEmissao) VALUES('79146813579', '2005-05-10 14:15:00.000');
INSERT INTO cpf(valor, dataEmissao) VALUES('80257924681', '1985-01-25 11:45:00.000');
INSERT INTO cpf(valor, dataEmissao) VALUES('91368035791', '2015-02-28 16:00:00.000');
INSERT INTO cpf(valor, dataEmissao) VALUES('92479146813', '1998-07-15 10:00:00.000');
INSERT INTO cpf(valor, dataEmissao) VALUES('03580257924', '2008-04-12 14:30:00.000');
INSERT INTO cpf(valor, dataEmissao) VALUES('14691368035', '1990-03-22 16:15:00.000');
INSERT INTO cpf(valor, dataEmissao) VALUES('25792479146', '2012-09-18 12:00:00.000');
INSERT INTO cpf(valor, dataEmissao) VALUES('36813580257', '1982-05-10 11:45:00.000');
INSERT INTO cpf(valor, dataEmissao) VALUES('47924691368', '2003-01-25 14:15:00.000');
INSERT INTO cpf(valor, dataEmissao) VALUES('58035792479', '1996-08-22 16:00:00.000');
INSERT INTO cpf(valor, dataEmissao) VALUES('69146813580', '2018-03-15 10:45:00.000');
INSERT INTO cpf(valor, dataEmissao) VALUES('70257924691', '1989-02-20 12:00:00.000');
INSERT INTO cpf(valor, dataEmissao) VALUES('81368035790', '2006-05-10 14:30:00.000');
INSERT INTO cpf(valor, dataEmissao) VALUES('92479146813', '1994-11-18 11:45:00.000');
INSERT INTO cpf(valor, dataEmissao) VALUES('03580257924', '2011-02-28 16:15:00.000');
INSERT INTO cpf(valor, dataEmissao) VALUES('14691368035', '1981-01-25 10:00:00.000');
INSERT INTO cpf(valor, dataEmissao) VALUES('25792479146', '2009-08-22 14:15:00.000');
INSERT INTO cpf(valor, dataEmissao) VALUES('36813580257', '1997-03-22 12:00:00.000');
INSERT INTO cpf(valor, dataEmissao) VALUES('47924691368', '2014-05-10 16:00:00.000');
INSERT INTO cpf(valor, dataEmissao) VALUES('58035792479', '1983-02-20 11:45:00.000');
INSERT INTO cpf(valor, dataEmissao) VALUES('69146813580', '2016-09-18 14:30:00.000');
INSERT INTO cpf(valor, dataEmissao) VALUES('70257924691', '1991-01-25 10:45:00.000');
INSERT INTO cpf(valor, dataEmissao) VALUES('81368035790', '2002-03-15 12:00:00.000');
INSERT INTO cpf(valor, dataEmissao) VALUES('92479146813', '1988-05-10 16:15:00.000');
INSERT INTO cpf(valor, dataEmissao) VALUES('03580257924', '2017-02-28 14:15:00.000');


INSERT INTO cliente (id, nome, nomeSocial, genero, cpfValor, telefoneId, dataCadastro, empresaId) VALUES ('1', 'Alessandra Mendes', 'Alessandra', 'Feminino', '14691368035', '1', '2019-04-12 14:30:00.000', '1');
INSERT INTO cliente (id, nome, nomeSocial, genero, cpfValor, telefoneId, dataCadastro, empresaId) VALUES ('2', 'Bruno Silva', 'Bruno', 'Masculino', '25792479146', '2', '1986-02-20 11:45:00.000', '1');
INSERT INTO cliente (id, nome, nomeSocial, genero, cpfValor, telefoneId, dataCadastro, empresaId) VALUES ('3', 'Carolina Santos', 'Carolina', 'Feminino', '36813580257', '3', '2004-08-22 16:00:00.000', '1');
INSERT INTO cliente (id, nome, nomeSocial, genero, cpfValor, telefoneId, dataCadastro, empresaId) VALUES ('4', 'Daniel Martins', 'Daniel', 'Masculino', '47924691368', '4', '1999-03-22 12:00:00.000', '1');
INSERT INTO cliente (id, nome, nomeSocial, genero, cpfValor, telefoneId, dataCadastro, empresaId) VALUES ('5', 'Eduarda Oliveira', 'Eduarda', 'Feminino', '58035792479', '5', '2013-05-10 14:15:00.000', '1');
INSERT INTO cliente (id, nome, nomeSocial, genero, cpfValor, telefoneId, dataCadastro, empresaId) VALUES ('6', 'Felipe Almeida', 'Felipe', 'Masculino', '69146813580', '6', '1984-01-25 10:45:00.000', '1');
INSERT INTO cliente (id, nome, nomeSocial, genero, cpfValor, telefoneId, dataCadastro, empresaId) VALUES ('7', 'Gabriela Costa', 'Gabriela', 'Feminino', '70257924691', '7', '2007-09-18 12:00:00.000', '1');
INSERT INTO cliente (id, nome, nomeSocial, genero, cpfValor, telefoneId, dataCadastro, empresaId) VALUES ('8', 'Hugo Sousa', 'Hugo', 'Masculino', '81368035790', '8', '1992-11-18 11:45:00.000', '1');
INSERT INTO cliente (id, nome, nomeSocial, genero, cpfValor, telefoneId, dataCadastro, empresaId) VALUES ('9', 'Isabella Rodrigues', 'Isabella', 'Feminino', '92479146813', '9', '2020-02-28 16:15:00.000', '1');
INSERT INTO cliente (id, nome, nomeSocial, genero, cpfValor, telefoneId, dataCadastro, empresaId) VALUES ('10', 'João Victor', 'João', 'Masculino', '03580257924', '10', '1980-05-10 10:00:00.000', '1');
INSERT INTO cliente (id, nome, nomeSocial, genero, cpfValor, telefoneId, dataCadastro, empresaId) VALUES ('11', 'Larissa Ferreira', 'Larissa', 'Feminino', '14691368035', '11', '2015-03-15 14:30:00.000', '1');
INSERT INTO cliente (id, nome, nomeSocial, genero, cpfValor, telefoneId, dataCadastro, empresaId) VALUES ('12', 'Luana Gomes', 'Luana', 'Feminino', '25792479146', '12', '1995-02-20 12:00:00.000', '1');
INSERT INTO cliente (id, nome, nomeSocial, genero, cpfValor, telefoneId, dataCadastro, empresaId) VALUES ('13', 'Marcelo Lima', 'Marcelo', 'Masculino', '36813580257', '13', '2001-08-22 16:00:00.000', '1');
INSERT INTO cliente (id, nome, nomeSocial, genero, cpfValor, telefoneId, dataCadastro, empresaId) VALUES ('14', 'Natalia Silva', 'Natalia', 'Feminino', '47924691368', '14', '1987-03-22 11:45:00.000', '1');
INSERT INTO cliente (id, nome, nomeSocial, genero, cpfValor, telefoneId, dataCadastro, empresaId) VALUES ('15', 'Otávio Sousa', 'Otávio', 'Masculino', '58035792479', '15', '2012-05-10 14:15:00.000', '1');
INSERT INTO cliente (id, nome, nomeSocial, genero, cpfValor, telefoneId, dataCadastro, empresaId) VALUES ('16', 'Paula Oliveira', 'Paula', 'Feminino', '69146813580', '16', '1996-01-25 10:45:00.000', '1');
INSERT INTO cliente (id, nome, nomeSocial, genero, cpfValor, telefoneId, dataCadastro, empresaId) VALUES ('17', 'Rafaela Almeida', 'Rafaela', 'Feminino', '70257924691', '17', '2008-09-18 12:00:00.000', '1');
INSERT INTO cliente (id, nome, nomeSocial, genero, cpfValor, telefoneId, dataCadastro, empresaId) VALUES ('18', 'Sofia Costa', 'Sofia', 'Feminino', '81368035790', '18', '1990-11-18 11:45:00.000', '1');
INSERT INTO cliente (id, nome, nomeSocial, genero, cpfValor, telefoneId, dataCadastro, empresaId) VALUES ('19', 'Thiago Martins', 'Thiago', 'Masculino', '92479146813', '19', '2023-02-28 16:15:00.000', '1');
INSERT INTO cliente (id, nome, nomeSocial, genero, cpfValor, telefoneId, dataCadastro, empresaId) VALUES ('20', 'Ursula Rodrigues', 'Ursula', 'Feminino', '03580257924', '20', '1985-05-10 10:00:00.000', '1');
INSERT INTO cliente (id, nome, nomeSocial, genero, cpfValor, telefoneId, dataCadastro, empresaId) VALUES ('21', 'Vitoria Ferreira', 'Vitoria', 'Feminino', '14691368035', '21', '2019-03-15 14:30:00.000', '1');
INSERT INTO cliente (id, nome, nomeSocial, genero, cpfValor, telefoneId, dataCadastro, empresaId) VALUES ('22', 'Wagner Gomes', 'Wagner', 'Masculino', '25792479146', '22', '1995-02-20 12:00:00.000', '1');
INSERT INTO cliente (id, nome, nomeSocial, genero, cpfValor, telefoneId, dataCadastro, empresaId) VALUES ('23', 'Ximena Lima', 'Ximena', 'Feminino', '36813580257', '23', '2001-08-22 16:00:00.000', '1');
INSERT INTO cliente (id, nome, nomeSocial, genero, cpfValor, telefoneId, dataCadastro, empresaId) VALUES ('24', 'Yasmin Silva', 'Yasmin', 'Feminino', '47924691368', '24', '1987-03-22 11:45:00.000', '1');
INSERT INTO cliente (id, nome, nomeSocial, genero, cpfValor, telefoneId, dataCadastro, empresaId) VALUES ('25', 'Zoe Oliveira', 'Zoe', 'Feminino', '58035792479', '25', '2012-05-10 14:15:00.000', '1');
INSERT INTO cliente (id, nome, nomeSocial, genero, cpfValor, telefoneId, dataCadastro, empresaId) VALUES ('26', 'Alexandre Almeida', 'Alexandre', 'Masculino', '69146813580', '26', '1996-01-25 10:45:00.000', '1');
INSERT INTO cliente (id, nome, nomeSocial, genero, cpfValor, telefoneId, dataCadastro, empresaId) VALUES ('27', 'Beatriz Costa', 'Beatriz', 'Feminino', '70257924691', '27', '2008-09-18 12:00:00.000', '1');
INSERT INTO cliente (id, nome, nomeSocial, genero, cpfValor, telefoneId, dataCadastro, empresaId) VALUES ('28', 'Caio Sousa', 'Caio', 'Masculino', '81368035790', '28', '1990-11-18 11:45:00.000', '1');
INSERT INTO cliente (id, nome, nomeSocial, genero, cpfValor, telefoneId, dataCadastro, empresaId) VALUES ('29', 'Daniela Rodrigues', 'Daniela', 'Feminino', '92479146813', '29', '2023-02-28 16:15:00.000', '1');
INSERT INTO cliente (id, nome, nomeSocial, genero, cpfValor, telefoneId, dataCadastro, empresaId) VALUES ('30', 'Eduardo Martins', 'Eduardo', 'Masculino', '03580257924', '30', '1985-05-10 10:00:00.000', '1');

INSERT INTO telefone(id, ddd, numero, clienteId) VALUES('1', '12', '132983202', 1);
INSERT INTO telefone(id, ddd, numero, clienteId) VALUES('2', '34', '987654321', 2);
INSERT INTO telefone(id, ddd, numero, clienteId) VALUES('3', '82', '010294052', 2);
INSERT INTO telefone(id, ddd, numero, clienteId) VALUES('4', '11', '999888777', 3);
INSERT INTO telefone(id, ddd, numero, clienteId) VALUES('5', '21', '123456789', 4);
INSERT INTO telefone(id, ddd, numero, clienteId) VALUES('6', '21', '987654321', 4);
INSERT INTO telefone(id, ddd, numero, clienteId) VALUES('7', '31', '777888999', 5);
INSERT INTO telefone(id, ddd, numero, clienteId) VALUES('8', '81', '987654320', 6);
INSERT INTO telefone(id, ddd, numero, clienteId) VALUES('9', '41', '413576879', 7);
INSERT INTO telefone(id, ddd, numero, clienteId) VALUES('10', '51', '241352465', 8);
INSERT INTO telefone(id, ddd, numero, clienteId) VALUES('11', '13', '049213314', 9);
INSERT INTO telefone(id, ddd, numero, clienteId) VALUES('12', '71', '820231843', 10);
INSERT INTO telefone(id, ddd, numero, clienteId) VALUES('13', '61', '132465768', 11);
INSERT INTO telefone(id, ddd, numero, clienteId) VALUES('14', '32', '314658869', 12);
INSERT INTO telefone(id, ddd, numero, clienteId) VALUES('15', '48', '351105693', 13);
INSERT INTO telefone(id, ddd, numero, clienteId) VALUES('16', '58', '967452315', 14);
INSERT INTO telefone(id, ddd, numero, clienteId) VALUES('17', '68', '481246430', 15);
INSERT INTO telefone(id, ddd, numero, clienteId) VALUES('18', '78', '381310324', 16);
INSERT INTO telefone(id, ddd, numero, clienteId) VALUES('19', '88', '317328743', 17);
INSERT INTO telefone(id, ddd, numero, clienteId) VALUES('20', '98', '941473567', 18);
INSERT INTO telefone(id, ddd, numero, clienteId) VALUES('21', '28', '827423610', 19);
INSERT INTO telefone(id, ddd, numero, clienteId) VALUES('22', '38', '397131623', 20);
INSERT INTO telefone(id, ddd, numero, clienteId) VALUES('23', '11', '127236128', 21);
INSERT INTO telefone(id, ddd, numero, clienteId) VALUES('24', '21', '732316397', 22);
INSERT INTO telefone(id, ddd, numero, clienteId) VALUES('25', '31', '232613594', 23);
INSERT INTO telefone(id, ddd, numero, clienteId) VALUES('26', '41', '923531526', 24);
INSERT INTO telefone(id, ddd, numero, clienteId) VALUES('27', '51', '246231739', 25);
INSERT INTO telefone(id, ddd, numero, clienteId) VALUES('28', '61', '249742635', 26);
INSERT INTO telefone(id, ddd, numero, clienteId) VALUES('29', '71', '394723135', 27);
INSERT INTO telefone(id, ddd, numero, clienteId) VALUES('30', '81', '236731329', 28);
INSERT INTO telefone(id, ddd, numero, clienteId) VALUES('31', '91', '302831261', 29);
INSERT INTO telefone(id, ddd, numero, clienteId) VALUES('32', '98', '453423138', 30);

INSERT INTO rg (valor, dataEmissao, clienteId) VALUES 
('0123456789012', '1990-01-01 00:00:00.000', 1),
('0234567890123', '1995-06-01 00:00:00.000', 2),
('1234567890123', '2000-01-01 00:00:00.000', 3),
('1240241483671', '2005-07-01 00:00:00.000', 4),
('1242534766879', '2010-01-01 00:00:00.000', 5),
('1243546576869', '2015-02-01 00:00:00.000', 6),
('1380183344568', '2018-03-01 00:00:00.000', 7),
('1491471248653', '2020-04-01 00:00:00.000', 8),
('1768795244689', '2022-05-01 00:00:00.000', 9),
('2031284926124', '2023-06-01 00:00:00.000', 10),
('2345675901230', '2024-07-01 00:00:00.000', 11),
('2345678901234', '2025-08-01 00:00:00.000', 12),
('3014144755327', '2026-09-01 00:00:00.000', 13),
('3023713125908', '2027-10-01 00:00:00.000', 14),
('3193241460871', '2028-11-01 00:00:00.000', 15),
('3456789012345', '2029-12-01 00:00:00.000', 16),
('3827391631397', '2030-01-01 00:00:00.000', 17),
('3843042371304', '2031-02-01 00:00:00.000', 18),
('4014711734542', '2032-03-01 00:00:00.000', 19),
('4143545983571', '2033-04-01 00:00:00.000', 20),
('4567890123456', '2034-05-01 00:00:00.000', 21),
('5678901234567', '2035-06-01 00:00:00.000', 22),
('5789012345678', '2036-07-01 00:00:00.000', 23),
('6789012345678', '2037-08-01 00:00:00.000', 24),
('7890123456789', '2038-09-01 00:00:00.000', 25),
('8901234567890', '2039-10-01 00:00:00.000', 26),
('8901272531937', '2040-11-01 00:00:00.000', 27),
('9012345678900', '2041-12-01 00:00:00.000', 28),
('9012345678901', '2042-01-01 00:00:00.000', 29),
('9372937138365', '2043-02-01 00:00:00.000', 30);


INSERT INTO produto(id, nome, preco, empresaId, descricao, quantidadeEstoque) VALUES('1', 'Hidratante Hydra Glow', 60, '1', 'Hidratação intensiva para pele radiante', 15);
INSERT INTO produto(id, nome, preco, empresaId, descricao, quantidadeEstoque) VALUES('2', 'Base Luminosa', 55, '1', 'Base de maquiagem perfeita para todos os tipos de pele', 12);
INSERT INTO produto(id, nome, preco, empresaId, descricao, quantidadeEstoque) VALUES('3', 'Brilho Labial Vibrante', 20, '1', 'Brilho labial de alta qualidade em uma variedade de cores vibrantes', 25);
INSERT INTO produto(id, nome, preco, empresaId, descricao, quantidadeEstoque) VALUES('4', 'Shampoo Nutritivo', 35, '1', 'Shampoo suave e sem sulfatos para cabelos saudáveis', 18);
INSERT INTO produto(id, nome, preco, empresaId, descricao, quantidadeEstoque) VALUES('5', 'Condicionador Sedoso', 30, '1', 'Tratamento de condicionamento profundo para cabelos macios e sedosos', 20);
INSERT INTO produto(id, nome, preco, empresaId, descricao, quantidadeEstoque) VALUES('6', 'Creme para Olhos', 40, '1', 'Creme rico e hidratante para reduzir linhas finas e círculos escuros', 30);
INSERT INTO produto(id, nome, preco, empresaId, descricao, quantidadeEstoque) VALUES('7', 'Máscara Facial', 25, '1', 'Máscara facial detoxificante para purificar e nutrir a pele', 30);
INSERT INTO produto(id, nome, preco, empresaId, descricao, quantidadeEstoque) VALUES('8', 'Esmalte de Unha', 12, '1', 'Esmalte de unha de longa duração e resistente a rachaduras', 40);
INSERT INTO produto(id, nome, preco, empresaId, descricao, quantidadeEstoque) VALUES('9', 'Lote Corporal', 28, '1', 'Lote corporal hidratante para pele macia e saudável', 25);
INSERT INTO produto(id, nome, preco, empresaId, descricao, quantidadeEstoque) VALUES('10', 'Creme para Mãos', 18, '1', 'Creme intensivo para mãos para combater a secura e o rachadura', 30);
INSERT INTO produto(id, nome, preco, empresaId, descricao, quantidadeEstoque) VALUES('11', 'Limpeza Facial', 22, '1', 'Limpeza facial suave e não-espumante para todos os tipos de pele', 20);
INSERT INTO produto(id, nome, preco, empresaId, descricao, quantidadeEstoque) VALUES('12', 'Sabonete Corporal', 20, '1', 'Sabonete corporal hidratante para pele macia e limpa', 25);
INSERT INTO produto(id, nome, preco, empresaId, descricao, quantidadeEstoque) VALUES('13', 'Tônico', 25, '1', 'Tônico equilibrante para ajudar a regular o pH da pele', 20);
INSERT INTO produto(id, nome, preco, empresaId, descricao, quantidadeEstoque) VALUES('14', 'Soro para Olhos', 50, '1', 'Soro concentrado para olhos para reduzir linhas finas e círculos escuros', 15);
INSERT INTO produto(id, nome, preco, empresaId, descricao, quantidadeEstoque) VALUES('15', 'Perfume', 60, '1', 'Perfume de longa duração e fragrância para mulheres', 10);
INSERT INTO produto(id, nome, preco, empresaId, descricao, quantidadeEstoque) VALUES('16', 'Conjunto de Pincéis de Maquiagem', 120, '1', 'Conjunto de pincéis de maquiagem profissional para aplicação perfeita', 5);
INSERT INTO produto(id, nome, preco, empresaId, descricao, quantidadeEstoque) VALUES('17', 'Creme Anti-Idade', 150, '1', 'Creme rico e anti-idade para reduzir linhas finas e rugas', 50);
INSERT INTO produto(id, nome, preco, empresaId, descricao, quantidadeEstoque) VALUES('18', 'Paleta de Sombras', 80, '1', 'Paleta de sombras de alta pigmentação com 12 cores', 35);
INSERT INTO produto(id, nome, preco, empresaId, descricao, quantidadeEstoque) VALUES('19', 'Batom', 40, '1', 'Batom hidratante em uma variedade de cores vibrantes', 25);
INSERT INTO produto(id, nome, preco, empresaId, descricao, quantidadeEstoque) VALUES('20', 'Kit de Cuidado com a Pele', 180, '1', 'Kit de cuidado com a pele completo para pele saudável e radiante', 40);

INSERT INTO servico(id, name, price, empresaId, descricao) VALUES('1', 'Análise de Pele Personalizada', 150, '1', 'Uma consulta individualizada com um dermatologista');
INSERT INTO servico(id, name, price, empresaId, descricao) VALUES('2', 'Maquiagem para Eventos', 250, '1', 'Serviço de maquiagem profissional para ocasiões especiais como casamentos, formaturas ou eventos importantes');
INSERT INTO servico(id, name, price, empresaId, descricao) VALUES('3', 'Tratamento Facial Relaxante', 180, '1', 'Tratamento que utiliza produtos de alta qualidade para nutrir a pele e proporcionar relaxamento');
INSERT INTO servico(id, name, price, empresaId, descricao) VALUES('4', 'Corte de Cabelo Personalizado', 80, '1', 'Corte de cabelo feito por um profissional experiente para atender às necessidades individuais');
INSERT INTO servico(id, name, price, empresaId, descricao) VALUES('5', 'Pintura de Unhas', 30, '1', 'Pintura de unhas com esmalte de alta qualidade e longa duração');
INSERT INTO servico(id, name, price, empresaId, descricao) VALUES('6', 'Depilação com Cera', 40, '1', 'Depilação com cera quente ou fria para remover pelos indesejados');
INSERT INTO servico(id, name, price, empresaId, descricao) VALUES('7', 'Massagem Corporal', 120, '1', 'Massagem corporal relaxante para aliviar estresse e tensão');
INSERT INTO servico(id, name, price, empresaId, descricao) VALUES('8', 'Tratamento de Sobrancelhas', 25, '1', 'Tratamento de sobrancelhas para dar forma e definição');
INSERT INTO servico(id, name, price, empresaId, descricao) VALUES('9', 'Lifting Facial', 200, '1', 'Tratamento facial que ajuda a reduzir linhas finas e rugas');
INSERT INTO servico(id, name, price, empresaId, descricao) VALUES('10', 'Tratamento de Pele com Luz Pulsada', 150, '1', 'Tratamento de pele que utiliza luz pulsada para reduzir acne e hidratar a pele');

INSERT INTO produtosconsumidos(id, clienteId, produtoId) VALUES('1', '1', 1);
INSERT INTO produtosconsumidos(id, clienteId, produtoId) VALUES('2', '1', 3);
INSERT INTO produtosconsumidos(id, clienteId, produtoId) VALUES('3', '1', 6);
INSERT INTO produtosconsumidos(id, clienteId, produtoId) VALUES('4', '2', 2);
INSERT INTO produtosconsumidos(id, clienteId, produtoId) VALUES('5', '3', 8);
INSERT INTO produtosconsumidos(id, clienteId, produtoId) VALUES('6', '3', 2);
INSERT INTO produtosconsumidos(id, clienteId, produtoId) VALUES('7', '3', 3);
INSERT INTO produtosconsumidos(id, clienteId, produtoId) VALUES('8', '3', 10);
INSERT INTO produtosconsumidos(id, clienteId, produtoId) VALUES('9', '4', 20);
INSERT INTO produtosconsumidos(id, clienteId, produtoId) VALUES('10', '4', 19);
INSERT INTO produtosconsumidos(id, clienteId, produtoId) VALUES('11', '5', 18);
INSERT INTO produtosconsumidos(id, clienteId, produtoId) VALUES('12', '5', 17);
INSERT INTO produtosconsumidos(id, clienteId, produtoId) VALUES('13', '4', 10);
INSERT INTO produtosconsumidos(id, clienteId, produtoId) VALUES('14', '4', 9);
INSERT INTO produtosconsumidos(id, clienteId, produtoId) VALUES('15', '4', 4);
INSERT INTO produtosconsumidos(id, clienteId, produtoId) VALUES('16', '6', 5);
INSERT INTO produtosconsumidos(id, clienteId, produtoId) VALUES('17', '6', 4);
INSERT INTO produtosconsumidos(id, clienteId, produtoId) VALUES('18', '7', 6);
INSERT INTO produtosconsumidos(id, clienteId, produtoId) VALUES('19', '7', 3);
INSERT INTO produtosconsumidos(id, clienteId, produtoId) VALUES('20', '7', 1);
INSERT INTO produtosconsumidos(id, clienteId, produtoId) VALUES('21', '8', 14);
INSERT INTO produtosconsumidos(id, clienteId, produtoId) VALUES('22', '8', 15);
INSERT INTO produtosconsumidos(id, clienteId, produtoId) VALUES('23', '9', 16);
INSERT INTO produtosconsumidos(id, clienteId, produtoId) VALUES('24', '9', 19);
INSERT INTO produtosconsumidos(id, clienteId, produtoId) VALUES('25', '9', 18);
INSERT INTO produtosconsumidos(id, clienteId, produtoId) VALUES('26', '9', 17);
INSERT INTO produtosconsumidos(id, clienteId, produtoId) VALUES('27', '10', 3);
INSERT INTO produtosconsumidos(id, clienteId, produtoId) VALUES('28', '11', 11);
INSERT INTO produtosconsumidos(id, clienteId, produtoId) VALUES('29', '12', 2);
INSERT INTO produtosconsumidos(id, clienteId, produtoId) VALUES('30', '13', 13);
INSERT INTO produtosconsumidos(id, clienteId, produtoId) VALUES('31', '13', 4);
INSERT INTO produtosconsumidos(id, clienteId, produtoId) VALUES('32', '14', 5);
INSERT INTO produtosconsumidos(id, clienteId, produtoId) VALUES('33', '15', 6);
INSERT INTO produtosconsumidos(id, clienteId, produtoId) VALUES('34', '15', 17);
INSERT INTO produtosconsumidos(id, clienteId, produtoId) VALUES('35', '16', 5);
INSERT INTO produtosconsumidos(id, clienteId, produtoId) VALUES('36', '16', 14);
INSERT INTO produtosconsumidos(id, clienteId, produtoId) VALUES('37', '16', 13);
INSERT INTO produtosconsumidos(id, clienteId, produtoId) VALUES('38', '16', 2);
INSERT INTO produtosconsumidos(id, clienteId, produtoId) VALUES('39', '16', 12);
INSERT INTO produtosconsumidos(id, clienteId, produtoId) VALUES('40', '17', 18);
INSERT INTO produtosconsumidos(id, clienteId, produtoId) VALUES('41', '17', 17);
INSERT INTO produtosconsumidos(id, clienteId, produtoId) VALUES('42', '17', 16);
INSERT INTO produtosconsumidos(id, clienteId, produtoId) VALUES('43', '18', 7);
INSERT INTO produtosconsumidos(id, clienteId, produtoId) VALUES('44', '18', 8);
INSERT INTO produtosconsumidos(id, clienteId, produtoId) VALUES('45', '18', 9);
INSERT INTO produtosconsumidos(id, clienteId, produtoId) VALUES('46', '22', 9);
INSERT INTO produtosconsumidos(id, clienteId, produtoId) VALUES('47', '22', 1);
INSERT INTO produtosconsumidos(id, clienteId, produtoId) VALUES('48', '22', 2);
INSERT INTO produtosconsumidos(id, clienteId, produtoId) VALUES('49', '23', 3);
INSERT INTO produtosconsumidos(id, clienteId, produtoId) VALUES('50', '24', 13);
INSERT INTO produtosconsumidos(id, clienteId, produtoId) VALUES('51', '24', 4);
INSERT INTO produtosconsumidos(id, clienteId, produtoId) VALUES('52', '27', 14);
INSERT INTO produtosconsumidos(id, clienteId, produtoId) VALUES('53', '27', 5);
INSERT INTO produtosconsumidos(id, clienteId, produtoId) VALUES('54', '27', 16);
INSERT INTO produtosconsumidos(id, clienteId, produtoId) VALUES('55', '28', 8);
INSERT INTO produtosconsumidos(id, clienteId, produtoId) VALUES('56', '30', 8);

INSERT INTO servicosconsumidos(id, clienteId, servicoId) VALUES('1', '19', 4);
INSERT INTO servicosconsumidos(id, clienteId, servicoId) VALUES('2', '20', 5);
INSERT INTO servicosconsumidos(id, clienteId, servicoId) VALUES('3', '21', 6);
INSERT INTO servicosconsumidos(id, clienteId, servicoId) VALUES('4', '25', 7);
INSERT INTO servicosconsumidos(id, clienteId, servicoId) VALUES('5', '26', 8);
INSERT INTO servicosconsumidos(id, clienteId, servicoId) VALUES('6', '29', 9);
INSERT INTO servicosconsumidos(id, clienteId, servicoId) VALUES('7', '19', 10);
INSERT INTO servicosconsumidos(id, clienteId, servicoId) VALUES('8', '21', 11);
INSERT INTO servicosconsumidos(id, clienteId, servicoId) VALUES('9', '26', 12);
INSERT INTO servicosconsumidos(id, clienteId, servicoId) VALUES('10', '27', 4);
INSERT INTO servicosconsumidos(id, clienteId, servicoId) VALUES('11', '28', 5);
INSERT INTO servicosconsumidos(id, clienteId, servicoId) VALUES('12', '30', 6);
INSERT INTO servicosconsumidos(id, clienteId, servicoId) VALUES('13', '31', 7);
INSERT INTO servicosconsumidos(id, clienteId, servicoId) VALUES('14', '32', 8);
INSERT INTO servicosconsumidos(id, clienteId, servicoId) VALUES('15', '33', 9);