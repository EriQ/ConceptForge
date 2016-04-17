var categories = "",
    url = 'http://widget.websta.me/rss/tag/belugawhale',
    storage = window.localStorage,
    tour = "",
    lists = {
    "Age": ["Elderly", "Older", "Ancient", "Old", "Young", "Adolescent", "Middle Aged", "Teen", "20s", "30s", "40s", "50s", "60s", "70s", "Baby", "Toddler", "Newborn", "Child"],
        
    "Animals": ["Aardvark", "Parrot", "penguin", "elephant", "python", "cat", "albatross", "terrier", "malamute", "alligator", "alpaca", "bison", "spaniel", "crocodile", "flamingo", "Robin", "sparrow", "amphibian", "anaconda", "fish", "shark", "ant", "anteater", "antelope", "ape", "aphid", "fox", "wolf", "armadillo", "baboon", "camel", "badger", "eagle", "barnacle", "barracuda", "bass", "hound", "bat", "beagle", "bear", "beaver", "bee", "beetle", "whale", "bird", "blackbird", "caiman", "swan", "bloodhound", "bluebird", "tuna", "bluejay", "butterfly", "octopus", "bobcat", "collie", "boxer", "pelican", "turtle", "bug", "buffalo", "bull", "bulldog", "bullfrog", "bumblebee", "butterfly", "caiman", "canary", "capybera", "goose", "dog", "cardinal", "caribou", "cassowary", "caterpillar", "centipede", "chameleon", "cheetah", "chickadee","chicken", "chihuahua", "chimipanzee", "chinchilla", "chipmunk", "cicada", "clam", "clownfish", "cobra", "cockatoo", "cod", "cockroach", "lizard",  "collie", "copperhead", "cottonmouth", "cougar", "cow", "coyote", "crab", "crane", "crayfish", "cricket", "crocodile", "crow", "cuttlefish", "Dachshund", "Dalmatian", "deer", "tortoise", "dingo", "dinosaur", "Doberman", "dodo", "dogfish", "dolphin", "donkey", "dove", "woodpecker", "dragonfly", "dromedary", "duck", "platypus", "earthworm", "earwig", "bluebird", "echidna", "eel", "elephant", "elk", "emu", "ermine", "falcon", "fox", "ferret", "crab", "finch", "firefly", "fish", "flamingo", "flatworm", "flea", "flounder", "fly", "antelope", "giraffe", "fox", "frog", "bat", "fly", "gar", "gavial", "gazelle", "gecko", "gerbil", "squid", "gibbon", "giraffe", "gnat", "gnu", "goat", "goldfinch", "goldfish", "goose", "gopher", "gorilla", "grasshopper", "owl", "dragonfly", "iguana", "greyhound",  "groundhog", "grouper", "grouse", "grub", "guinea pig", "gull", "hamster",  "hare",  "hatchetfish",  "hawk",  "hedgehog",  "hen",  "hermit crab", "heron", "herring", "hippo", "hippopotamus", "hornet", "horse", "hound", "hummingbird", "husky", "hyena", "hyrax", "ibis", "iguana", "impala", "elephant", "insect", "rabbit", "jaguar", "jellyfish", "jerboa", "junebug", "kangaroo", "katydid", "toucan", "cobra", "kiwi", "koala", "kookaburra", "krill", "ladybug", "lagomorph", "lanternfish", "lemming", "lemur", "leopard", "lion", "lizard", "llama", "lobster", "locust", "loon", "lynx", "macaw", "mackerel", "mammoth", "manatee", "mandrill", "mamba", "mantis", "marmoset", "marmot", "mastodon", "meadowlark", "mealworm", "meerkat", "Megalodon", "millipede", "mink", "minnow", "mice", "mockingbird", "moa", "mole", "mollusk", "butterfly", "mongoose", "monkey", "moose", "mosquito", "moth", "mouse", "mudpuppy", "ox", "muskrat", "narwhal", "nautilus", "newt", "nightingale", "beaver", "porcupine", "cardinal", "whale", "nuthatch", "nutria", "nymph", "ocelot", "octopus", "okapi", "sheepdog", "opossum", "orangutan", "orca", "oriole", "ostrich", "otter", "owl", "ox", "oyster", "panda", "pangolin", "panther", "parakeet", "parrot", "peacock", "pekingese", "pelican", "penguin", "pig", "pigeon", "piranha", "plover", "polliwog", "pomeranian", "poodle", "porpoise", "chicken", "pufferfish", "puffin", "pug", "puma", "python", "quail", "quokka", "rabbit", "raccoon", "rat", "rattlesnake", "ray", "kangaroo", "reindeer", "reptile", "rhino", "rhinoceros", "roadrunner", "roach", "robin", "rodent", "rooster", "rottweiler", "roundworm", "hummingbird", "sailfish", "salamander", "salmon", "sandpiper", "scallop", "scorpion", "seahorse", "seal", "shark", "sheep", "shrew", "shrimp", "silkworm", "silverfish", "skink", "skipper", "skunk", "sloth", "slug", "snail", "snake", "leopard", "sparrow", "spider", "squid", "squirrel", "starfish", "starling", "stingray", "stork", "sunfish", "swan", "swift", "swordfish", "tadpole", "tarantula", "termite", "tern", "sloth", "tiger", "toad", "tortoise", "toucan", "treefrog", "trout", "tuatara", "tuna", "turkey", "turtle", "umbrellabird", "ungulates", "uniramians", "urchin", "quail", "chameleon", "viper", "vulture", "wallaby", "walrus", "warthog", "wasp", "waterbug", "weasel", "weevil", "meadowlark", "whale", "whelk", "whippet", "scorpion", "tiger", "rhinoceros", "deer", "dog", "wildebeest", "wolf", "wolverine", "wombat", "woodchuck", "caribou", "woodpecker", "worm", "wren", "yak", "yellowjacket", "mongoose", "zebra"],
        
    "Buildings": ["Abbey", "Amphitheater", "Arena", "Armory", "Barn", "Bungalow", "Bunkhouse", "Bunker", "Castle", "Catacomb", "Cathedral", "Chapel", "Church", "Cinema", "City Hall", "Clubhouse", "Concert Hall", "Cottage", "Courthouse", "Crypt", "Factory", "Farm", "Farmhouse", "Firehouse", "Fort", "Fortress", "Gallery", "Garage", "Gas Station", "Gazebo", "Greenhouse", "Gymnasium", "Hangar", "Hospital", "Hotel", "Hut", "Igloo", "Kiosk", "Laboratory", "Library", "Lighthouse", "Mall", "Mansion", "Marina", "Market", "Monastery", "Monument", "Museum", "Observatory", "Office Building", "Outhouse", "Pagoda", "Palace", "Parking Garage", "Playhouse", "Police Station", "Post Office", "Power Plant", "Prefab Building", "Prison", "Pyramid", "Quonset Hut", "Railway Station", "Ranch", "Refinery", "Restaurant", "Roller Rink", "School", "Shack", "Shed", "Shelter", "Shopping Center", "Shopping Mall", "Shrine", "Silo", "Skyscraper", "Stable", "Stadium", "Station", "Store", "Storehouse", "Strip Mall", "Studio", "Supermarket", "Temple", "Terminal", "Theater", "Tomb", "Tower", "Townhouse", "Treehouse", "University", "Warehouse", "Watermill", "Workshop", "Apartment", "Barracks", "Beach House", "Bungalow", "Bunkhouse", "Cabin", "Castle", "Chateau", "Condo", "Cottage", "Country House", "Dormitory", "Apartment", "Estate", "Farmhouse", "Hotel", "House", "Houseboat", "Hunting Lodge", "Hut", "Igloo", "Inn", "Lean-To", "Lodge", "Loft", "Log Cabin", "Manor", "Mansion", "Motel", "Palace", "Penthouse", "Pup Tent", "Ranch House", "Shack", "Shelter", "Skyscraper", "Studio Apartment", "Summer House", "Tepee", "Tent", "Townhouse", "Trailer", "Treehouse", "Vacation House", "Villa", "Wigwam", "Yurt"],

    "Businesses": ["Cafe", "Designs", "Skatepark", "Market", "Agriculture", "Forestry", "Pest Control",  "Landscaping", "Consulting", "Employment", "Fundraising", "Marketing", "Advertising", "Notary Public", "Publishing", "Records", "Retail", "Technologies", "Travel Agency", "Video Production", "Architects", "Construction", "Inspection", "Manufacturing", "Contractors", "Engineering", "Rentals", "Plumbing", "Remodeling", "Maintenance", "Child Care Services", "College", "University", "Cosmetology School", "School", "Utilities", "Education", "Financing", "Insurance", "Services", "Accounting", "Insurance",  "Bakery", "Catering", "Foods", "Beverages", "Manufacturing", "Grocery Store", "Convenience Store", "Gas Station", "Hotel", "Motel", "Food Truck", "Restaurant", "Library", "Auctioneers", "Gym", "Fitness", "Health Services", "Dentist", "Hospital", "Pharmacy", "Veterinarian", "Automotive", "Car Wash", "Conservation", "Attorneys", "Barber Shop", "Real Estate", "Housing", "Beauty Salon", "Cemetery", "Dry cleaning", "Event Planning", "Florist", "Janitorial", "Cleaning Services", "Spa", "Salon", "Photography", "Inspection", "Interior Design", "Property Management", "Storage", "Locksmith", "Private Investigations", "Security", "Security Systems", "Airlines", "Boating", "Taxi", "Towing", "Trucking"],
    
    "Colors": ["Black", "Blue", "Brown", "Gray", "Green", "Orange", "Pink", "Purple", "Red", "White", "Yellow"],
        
    "Creatures": ["Angel", "Banshee", "Basilisk", "Beast", "Behemoth", "Brute", "Centaur", "Cerberus", "Changeling", "Cherub", "Chimera", "Colossus", "Crone", "Cyclops", "Demon", "Devil", "Djinn", "Dragon", "Dryad", "Elf", "Fairy", "Dragon", "Freak", "Gargoyle", "Genii", "Ghost", "Ghoul", "Giant", "Gnome", "Golem", "Gorgon", "Hag", "Harpy", "Horror", "Hydra", "Imp", "Jinn", "Kelpie", "Leprechaun", "Leviathan", "Medusa", "Merman", "Mermaid", "Monster", "Mummy", "Nymph", "Ogre", "Orc", "Pegasus", "Phoenix", "Savage", "Sea Monster", "Shapeshifter", "Siren", "Spirit", "Sprite", "Swamp Monster", "Titan", "Tree Nymph", "Troll", "Unicorn", "Vampire", "Werewolf", "Witch", "Yeti", "Zombie"],
        
    "Emotions" : ["acceptant", "admirable", "affectionate", "scared", "agitating", "agreeable", "aggressive", "aggravating", "agonizing", "alarmed", "alienated", "amazed", "amused", "angry", "annoying", "apprehensive", "assertive", "astonished", "attractive", "awful", "beleaguered", "bewitched", "bewitching", "bitter", "blissful", "bored", "calculating", "calm", "capricious", "caring", "cautious", "charmed", "cheerful", "compassionate", "complacent", "compliant", "composed", "conceited", "concerned", "contented", "crabby", "crazed", "crazy", "cross", "cruel", "defeated", "defiant", "delighted", "dependent", "depressed", "disappointed", "disapproving", "discontent", "disenchanted", "disgusted", "disillusioned", "disliked", "dismayed", "displeased", "dissatisfied", "distracted", "distressed", "disturbed", "eager", "earnest", "easy-going", "ecstatic", "elated", "embarrassed", "emotional", "enamored", "enchanted", "enraged", "enraptured", "enthralled", "enthusiastic", "envious", "euphoric", "exasperated", "excited", "exhausted", "extroverted", "exuberant", "fascinated", "fearful", "ferocious", "flustered", "frightened", "frustrated", "furious", "generous", "gloating", "gloomy", "glum", "greedy", "grim", "grouchy", "grumpy", "guilty", "happy", "harried", "homesick", "hopeless", "horrified", "hostile", "humiliated", "hurt", "hysterical", "infatuated", "insecure", "insulted", "interested", "introverted", "irritated", "isolated", "jaded", "jealous", "jittery", "jolly", "jovial", "joyful", "keen", "kindhearted", "kind", "laid-back", "lazy", "liking", "loathing", "lonely", "love-able", "loving", "mad", "merry", "miserable", "modest", "mortified", "naughty", "needy", "neglected", "nervous", "open", "optimistic", "ornery", "outgoing", "outraged", "panicing ", "passionate", "passive", "peaceful", "pensive", "pessimistic", "pitying", "pitiful ", "placid", "pleased", "prideful", "proud", "pushy", "quarrelsome", "queasy", "quick-witted", "quiet", "quirky", "raging", "rejected", "relieved", "remorseful", "repentant", "resentful", "resigned", "sad", "sarcastic", "sardonic", "satisfied", "scared", "scornful", "self-assured", "self-satisfied", "sentimental", "serene", "shameful", "shocked", "smug", "sorrowful", "spellbound", "spiteful", "stingy", "stressed", "subdued", "submissive", "suffering", "surprised", "sympathy", "tender", "tense", "terrified", "threatening", "thrilling", "timidity", "tormented", "tranquil", "triumphant", "trusting", "uncomfortable", "unhappy", "upset", "vain", "vengeful", "vigilant", "vivacious", "wary", "watchful", "weary", "woeful", "wonderful", "worried", "wrathful", "zealous", "zestful"],
        
    "Family": ["Man", "Woman", "Boy ", "Girl", "Grandmother", "Grandfather", "Father", "Mother", "Cousin", "Uncle", "Aunt", "Dad", "Mom", "Brother", "Sister"],

    "Genders": ["Male", "Female"],

    "Height": ["Tall", "Short", "Giant", "Small", "Tiny", "Gigantic", "Minuscule", "Average"],
        
    "Insects": ["Ant", "Aphid", "Moth", "Bee", "Beetle", "Butterfly", "Bug", "Bumblebee", "Butterfly", "Carpenter-Ant", "Caterpillar", "Chrysalis", "Cicada", "Cockroach", "Fly", "Cricket", "Damselfly", "Beetle", "Dragonfly", "Egg", "Fire-Ant", "Firefly", "Gnat", "Grasshopper", "Grub", "Horse-Fly", "Honeybee", "Hornet", "Junebug", "Katydid", "Leafhopper", "Locust", "Louse", "Luna-Moth", "Mantid", "Mantis", "Mayfly", "Mosquito", "Moth", "Wasp", "Praying-Mantis", "Pupa", "Roach", "Scarab", "Silkworm", "Silverfish", "Stag Beetle", "Stink Bug", "Termite", "Walkingstick", "Wasp", "Waterbug", "Waterstrider", "Weevil", "Wood-Borer", "Caterpillar", "Yellowjacket"],
        
    "Metals": ["Aluminum", "Antimony", "Brass", "Bronze", "Chrome", "Chromium", "Copper", "Gold", "Gunmetal", "Iron", "Iridium", "Lead", "Magnesium", "Mercury", "Metal", "Pewter", "Platinum", "Silver", "Stainless Steel", "Steel", "Tin", "Titanium", "Tungsten", "Uranium", "Yellow Gold", "Zinc"],
        
    "Numbers": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100"],
        
    "Occupations": ["Pirate", "Sailor", "Captain", "Ninja", "Cowboy", "Chef", "Blogger", "Reporter", "Preacher", "Teacher", "Janitor", "Principle", "Adventurer", "Thief", "Scavenger", "Robber", "Bandit", "Samurai", "Warrior", "Healer", "Mage", "Wizard", "Fighter", "Soldier", "Diplomat", "Guardian", "Witch", "Villain", "Tyrant", "Dictator", "Ruler", "Emperor", "King", "Queen", "Prince", "Princess", "Captain", "Farmer", "Banker", "Politician", "Dancer", "Diver", "Gardener", "Gangster", "Criminal", "Super-villain", "Maniac", "Scientist", "Archeologist", "Biologist", "Explorer", "Pilot", "Native", "Hero", "Vigilante"],
    
    "Organizations": ["Company", "Organization", "Incorporated", "Systems", "Conglomerate", "International", "Consolidated", "Logistics", "Charity", "Business", "LLC", "Division"],
        
    "Personalities": ["Able", "Abnormal", "Absent-Minded", "Above Average", "Adventurous", "Affectionate", "Agile", "Agreeable", "Alert", "Amazing", "Ambitious", "Amiable", "Amusing", "Analytical", "Angelic", "Apathetic", "Apprehensive", "Ardent", "Artificial", "Artistic", "Assertive", "Attentive", "Average", "Awesome", "Awful", "Balanced", "Beautiful", "Below Average", "Beneficent", "Blue", "Blunt", "Boisterous", "Brave", "Bright", "Brilliant", "Buff", "Callous", "Candid", "Cantankerous", "Capable", "Careful", "Careless", "Caustic", "Cautious", "Charming", "Childish", "Childlike", "Cheerful", "Chic", "Churlish", "Circumspect", "Civil", "Clean", "Clever", "Clumsy", "Coherent", "Cold", "Competent", "Composed", "Conceited", "Condescending", "Confident", "Confused", "Conscientious", "Considerate", "Content", "Cool", "Cool-Headed", "Cooperative", "Cordial", "Courageous", "Cowardly", "Crabby", "Crafty", "Cranky", "Crass", "Critical", "Cruel", "Curious", "Cynical", "Dainty", "Decisive", "Deep", "Deferential", "Deft", "Delicate", "Demonic", "Dependent", "Delightful", "Demure", "Depressed", "Devoted", "Dextrous", "Diligent", "Direct", "Dirty", "Disagreeable", "Discerning", "Discreet", "Disruptive", "Distant", "Distraught", "Distrustful", "Dowdy", "Dramatic", "Dreary", "Drowsy", "Drugged", "Drunk", "Dull", "Dutiful", "Eager", "Earnest", "Easy-Going", "Efficient", "Egotistical", "Elfin", "Emotional", "Energetic", "Enterprising", "Enthusiastic", "Evasive", "Even-Tempered", "Exacting", "Excellent", "Excitable", "Experienced", "Fabulous", "Fastidious", "Ferocious", "Fervent", "Fiery", "Flabby", "Flaky", "Flashy", "Frank", "Friendly", "Funny", "Fussy", "Generous", "Gentle", "Gloomy", "Glutinous", "Good", "Grave", "Great", "Groggy", "Grouchy", "Guarded", "Hateful", "Hearty", "Helpful", "Hesitant", "Hot-Headed", "Hypercritical", "Hysterical", "Idiotic", "Idle", "Illogical", "Imaginative", "Immature", "Immodest", "Impatient", "Imperturbable", "Impetuous", "Impractical", "Impressionable", "Impressive", "Impulsive", "Inactive", "Incisive", "Incompetent", "Inconsiderate", "Inconsistent", "Independent", "Indiscreet", "Indolent", "Indefatigable", "Industrious", "Inexperienced", "Insensitive", "Inspiring", "Intelligent", "Interesting", "Intolerant", "Inventive", "Irascible", "Irritable", "Irritating", "Jocular", "Jovial", "Joyous", "Judgmental", "Keen", "Kind", "Lame", "Lazy", "Lean", "Leery", "Lethargic", "Level-Headed", "Listless", "Lithe", "Lively", "Local", "Logical", "Long-Winded", "Lovable", "Love-Lorn", "Lovely", "Maternal", "Mature", "Mean", "Meddlesome", "Mercurial", "Methodical", "Meticulous", "Mild", "Miserable", "Modest", "Moronic", "Morose", "Motivated", "Musical", "Naive", "Nasty", "Natural", "Naughty", "Negative", "Nervous", "Noisy", "Normal", "Nosy", "Numb", "Obliging", "Obnoxious", "Old-Fashioned", "One-Sided", "Orderly", "Ostentatious", "Outgoing", "Outspoken", "Passionate", "Passive", "Paternal", "Paternalistic", "Patient", "Peaceful", "Peevish", "Pensive", "Persevering", "Persnickety", "Petulant", "Picky", "Plain", "Plain-Speaking", "Playful", "Pleasant", "Plucky", "Polite", "Popular", "Positive", "Powerful", "Practical", "Prejudiced", "Pretty", "Proficient", "Proud", "Provocative", "Prudent", "Punctual", "Quarrelsome", "Querulous", "Quick", "Quick-Tempered", "Quiet", "Realistic", "Reassuring", "Reclusive", "Reliable", "Reluctant", "Resentful", "Reserved", "Resigned", "Resourceful", "Respected", "Respectful", "Responsible", "Restless", "Revered", "Ridiculous", "Sad", "Sassy", "Saucy", "Sedate", "Self-Assured", "Selfish", "Sensible", "Sensitive", "Sentimental", "Serene", "Serious", "Sharp", "Short-Tempered", "Shrewd", "Shy", "Silly", "Sincere", "Sleepy", "Slight", "Sloppy", "Slothful", "Slovenly", "Slow", "Smart", "Snazzy", "Sneering", "Snobby", "Somber", "Sober", "Sophisticated", "Soulful", "Soulless", "Sour", "Spirited", "Spiteful", "Stable", "Staid", "Steady", "Stern", "Stoic", "Striking", "Strong", "Stupid", "Sturdy", "Subtle", "Sullen", "Sulky", "Supercilious", "Superficial", "Surly", "Suspicious", "Sweet", "Tactful", "Tactless", "Talented", "Testy", "Thinking", "Thoughtful", "Thoughtless", "Timid", "Tired", "Tolerant", "Touchy", "Tranquil", "Ugly", "Unaffected", "Unbalanced", "Uncertain", "Uncooperative", "Undependable", "Unemotional", "Unfriendly", "Unguarded", "Unhelpful", "Unimaginative", "Unmotivated", "Unpleasant", "Unpopular", "Unreliable", "Unsophisticated", "Unstable", "Unsure", "Unthinking", "Unwilling", "Venal", "Versatile", "Vigilant", "Warm", "Warmhearted", "Wary", "Watchful", "Weak", "Well-Behaved", "Well-Developed", "Well-Intentioned", "Well-Respected", "Well-Rounded", "Willing", "Wonderful", "Volcanic", "Vulnerable", "Zealous"],

    "Size": ["Thin", "Fat", "Average", "Enormous", "Skinny", "Muscular", "Frail", "Lean", "Thick"]
};
if(storage.getItem("device_ID") != null)
{
    var deviceID = storage.getItem("device_ID");
}
else
{
    var deviceID = Array(16+1).join((Math.random().toString(36)+'00000000000000000').slice(2, 18)).slice(0, 16) + Array(16+1).join((Math.random().toString(36)+'00000000000000000').slice(2, 18)).slice(0, 16);  
    storage.setItem("device_ID", deviceID);
}
ga('create', 'UA-76038106-2', {
    'storage': 'none',
    'clientId':deviceID
});
ga('set','checkProtocolTask',null);
ga('set','checkStorageTask',null);

