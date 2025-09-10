let programs = [];

programs.push({
  namn: "myndig",
  run: async () => {
    let alder = +(await read("Ålder: "));
    if (alder > 17) {
      write("Myndig");
    } else {
      write("Omyndig");
    }
  },
});

programs.push({
  namn: "hur lång är du?",
  run: async () => {
    let langd = +(await read("Hur lång är du (i cm)? "));
    if (langd < 200) {
      write("Hej du korte!");
    } else {
      write("Hej du långe!");
    }
  },
});

programs.push({
  namn: "positivt, negativt, eller noll?",
  run: async () => {
    let t = +(await read("Ett tal: "));
    if (t == 0) {
      write("Talet är noll.");
    } else if (t > 0) {
      write("Talet är positivt.");
    } else {
      write("Talet är negativt.");
    }
  },
});

programs.push({
  namn: "x = y, x < y, x > y",
  run: async () => {
    let x = +(await read("x = "));
    let y = +(await read("y = "));

    if (x == y) {
      write("x = y");
    } else if (x > y) {
      write("x > y");
    } else {
      write("x < y");
    }
  },
});

programs.push({
  namn: "miniräknare",
  run: async () => {
    let n1 = +(await read("Tal 1: "));
    let n2 = +(await read("Tal 2: "));
    let op = await read("Operator (+, -, *, /): ");

    if (op == "+") {
      write("Summa: " + (n1 + n2));
    } else if (op == "-") {
      write("Differens: " + (n1 - n2));
    } else if (op == "*") {
      write("Produkt: " + n1 * n2);
    } else if (op == "/") {
      write("Kvot: " + n1 / n2);
    } else {
      write("Ogiltigt tecken.");
    }
  },
});

programs.push({
  namn: "valörkoll spelkort",
  run: async () => {
    let v = +(await read("Valör (1-13): "));
    if (v == 1) {
      write("Ett ess");
    } else if (v == 11) {
      write("En knekt");
    } else if (v == 12) {
      write("En dam");
    } else if (v == 13) {
      write("En kung");
    } else if (v > 1 && v < 11) {
      write("En " + v + ":a");
    } else {
      write("Ogiltig valör");
    }
  },
});

programs.push({
  namn: "månad",
  run: async () => {
    let m = Math.round(+(await read("Månadsnummer: "))) - 1;
    let mnder = [
      "Januari",
      "Februari",
      "Mars",
      "April",
      "Maj",
      "Juni",
      "Juli",
      "Augusti",
      "September",
      "Oktober",
      "November",
      "December",
    ];
    if (m > 0 && m < mnder.length) {
      write(mnder[m]);
    } else {
      write("Den där månaden finns inte.");
    }
  },
});

programs.push({
  namn: "årstider",
  run: async () => {
    let m = +(await read("Månadsnummer: "));
    if (m == 12 || m == 1 || m == 2) {
      write("Vinter");
    } else if (m > 2 && m < 6) {
      write("Vår");
    } else if (m > 5 && m < 9) {
      write("Sommar");
    } else if (m > 8 && m < 12) {
      write("Höst");
    } else {
      write("Den där månaden finns inte.");
    }
  },
});

programs.push({
  namn: "multiplikation",
  run: async () => {
    let n1 = +(await read("Tal 1: "));
    let n2 = +(await read("Tal 2: "));
    let p = +(await read("Produkt: "));
    if (p == n1 * n2) {
      write("Rätt!");
    } else {
      write("Fel. Rätt svar: " + n1 * n2);
    }
  },
});

programs.push({
  namn: "tal-info (2 tal)",
  run: async () => {
    let n1 = +(await read("Tal 1: "));
    let n2 = +(await read("Tal 2: "));
    write("Summa: " + (n1 + n2));
    write("Medel: " + (n1 + n2) / 2);
    write("Minsta: " + Math.min(n1, n2));
    write("Största: " + Math.max(n1, n2));
  },
});

programs.push({
  namn: "tal-info (3 tal)",
  run: async () => {
    let n1 = +(await read("Tal 1: "));
    let n2 = +(await read("Tal 2: "));
    let n3 = +(await read("Tal 3: "));

    write("Summa: " + (n1 + n2 + n3));
    write("Medel: " + (n1 + n2 + n3) / 3);
    write("Minsta: " + Math.min(n1, n2, n3));
    write("Största: " + Math.max(n1, n2, n3));
  },
});

programs.push({
  namn: "gemen eller versal?",
  run: async () => {
    let b = await read("Tecken: ");
    if (b.toLowerCase() != b) {
      write("Stor bokstav");
    } else if ("abcdefghijklmnopqrstuvwxyzåäö".includes(b)) {
      write("Liten bokstav");
    } else {
      write("Symbol");
    }
  },
});

programs.push({
  namn: "hur många siffror?",
  run: async () => {
    let n = await read("Mata in ett tal mellan -999 och 999: ");
    if (Number(n) >= 0) {
      let l = n.length;
      if (l == 1) {
        write("En siffra");
      } else if (l == 2) {
        write("Två siffror");
      } else if (l == 3) {
        write("Tre siffror");
      }
      write("Positivt");
    } else {
      let l = n.length - 1;
      if (l == 1) {
        write("En siffra");
      } else if (l == 2) {
        write("Två siffror");
      } else if (l == 3) {
        write("Tre siffror");
      }
      write("Negativt");
    }
  },
});

programs.push({
  namn: "triangel?",
  run: async () => {
    let s1 = +(await read("Sida 1: "));
    let s2 = +(await read("Sida 2: "));
    let s3 = +(await read("Sida 3: "));

    for (let s of [s1, s2, s3]) {
      if (s <= 0) {
        write("Triangel? Nej!");
        return;
      }
    }
    if (s1 > s2 + s3) {
      write("Triangel? Nej!");
      return;
    }
    if (s2 > s1 + s3) {
      write("Triangel? Nej!");
      return;
    }
    if (s3 > s2 + s1) {
      write("Triangel? Nej!");
      return;
    }
    write("Triangel? Ja!");
  },
});

while (true) {
  write("Which program do you want to run? ");

  let i = 0;
  for (let p of programs) {
    write(i + ") " + p.namn);
    i++;
  }
  let n = +(await read("n: "));
  write(" ");
  await programs[n].run();
  write(" ");
}

export {};
