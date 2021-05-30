/*****************/
/* EDITABLE INFO */
/*****************/

/* -------------------------------------------------------- */

const NAME = "Reyes";

const CARDS = [
  {
    name: "Twitter",
    link: "https://twitter.com",
  },
  {
    name: "Hashnode",
    link: "https://hashnode.com/",
  },
  {
    name: "CodeSandbox",
    link: "https://codesandbox.io/dashboard/",
  },
  {
    name: "Dribbble",
    link: "https://dribbble.com/",
  },
  {
    name: "Reddit",
    link: "https://www.reddit.com/",
  },
  {
    name: "Github",
    link: "https://github.com/",
  },
  {
    name: "Figma",
    link: "https://www.figma.com/",
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/",
  },
  {
    name: "Gmail",
    link: "https://mail.google.com/",
  },
];

/* -------------------------------------------------------- */

/******************/
/* CLOCK FUNCTION */
/******************/

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const updateDate = () => {
  // Create a new Date object and get the complete Date/Time information
  const completeDate = new Date();

  // Time Variables
  let currentHour = formatDigit(completeDate.getHours());
  let currentMinute = formatDigit(completeDate.getMinutes());

  // Date Variables
  let currentDay = completeDate.getDay();
  let currentNumber = completeDate.getDate();
  let currentMonth = completeDate.getMonth();
  let currentYear = completeDate.getFullYear();

  // Update the Time
  currentTime.innerHTML = `${currentHour % 12}:${currentMinute} ${
    currentHour > 11 ? "PM" : "AM"
  }`;

  // Update the Date
  currentDate.innerHTML = `${DAYS[currentDay]} ${currentNumber}, ${MONTHS[currentMonth]} ${currentYear}`;

  // Create a Loop
  setTimeout(() => {
    updateDate();
  }, 1000);
};

const formatDigit = (digit) => {
  return digit > 9 ? `${digit}` : `0${digit}`;
};

/******************/
/* CARDS FUNCTION */
/******************/

const printCards = () => {
  for (const card of CARDS) {
    let currentCard = document.createElement("a");
    let currentCardText = document.createElement("p");
    currentCardText.appendChild(document.createTextNode(card.name));
    let currentCardIcon = document.createElement("p");
    currentCardIcon.appendChild(
      document.createTextNode(card.name[0] + card.name[1])
    );

    // Style the Card Element
    currentCard.classList.add("card");
    currentCard.href = card.link;

    // Style the Icon
    currentCardIcon.classList.add("card__icon");

    // Style the Text
    currentCardText.classList.add("card__name");

    currentCard.append(currentCardIcon);
    currentCard.append(currentCardText);
    cardContainer.appendChild(currentCard);
  }
};

/****************/
/* STARTER CODE */
/****************/

userName.innerHTML = NAME;
printCards();
updateDate();