(function($) {
  $.fn.nodoubletapzoom = function() {
      $(this).bind('touchstart', function preventZoom(e) {
        var t2 = e.timeStamp
          , t1 = $(this).data('lastTouch') || t2
          , dt = t2 - t1
          , fingers = e.originalEvent.touches.length;
        $(this).data('lastTouch', t2);
        if (!dt || dt > 300 || fingers > 1) return; // not double-tap

        e.preventDefault(); // double tap - prevent the zoom
        // also synthesize click events we just swallowed up
        $(this).trigger('dblclick');
      });
  };
})(jQuery);
function loadInsta(feed) {
    $(".instagramFeed").empty();
    $.each(feed.responseData.feed.entries, function(index) {
        $(".hiddenInstagramFeed").append(this.content);
        if(index == 29)
        {
            return false;
        }
    });
    $(".hiddenInstagramFeed").find("img").each(function(){
        if($(this).height() == "306")
        {
            $(".instagramFeed").append('<div class="img" data-comment="'+$(this).parent().parent().next().find("strong").html()+'" data-url="'+$(this).attr("src")+'" style="background: url('+$(this).attr("src")+') no-repeat; background-size:cover; background-position: center center; width: 50%; height: '+$(window).width() / 2+'px"></div>');
        }
    });
    $(".instagramFeed").find(".img").on("click", function(){
        $("body").append("<div class='backdrop'><div class='fullheight'></div><div class='imageContainer'><img src='"+$(this).attr("data-url")+"'/><i class='fa fa-times'></i><p>"+$(this).attr("data-comment")+"</p></div></div>");
        $(".backdrop").on("click", function() {
            $(this).remove();
        });
    });
    $(".hiddenInstagramFeed").empty();
}    
function toggleEnabled() {
    if($(".randomizer").find(".category").length > 0)
    {
        $("button.randomize").attr("disabled", false)
    }
    else
    {
        $("button.randomize").attr("disabled", "disabled")
    }
}
$(function() {
    $( "[data-role='navbar']" ).navbar();
    $( "[data-role='header']" ).toolbar();
});
// Update the contents of the toolbars
$( document ).on( "pagecontainerchange", function() {
    // Each of the four pages in this demo has a data-title attribute
    // which value is equal to the text of the nav button
    // For example, on first page: <div data-role="page" data-title="Info">
    var current = $( ".ui-page-active" ).jqmData( "title" );
    $(".pageLink").show();
    if(current == "Gallery")
    {
        $(".pageLink").html("<i class='cf-Home'></i>").attr("href", "#home");
        ga('send', 'pageview', {'page': 'gallery'});
    }
    else if(current == "Home")
    {
        $(".pageLink").html("<i class='cf-Gallery'></i>").attr("href", "#gallery");
        ga('send', 'pageview', {'page': 'home'});
    }
    else
    {
        $(".pageLink").hide();
        ga('send', 'pageview', {'page': 'results'});
    }
});

