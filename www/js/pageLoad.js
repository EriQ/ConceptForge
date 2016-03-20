var categories = "",
    url = 'http://widget.websta.me/rss/tag/belugawhale',
    storage = window.localStorage,
    lists = {
    "dessert": ["almond cookie", "ambrosia", "angelfood cake", "apple brown Betty", "apple crisp", "apple pie", "baked Alaska", "baked apple", "baklava", "banana split", "Belgian waffle", "biscotti", "black forest cake", "blueberry muffin", "bombe", "Boston cream pie", "bread pudding", "brownie", "buttercream frosting", "butterscotch", "cake", "cannoli", "caramel apple", "carrot cake", "cheesecake", "cherry pie", "chocolate bar", "chocolate cake", "chocolate chip cookie", "chocolate mousse", "churro", "cinnamon roll", "cobbler", "coconut cake", "coconut cream pie", "coffee cake", "cookie", "crepe Suzette", "cupcake", "custard", "Danish pastry", "dessert", "devil's food cake", "doughnut", "dumplings", "eclair", "flan", "fortune cookie", "French toast", "fritter", "frosting", "frozen yogurt", "fruit cake", "fruit cocktail", "fruit salad", "fudge", "gelatin", "gelato", "gingersnaps", "gingerbread", "honey", "hot-fudge sundae", "ice cream", "ice cream cake", "icing", "jam", "jelly", "jellyroll", "Key lime pie", "ladyfingers", "lemon bars", "lemon meringue pie", "macaroon", "marshmallow", "meringue", "milkshake", "molasses", "mousse", "muffin", "neapolitan ice cream", "nougat", "nut brittle", "oatmeal cookie", "pancakes", "panna cotta", "parfait", "pastry", "peanut brittle", "peanutbutter cookie", "pecan pie", "pie", "poached pears", "popcicle", "popover", "pound cake", "praline", "pudding", "pumpkin pie", "quick bread", "red velvet cake", "rhubarb pie", "raisin bread", "rice pudding", "scone", "sherbet", "shortbread", "s'mores", "snickerdoodle", "soda", "soda bread", "sorbet", "souffle", "sponge cake", "spumoni", "strawberry shortcake", "strudel", "sugar", "sugar cookie", "sundae", "sweet potato pie", "sweet roll", "sweets", "tapioca pudding", "tart", "toasted marshmallow", "toffee", "torte", "trifle", "truffle", "turnover", "upside-down cake", "vanilla cream pie", "vanilla pudding", "waffle", "watermelon ice", "yellow cake", "zabiglone"],

    "driving": ["accelerate", "accelerator", "accident", "airbag", "alley", "arterial road", "asphalt", "auto", "automatic transmission", "automobile", "avenue", "back-up", "back seat", "back seat driver", "barrier", "bicycle", "bike", "boulevard", "brakes", "bridge", "bus", "car", "carpool", "carpool lane", "causeway", "caution", "chauffeur", "circle", "cloverleaf", "clutch", "cobblestone", "construction", "court", "crash", "cruise control", "cul-de-sac", "curve", "danger", "dead end", "defensive driving", "dent", "detour", "diamond lane", "dirt road", "do not enter sign", "double parked", "drive", "driver", "driver's ed", "driver's education", "driver's license", "driveway", "electric car", "emergency", "emission", "entrance ramp", "exhaust", "exit", "exit ramp", "expressway", "fast", "fast lane", "fender", "fill it up", "flat-bed truck", "flat tire", "freeway", "fuel", "fuel efficiency", "fuel tank", "garage", "gas", "gasoline", "gas tank", "gear", "gearshift", "global positioning system", "go", "GPS", "gravel road", "green light", "gridlock", "gutter", "hairpin curve", "headlights", "high-beam", "high-occupancy vehicle lane", "high-octane gas", "highway", "highway patrol", "hill", "HOV lane", "hybrid", "idling", "impact", "indicator", "insurance", "interchange", "intersection", "interstate highway", "jackknifing", "kilometer", "kilometers per hour", "kph", "lane", "learner's permit", "left turn", "license", "lights", "loop", "low-beam", "manual transmission", "map", "mass transit", "merge", "mile", "mile marker", "miles per gallon", "miles per hour", "motor", "motorcycle", "motorway", "mph", "no parking", "no stopping", "oil", "oncoming traffic", "one-way", "overpass", "parallel parking", "park", "parking lot", "parking meter", "parking spot", "parking ticket", "parkway", "pass", "pavement", "pedal", "pedestrian", "pedestrian crossing", "police", "pot hole", "railroad crossing", "ramp", "red light", "registration", "rest area", "rest stop", "reverse", "ride", "right turn", "road", "road closed", "road crew", "road rage", "road trip", "roadway", "rollover", "roundabout", "rush hour", "safety", "scenery", "scenic route", "school zone", "s-curve", "seatbelt", "semi", "shoulder", "sidewalk", "sign", "skid", "slow", "snow plow", "speed", "speed bump", "speed limit", "speeding", "speeding ticket", "speedometer", "state patrol", "steer", "steering wheel", "stop", "stop sign", "street", "street sign", "superhighway", "SUV", "switchbacks", "terrace", "test drive", "ticket", "tire", "toll", "toll road", "tow truck", "traffic", "traffic jam", "traffic light", "traffic sign", "transmission", "transportation", "truck", "truck route", "truck stop", "tunnel", "turn", "turn signal", "under construction", "underpass", "u-turn", "van pool", "vehicle", "warning", "wide load", "yellow light", "yield", "zebra crossing"],

    "energy": ["absorb", "AC", "accumulator", "alternating current", "anthracite coal", "appliance", "battery", "biodiesel", "biofuel", "biomass", "bituminous coal", "blackout", "boiler", "British thermal unit", "Btu", "capacity", "carbon", "carbon footprint", "carbon tax", "charcoal", "chemical energy", "clean energy", "climate change", "coal", "coke", "combustion", "conservation", "crude oil", "current", "dam", "DC", "diesel", "direct current", "drill", "dynamo", "efficiency", "efficient", "electric", "electrical", "electrical grid", "electromagnetic energy", "electron", "energy", "engine", "engineer", "entropy", "environment", "erg", "ethanol", "fossil fuel", "flexible fuel", "flywheel", "fuel", "fuel cell", "furnace", "gas", "gasoline", "gas-turbine", "generate", "generation", "generator", "geothermal", "global warming", "green", "green energy", "greenhouse effect", "greenhouse gas", "grid", "heat", "heat exchange", "high-voltage", "horsepower", "human-powered", "hybrid", "hydrocarbon", "hydroelectric", "hydrogen", "hydrothermal", "industry", "internal combustion engine", "inverter", "jet fuel", "joule", "Kelvin scale", "kilowatt", "kilowatt-hour", "kinetic energy", "light", "liquefied petroleum gas", "magnetic energy", "megawatt", "methane", "methanol", "mining", "motor", "natural gas", "nuclear", "nuclear energy", "nuclear power", "nuclear reactor", "nucleus", "off-the-grid", "oil", "oil rig", "peak oil", "peat", "petroleum", "photon", "photovoltaic", "photovoltaic panel", "pollution", "potential energy", "power", "power grid", "power lines", "power plant", "power station", "power transmission", "propane", "public utility", "radiant", "radiate", "reactor", "reciprocating engine", "reflect", "renewable", "reservoir", "shale", "solar panel", "solar power", "static electricity", "steam", "steam engine", "steam turbine", "sun", "sunlight", "sunshine", "sustainable", "temperature", "therm", "thermal energy", "thermodynamics", "tidal power", "transmission lines", "transmit", "turbine", "utilities", "volt", "waste", "watt", "wattage", "wave power", "wind", "wind farm", "windmill", "wind power", "wind turbine", "work"]
};
function loadInsta(feed) {
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

$(function() {
    $( "[data-role='navbar']" ).navbar();
    $( "[data-role='header'], [data-role='footer']" ).toolbar();
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
    $("button").click(function() {
        var allCategories = $(".randomizer").find(".category");
       allCategories.each(function(index){
           var list = lists[$(this).attr("data-category")];
           categories += list[Math.floor(Math.random()*list.length)];
           if(index != allCategories.length - 1)
           {
             categories += ", ";  
           }
       });
        alert(categories);
        categories = "";
    });
    $.each(lists, function(key, value) {
        $(".categories").append("<div class='category' data-category='"+key+"'><i class='fa "+key+"'></i></div>");
    });
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
    $(".category").nodoubletapzoom();
    $(".categories .category").on("dblclick", function(e) {
        $(this).clone().appendTo(".randomizer").on("dblclick", function() {
            $(this).remove(); 
        }).nodoubletapzoom();
    }); 
    
    if(navigator.onLine)
    {
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
            }
        }); 
    }
    else
    {
        $(".instagramFeed").append("<p>You must be online to view the gallery.</p>")
    }

});