function greet(name) {
  return 'Hello, ' + name + '!';
}

function clogTheConsole(str) {
  const repeatedStr = str + str + str;
  console.log(repeatedStr);
}

const bernadetteLyrics = () => {
  return `Bernadette, people are searching for (ah)\n
The kind of love that we possessed (Bernadette)\n
Some go on searching their whole life through (ah)\n
And never find the love I've found in you (ah)\n
And when I speak of you, I see envy in other men's eyes (ah)\n
And I'm well aware of what's on their minds (ah, don't you know?)\n
They pretend to be my friend, when all the time (sweet Bernadette)\n
They long to persuade you from my side (sweet Bernadette)\n
They'd give the world and all they own\n
For just one moment we have known\n
Bernadette, they want you because (ah)\n
Of the pride that it gives\n
But Bernadette, I want you because (ah)\n
I need you to live (ah)\n
But while I live only to hold you (ah)\n
Some other men, they long to control you (ah, don't you know?)\n
But how can they control you, Bernadette? (Sweet Bernadette)\n
When they can not control themselves, Bernadette? (Sweet Bernadette)\n
From wanting you, needing you\n
But darling, you belong to me (Bernadette)\n
I'll tell the world, you belong to me (ah)\n
I'll tell the world, you're the soul of me (Bernadette)\n
I'll tell the world, you're a part of me (ah)\n
Bernadette\n
In your arms, I find the kind of peace of mind\n
The world is searching for\n
But you, you give me the joy this heart of mine\n
Has always been longing for\n
In you, I have what other men long for (ah)\n
All men need someone to worship and adore (ah, don't you know?)\n
That's why I treasure you and place you high above (sweet Bernadette)\n
For the only joy in life is to be loved (sweet Bernadette)\n
So whatever you do, Bernadette\n
Keep on loving me (Bernadette)\n
Bernadette, keep on needing me (ah)\n
Bernadette (ah)\n
Bernadette (Bernadette)\n
You're the soul of me (ah)\n
More than a dream, you're a plan to me (ah)\n
And Bernadette, you mean more to me (ah)\n
Than a woman was ever meant to be (ah)\n
Bernadette, my darling Bernadette\n`;
};

const minNumber = (num1, num2) => {
  if (num1 < num2) return num1;
  if (num1 === num2) return 'They are equal!';
  return num2;
};

function countdown(num) {
  for (let i = num; i > 0; i--) {
    console.log(i);
  }
  console.log('Blast off!!!!');
}

function isOdd(num) {
  if (num <= 0) return false;
  if (num === 1) return true;
  if (num % 2 === 0) return false;
  return true;
}

const recursiveIsOdd = function (num) {
  if (num <= 0) return false;
  if (num === 1) return true;
  return recursiveIsOdd(num - 2);
};
