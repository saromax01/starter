var CapiAbbigliamento = /** @class */ (function () {
    function CapiAbbigliamento(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
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
    CapiAbbigliamento.prototype.getsaldocapo = function () {
        return (this.prezzoivainclusa - this.saldo) / 100;
    };
    CapiAbbigliamento.prototype.getacquistocapo = function () {
        return this.prezzoivainclusa - this.getsaldocapo();
    };
    return CapiAbbigliamento;
}());
var capoEsempio = new CapiAbbigliamento(1, 123, "Primavera/Estate", "Maglia", 101, 2, "Blu", 20.0, 24.0, "Disponibile", 5.0);
console.log(capoEsempio);
console.log("Costo totale dell'acquisto:", capoEsempio.getacquistocapo());
var apiUrl = "https://mocki.io/v1/765b2daf-41d5-4e94-a0d5-abd918f57b8f ";
fetch(apiUrl)
    .then(function (response) { return response.json(); })
    .then(function (data) {
    console.log(data);
})
    .catch(function (error) { return console.error("Errore durante il recupero dati dall'API:", error); });
