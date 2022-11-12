var campingStuff = [
    {
        "title": "Roofnest Privacy Tent",
        "price": "$75.00",
        "desc": "The Roofnest Privacy Tent is a multifunctional and portable mini-room which can be used for changing, showering, or anything else where a little privacy is needed. The convenient pop-up design means setup and takedown will be a breeze and you can spend more time having fun. (note: that a Privacy tent is included with all tent models).",
        "image": "images/1.webp"
    },

    {
        "title": "Tent Structure",
        "price": "$649.00",
        "desc": "The classic Springbar® Canvas Tent design in a footprint, built to Jack Kirkham Jr.s precise specs. Simple to set-up, legendary in heavy wind and rain, and exceptionally spacious, the Highline 6 Tent is well-suited to car camping families, DIY glampers, and professional outfitters alike.",
        "image": "images/2.webp"
    },

    {
        "title": "Camping Blanket",
        "price": "$94.95",
        "desc": "Backed with a water repellent ripstop shell, soft fleece interior, and modular snaps for different modes, this packable camp blanket is your go-to adventure companion. With DWR microfleece and a sturdy exterior, the Field Blanket will keep you warm and cozy from the rainy Cascades to the misty coast.",
        "image": "images/3.webp"
    },

    {
        "title": "Roof Top Tent",
        "price": "$4,199.00",
        "desc": "Pushing the boundaries of innovation. Skycamp 3.0 is the newest edition of our flagship, award-winning roof top tent. Every element of its design has been improved based on feedback from our global community. From upgraded zippers to reengineered locking latches and refining the aerodynamic hard shell for even more bedding storage inside. All that remains is deciding where your next adventure will be.",
        "image": "images/4.webp"
    },

    {
        "title": "Camp Bed",
        "price": "$113.40",
        "desc": "The Cloud Camp Bed is Stoic's comfiest sleeping pad, so we followed the same recipe and sized it up for two campers. It uses plenty of foam to offer all the cushioning you need to sleep soundly. Its soft, stretchy fabric has a TPU coating to protect from wet weather should you sleep outside the tent, and the bottom is reinforced to stay solid on rocky grounds.",
        "image": "images/5.webp"
    },

    {
        "title": "Co-op Backpacking Bundle",
        "price": "$243.00",
        "desc": "3 customer faves—tent, sleeping bag and pad—together in the REI Co-op Backpacking Bundle",
        "image": "images/6.webp"
    },

    {
        "title": "Casual Camping Gear",
        "price": "$776.00",
        "desc": "Basecamp is all about adventure and having courage. They have partnered with the Wounded Warrior Project after meeting Dan Nevins, a wounded warrior himself and advocate for the organization. In 2021, Sweda’s CEO donated $100,000 to the organization through Basecamp. In 2022, Basecamp intends on donating $125,000 to the Wounded Warrior Program.",
        "image": "images/7.webp"
    },

    {
        "title": "Campground Kit",
        "price": "$649.00",
        "desc": "New kid on the car-camping block? Not to worry, our Campground Bundle has everything you need to start strong! With a 40-degree sleeping bag to keep you cozy and a self-inflating air pad to soften up the (camp) ground, this easy-to-use starter pack will get you geared up in seconds flat. Packs up perfectly in a shared duffle...just grab it and go!",
        "image": "images/8.webp"
    },

    {
        "title": "Off Grid Kit",
        "price": "$649.00",
        "desc": "This package gives you all the parts you'll need to getting off grid! We made it so it takes out all the guess work for you, everything is right here in one purchase,  all the components work together, gives you the power you need, and it's  bundle together so you can save money.",
        "image": "images/9.webp"
    },

    {
        "title": "Mountaineering Koda Tent",
        "price": "$649.00",
        "desc": "The ALPS Mountaineering Koda 2 Tent—inspired by their best-selling Taurus tent —provides us with a fully-featured, high-quality shelter for backpacking and camping trips. What sets the Koda apart from the Taurus is its half mesh walls that keep us comfortable through muggy summer nights, while the full-coverage fly keeps everyone protected from late spring rain showers. ALPS coated and factory seam-sealed the fly and floor to further enhance weather protection to keep us, along with our friends and our gear, dry. The lightweight poles, quick assembly, and roomy vestibules make the tent an easy choice when you arrive at the campsite after the sun sets.",
        "image": "images/10.webp"
    }
];

function initListeners() {

    $(".game-card").click(function(e) {
        let camp_id = e.currentTarget.id;
        console.log(camp_id);

        $("#app").html(`
        <div class="close-btn">Close</div>

        <div id="${camp_id}" class="selected">
            <h3>${campingStuff[camp_id].title}</h3>
            <img src="${campingStuff[camp_id].image}" alt="">
            <p>
                ${campingStuff[camp_id].price}<br>
                <b>Description: </b>${campingStuff[camp_id].desc}
            </p>
        </div>

    
        
        `);

        closeListener();

    });



}

function closeListener(){

    $(".close-btn").click(function() {
        console.log("close");
        
        $("#app").html("");
        loadJSON();
    });
}


function loadJSON() {

    $.each(campingStuff, function(i, item) {

        $("#app").append(`
        <div class="game-card" id="${i}">
            <h3>${campingStuff[i].title}</h3>
            <img src="${campingStuff[i].image}" alt="">
            <p>
                ${campingStuff[i].price}<br>
            </p>
        </div>`);
    });

    initListeners();

}

$(document).ready(function() {

    loadJSON();
});