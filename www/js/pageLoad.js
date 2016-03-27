var categories = "",
    url = 'http://widget.websta.me/rss/tag/belugawhale',
    storage = window.localStorage,
    tour = "",
    lists = {
    "Animals": ["Aardvark", "Parrot", "penguin", "elephant", "python", "cat", "albatross", "terrier", "malamute", "alligator", "alpaca", "bison", "spaniel", "crocodile", "flamingo", "Robin", "sparrow", "amphibian", "anaconda", "fish", "shark", "ant", "anteater", "antelope", "ape", "aphid", "fox", "wolf", "armadillo", "baboon", "camel", "badger", "eagle", "barnacle", "barracuda", "bass", "hound", "bat", "beagle", "bear", "beaver", "bee", "beetle", "whale", "bird", "blackbird", "caiman", "swan", "bloodhound", "bluebird", "tuna", "bluejay", "butterfly", "octopus", "bobcat", "collie", "boxer", "pelican", "turtle", "bug", "buffalo", "bull", "bulldog", "bullfrog", "bumblebee", "butterfly", "caiman", "canary", "capybera", "goose", "dog", "cardinal", "caribou", "cassowary", "caterpillar", "centipede", "chameleon", "cheetah", "chickadee","chicken", "chihuahua", "chimipanzee", "chinchilla", "chipmunk", "cicada", "clam", "clownfish", "cobra", "cockatoo", "cod", "cockroach", "lizard",  "collie", "copperhead", "cottonmouth", "cougar", "cow", "coyote", "crab", "crane", "crayfish", "cricket", "crocodile", "crow", "cuttlefish", "Dachshund", "Dalmatian", "deer", "tortoise", "dingo", "dinosaur", "Doberman", "dodo", "dogfish", "dolphin", "donkey", "dove", "woodpecker", "dragonfly", "dromedary", "duck", "platypus", "earthworm", "earwig", "bluebird", "echidna", "eel", "elephant", "elk", "emu", "ermine", "falcon", "fox", "ferret", "crab", "finch", "firefly", "fish", "flamingo", "flatworm", "flea", "flounder", "fly", "antelope", "giraffe", "fox", "frog", "bat", "fly", "gar", "gavial", "gazelle", "gecko", "gerbil", "squid", "gibbon", "giraffe", "gnat", "gnu", "goat", "goldfinch", "goldfish", "goose", "gopher", "gorilla", "grasshopper", "owl", "dragonfly", "iguana", "greyhound",  "groundhog", "grouper", "grouse", "grub", "guinea pig", "gull", "hamster",  "hare",  "hatchetfish",  "hawk",  "hedgehog",  "hen",  "hermit crab", "heron", "herring", "hippo", "hippopotamus", "hornet", "horse", "hound", "hummingbird", "husky", "hyena", "hyrax", "ibis", "iguana", "impala", "elephant", "insect", "rabbit", "jaguar", "jellyfish", "jerboa", "junebug", "kangaroo", "katydid", "toucan", "cobra", "kiwi", "koala", "kookaburra", "krill", "ladybug", "lagomorph", "lanternfish", "lemming", "lemur", "leopard", "lion", "lizard", "llama", "lobster", "locust", "loon", "lynx", "macaw", "mackerel", "mammoth", "manatee", "mandrill", "mamba", "mantis", "marmoset", "marmot", "mastodon", "meadowlark", "mealworm", "meerkat", "Megalodon", "millipede", "mink", "minnow", "mice", "mockingbird", "moa", "mole", "mollusk", "butterfly", "mongoose", "monkey", "moose", "mosquito", "moth", "mouse", "mudpuppy", "ox", "muskrat", "narwhal", "nautilus", "newt", "nightingale", "beaver", "porcupine", "cardinal", "whale", "nuthatch", "nutria", "nymph", "ocelot", "octopus", "okapi", "sheepdog", "opossum", "orangutan", "orca", "oriole", "ostrich", "otter", "owl", "ox", "oyster", "panda", "pangolin", "panther", "parakeet", "parrot", "peacock", "pekingese", "pelican", "penguin", "pig", "pigeon", "piranha", "plover", "polliwog", "pomeranian", "poodle", "porpoise", "chicken", "pufferfish", "puffin", "pug", "puma", "python", "quail", "quokka", "rabbit", "raccoon", "rat", "rattlesnake", "ray", "kangaroo", "reindeer", "reptile", "rhino", "rhinoceros", "roadrunner", "roach", "robin", "rodent", "rooster", "rottweiler", "roundworm", "hummingbird", "sailfish", "salamander", "salmon", "sandpiper", "scallop", "scorpion", "seahorse", "seal", "shark", "sheep", "shrew", "shrimp", "silkworm", "silverfish", "skink", "skipper", "skunk", "sloth", "slug", "snail", "snake", "leopard", "sparrow", "spider", "squid", "squirrel", "starfish", "starling", "stingray", "stork", "sunfish", "swan", "swift", "swordfish", "tadpole", "tarantula", "termite", "tern", "sloth", "tiger", "toad", "tortoise", "toucan", "treefrog", "trout", "tuatara", "tuna", "turkey", "turtle", "umbrellabird", "ungulates", "uniramians", "urchin", "quail", "chameleon", "viper", "vulture", "wallaby", "walrus", "warthog", "wasp", "waterbug", "weasel", "weevil", "meadowlark", "whale", "whelk", "whippet", "scorpion", "tiger", "rhinoceros", "deer", "dog", "wildebeest", "wolf", "wolverine", "wombat", "woodchuck", "caribou", "woodpecker", "worm", "wren", "yak", "yellowjacket", "mongoose", "zebra"],

    "Age": ["Elderly", "Older", "Ancient", "Old", "Young", "Adolescent", "Middle Aged", "Teen", "20s", "30s", "40s", "50s", "60s", "70s", "Baby", "Toddler", "Newborn", "Child"],

    "Businesses": ["Cafe", "Designs", "Skatepark", "Market", "Agriculture", "Forestry", "Pest Control",  "Landscaping", "Consulting", "Employment", "Fundraising", "Marketing", "Advertising", "Notary Public", "Publishing", "Records", "Retail", "Technologies", "Travel Agency", "Video Production", "Architects", "Construction", "Inspection", "Manufacturing", "Contractors", "Engineering", "Rentals", "Plumbing", "Remodeling", "Maintenance", "Child Care Services", "College", "University", "Cosmetology School", "School", "Utilities", "Education", "Financing", "Insurance", "Services", "Accounting", "Insurance",  "Bakery", "Catering", "Foods", "Beverages", "Manufacturing", "Grocery Store", "Convenience Store", "Gas Station", "Hotel", "Motel", "Food Truck", "Restaurant", "Library", "Auctioneers", "Gym", "Fitness", "Health Services", "Dentist", "Hospital", "Pharmacy", "Veterinarian", "Automotive", "Car Wash", "Conservation", "Attorneys", "Barber Shop", "Real Estate", "Housing", "Beauty Salon", "Cemetery", "Dry cleaning", "Event Planning", "Florist", "Janitorial", "Cleaning Services", "Spa", "Salon", "Photography", "Inspection", "Interior Design", "Property Management", "Storage", "Locksmith", "Private Investigations", "Security", "Security Systems", "Airlines", "Boating", "Taxi", "Towing", "Trucking"],
    
    "Colors": ["Black", "Blue", "Brown", "Gray", "Green", "Orange", "Pink", "Purple", "Red", "White", "Yellow"],

    "Genders": ["Male", "Female"],

    "Height": ["Tall", "Short", "Giant", "Small", "Tiny", "Gigantic", "Minuscule", "Average"],
    
    "Organizations": ["Company", "Organization", "Incorporated", "Systems", "Conglomerate", "International", "Consolidated", "Logistics", "Charity", "Business", "LLC", "Division"],

    "Size": ["Thin", "Fat", "Average", "Enormous", "Skinny", "Muscular", "Frail", "Lean", "Thick"]
};
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
        $(".pageLink").html("<i class='fa fa-home'></i>").attr("href", "#home");
    }
    else if(current == "Home")
    {
        $(".pageLink").html("<i class='fa fa-th-large'></i>").attr("href", "#gallery");
    }
    else
    {
        $(".pageLink").hide();
    }
});

