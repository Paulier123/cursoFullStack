describe pessoas;
alter table pessoas
rename to gafanhotos;

alter table pessoas
add column profissao varchar(10) after nome;

alter table pessoas
drop column profissao;

alter table pessoas
modify column profissao varchar(20) not null default'';

alter table pessoas 
change column profissao prof varchar(20);

alter table pessoas 
add codigo int first;

select * from pessoas;


create table if not exists cusros (
nome varchar(30) not null unique,
descricao text,
carga int unsigned,
totaulas int unsigned,
ano year default '2016'
)default charset=utf8;

alter table cusros
rename to cursos;

describe cursos;

alter table cursos
add column idcurso int first;

alter table cursos
add primary key (idcurso);


create table if not exists teste(
id int,
nome varchar(30),
idade int
);
alter table teste
add column id int first;

insert into teste value
('1','Pedro','30'),
('2','Simone','20'),
('3','Alan','45');
 
select * from teste