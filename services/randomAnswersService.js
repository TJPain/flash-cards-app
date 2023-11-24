import yogaPoses from '@/data/yogaPoses.json';

const getRandomAnswers = (correctAnswer) => {
  const allSanskritNames = yogaPoses.map(pose => pose.sanskrit_name).filter(name => name !== correctAnswer);
  return pickRandomElements(allSanskritNames, 4);
};

function pickRandomElements(arr, count) {
  const res = [];
  while (res.length < count) {
    const item = arr[Math.floor(Math.random() * arr.length)];
    if (!res.includes(item)) {
      res.push(item);
    }
  }
  return res;
}

export default getRandomAnswers;