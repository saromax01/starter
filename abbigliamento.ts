class CapiAbbigliamento {
  id: number;
  codprod: number;
  collezione: string;
  capo: string;
  modello: number;
  quantita: number;
  colore: string;
  prezzoivaesclusa: number;
  prezzoivainclusa: number;
  disponibile: string;
  saldo: number;

  constructor(
    id: number,
    codprod: number,
    collezione: string,
    capo: string,
    modello: number,
    quantita: number,
    colore: string,
    prezzoivaesclusa: number,
    prezzoivainclusa: number,
    disponibile: string,
    saldo: number
  ) {
    this.id = id;
    this.codprod = codprod;
    this.collezione = collezione;
    this.capo = capo;
    this.modello = modello;
    this.quantita = quantita;
    this.colore = colore;
    this.prezzoivaesclusa = prezzoivaesclusa;
    this.prezzoivainclusa = prezzoivainclusa;
    this.disponibile = disponibile;
    this.saldo = saldo;
  }

  getsaldocapo(): number {
    return (this.prezzoivainclusa - this.saldo) / 100;
  }

  getacquistocapo(): number {
    return this.prezzoivainclusa - this.getsaldocapo();
  }
}

const capoEsempio: CapiAbbigliamento = new CapiAbbigliamento(
  1,
  123,
  "Primavera/Estate",
  "Maglia",
  101,
  2,
  "Blu",
  20.0,
  24.0,
  "Disponibile",
  5.0
);

console.log(capoEsempio);
console.log("Costo totale dell'acquisto:", capoEsempio.getacquistocapo());

const apiUrl: string = "https://mocki.io/v1/765b2daf-41d5-4e94-a0d5-abd918f57b8f ";

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.error("Errore durante il recupero dati dall'API:", error));
