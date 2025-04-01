function rollMana() {
  const reserves = [
    "🩸 Очень малый",
    "💧 Малый",
    "🔥 Средний",
    "⚡ Выше среднего",
    "🌌 Большой"
  ];
  const result = reserves[Math.floor(Math.random() * reserves.length)];
  document.getElementById("result").innerHTML = `Твой резерв маны: <br><strong>${result}</strong>`;
  document.getElementById("magic-sound").play();
}
