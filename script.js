window.addEventListener("DOMContentLoaded", function() {
  const easyWords = [
    "ABLE", "ACID", "AGED", "ALSO", "AREA", "ARMY", "AWAY", "BABY", "BACK", "BALL",
    "BAND", "BANK", "BASE", "BATH", "BEAR", "BEAT", "BEEF", "BEEN", "BEER", "BELL",
    "BELT", "BEST", "BILL", "BIRD", "BLOW", "BLUE", "BOAT", "BODY", "BOMB", "BOND",
    "BONE", "BOOK", "BOOM", "BOOT", "BORN", "BOSS", "BOTH", "BOWL", "BULK", "BURN",
    "BURY", "BUSH", "BUSY", "CALL", "CALM", "CAME", "CAMP", "CARD", "CARE", "CASE",
    "CASH", "CAST", "CAVE", "CELL", "CHAT", "CHIP", "CITY", "CLUB", "COAL", "COAT",
    "CODE", "COLD", "COME", "COOK", "COOL", "COPE", "COPY", "CORE", "COST", "CREW",
    "CROP", "DARK", "DATA", "DATE", "DAWN", "DAYS", "DEAD", "DEAL", "DEAR", "DEBT",
    "DEEP", "DENY", "DESK", "DIAL", "DICK", "DIET", "DISC", "DISK", "DOES", "DONE",
    "DOOR", "DOSE", "DOWN", "DRAW", "DREW", "DROP", "DRUG", "DUAL", "DUKE", "DUST",
    "DUTY", "EACH", "EARN", "EASE", "EAST", "EASY", "EDGE", "ELSE", "EVEN", "EVER",
    "EVIL", "EXIT", "FACE", "FACT", "FAIL", "FAIR", "FALL", "FARM", "FAST", "FATE",
    "FEAR", "FEED", "FEEL", "FEET", "FELL", "FELT", "FEST", "FILE", "FILL", "FILM",
    "FIND", "FINE", "FIRE", "FIRM", "FISH", "FIVE", "FLAT", "FLOW", "FOOD", "FOOL",
    "FOOT", "FORD", "FORM", "FORT", "FOUR", "FREE", "FROM", "FUEL", "FULL", "GAIN",
    "GAME", "GATE", "GEAR", "GENE", "GIFT", "GIRL", "GIVE", "GLAD", "GOAL", "GOES",
    "GOLD", "GOLF", "GONE", "GOOD", "GRAY", "GREE", "GREW", "GREY", "GROW", "GULF",
    "HAIR", "HALF", "HALL", "HAND", "HANG", "HARD", "HARM", "HATE", "HAVE", "HEAD",
    "HEAR", "HEAT", "HELD", "HELL", "HELP", "HERB", "HERE", "HERO", "HIDE", "HIGH",
    "HILL", "HIRE", "HOLD", "HOLE", "HOLY", "HOME", "HOPE", "HOST", "HOUR", "HUGE",
    "HUNT", "HURT", "IDEA", "INCH", "INTO", "IRON", "ITEM", "JACK", "JANE", "JEAN",
    "JOHN", "JOIN", "JUMP", "JURY", "JUST", "KEEP", "KENT", "KEPT", "KIDS", "KILL",
    "KIND", "KING", "KNEE", "KNEW", "KNOW", "LACK", "LADY", "LAKE", "LAND", "LANE",
    "LAST", "LATE", "LAWN", "LEAD", "LEFT", "LESS", "LIFE", "LIFT", "LIKE", "LINE",
    "LINK", "LIST", "LIVE", "LOAD", "LOAN"];

  const mediumWords = [
    "ABOUT", "ABOVE", "ABUSE", "ACTOR", "ACUTE", "ADMIT", "ADOPT", "ADULT", "AFTER", "AGAIN",
    "AGENT", "AGREE", "AHEAD", "ALARM", "ALBUM", "ALERT", "ALIEN", "ALIGN", "ALIVE", "ALLOW",
    "ALONE", "ALONG", "ALTER", "AMONG", "ANGER", "ANGLE", "ANGRY", "APART", "APPLE", "APPLY",
    "ARENA", "ARGUE", "ARISE", "ARRAY", "ASIDE", "ASSET", "AUDIO", "AVOID", "AWARD", "AWARE",
    "BADLY", "BAKER", "BASIC", "BASIS", "BEACH", "BEGAN", "BEGIN", "BEGUN", "BEING", "BELOW",
    "BENCH", "BILLY", "BLACK", "BLAME", "BLIND", "BLOCK", "BLOOD", "BOARD", "BOOST", "BOOTH",
    "BOUND", "BRAIN", "BRAND", "BREAD", "BREAK", "BREED", "BRIEF", "BRING", "BROAD", "BROKE",
    "BROWN", "BUILD", "BUILT", "BUYER", "CABLE", "CALIF", "CARRY", "CATCH", "CAUSE", "CHAIN",
    "CHAIR", "CHART", "CHASE", "CHEAP", "CHECK", "CHEST", "CHIEF", "CHILD", "CHINA", "CHOIR",
    "CHOOSE", "CHORD", "CIVIL", "CLAIM", "CLASS", "CLEAN", "CLEAR", "CLICK", "CLIMB", "CLOCK",
    "CLOSE", "COACH", "COAST", "COULD", "COUNT", "COURT", "COVER", "CRAFT", "CRASH", "CRIME",
    "CROSS", "CROWD", "CROWN", "CURVE", "CYCLE", "DAILY", "DANCE", "DATED", "DEALT", "DEATH",
    "DEBUT", "DELAY", "DEPTH", "DOING", "DOUBT", "DOZEN", "DRAFT", "DRAMA", "DRAWN", "DREAM",
    "DRESS", "DRILL", "DRINK", "DRIVE", "DROVE", "DYING", "EARLY", "EARTH", "EIGHT", "ELDER",
    "ELECT", "ELITE", "EMPTY", "ENEMY", "ENJOY", "ENTER", "ENTRY", "ERROR", "ESSAY", "EVENT",
    "EVERY", "EXACT", "EXIST", "EXTRA", "FAITH", "FALSE", "FAULT", "FAVOR", "FEAST", "FIBER",
    "FIELD", "FIFTH", "FIFTY", "FIGHT", "FINAL", "FIRST", "FIXED", "FLASH", "FLEET", "FLOOD",
    "FLOOR", "FLUID", "FOCUS", "FORCE", "FORTH", "FORTY", "FOUND", "FRAME", "FRANK", "FRAUD",
    "FRESH", "FRONT", "FRUIT", "FULLY", "FUNNY", "GIANT", "GIVEN", "GLASS", "GLOBE", "GOING",
    "GRACE", "GRADE", "GRANT", "GRASS", "GREAT", "GREEN", "GROSS", "GROUP", "GROWN", "GUARD",
    "GUESS", "GUEST", "GUIDE", "HABIT", "HAPPY", "HARRY", "HEART", "HEAVY", "HENCE", "HENRY",
    "HORSE", "HOTEL", "HOUSE", "HUMAN", "HUMOR", "HURRY", "IDEAL", "IMAGE", "IMPLY", "INDEX",
    "INNER", "INPUT", "ISSUE", "JAPAN", "JIMMY", "JOINT", "JUDGE", "JUICE", "KNIFE", "KNOWN",
    "LABEL", "LARGE", "LASER", "LATER", "LAUGH", "LAYER", "LEARN", "LEAST", "LEAVE", "LEGAL"
  ];


  const hardWords = [
    "ACCEPT", "ACCORD", "ACTION", "ACTUAL", "ADVICE", "AFFORD", "AGENCY", "AGREED", "ALMOST", "ALONE",
    "ALWAYS", "AMOUNT", "ANIMAL", "ANSWER", "ANYONE", "APPEAL", "APPEAR", "APPLY", "ARGUED", "AROUND",
    "ARREST", "ARRIVE", "ARTIST", "ASPECT", "ASSIGN", "ASSIST", "ASSUME", "ATTACK", "ATTACH", "ATTEND",
    "AUTHOR", "AUTUMN", "BACKUP", "BAKING", "BALCON", "BALLET", "BANANA", "BANNER", "BARGAIN", "BARREL",
    "BATTLE", "BEAUTY", "BECAME", "BEFORE", "BEGINS", "BEHAVE", "BEING", "BELIEF", "BELONG", "BENCHES",
    "BETTER", "BINARY", "BIOLOG", "BIRDS", "BITTER", "BLADED", "BLAMES", "BLANKS", "BLEACH", "BLEEDS",
    "BLOCKS", "BLOODY", "BLOWER", "BOARDS", "BOASTS", "BODIES", "BOTTLE", "BOTTOM", "BOWING", "BOXING",
    "BRANCH", "BRANDS", "BREADS", "BREATH", "BRICKS", "BRIDGE", "BRIGHT", "BROKEN", "BROTHS", "BROWNS",
    "BUCKET", "BUDGET", "BUFFER", "BUILDS", "BURNED", "BUYERS", "BUTTON", "CABLES", "CALLED", "CANDLE",
    "CANNOT", "CAPPED", "CARBON", "CARGOS", "CARTON", "CASING", "CASTLE", "CATTLE", "CAUSES", "CAUTIO",
    "CEASED", "CENTER", "CHAIN", "CHARGE", "CHARTS", "CHASER", "CHEATS", "CHECKS", "CHEESE", "CHERRY",
    "CHICKS", "CHIEFS", "CHILD", "CHIPED", "CHOICE", "CHOIRS", "CIRCLE", "CLAIMS", "CLASSY", "CLEAN",
    "CLEARS", "CLIENT", "CLIMAX", "CLINIC", "CLOSED", "CLOSER", "CLOUDY", "CLUBS", "COATED", "COBALT",
    "COFFEE", "COLORS", "COMBAT", "COMEDY", "COMING", "COMMIT", "COMMON", "COMPLE", "CONVEY", "COOKIE",
    "CORNER", "CORRAL", "COSTLY", "COUPLE", "COURSE", "COVERS", "COWBOY", "CREATE", "CREDIT", "CRIMES",
    "CRISIS", "CROWDY", "CRUCIA", "CRYING", "CUFFED", "CULTUR", "CURSOR", "CUSTOM", "DAMAGE", "DANCES",
    "DANGER", "DARING", "DEALER", "DEATHS", "DECIDE", "DEEPER", "DEFEND", "DEFINE", "DEGREE", "DELAYS",
    "DELETE", "DELTA", "DENIED", "DEPLOY", "DETALE", "DEVICE", "DEVILS", "DIAGRAM", "DIALOG", "DINNER",
    "DIRECT", "DOCTOR", "DOMAIN", "DOUBLE", "DOUBTS", "DOZENS", "DRAINS", "DRAGON", "DRAWER", "DREAMS",
    "DRINKS", "DRIVER", "DROPPY", "DROWNS", "DUALTY", "DURING", "EARNED", "EASIER", "EATING", "EDITOR",
    "EFFECT", "EFFORT", "ELBOWS", "ELDERS", "ELEGAN", "ELEVEN", "EMAILS", "EMPIRE", "ENDING", "ENERGY",
    "ENGAGE", "ENGINE", "ENHANC", "ENJOY", "ENOUGH", "ENSURE", "ENTERS", "ENTIRE", "ENTITY", "EPISOD",
    "ESCAPE", "ESSENT", "ESTATE", "ETHICS", "EVENED", "EVENTS", "EXACTL", "EXCEED", "EXCEPT", "EXCESS",
    "EXCUSE", "EXISTS", "EXOTIC", "EXPAND", "EXPECT", "EXPERT", "EXPIRE", "EXPORT", "EXPOSE", "EXTEND",
    "EXTENT", "EXTRAO", "FACING", "FACTOR", "FAILED", "FAIRLY", "FAITHS", "FALLEN", "FAMILY", "FAMOUS"
  ];


  const extremeWords = [
    "ABILITY", "ABSENCE", "ACADEMY", "ACCOUNT", "ACCUSED", "ACHIEVE", "ACQUIRE", "ADDRESS", "ADVANCE", "ADVERSE",
    "ADVISED", "ADVISER", "AGAINST", "AGENCY", "AGENDA", "AIRLINE", "ALARMED", "ALCOHOL", "ALERTED", "ALLEGED",
    "ALLOWED", "AMAZING", "AMENDED", "ANALYST", "ANATOMY", "ANCIENT", "ANGELIC", "ANIMAL", "ANNUITY", "ANSWERS",
    "ANXIETY", "ANYBODY", "APPLIED", "APPLIES", "APPOINT", "ARCHIVE", "ARGUING", "ARRANGE", "ARRIVAL", "ARTICLE",
    "ARTISTS", "ASPECTS", "ASSAULT", "ASSERTS", "ASSISTS", "ASSUMED", "ASSUMES", "ATHEIST", "ATOMIC", "ATTEMPT",
    "ATTRACT", "AUCTION", "AUTHOR", "AUTONOM", "AWAKENS", "BALANCE", "BALLOON", "BALLOTS", "BANGING", "BANKING",
    "BARRIER", "BASIS", "BATTLES", "BEATING", "BEAUTIF", "BECOMES", "BEDROOM", "BELIEVE", "BENEFIT", "BETRAYE",
    "BETWEEN", "BIDDING", "BILLING", "BINARY", "BINDING", "BIOLOGY", "BISHOPS", "BIZARRE", "BLAMING", "BLENDED",
    "BLOCKED", "BLOODIE", "BLOSSOM", "BLOWING", "BOATING", "BOLDLY", "BONDING", "BORDERS", "BORNE", "BOTTLES",
    "BOUNCED", "BOWLING", "BOXWOOD", "BOYHOOD", "BRAVERY", "BREAKER", "BREEDER", "BRIEFLY", "BRIGHTE", "BROADER",
    "BROTHER", "BROWSED", "BRUSHED", "BUDDIES", "BUDGING", "BUILDER", "BULLIED", "BURNING", "BURRITO", "BURYING",
    "BUSIEST", "BUTTONS", "BUZZING", "CABINET", "CALCIUM", "CALLING", "CALMLY", "CAMPING", "CANDLES", "CANNONS",
    "CANTONS", "CAPABLE", "CAPITAL", "CAPTURE", "CARBIDE", "CAREERS", "CARIBOU", "CARRIED", "CARRIER", "CARRIES",
    "CARTOON", "CASCADE", "CASINGS", "CASSAVA", "CASTING", "CATALOG", "CATTLES", "CAUTION", "CEILING", "CENTURY",
    "CERTAIN", "CHALKED", "CHANGES", "CHANNEL", "CHARGED", "CHARGER", "CHARGES", "CHARTER", "CHEATED", "CHECKED",
    "CHEESED", "CHEESES", "CHERISH", "CHICKEN", "CHILDHO", "CHILLER", "CHIMNEY", "CHOKING", "CHOSEN", "CIRCLED",
    "CIRCLES", "CITIES", "CITIZEN", "CIVILLY", "CLASSES", "CLASSIC", "CLEANED", "CLEANER", "CLEARER", "CLIMBED",
    "CLIMATE", "CLINICS", "CLOSING", "CLOTHED", "CLOTHES", "CLUSTER", "COATING", "COCAINE", "COEXIST", "COFFINS",
    "COLLAGE", "COLLAPS", "COLLECT", "COLLIDE", "COLLIES", "COLLINS", "COLONEL", "COLONIE", "COLORS", "COMBINE",
    "COMFORT", "COMMAND", "COMMEND", "COMMENT", "COMMITS", "COMMONS", "COMPANY", "COMPARE", "COMPASS", "COMPETE",
    "COMPILE", "COMPLEX", "COMPUTE", "CONCEAL", "CONCEPT", "CONCERN", "CONDEMN", "CONDUCT", "CONFER", "CONFESS",
    "CONFIDE", "CONFIRM", "CONFORM", "CONFUSE", "CONSOLE", "CONSULT", "CONTACT", "CONTAIN", "CONTENT", "CONTEST",
    "CONTEXT", "CONTROL", "CONVERT", "CONVICT", "COOKIES", "COOLING", "COPIERS", "COPYING", "CORDIAL", "CORNER",
    "CORRECT", "CORRUPT", "COSTING", "COUNSEL", "COUNTER", "COUNTRY", "COUPLES", "COURAGE", "COURIER", "COURSES"
  ];

  let selectedWords = easyWords;
  let originalWord = '';
  let score = 0;
  let round = 1;
  const totalRounds = 5;

  const jumbledWordElem = document.getElementById('jumbledWord');
  const userGuessInput = document.getElementById('userGuess');
  const scoreBoard = document.getElementById('scoreBoard');
  const feedback = document.getElementById('feedback');
  const submitBtn = document.getElementById('submitBtn');
  const restartBtn = document.getElementById('restartBtn');

  function shuffleWord(word) {
    let arr = word.split('');
    let shuffled;
    do {
      shuffled = arr.sort(() => Math.random() - 0.5).join('');
    } while (shuffled === word);
    return shuffled;
  }

  function pickNewWord() {
    if (selectedWords.length === 0) {
      jumbledWordElem.textContent = "❌ No words available!";
      return;
    }
    originalWord = selectedWords[Math.floor(Math.random() * selectedWords.length)];
    jumbledWordElem.textContent = shuffleWord(originalWord);
    userGuessInput.value = '';
    userGuessInput.disabled = false;
    submitBtn.disabled = false;
    feedback.textContent = '';
  }

  function updateScore() {
    scoreBoard.textContent = `Score: ${score} | Round: ${round}/${totalRounds}`;
  }

  function checkGuess() {
    const guess = userGuessInput.value.trim().toUpperCase();
    if (guess === '') {
      feedback.textContent = "⚠️ Please enter a word.";
      return;
    }

    if (guess === originalWord) {
      feedback.textContent = "✅ Correct!";
      score++;
    } else {
      feedback.textContent = `❌ Wrong! Correct word: ${originalWord}`;
    }

    round++;
    updateScore();

    if (round > totalRounds) {
      jumbledWordElem.textContent = "🎯 Game Over!";
      feedback.textContent += ` Final Score: ${score}/${totalRounds}`;
      userGuessInput.disabled = true;
      submitBtn.disabled = true;
      restartBtn.style.display = 'inline-block';
    } else {
      setTimeout(() => pickNewWord(), 1500);
    }
  }

  function restartGame() {
    score = 0;
    round = 1;
    updateScore();
    pickNewWord();
    restartBtn.style.display = 'none';
  }

  window.setDifficulty = function(level) {
    if (level === 'easy') selectedWords = easyWords;
    else if (level === 'medium') selectedWords = mediumWords;
    else if (level === 'hard') selectedWords = hardWords;
    else if (level === 'extreme') selectedWords = extremeWords;

    restartGame();
  }

  submitBtn.addEventListener('click', checkGuess);
  restartBtn.addEventListener('click', restartGame);
  userGuessInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      checkGuess();
    }
  });

  // Start game with selected difficulty from dropdown
  const difficultyDropdown = document.getElementById('difficulty');
  setDifficulty(difficultyDropdown.value);

});
