
use cadastro;
insert into cursos values
('1','HTML4', 'Curso de HTML5', '40','37','2014'),
('2','Algoritimos', 'Logica de Programação', '20','15','2014'),
('3','Photoshop', 'Dicas de Photoshop CC', '10','8','2014'),
('4','PGP', 'Curso de PHP para iniciantes', '40','20','2010'),
('5','Jarva', 'Introdução a linguagem Java', '10','29','2000'),
('6','MySQL', 'Banco de dados MySQL', '30','15','2016'),
('7','Word', 'Curso Completo de Word', '40','30','2016'),
('8','Sapateado', 'Dicas Ritmicas', '40','30','2018'),
('9','Cozinha Árabe', 'Aprenda a fazer kibe', '40','30','2018'),
('10','Youtuber', 'Gerar polemica e ganhar inscritos', '5','2','2018');

select * from cursos;

update cursos
set nome = 'Java', carga = '4', ano = '2015'
WHERE idcurso = '5'
limit 1;

select * from cursos;

delete from cursos
where idcurso = '8';

select *from cursos;

delete from cursos
where ano = '2018';

use cursos;
select * from cursos;