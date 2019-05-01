
repair table TreinoAcademia_GrupoMuscular;
drop table if exists TreinoAcademia_GrupoMuscular;
create table TreinoAcademia_GrupoMuscular ( 
	nome   VARCHAR(50)  , 
	id   VARCHAR(50) , 
	imagem   VARCHAR(255)  ,
  

	PRIMARY KEY (id)
	
	
	
); 
repair table TreinoAcademia_SerieTreino;
drop table if exists TreinoAcademia_SerieTreino;
create table TreinoAcademia_SerieTreino ( 
	id   VARCHAR(50) , 
	dataCriacao   DATETIME  , 
	ativa   TINYINT  , 
	dataUltimaExecucao   DATETIME  , 
	qtdeExecucao   INTEGER  ,
 
	usuarioId VARCHAR(50),
	   

	PRIMARY KEY (id)
	
	
	
); 
repair table TreinoAcademia_Exercicio;
drop table if exists TreinoAcademia_Exercicio;
create table TreinoAcademia_Exercicio ( 
	id   VARCHAR(50) , 
	descricao   VARCHAR(50)  , 
	imagem   VARCHAR(255)  , 
	titulo   VARCHAR(50)  , 
	subtitulo   VARCHAR(50)  ,
 
	grupoMuscularId VARCHAR(50),
	  
	diaTreinoId VARCHAR(50),
	  
	usuarioId VARCHAR(50),
	   

	PRIMARY KEY (id)
	
	
	
); 
repair table TreinoAcademia_ExecucaoItemSerie;
drop table if exists TreinoAcademia_ExecucaoItemSerie;
create table TreinoAcademia_ExecucaoItemSerie ( 
	id   VARCHAR(50) , 
	dataHoraInicio   DATETIME  , 
	dataHoraFinalizacao   DATETIME  , 
	cargaUtilizada   DECIMAL  , 
	sucessoRepeticoes   TINYINT  , 
	numeroSerie   INTEGER  , 
	quantidadeRepeticao   INTEGER  ,
 
	diaTreinoId VARCHAR(50),
	  
	itemSerieId VARCHAR(50),
	  
	exercicioId VARCHAR(50),
	  
	usuarioId VARCHAR(50),
	   

	PRIMARY KEY (id)
	
	
	
); 
repair table TreinoAcademia_CargaPlanejada;
drop table if exists TreinoAcademia_CargaPlanejada;
create table TreinoAcademia_CargaPlanejada ( 
	id   VARCHAR(50) , 
	valorCarga   DECIMAL  , 
	dataInicio   DATETIME  , 
	dataFinal   DATETIME  , 
	quantidadeRepeticao   INTEGER  , 
	ativa   TINYINT  , 
	ordemRepeticao   INTEGER  ,
 
	itemSerieId VARCHAR(50),
	  
	usuarioId VARCHAR(50),
	   

	PRIMARY KEY (id)
	
	
	
); 
repair table TreinoAcademia_DiaTreino;
drop table if exists TreinoAcademia_DiaTreino;
create table TreinoAcademia_DiaTreino ( 
	id   VARCHAR(50) , 
	data   DATETIME  , 
	concluido   TINYINT  ,
 
	serieTreinoId VARCHAR(50),
	  
	exercicioId VARCHAR(50),
	  
	usuarioId VARCHAR(50),
	   

	PRIMARY KEY (id)
	
	
	
); 
repair table TreinoAcademia_ItemSerie;
drop table if exists TreinoAcademia_ItemSerie;
create table TreinoAcademia_ItemSerie ( 
	id   VARCHAR(50) , 
	ordemExecucao   INTEGER  , 
	parametros   VARCHAR(255)  ,
 
	serieTreinoId VARCHAR(50),
	  
	exercicioId VARCHAR(50),
	   

	PRIMARY KEY (id)
	
	
	
); 
repair table TreinoAcademia_RegistroPeso;
drop table if exists TreinoAcademia_RegistroPeso;
create table TreinoAcademia_RegistroPeso ( 
	id   VARCHAR(50) , 
	data   DATETIME  , 
	valor   DECIMAL  , 
	obs   VARCHAR(255)  ,
 
	usuarioId VARCHAR(50),
	   

	PRIMARY KEY (id)
	
	
	
); 
repair table TreinoAcademia_Usuario;
drop table if exists TreinoAcademia_Usuario;
create table TreinoAcademia_Usuario ( 
	id   VARCHAR(50) , 
	nome   VARCHAR(255)  , 
	senha   VARCHAR(255)  , 
	email   VARCHAR(50)  ,
  

	PRIMARY KEY (id)
	
	
	
); 
repair table TreinoAcademia_ExecucaoCarga;
drop table if exists TreinoAcademia_ExecucaoCarga;
create table TreinoAcademia_ExecucaoCarga ( 
	id   VARCHAR(50) , 
	dataHora   DATETIME  , 
	valorCarga   DECIMAL  , 
	repeticao   INTEGER  , 
	sequencia   INTEGER  ,
 
	execucaoItemSerieId VARCHAR(50),
	   

	PRIMARY KEY (id)
	
	
	
); 

