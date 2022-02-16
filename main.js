var prompt = require('prompt-sync')();

// Variáveis de funcionamento geral do jogo

do{ // Responsável pelo loop geral do jogo

class Jogo{
	constructor(controle,controle2,leitor,leitor2){
		this.controle=controle;
		this.controle2=controle2;
		this.leitor=leitor;
		this.leitor2=leitor2;
}

criar_personagem(){
	do{
		console.log("Digite o nome do personagem:");
		jogo.leitor2=prompt();
		jogador.nick=jogo.leitor2;
		console.log(`Tem certeza que deseja se chamar ${jogador.nick}?`);
		console.log("Digite [1] para SIM, [2] NÃO");
		jogo.leitor=+prompt();

		if(jogo.leitor==1){
			console.log(`Boa aventura ${jogador.nick}`);
			jogo.leitor2="";
			jogo.controle++;
		}else{

		}
	prompt("Tecle ENTER para continuar:");
	console.clear();

	}while(jogo.controle==0);
}

historia(){
	console.log(`            
	                         Os 6 Caminhos   

                         
	História:

	Antes da criação dos mundos, apenas um Deus existia na escuridão 
	imensurável do vazio. Talvez nunca iremos saber a causa, mais sabemos 
	que ele se dividiu em 4, gerando 4 mundos. A história que você fará parte, 
	se passa no mundo das ilusões, chamado Drain ou quarto mundo, e como 
	todos os outros, possui seus Deuses menores ou celestiais.
	
	Capítulo 1 (O 1º desafio!)
	
	 A sua aventura se passa em um planeta hostil, com seres rudimentares 
	e de sutil consciência, atributos que levaram os Deuses menores a uma 
	reunião. No fim da votação sobre a destruição de todos os seres do planeta, 
	uma Deusa chamada Galad solicitou uma ultima chance com base em 4 criaturas 
	que se destacavam em inteligência. A proposta era enviar 6 celestiais 
	voluntários para guiá-las e através dos mesmos, preservar todas as outras 
	criaturas. Após os 6 se apresentarem, tiveram os seus poderes reduzidos,
	e se tornaram mortais. 
	
	Você foi um dos voluntários, e foi destinado aos Anões. 
	Os anões são os mais favorecidos em atributos físicos entre os destinados 
	aos 6 celestiais, porém são menos sábios e carismáticos`);

	prompt("Tecle ENTER para continuar:");
	console.clear();
}

narrativa1(){
	console.log(
	`
	                           Floresta de Aldruin

	A floresta abriga uma das maiores diversidades de vida animal e vegetal 
	do planeta. Diante de toda a sua beleza e explendor, criaturas mortais ficam 
	a espreita de uma presa distraída. Frondosas árvores cobrem boa parte 
	da lúz do lugar, enquanto uma diversidade de cores nas flores escondem 
	inúmeras virtudes em seu interior. Afluentes de água límpida e abundância 
	de alimento, tornam o lugar um enorme laboratório da vida.
	
	Você faz a primeira visita a tribo Duir, conquistando a afeição de Guldur,o líder, 
	após demonstrar uma ferramenta feita com a pedra mais dura vista até aquele momento. 
	Na verdade, você estava introduzindo o ferro a cultura Duir.
	
	Você decide que já é hora de dar um passo maior, e percebendo as fraquezas da tribo, 
	decide convencê-los da necessidade de criar uma alinça com as tribos vizinhas.

	Você fala sobre os rumores de uma bebida feita com grãos fermentados, 
	que promete levar as festividades a outro nível. Guldur aprova a expedição, 
	e ordena que seus coletores consigam os ingredientes que você precisava para 
	fazer fagulhas e esféras, tecnologia muito a frente daquele tempo, usadas por 
	você como defesa contra diversas ameaças.

	Logo pela manhã, você pega a trilha dos centauros, e segue sua jornada em direção
	ao vale do esquecimento, território da tribo mais próxima a tribo  Duir.`)

	prompt("Tecle ENTER para continuar:");
	console.clear();
}

narrativa2(){
	console.log(`
	                            Vale do esquecimento

	O local já fez parte da floresta de Aldruin, perdendo toda a sua exuberância 
	e beleza após a queda de um fragmento espacial. Fendas se formaram em locais 
	que antes eram grandes rios,que hoje, abrigam inúmeras criaturas que odeiam a lúz. 
	A vida carece de recursos e a cada segundo luta afavor da existência
	
	                               O Som do medo
	
	Durante todo o percurso ${jogador.nick} mantém silêncio, evitando atrair a atenção
	de terriveis criaturas que habitam o local.	A poucas horas de chegar ao fim da 
	expedição, algo terrível acontece. Um estrondoso e medonho ruído sai de uma das 
	fendas. É uma enorme criatura, com aparência humanoide. Desengonçada se aproxima
	rapidamente com um enorme tacape em mãos, desferindo um ataque em sua direção.
	
	Rapidamente você desvia...`)

	prompt("Tecle ENTER para continuar:");
	console.clear();
	
}

narrativa_final(){
	console.log(`
	Após enfrentar muitos perigos, você chega ao vale do esquecimento, território 
	dos parentes mais próximos do povo Duir, os Nargos. A tribo se encontra ao redor 
	de um pequeno lago,um dos únicos com água límpida, capaz de manter a vida no local.
	A recepção já era de se imaginar...

	Os guardas da tribo não demonstram agressividade, pois a aparência de um sábio não 
	transparece ameaça a tribo. Mesmo assim os portões não se abrem de imediato, e  sem 
	perder tempo, você retira um pequeno baú de um de seus bolsos, o abrindo rapidamente. 
	O brilho do conteúdo da caixa faz com que o líder, Bauer, pedisse que os portões 
	abrissem para o humilde e generoso convidado. 
	
	Apesar de desconfiados e pouco sociáveis,os anões se dobram facilmente com tudo que 
	brilha e reluz.  Adentrando ao local, você é acompanhado até a tenda principal, onde 
	Bauer o recebe.
	Após algumas horas de conversa com o líder, você o convence a fazer uma expedição 
	de volta, levando alguns barris da sua famosa bebida de grãos fermentados, criando 
	assim, a primeira aliança entre tribos anões.
	 
	continua...fim!`)

	prompt("Tecle ENTER para continuar:");
	console.clear();

}

}

// Passando referências para cada variável da classe Jogo
const jogo = new Jogo(0,0,0,"");

// Classe responsável pela transição dos dias
class Ciclo {
	constructor(dia,periodo) {
		this.dia=dia;
		this.periodo=periodo;
	}

	// Função responsável pela passagem os dias 
	async passTempo() {
		if (this.periodo === "Manhã") {
			this.periodo = "Tarde";
		} else if (this.periodo === "Tarde") {
			this.periodo = "Noite";
		} else {
			this.periodo = "Manhã";
			this.dia++;
		}
	}
	

}
// Passando referências para cada variável da classe ciclo
const ciclo  = new Ciclo(1,"Manhã");

// classe responsável pelo controle de mapas

class Map{
	constructor(local,regiao,armazena_local,armazena_regiao){
		this.local=local;
		this.regiao=regiao;
		this.armazena_local=armazena_local;
		this.armazena_regiao=armazena_regiao;
	}

	pass_local(){ 
        if(map.armazena_local ===map.local[0]) 
        {
			 map.armazena_local=map.local[1];
        }else if(map.armazena_local===map.local[1]){
			map.armazena_local=map.local[2];
		}else{
			map.armazena_regiao=map.armazena_regiao[1];
		}
    }
	// função de batalha
	batalha(inimigo){
		do{
			let resposta_jogador=+prompt("Digite [1] ATACAR ou [2] para FUGIR:");
			if(resposta_jogador==1){
				console.log("[1] perícia cajado");
				console.log("[2] Fagulha");
				console.log("[3] Esfera Explosiva");
				resposta_jogador=0;
				resposta_jogador=+prompt("Digite uma das opções:");
				if(resposta_jogador==1){
					inimigo.saude-=jogador.dano_ataque[0];
					jogador.saude-=inimigo.ataque;
					console.log(`Saúde jogador:${jogador.saude}`);
					console.log(`Saúde inimigo:${inimigo.saude}`);
					prompt("Digite ENTER para continuar:");
					console.clear();				
				}else if(resposta_jogador==2){// Ataque Fagulha
					for(let x=0;x<3;x++){
						if(jogador.ataque[x]=="fagulha"){							
							jogador.ataque[x]="vazio";							
							inimigo.saude-=jogador.dano_ataque[1];
					        jogador.saude-=inimigo.ataque;	
					        console.log(`Saúde jogador:${jogador.saude}`);
					        console.log(`Saúde inimigo:${inimigo.saude}`);
					        prompt("Digite ENTER para continuar:");
					        console.clear();												
						}else{
							if(jogador.ataque[x]=="vazio"){
								console.log("você não tem mais esse ataque!");
							}						
						}																								
					}	
					
				}else if(resposta_jogador==3){
					for(let x=0;x<3;x++){
						if(jogador.ataque[x]=="esfera_explosiva"){
							jogador.ataque[x]="vazio";
							inimigo.saude-=jogador.dano_ataque[2];
					        jogador.saude-=inimigo.ataque;
					        console.log(`Saúde jogador:${jogador.saude}`);
					        console.log(`Saúde inimigo:${inimigo.saude}`);
					        prompt("Digite ENTER para continuar:");
					        console.clear();									
						}else{
							if(jogador.ataque[x]=="vazio"){
								console.log("você não tem mais esse ataque!");
							}						
						}						
					}					
					
				}else{
					console.log("Dígito inválido!");
				}				

			}else{
				return ;
			}
			if(jogador.saude<=0){
				console.log(`Você sobreviveu por ${ciclo.dia} dias.`);	
				console.log("Você foi morto em combate!");
				console.log("GAME OVER!!!");
				jogo.controle++;
			}
			
			if(inimigo.saude<=0){
				console.log("Você venceu!!!");
				jogo.controle++;
			}
			prompt("Tecle ENTER para continuar:");// alterado hoje
	        console.clear();

		}while(inimigo.saude>0 && jogador.saude>0);
	}

}
// Passando referências para cada variável da classe ciclo
const map  = new Map(["Trilha dos Centauros","Gruta da pedra cortante","Colina dos Carneiros"],["Floresta de Aldruin",],"Trilha dos Centauros","Floresta de Aldruin");


// Classe correspondente ao jogador

class Jogador {
	constructor(nick,saude,ouro,ataque,dano_ataque,iten) {
		this.nick = nick;
		this.saude = saude;
		this.ouro = ouro;
		this.ataque = ataque;
		this.dano_ataque=dano_ataque;		
		this.iten = iten;		
	}
	// Funções de controle de ação do personagem>>>

	// Função que imprime o inventário geral do jogador

	status_geral(){
		do{
		console.log("--------------------Inventário---------------")
		console.log(` Nome: ${jogador.nick} - Saúde: ${jogador.saude}`)
		console.log("                                             ")
		console.log(` Ataques:                                    `)
		console.log(`[${jogador.ataque[0]}]-[${jogador.ataque[1]}]-[${jogador.ataque[2]}]`)
		console.log("                                             ")
		console.log(" itens:                                      ")
		console.log(`{${jogador.iten[0]}] - [${jogador.iten[1]}] - [${jogador.iten[2]}]`)
		console.log(`{${jogador.iten[3]}] - [${jogador.iten[4]}] - [${jogador.iten[5]}]`)
		console.log(`                                   Ouro:[${jogador.ouro}]`)
		console.log("_____________________________________________")
		console.log("Para sair digite [1]");
		jogo.leitor=prompt();
		
		if(jogo.leitor>=1){
			jogo.controle++;
		}
		prompt("Tecle ENTER para continuar:");// alterado hoje
	    console.clear();	
	
		}while(jogo.controle==0)	
	}

	// Função para utilizar, adicionar e excluir itens

	bolsa(){ 
		do{
			console.log("--------------------bolsa------------------");			
			console.log("itens:                                  ");			
			console.log(`[0]${jogador.iten[0]} - [1]${jogador.iten[1]} - [2]${jogador.iten[2]}`);
		    console.log(`[3]${jogador.iten[3]} - [4]${jogador.iten[4]} - [5]${jogador.iten[5]}`);
		    console.log("___________________________________________");			
			console.log("[1] para utilizar algum iten:");
			console.log("[2] para excluir algum iten]");
			console.log("[3] para fechar a bolsa]");
			console.log("___________________________________________");	
			jogo.leitor=+prompt();

			if(jogo.leitor==1){
				console.log("Digite o número do iten que deseja utilizar:");
				jogo.leitor=0;
				jogo.leitor=+prompt();
				if(jogador.iten[jogo.leitor]=="poção_cura"){
					jogador.saude=120;
					jogador.iten[jogo.leitor]="vazio"; 

				}else{
					console.log("Local vazio, escolha outra opção!")
					jogo.leitor=0;
				}
					
			

				}else if(jogo.leitor==2){
					console.log("Digite o número do iten que deseja excluir:");
					jogo.leitor=0;
				    jogo.leitor=+prompt();

					if(jogador.iten[jogo.leitor]=="vazio"){
						console.log("Não existe iten no local!");
	
					}else{
						jogador.iten[jogo.leitor]="vazio";
						jogo.leito=0;		
					}
				}else{
					jogo.controle++;
				}				
			}while(jogo.controle==0)

	}

	// Função responsável pela compra de itens. Poderá ser acessada a qualquer momento.

	loja_bolso(){
		jogo.leitor=0;
		jogo.controle=0;
		do{
			console.log("---------------loja de bolso-----------");			
			console.log("itens:                                  ");			
			console.log(`[0]${iten.nome[0]} - ouro:${iten.valor[0]} `);
		    console.log(`[1]${iten.nome[1]} - ouro:${iten.valor[1]} `);
			console.log(`[2]${iten.nome[2]} - ouro:${iten.valor[2]}\n`);
			console.log(`${jogador.nick} ouro: ${jogador.ouro}`);
		    console.log("___________________________________________");			
			console.log("Digite [1] para comprar:");			
			console.log("Digite [2] para guardar o mercado de bolso]");
			console.log("___________________________________________");	
			jogo.leitor=+prompt();

			if(jogo.leitor==1){
				console.log("Digite o número do item que deseja comprar:");
				jogo.leitor=0;
				jogo.leitor=+prompt();
				if(jogo.leitor>=0 || jogo.leitor<=2){
					if(jogador.ouro>=iten.valor[jogo.leitor]){
						for(let x=0;x<6;x++){
							if(jogador.iten[x]==="vazio"){
								console.log(`Ouro: ${jogador.ouro}`);
								jogador.iten[x]=iten.nome[jogo.leitor];
								jogador.ouro-=iten.valor[jogo.leitor];
								break;						
						
							}else{
								do{
									jogo.leitor=0;
									console.log("Bolsa cheia! Deseja excluir algum iten?\n");						
									
										console.log("--------------------bolsa------------------");			
			                            console.log("itens:                                  ");			
			                            console.log(`[0]${jogador.iten[0]} - [1]${jogador.iten[1]} - [2]${jogador.iten[2]}`);
		                                console.log(`[3]${jogador.iten[3]} - [4]${jogador.iten[4]} - [5]${jogador.iten[5]}`);
		                                console.log("___________________________________________");													
										console.log("Digite o número correspondente ao iten[?]:");
										console.log("Digite [7] para sair:");
									    jogo.leitor=prompt();

										if(jogo.leitor==0 || jogo.leitor<=5){	
											jogador.iten[jogo.leitor]="vazio";
											console.log(`${jogador.iten[jogo.leitor]} foi removido da bolsa!`)
										}else{
											jogo.controle++;
										}
										
									}while(jogo.controle==0);
																			
							}
						}
					
						
					}else{
						console.log("Ouro insuficiênte!");
					}

				}else{
					console(`Erro: ${jogo.leitor}`)		
					jogo.controle++;
				}		
			

			}else{
				jogo.controle++;
			}
			prompt("Tecle ENTER para continuar:");
	        console.clear();	
		
		}while(jogo.controle==0);
		
	}
	// Função responsável pela locomoção do personagem
	avancar(){ // 
	
		if(ciclo.periodo==="Manhã" && map.armazena_local==="Trilha dos Centauros"){
			jogo.narrativa1();
			ciclo.passTempo();
			map.pass_local();			
		}else if(ciclo.periodo==="noite" && map.armazena_local==="Trilha dos Centauros"){
			console.log("Uma cobra gigante se aproxima!");
			ciclo.passTempo();
			map.pass_local();
			map.batalha(cobra_gigante);						
		}else if(ciclo.periodo==="Tarde" && map.armazena_local==="Gruta da pedra cortante"
		){
			console.log("Um inimigo se aproxima!");
			ciclo.passTempo();
			map.pass_local();
			map.batalha(lagarto_humanoide);
		}else if(ciclo.periodo==="Tarde" && map.armazena_local==="Colina dos Carneiros"){
				console.log("Um inimigo se aproxima!");
				ciclo.passTempo();
				map.pass_local();
				map.batalha(grupo_de_ladrões);
		}else if(map.armazena_regiao==="Vale do Esquecimento"){
					jogo.narrativa2
					ciclo.passTempo();
					map.pass_local();
					map.batalha(troll_da_floresta);
					controle++;
		}else{
			console.log("Nenhum perigo por enquanto.Você avança!")
			ciclo.passTempo();
			map.pass_local();
		}
	}		
	
	// Função que apresenta um menu de opções sobre as ações do jogador
	menu_acoes(){
		jogador.status();		
		jogo.controle=0;
	do{	
	console.log("Você gostaria de tomar que atitude?");
	console.log("[1] Para seguir viagem");
	console.log("[2] para abrir Loja de bolso");
	console.log("[3] para ver estatus geral")
	console.log("[4] para abrir a bolsa");
	console.log("[5] para sair do jogo");
	jogo.leitor = +prompt("Digite a opção desejada:");
	//console.log(jogador.leitor);
	
	if (jogo.leitor===1){
	jogador.avancar();
	}else if(jogo.leitor===2){
	jogador.loja_bolso();
	}else if(jogo.leitor===3){
		jogador.status_geral();
	}else if(jogo.leitor==4){
		jogador.bolsa();
	}else{
	console.log("você saiu do jogo!!!")
	jogo.controle++;
	}
	prompt("Tecle ENTER para continuar:");
	console.clear();
	}while(jogo.controle==0)	 // alterado hoje
	
} 

// Função que imprime todos os status necessários em tela

status(){ 
	console.log(`nome:${jogador.nick}`);
	console.log(`saúde:${jogador.saude}`);
	console.log(`dia:${ciclo.dia}`);
	console.log(`período:${ciclo.periodo}`);
	console.log(`local:${map.armazena_local}`);
	console.log(`Região:${map.armazena_regiao}`);
}

} 
// Passando referências para cada variável da classe Jogador
const jogador = new Jogador("",80,60,["pericia_cajado","fagulha","esfera_explosiva"],[10,25,35],["poção_cura","vazio","vazio","vazio","vazio","vazio"]);

// Classe que irá receber os valores dos itens

class Iten{
	constructor(nome,valor){

		this.nome=nome;
		this.valor=valor;
	}
}
// Passando referências para cada variável da classe Iten
const iten = new Iten(["poção_cura","esfera_explosiva","fagulha"],[50,20,15]);


// class responsável pela criação dos inimigos

class Inimigo{ 
	constructor(nome,saude,ataque,ouro){
		this.nome=nome;
		this.saude=saude;
		this.ataque=ataque;
		this.ouro=ouro;
	} 

}
// Passando referências para cada variável da classe Inimigo
const cobra_gigante = new Inimigo("cobra_gigante",20,15,0);
const lagarto_humanoide = new Inimigo("Lagarto_humanoide",30,15,10);
const grupo_de_ladrões = new Inimigo("grupo_de_ladrões",45,20,40);
const troll_da_floresta = new Inimigo("troll_da_floresta",100,22,5);


//***************************** Início do jogo******************************


	do{
		jogo.criar_personagem();
		jogo.controle++;
	}while(jogo.controle==0)
	jogador.controle=0;
	do{
		jogador.menu_acoes();
	}while(controle==0)

	jogo.narrativa_final();
	jogo.leitor=0;
	jogo.controle=0;
	
	do{
	console.log("Você deseja jogar novamente?");
	jogo.leitor=prompt("Digite [1] SIM ou [2] NÃO :");

	if(jogo.leitor>1){
		jogo.controle++;
		jogo.controle2++;
	}


	}while(jogo.controle==0);
	
	

}while(controle2==0);
