"use client"

import React, { useState } from "react";
import "./textLeftRight.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function Typography() {
  const [ref1, inView1] = useInView({
    triggerOnce: false,
    threshold: 1,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: false,
    threshold: 1,
  });
  const [ref3, inView3] = useInView({
    triggerOnce: false,
    threshold: 1,
  });
  const [ref4, inView4] = useInView({
    triggerOnce: false,
    threshold: 1,
  });

  return (
    <>
      <div className="flex w-full justify-center mt-6">
        <div className="flex max-w-[1000px]">
          <motion.div
            ref={ref1}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: inView1 ? 0 : -100, opacity: inView1 ? 1 : 0 }}
            transition={{ type: "spring", stiffness: 120, duration: 0.5}}
            className="textLeft h-32 text-right p-8"
          >
            <h3 className="font-bold">Trénink psaní s projektem „ABC“</h3>
            <p>
            Stránka „ABC“ je věnována projektu zaměřenému na trénink rychlosti a správnosti psaní na klávesnici. Nabízí různé nástroje a cvičení, které uživatelům pomáhají zlepšit jejich dovednosti v této oblasti. Hlavním cílem je zvýšit efektivitu a přesnost při psaní. Projekt je výsledkem spolupráce několika vývojářů a designérů, kteří se zaměřují na vytváření kvalitních vzdělávacích aplikací.
            </p>
          </motion.div>
          <motion.div
            ref={ref2}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: inView2 ? 0 : 100, opacity: inView2 ? 1 : 0 }}
            transition={{ type: "spring", stiffness: 120, duration: 0.5}}
            className="textRight mt-40 h-32 p-8"
          >
            <h3 className="font-bold">Náš projekt „ABC“: Cesta k efektivnímu tréninku psaní</h3>
            <p>
            Projekt „ABC“ jsme vytvořili v rámci kurzu vývoje webových stránek. Cílem bylo navrhnout a realizovat webovou aplikaci. Pracovali jsme jako tým vývojářů a designérů, kde jsme si rozdělili úkoly od návrhu uživatelského rozhraní přes programování až po testování. Projekt kombinuje různé cvičení a analytické nástroje pro sledování pokroku. Výsledkem je uživatelsky přívětivá platforma pro efektivní trénink psaní.
            </p>
          </motion.div>
        </div>
      </div>
      <div className="flex w-full justify-center mt-6">
        <div className="flex max-w-[1000px]">
          <motion.div
            ref={ref3}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: inView3 ? 0 : -100, opacity: inView3 ? 1 : 0 }}
            transition={{ type: "spring", stiffness: 120, duration: 0.5}}
            className="textLeft h-32 text-right p-8"
          >
            <h3 className="font-bold">Jak začít s projektem ABC</h3>
            <p>
            Nejprve se musíte zaregistrovat. Po registraci můžete začít psát. Když začnete psát, spustí se časomíra a musíte přepsat určenou část textu. Jakmile ji dokončíte, časomíra se zastaví a uloží váš výsledek. Můžete tak sledovat svůj pokrok a postupně se zlepšovat. V záložce "Můj profil" můžete sledovat své skóre, dobu strávenou psaním a zobrazit osobní informace jako e-mail, jméno a příjmení.
            </p>
          </motion.div>
          <motion.div
            ref={ref4}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: inView4 ? 0 : 100, opacity: inView4 ? 1 : 0 }}
            transition={{ type: "spring", stiffness: 120, duration: 0.5}}
            className="textRight mt-40 h-32 p-8"
          >
            <h3 className="font-bold">Funkce a výhody projektu „ABC“</h3>
            <p>
            Projekt „ABC“ nabízí širokou škálu funkcí, které uživatelům umožňují zlepšovat své psaní efektivně a zábavně. Mezi hlavní funkce patří různorodá cvičení, personalizované tréninky a soutěže či výzvy. Cvičení jsou navržena tak, aby pokrývala různé úrovně obtížnosti, od základních lekcí zaměřených na jednotlivé klávesy, až po pokročilé texty, které simulují skutečné situace, jako je psaní e-mailů nebo článků.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}
