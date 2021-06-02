// var assert = require("assert");
var chai = require("chai");
var expect = chai.expect;
var should = chai.should;
const assert = require("assert");
const { count } = require("console");

//map - odradi nesto na svakom elementu i vrati ga takvog nazad

describe("pocetnaGrupa tests", function () {
  let names = ["Dejana", "Vedrana"];
  let numbers = [1, 2, 43, 3, 98, 16, 666];
  let numbers2 = [4, 12, 56, 7, 3, 16, 5];
  let array = [1, , 5, 6, , 8];
  let studenti = [
    {
      name: "Dejana",
      surname: "Pivac",
      god_rodenja: 1999,
      JMBAG: "0303082360",
      god_studija: "3",
      ocjene: [5, 3, 4, 5],
    },
    {
      name: "Martina",
      surname: "Rubil",
      god_rodenja: 1998,
      JMBAG: "0303426834",
      god_studija: "2",
      ocjene: [5, 2, 3, 5, 5],
    },
    {
      name: "Vedrana",
      surname: "Mrvelj",
      god_rodenja: 1999,
      JMBAG: "2048256477",
      god_studija: "3",
      ocjene: [2, 4, 5, 2, 3, 3],
    },
    {
      name: "Laura",
      surname: "Šehagić",
      god_rodenja: 1998,
      JMBAG: "1214735896",
      god_studija: "2",
      ocjene: [4, 5, 3, 4, 4],
    },
    {
      name: "Bruna",
      surname: "Stjepić",
      god_rodenja: 1997,
      JMBAG: "5656323433",
      god_studija: "4",
      ocjene: [2, 4, 5, 5, 3],
    },
  ];

  let torta = [
    {
      ingredient: "Jaja",
      kolicina: 3,
      cijena: 4,
    },
    {
      ingredient: "Jagode",
      kolicina: 20,
      cijena: 20,
    },
    {
      ingredient: "Mascarpone",
      kolicina: 1,
      cijena: 40,
    },
    {
      ingredient: "Nutella",
      kolicina: 1,
      cijena: 50,
    },
    {
      ingredient: "Slag",
      kolicina: 3,
      cijena: 12,
    },
    {
      ingredient: "Keksi",
      kolicina: 1,
      cijena: 15,
    },
  ];

  context("map() tests", function () {
    it("map test 1", function () {
      let doggos = names.map((name) => name + " voli doggos");
      expect(doggos).to.eql(["Dejana voli doggos", "Vedrana voli doggos"]);
    });
    it("map test 2", function () {
      let mapTwo = numbers.map((number) => number * 2);
      expect(mapTwo).to.eql([2, 4, 86, 6, 196, 32, 1332]);
    });
    it("map test 3", function () {
      let imeJMBAG = studenti.map((y) => y.name + ": " + y.JMBAG);
      expect(imeJMBAG).to.eql([
        "Dejana: 0303082360",
        "Martina: 0303426834",
        "Vedrana: 2048256477",
        "Laura: 1214735896",
        "Bruna: 5656323433",
      ]);
    });
    it("map test 4", function () {
      let sumaProizvoda = torta.reduce(
        (iznos, vrijednost) => iznos + vrijednost.cijena,
        0
      );
      expect(sumaProizvoda).to.eql(141);
    });
    it("map test 5", function () {
      let brojOcjena = studenti.map(
        (student) => student.name + ": " + student.ocjene.length
      );
      expect(brojOcjena).to.eql([
        "Dejana: 4",
        "Martina: 5",
        "Vedrana: 6",
        "Laura: 5",
        "Bruna: 5",
      ]);
    });
    it("map() test 6", function () {
      let TkoSeKadRodio = studenti.map(
        (zene) => zene.name + ": " + zene.god_rodenja
      );
      expect(TkoSeKadRodio).to.eql([
        "Dejana: 1999",
        "Martina: 1998",
        "Vedrana: 1999",
        "Laura: 1998",
        "Bruna: 1997",
      ]);
    });
    it("map() test 7", function () {
      let osobe = [];
      studenti.map(function netko(studenti) {
        if (studenti.god_rodenja == 1999) {
          osobe.push(studenti.name);
        }
      });
      expect(osobe).to.eql(["Dejana", "Vedrana"]);
    });
    it("map() test 8", function () {
      let pola = numbers.map((num) => num / 2);
      expect(pola).to.eql([0.5, 1, 21.5, 1.5, 49, 8, 333]);
    });
    it("map() test 9", function () {
      let korijen = numbers.map((num) => Math.sqrt(num));
      expect(korijen).to.eql([
        1, 1.4142135623730951, 6.557438524302, 1.7320508075688772,
        9.899494936611665, 4, 25.80697580112788,
      ]);
    });
    it("map() test 10", function () {
      const name = "Dejana";
      const map = Array.prototype.map;
      const svakoSlovo = map.call(name, (eachLetter) => {
        return `${eachLetter}`;
      });
      expect(svakoSlovo).to.eql(["D", "e", "j", "a", "n", "a"]);
    });
  });

  context("filter() tests", function () {
    it("filter() test 1", function () {
      let drugaGodina = [];
      studenti.filter((student) => {
        if (student.god_studija == 2) {
          drugaGodina.push(student.name);
        }
      });
      expect(drugaGodina).to.eql(["Martina", "Laura"]);
    });
    it("filter() test 2", function () {
      //RegExp object is used for matching text with a pattern.
      let match = studenti.filter((val) => new RegExp("Vedra").test(val.name));
      expect(match).to.eql([
        {
          name: "Vedrana",
          surname: "Mrvelj",
          god_rodenja: 1999,
          JMBAG: "2048256477",
          god_studija: "3",
          ocjene: [2, 4, 5, 2, 3, 3],
        },
      ]);
    });
    it("filer() test 3", function () {
      let ponovljeni = numbers.filter((val) => numbers2.includes(val));
      expect(ponovljeni).to.eql([3, 16]);
    });
    it("filter() test 4", function () {
      let cetvrtaGodina = studenti
        .filter((student) => student.god_studija == 4)
        .map((student) => student.name + " " + student.surname);
      expect(cetvrtaGodina).to.eql(["Bruna Stjepić"]);
    });

    it("filter() test 5", function () {
      var sretni = numbers.filter((number) => number > 16);
      expect(sretni).to.eql([43, 98, 666]);
    });
    it("filter() test 6", function () {
      var nesretni = numbers.filter((number) => number < 16);
      expect(nesretni).to.eql([1, 2, 3]);
    });
    it("filter() test 7", function () {
      let rodenje = studenti
        .filter((student) => student.god_rodenja == 1998)
        .map((student) => student.name + " " + student.surname);
      expect(rodenje).to.eql(["Martina Rubil", "Laura Šehagić"]);
    });
    it("filter() test 8", function () {
      let manjaKolicina = torta.filter((torta) => {
        if (torta.kolicina < 3) {
          return torta;
        }
      });
      expect(manjaKolicina).to.eql([
        { ingredient: "Mascarpone", kolicina: 1, cijena: 40 },
        { ingredient: "Nutella", kolicina: 1, cijena: 50 },
        { ingredient: "Keksi", kolicina: 1, cijena: 15 },
      ]);
    });
  });

  context("forEach() tests", function () {
    it("forEach() test 1", function () {
      let counter = 0;
      studenti.forEach(function slovo(studenti) {
        if (studenti.name.toLowerCase().includes("d")) {
          counter++;
        }
      });
      expect(counter).to.eql(2);
    });
    it("forEach() test 2", function () {
      let names = [];
      studenti.forEach(function slovo(studenti) {
        if (studenti.name.toLowerCase().includes("d")) {
          names.push(studenti.name);
        }
      });
      expect(names).to.eql(["Dejana", "Vedrana"]);
    });
    it("forEach() test 3", function () {
      let rijeci = [];
      torta.forEach(function duljeOd(torta) {
        if (torta.ingredient.length >= 6) {
          rijeci.push(torta.ingredient);
        }
      });
      expect(rijeci).to.eql(["Jagode", "Mascarpone", "Nutella"]);
    });
    it("forEach() test 4", function () {
      let mjesto = [];
      numbers.forEach((number, index) => {
        mjesto.push("Index: " + index + " Value: " + number);
      });
      expect(mjesto).to.eql([
        "Index: 0 Value: 1",
        "Index: 1 Value: 2",
        "Index: 2 Value: 43",
        "Index: 3 Value: 3",
        "Index: 4 Value: 98",
        "Index: 5 Value: 16",
        "Index: 6 Value: 666",
      ]);
    });
    it("forEach() test 5", function () {
      let zadnji = "";
      numbers.forEach((i, index, array) => {
        if (index === array.length - 1) {
          zadnji = "Last callback call at index " + index + " with value " + i;
        }
      });
      expect(zadnji).to.eql("Last callback call at index 6 with value 666");
    });
    it("forEach() test 6", function () {
      let counter = 0;
      studenti.forEach((studenti) => {
        if (studenti.name.toLowerCase().includes("na")) {
          counter++;
        }
      });
      expect(counter).to.eql(4);
    });
    it("forEach() test 7", function () {
      let names2 = [];
      studenti.forEach((studenti) => {
        if (studenti.name.toLowerCase().includes("u", "a")) {
          names2.push(studenti.name);
        }
      });
      expect(names2).to.eql(["Laura", "Bruna"]);
    });
  });

  context("reduce() tests", function () {
    it("reduce() test 1", function () {
      let najveci = numbers.reduce((acc, val) => Math.max(acc, val));
      expect(najveci).to.eql(666);
    });
    it("reduce() test 2", function () {
      let najmanji = numbers.reduce((acc, val) => Math.min(acc, val));
      expect(najmanji).to.eql(1);
    });
    it("reduce() test 3", function () {
      let zbroj = numbers.reduce((acc, val) => acc + val);
      expect(zbroj).to.eql(829);
    });
    it("reduce() test 4", function () {
      torta.reduce((acc, val) => {
        if (acc["ingredient"]) {
          return acc["ingredient"] + " i " + val["ingredient"];
        }
        return acc + " i " + val["ingredient"];
      });
      let sastojoci = torta.reduce((acc, val) => {
        if (acc == "") {
          return val["ingredient"];
        }
        return acc + " i " + val["ingredient"];
      }, "");
      expect(sastojoci).to.eql(
        "Jaja i Jagode i Mascarpone i Nutella i Slag i Keksi"
      );
    });
    it("reduce() test 6", function () {
      let GodineGrupirane = studenti.reduce((acc, val) => {
        acc[val.god_rodenja] = acc[val.god_rodenja] + 1 || 1;
        return acc;
      }, {});
      expect(GodineGrupirane).to.eql({ 1997: 1, 1998: 2, 1999: 2 });
    });
    it("reduce() test 7", function () {
      const poGodini = studenti.reduce(
        (acc, val) => ((acc[val.god_studija] = val), acc),
        {}
      );
      expect(poGodini).to.eql({
        2: {
          name: "Laura",
          surname: "Šehagić",
          god_rodenja: 1998,
          JMBAG: "1214735896",
          god_studija: "2",
          ocjene: [4, 5, 3, 4, 4],
        },
        3: {
          name: "Vedrana",
          surname: "Mrvelj",
          god_rodenja: 1999,
          JMBAG: "2048256477",
          god_studija: "3",
          ocjene: [2, 4, 5, 2, 3, 3],
        },
        4: {
          name: "Bruna",
          surname: "Stjepić",
          god_rodenja: 1997,
          JMBAG: "5656323433",
          god_studija: "4",
          ocjene: [2, 4, 5, 5, 3],
        },
      });
    });
    it("reduce() test 8", function () {
      const imeOcjene = studenti.reduce(
        (acc, val) => ((acc[val.name] = val.ocjene), acc),
        {}
      );
      expect(imeOcjene).to.eql({
        Dejana: [5, 3, 4, 5],
        Martina: [5, 2, 3, 5, 5],
        Vedrana: [2, 4, 5, 2, 3, 3],
        Laura: [4, 5, 3, 4, 4],
        Bruna: [2, 4, 5, 5, 3],
      });
    });
  });
});
