
drop table if exists TreinoAcademia_GrupoMuscular;
create table TreinoAcademia_GrupoMuscular ( 
	Nome  VARCHAR(50), 
	Id  INTEGER, 
	Imagem  VARCHAR(255),
	PRIMARY KEY (Id)
); 
drop table if exists TreinoAcademia_SerieTreino;
create table TreinoAcademia_SerieTreino ( 
	Id  INTEGER, 
	DataCriacao  DATETIME, 
	Ativa  TINYINT, 
	DataUltimaExecucao  DATETIME, 
	QtdeExecucao  INTEGER,
	PRIMARY KEY (Id)
); 
drop table if exists TreinoAcademia_Exercicio;
create table TreinoAcademia_Exercicio ( 
	Id  INTEGER, 
	Descricao  VARCHAR(50), 
	Imagem  VARCHAR(255), 
	Titulo  VARCHAR(50), 
	Subtitulo  VARCHAR(50),
	PRIMARY KEY (Id)
); 
drop table if exists TreinoAcademia_ExecucaoItemSerie;
create table TreinoAcademia_ExecucaoItemSerie ( 
	Id  INTEGER, 
	DataHoraInicio  DATETIME, 
	DataHoraFinalizacao  DATETIME, 
	CargaUtilizada  DECIMAL, 
	SucessoRepeticoes  TINYINT, 
	NumeroSerie  INTEGER, 
	QuantidadeRepeticao  INTEGER,
	PRIMARY KEY (Id)
); 
drop table if exists TreinoAcademia_CargaPlanejada;
create table TreinoAcademia_CargaPlanejada ( 
	Id  INTEGER, 
	ValorCarga  DECIMAL, 
	DataInicio  DATETIME, 
	DataFinal  DATETIME, 
	QuantidadeRepeticao  INTEGER, 
	Ativa  TINYINT, 
	OrdemRepeticao  INTEGER,
	PRIMARY KEY (Id)
); 
drop table if exists TreinoAcademia_DiaTreino;
create table TreinoAcademia_DiaTreino ( 
	Id  INTEGER, 
	Data  DATETIME, 
	Concluido  TINYINT,
	PRIMARY KEY (Id)
); 
drop table if exists TreinoAcademia_ItemSerie;
create table TreinoAcademia_ItemSerie ( 
	Id  INTEGER, 
	OrdemExecucao  INTEGER, 
	Parametros  VARCHAR(255),
	PRIMARY KEY (Id)
); 
drop table if exists TreinoAcademia_RegistroPeso;
create table TreinoAcademia_RegistroPeso ( 
	Id  INTEGER, 
	Data  DATETIME, 
	Valor  DECIMAL, 
	Obs  VARCHAR(255),
	PRIMARY KEY (Id)
); 
drop table if exists TreinoAcademia_Usuario;
create table TreinoAcademia_Usuario ( 
	Id  INTEGER, 
	Nome  VARCHAR(255), 
	Senha  VARCHAR(255), 
	Email  VARCHAR(50),
	PRIMARY KEY (Id)
); 

