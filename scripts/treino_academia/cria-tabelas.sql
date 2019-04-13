
drop table if exists TreinoAcademia_GrupoMuscular;
create table TreinoAcademia_GrupoMuscular ( 
	nome  VARCHAR(50) , 
	id  BIGINT AUTO_INCREMENT, 
	imagem  VARCHAR(255) ,
  

	PRIMARY KEY (Id)
); 
drop table if exists TreinoAcademia_SerieTreino;
create table TreinoAcademia_SerieTreino ( 
	id  BIGINT AUTO_INCREMENT, 
	dataCriacao  DATETIME , 
	ativa  TINYINT , 
	dataUltimaExecucao  DATETIME , 
	qtdeExecucao  INTEGER ,
 
	usuarioId BIGINT,  

	PRIMARY KEY (Id)
); 
drop table if exists TreinoAcademia_Exercicio;
create table TreinoAcademia_Exercicio ( 
	id  BIGINT AUTO_INCREMENT, 
	descricao  VARCHAR(50) , 
	imagem  VARCHAR(255) , 
	titulo  VARCHAR(50) , 
	subtitulo  VARCHAR(50) ,
 
	grupoMuscularId BIGINT, 
	diaTreinoId BIGINT, 
	usuarioId BIGINT,  

	PRIMARY KEY (Id)
); 
drop table if exists TreinoAcademia_ExecucaoItemSerie;
create table TreinoAcademia_ExecucaoItemSerie ( 
	id  BIGINT AUTO_INCREMENT, 
	dataHoraInicio  DATETIME , 
	dataHoraFinalizacao  DATETIME , 
	cargaUtilizada  DECIMAL , 
	sucessoRepeticoes  TINYINT , 
	numeroSerie  INTEGER , 
	quantidadeRepeticao  INTEGER ,
 
	diaTreinoId BIGINT, 
	itemSerieId BIGINT, 
	exercicioId BIGINT, 
	usuarioId BIGINT,  

	PRIMARY KEY (Id)
); 
drop table if exists TreinoAcademia_CargaPlanejada;
create table TreinoAcademia_CargaPlanejada ( 
	id  BIGINT AUTO_INCREMENT, 
	valorCarga  DECIMAL , 
	dataInicio  DATETIME , 
	dataFinal  DATETIME , 
	quantidadeRepeticao  INTEGER , 
	ativa  TINYINT , 
	ordemRepeticao  INTEGER ,
 
	itemSerieId BIGINT, 
	usuarioId BIGINT,  

	PRIMARY KEY (Id)
); 
drop table if exists TreinoAcademia_DiaTreino;
create table TreinoAcademia_DiaTreino ( 
	id  BIGINT AUTO_INCREMENT, 
	data  DATETIME , 
	concluido  TINYINT ,
 
	serieTreinoId BIGINT, 
	exercicioId BIGINT, 
	usuarioId BIGINT,  

	PRIMARY KEY (Id)
); 
drop table if exists TreinoAcademia_ItemSerie;
create table TreinoAcademia_ItemSerie ( 
	id  BIGINT AUTO_INCREMENT, 
	ordemExecucao  INTEGER , 
	parametros  VARCHAR(255) ,
 
	serieTreinoId BIGINT, 
	exercicioId BIGINT,  

	PRIMARY KEY (Id)
); 
drop table if exists TreinoAcademia_RegistroPeso;
create table TreinoAcademia_RegistroPeso ( 
	id  BIGINT AUTO_INCREMENT, 
	data  DATETIME , 
	valor  DECIMAL , 
	obs  VARCHAR(255) ,
 
	usuarioId BIGINT,  

	PRIMARY KEY (Id)
); 
drop table if exists TreinoAcademia_Usuario;
create table TreinoAcademia_Usuario ( 
	id  BIGINT AUTO_INCREMENT, 
	nome  VARCHAR(255) , 
	senha  VARCHAR(255) , 
	email  VARCHAR(50) ,
  

	PRIMARY KEY (Id)
); 