$(document).ready(function(){
    $("button.randomize, a.rerunLink").on("click", function() {
        $(".results").empty();
        var allCategories = $(".randomizer").find(".category");
        ga('send', 'event', "randomize", $(this).attr("data-buttonName"), allCategories.length);
       allCategories.each(function(index){
           var list = lists[$(this).attr("data-category")];
           $(".results").append("<div class='category'><i class='cf-"+$(this).attr("data-category")+"'></i><p>"+list[Math.floor(Math.random()*list.length)]+"</p></div>");
       });
        $.mobile.changePage( "#result", { transition: "slide", changeHash: true });
    });
    
    var count = 1,
        slide = "<div class='categorySlide'>";
    $.each(lists, function(key, value) {
        slide += "<div class='category' data-category='"+key+"'><i class='cf-"+key+"'></i><p>"+key+"</p></div>";
        if(count == 9)
        {
            slide += "</div>";
            $(".categories").append(slide);
            slide = "<div class='categorySlide'>";
            count = 1;
        }
        else
        {
            count++;
        }
    });
    slide += "</div>";
    $(".categories").append(slide);
    $(".categoriesSmallBar").width(1/$(".categorySlide").length * 100 + "%");
    $(".category").nodoubletapzoom();
    $(".categories .category").on("click", function() {
        ga('send', 'event', "category", "add", $(this).attr("data-category"));
        $(this).clone().appendTo(".randomizer").on("dblclick", function() {
            ga('send', 'event', "category", "remove", $(this).attr("data-category"));
            $(this).find("i").animate(
            {
                "padding": "0px", 
                "font-size": "0pt", 
                "width": "0px", 
                "height": "0px"
            },
            "fast").parent().animate({
                "width": "0px"
            },
            {
                "complete": function()
                {
                    $(this).remove();
                    toggleEnabled();
                }
            },
            "fast");
            
        }).find("i").animate({
            "padding": "3px 2px;",
            "font-size": "40pt",
            "width": "61px",
            "height": "56px"
        }, "fast").parent().nodoubletapzoom();
        $(".randomizer").animate({
            "scrollLeft": $(".randomizer").find(".category").width() * $(".randomizer").find(".category").length
        });
        toggleEnabled();
    }); 
    $( ".categories" ).on( "swipeleft", function(){
        $(this).animate({scrollLeft: $(this).scrollLeft() + $(".categorySlide").width()}, 400);
        if(($(".categoriesSmallBar").position().left / $(".categoriesBar").width()) + (1/$(".categorySlide").length) < 1 - (1/$(".categorySlide").length))
        {
            $(".categoriesSmallBar").animate({left: (($(".categoriesSmallBar").position().left / $(".categoriesBar").width()) + (1/$(".categorySlide").length)) * 100 + "%"});  
        }
        else
        {
             $(".categoriesSmallBar").animate({left: (1 - (1/$(".categorySlide").length)) * 100 + "%"});
        }
        
    });
    $( ".categories" ).on( "swiperight", function(){
        $(this).animate({scrollLeft: $(this).scrollLeft() - $(".categorySlide").width()}, 400);
        if(($(".categoriesSmallBar").position().left / $(".categoriesBar").width()) - (1/$(".categorySlide").length) > 0.08)
        {
            $(".categoriesSmallBar").animate({left: (($(".categoriesSmallBar").position().left / $(".categoriesBar").width()) - (1/$(".categorySlide").length)) * 100 + "%"});
        }
        else
        {
            $(".categoriesSmallBar").animate({left: "0%"});
        }
        
    });
    
    // Instance the tour
    tour = new Tour({
      backdrop: true,
      template: "<div class='popover tour'><div class='arrow'></div><h3 class='popover-title'></h3><div class='popover-content'></div><div class='popover-navigation'><button class='btn btn-default' data-role='prev'><i class='fa fa-arrow-left'></i></button><button class='btn btn-default' data-role='next'><i class='fa fa-arrow-right'></i></button><button class='btn btn-default' data-role='end'><i class='fa fa-times'></i></button></div></div>",
      steps: [
          {
            element: ".categories .category:eq(0)",
            title: "Add a Category",
            content: "Tap to add a category from the list. You can add as many categories as you want, and you can also add the same category multiple times There are multiple list pages to scroll through.",
            placement: "bottom",
            reflex: true,
            onNext: function (tour) {
                ga('send', 'event', "advanceTour", this.id);
                if($("button.randomize").attr("disabled") == "disabled")
                    $(".categories .category:eq(0)").click();
            }
          },
          {
            element: ".randomizer .category:eq(0)",
            title: "Remove a Category",
            content: "Double tap to remove a category you have selected from the list.",
            placement: "top",
            reflex: true,
            onNext: function (tour) {
                ga('send', 'event', "advanceTour", this.id);
            }
          },
          {
            element: "button.randomize",
            title: "Forge a Concept",
            content: "Tap the <strong>Randomize</strong> Button to get a random word from each of the categories you have selected.",
            placement: "top",
            reflex: true,
            onNext: function (tour) {
                ga('send', 'event', "advanceTour", this.id);
                $("button.randomize").click();
            }
          },
          {
            element: ".results",
            title: "View Your Concept",
            content: "Concept Forge will create a list to inspire your new concept. Screenshot the results to save or share it.",
            placement: "bottom",
            reflex: true,
            onNext: function(tour) {
                ga('send', 'event', "advanceTour", this.id);
            },
            onPrev: function (tour) {
                $.mobile.changePage( "#home", { transition: "slide", changeHash: true });
            }
          },
          {
            element: ".rerunLink",
            title: "Forge a New Concept",
            content: "Click the Refresh button to generate a new concept from the same categories.",
            placement: "top",
            reflex: true,
            onNext: function(tour) {
                ga('send', 'event', "advanceTour", this.id);
            }
          }
      ],
      onEnd: function (tour) {
          $(".randomizer").empty();
          $.mobile.changePage( "#home", { transition: "slide", changeHash: true });
          toggleEnabled();
          ga('send', 'event', "closeTour", tour._current);
      }
    });
    tour.init();
    tour.start();
    $("a.startTour").on("click", function() {
       storage.setItem("tour_current_step", 0);
       storage.setItem("tour_end", null);
       tour.init(true);
       tour.start(true);
       ga('send', 'event', "startTour"); 
    });
    
    //Commented out until I have a chance to further debug the connection issues
    $.ajax({
        url:'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=1000&callback=?&q=' + encodeURIComponent(url),
        cache: false,
        dataType: "jsonp",
        success:function(feed) {
            loadInsta(feed);
            storage.setItem("instaFeed", JSON.stringify(feed));
        },
        fail: function(error){
            console.log("There was an error :"+error);
            if(storage.getItem("instaFeed") != null)
                loadInsta(JSON.parse(storage.getItem("instaFeed")));
            else
                $(".instagramFeed").append("<p>Unable to connect to the gallery. Please try again later.</p>")
        }
    });

});