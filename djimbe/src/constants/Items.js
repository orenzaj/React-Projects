const beatList = [];
const soundList = [
  "Shekere",
  "Tubano",
  "Drum",
  "Gong",
  "Otomatone",
  "Piano",
  "Djimbe",
  "Metronome"
];
const soundsCards = soundList.map((sound, index) => {
  return { id: `sound-${index}`, content: `${sound}` };
});
export const cardList = {
  "droppable-1": beatList,
  "droppable-2": {
    1: soundsCards.slice(0, 2),
    2: soundsCards.slice(2, 4),
    3: soundsCards.slice(4, 6),
    4: soundsCards.slice(6, 8)
  }
};
export const getList = (id, noteValue) => {
  if (id === "droppable-2") {
    return cardList[id][noteValue];
  }
  return cardList[id];
};

export const reorder = (list, startIndex, endIndex) => {
  const result = list.slice(0);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};
export const copy = (srcIndex, destIndex, soundCards, beatCards) => {
  const clone = soundCards[srcIndex];

  const beats = beatCards.slice(0);
  beats.splice(destIndex, 0, clone);
  const newBeats = beats.map((card, index) => {
    return {
      id: `beat-${index}`,
      content: card.content
    };
  });
  return newBeats;
};