alter table TreinoAcademia_GrupoMuscular 

alter table TreinoAcademia_SerieTreino 
ADD FOREIGN KEY (usuarioId) REFERENCES TreinoAcademia_Usuario(id) ON DELETE CASCADE, 

alter table TreinoAcademia_Exercicio 
ADD FOREIGN KEY (grupoMuscularId) REFERENCES TreinoAcademia_GrupoMuscular(id) ON DELETE CASCADE, 
ADD FOREIGN KEY (diaTreinoId) REFERENCES TreinoAcademia_DiaTreino(id) ON DELETE CASCADE, 
ADD FOREIGN KEY (usuarioId) REFERENCES TreinoAcademia_Usuario(id) ON DELETE CASCADE, 

alter table TreinoAcademia_ExecucaoItemSerie 
ADD FOREIGN KEY (diaTreinoId) REFERENCES TreinoAcademia_DiaTreino(id) ON DELETE CASCADE, 
ADD FOREIGN KEY (itemSerieId) REFERENCES TreinoAcademia_ItemSerie(id) ON DELETE CASCADE, 
ADD FOREIGN KEY (exercicioId) REFERENCES TreinoAcademia_Exercicio(id) ON DELETE CASCADE, 
ADD FOREIGN KEY (usuarioId) REFERENCES TreinoAcademia_Usuario(id) ON DELETE CASCADE, 

alter table TreinoAcademia_CargaPlanejada 
ADD FOREIGN KEY (itemSerieId) REFERENCES TreinoAcademia_ItemSerie(id) ON DELETE CASCADE, 
ADD FOREIGN KEY (usuarioId) REFERENCES TreinoAcademia_Usuario(id) ON DELETE CASCADE, 

alter table TreinoAcademia_DiaTreino 
ADD FOREIGN KEY (serieTreinoId) REFERENCES TreinoAcademia_SerieTreino(id) ON DELETE CASCADE, 
ADD FOREIGN KEY (exercicioId) REFERENCES TreinoAcademia_Exercicio(id) ON DELETE CASCADE, 
ADD FOREIGN KEY (usuarioId) REFERENCES TreinoAcademia_Usuario(id) ON DELETE CASCADE, 

alter table TreinoAcademia_ItemSerie 
ADD FOREIGN KEY (serieTreinoId) REFERENCES TreinoAcademia_SerieTreino(id) ON DELETE CASCADE, 
ADD FOREIGN KEY (exercicioId) REFERENCES TreinoAcademia_Exercicio(id) ON DELETE CASCADE, 

alter table TreinoAcademia_RegistroPeso 
ADD FOREIGN KEY (usuarioId) REFERENCES TreinoAcademia_Usuario(id) ON DELETE CASCADE, 

alter table TreinoAcademia_Usuario 

alter table TreinoAcademia_ExecucaoCarga 
ADD FOREIGN KEY (execucaoItemSerieId) REFERENCES TreinoAcademia_ExecucaoItemSerie(id) ON DELETE CASCADE, 