$(document).ready(function(){
    $("button.randomize, a.rerunLink").on("click", function() {
        $(".results").empty();
        var allCategories = $(".randomizer").find(".category");
       allCategories.each(function(index){
           var list = lists[$(this).attr("data-category")];
           $(".results").append("<div class='category'><i class='fa "+$(this).attr("data-category")+"'></i><p>"+list[Math.floor(Math.random()*list.length)]+"</p></div>");
       });
        $.mobile.changePage( "#result", { transition: "slide", changeHash: true });
    });
    
    var count = 1,
        slide = "<div class='categorySlide'>";
    $.each(lists, function(key, value) {
        slide += "<div class='category' data-category='"+key+"'><i class='fa "+key+"'></i><p>"+key+"</p></div>";
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
    $(".category").nodoubletapzoom();
    $(".categories .category").on("dblclick", function(e) {
        $(this).clone().appendTo(".randomizer").on("dblclick", function() {
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
            "padding": "14px 12px",
            "font-size": "20pt",
            "width": "35px",
            "height": "31px"
        }, "fast").parent().nodoubletapzoom();
        toggleEnabled();
    }); 
    $( ".categories" ).on( "swipeleft", function(){
        $(this).animate({scrollLeft: $(this).scrollLeft() + $(".categorySlide").width()}, 400);
    });
    $( ".categories" ).on( "swiperight", function(){
        $(this).animate({scrollLeft: $(this).scrollLeft() - $(".categorySlide").width()}, 400);
    });
    
    // Instance the tour
    tour = new Tour({
      backdrop: true,
      template: "<div class='popover tour'><div class='arrow'></div><h3 class='popover-title'></h3><div class='popover-content'></div><div class='popover-navigation'><button class='btn btn-default' data-role='prev'><i class='fa fa-arrow-left'></i></button><button class='btn btn-default' data-role='next'><i class='fa fa-arrow-right'></i></button><button class='btn btn-default' data-role='end'><i class='fa fa-times'></i></button></div></div>",
      steps: [
          {
            element: ".category:eq(0)",
            title: "Add a Category",
            content: "Double tap a category to add it to your results. You can add up to 6 categories.",
            placement: "bottom",
            reflex: true,
            onNext: function (tour) {
                if($("button.randomize").attr("disabled") == "disabled")
                    $(".category:eq(0)").dblclick();
            }
          },
          {
            element: "button.randomize",
            title: "Forge a Concept",
            content: "Click the <strong>Forge!</strong> button to pick a random word from each of your selected categories.",
            placement: "top",
            reflex: true,
            onNext: function (tour) {
                $("button.randomize").click();
            }
          },
          {
            element: ".results",
            title: "View Your Concept",
            content: "Concept Forge will create a list to drive your concept. Screenshot the results to save or share it.",
            placement: "bottom",
            reflex: true,
            onPrev: function (tour) {
                $.mobile.changePage( "#home", { transition: "slide", changeHash: true });
            }
          },
          {
            element: ".rerunLink",
            title: "Forge a New Concept",
            content: "You can click the <strong>refresh</strong> button to create a new concept from the same categories.",
            placement: "top",
            reflex: true
          }
      ],
      onEnd: function (tour) {
          $(".randomizer").empty();
          $.mobile.changePage( "#home", { transition: "slide", changeHash: true });
          toggleEnabled();
      }
    });
    tour.init();
    tour.start();
    $("a.startTour").on("click", function() {
       storage.setItem("tour_current_step", 0);
       storage.setItem("tour_end", null);
       tour.init(true);
       tour.start(true); 
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