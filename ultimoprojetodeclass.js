class heroes {
    constructor(tipoDeHeroi,nome,idade){
      this.tipoDeHeroi = tipoDeHeroi;
      this.idade = idade;
      this.nome = nome;
    }
      mensagem(){ 
        console.log(`O tipo de heroi desse individuo ${this.tipoDeHeroi} e o nome desse heroi ${this.nome} e a idade dele é ${this.idade}`)
  
      }
      atacar(tipoDeHeroi){
      this.tipoDeHeroi = tipoDeHeroi;
        if(this.tipoDeHeroi === "mago"){
          console.log(`o ${tipoDeHeroi} usou o ataqure magia no oponente`);
        }
        else if(this.tipoDeHeroi  === "guerreiro"){
          console.log(`o ${tipoDeHeroi} usou o ataque de espada Escalibur no oponente`);
        }
        else if(this.tipoDeHeroi  === "monge"){
          console.log(`o ${tipoDeHeroi} usou o ataque de artes macias no oponente`);
        }else{
          console.log(`o ${tipoDeHeroi} usou o ataque de shirunkens no oponente`);
        }
      }
    }
  
  
  let mago = new heroes ("mago","marcelo",25);
  let guerreiro = new heroes ("guerreiro","marcelo",25);
  let ninja = new heroes ("ninja","marcelo",25);
  let monge = new heroes ("monge","marcelo",25);
  mago.mensagem();
  guerreiro.mensagem();
  ninja.mensagem();
  monge.mensagem();
  mago.atacar("mago") ;
  guerreiro.atacar("guerreiro");
  ninja.atacar("ninja");
  monge.atacar("monge");