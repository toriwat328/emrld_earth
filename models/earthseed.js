const earthseed = [
    {
        category: 'In Your Home',
        action: 'Add solar panels to your house',
        description: 'With the plunging price of solar power, and an increasingly diverse group of companies such as Tesla and Forward Labs offering new products, the toughest decision may not be whether to install, but which style and color panels to place on your roof. And the boom in solar installations will only continue; on the heels of a record year of sales, analysts expect the market to nearly triple by 2020. The Energy Department has a good resource guide for homeowners, while Google’s Project Sunroof helps calculate the potential benefits of home installation.',
        completed: false

    },
    {
        category: 'In Your Home',
        action: 'Get a home energy audit',
        description: 'A simple home energy audit can show how much energy your home consumes and give you tips on changes that can make things more efficient. Most assessments help homeowners save between 5 to 30 percent on their energy bills, and audits can significantly reduce a home’s carbon footprint.',
        completed: false

    },
    {
        category: 'In Your Home',
        action: 'Change lightbulbs to LEDs',
        description: 'Quality LED lightbulbs can last 25 times longer, are more durable, and use at least 75 percent less energy than other bulbs. In the United States, widespread use of LEDs over the next 10 years could save the equivalent annual electrical output of 44 large power plants (about 348 TWh).',
        completed: false

    },
    {
        category: 'In Your Home',
        action: 'Ask your utility company about buying clean electricity.',
        description: 'You may not know exactly how much of your electricity is coming from renewable energy, so now is the time to find out. Contact your utility company, find out the sources of the electricity they supply, and see if you can opt in for “green pricing” in order to pay slightly more in exchange for electricity generated from clean, renewable power.',
        completed: false

    },
    {
        category: 'In Your Home',
        action: 'Clean or replace HVAC filters every three months.',
        description: 'A dirty filter on your air conditioner or heater will make the system work harder and waste energy.',
        completed: false

    },
    {
        category: 'In Your Home',
        action: 'Use a programmable thermostat.',
        description: 'Instead of keeping your house a constant 70 degrees, invest in an automatic thermostat, which can cost as little $25. Higher-end smart thermostats like the Nest or Ecobee can customize your temperatures so you’re not blasting the air conditioning when no one is home or using too much heat when everyone is tucked in bed.',
        completed: false

    },
    {
        category: 'In Your Home',
        action: 'Wash clothes in cold water.',
        description: 'Most Americans still wash their laundry in warm water, which costs more money and takes a toll on the environment. Approximately 75 percent of the total energy use and greenhouse-gas emissions produced by a single load of laundry come from warming the water itself. That’s unnecessary, especially because studies have shown that washing in cold water is just as effective as using warm.',
        completed: false

    },
    {
        category: 'In Your Home',
        action: 'Upcycle your furniture.',
        description: 'From shopping cart couches to chairs from old skis, upcycled furniture can be innovative and environmentally smart. Consider using recycled materials—like pallets—or repurposing the furniture you already have instead of buying new.',
        completed: false

    },
    {
        category: 'In Your Home',
        action: 'Recycle your clothes.',
        description: 'The average American throws away about 80 pounds of clothing a year. Not only is fast fashion wasteful, but the environmental cost of manufacturing and distributing new clothes is devastating. A handful of retailers offer recycling programs, while companies like Patagonia will actually purchase, refurbish, and resell your gently worn garments.',
        completed: false

    },
    {
        category: 'In Your Home',
        action: 'Buy new appliances with the Energy Star label. ',
        description: 'When you need to replace a refrigerator or dishwasher, choose an appliance that’s Energy Star certified. Energy Star products are more efficient, meaning they can help lower your energy costs and reduce greenhouse gas emissions.',
        completed: false

    },
    {
        category: 'In Your Home',
        action: 'Design your workspace around natural light.',
        description: 'On June 16, firms around the world will turn off their lights to raise awareness about using natural daylight instead of electric lighting in offices.',
        completed: false

    },
    {
        category: 'In Your Home',
        action: "Unplug electronic devices when they aren't in use.",
        description: 'Just because a device or appliance appears to be off doesn’t mean it’s not drawing power. About a quarter of all residential energy consumption is used on devices in idle power mode, which means “sleep mode” is costing upward of $19 billion in electricity bills. Things like your cable box, laptop, and even your speakers may be using almost as much power when they are off but plugged in as when they are on. Group appliances on power strips so you can turn them off at the same time, especially if you’re going on vacation.',
        completed: false

    },
    {
        category: 'In Your Home',
        action: "Obsess over every drop of water.",
        description: 'Water management not only helps cities become more resilient in the faces of storms, droughts, and natural disasters, but also saves energy. Rain barrels and rain gardens help capture and purify water, putting less stress on municipal systems and replenishing underground aquifers.',
        completed: false

    },
    {
        category: 'In Your Home',
        action: "Build a downspout planter box.",
        description: 'If you live in an apartment building, you can still capture your rainwater to save water and cool streets. Philadelphia offers free training for homeowners on stormwater management. Afterward, attendees receive a free downspout planter box for their home.',
        completed: false

    },
    {
        category: 'In Your Home',
        action: "Insulate.",
        description: 'Simply making our homes more efficient can substantially cut the energy needed to heat and cool. Adding insulation, weather stripping, and caulking around your home can cut energy bills by more than 25 percent.',
        completed: false

    },
    {
        category: 'In Your Home',
        action: "Downsize.",
        description: 'Does saving the planet “spark joy?” Then follow Marie Kondo’s lead and try to be mindful of what you do and don’t need. A more measured approach to consumption can also eliminate unneeded purchases that contribute to global emissions.',
        completed: false

    },
    {
        category: 'In Your Home',
        action: "Buy furniture made with sustainably harvested wood.",
        description: 'Deforestation is a serious problem, but buying sustainably sourced wood—look for the Forest Stewardship Council logo—ensures that your wood is coming from 380 million acres of FSC-certified forest and not an old-growth forest.',
        completed: false

    },
    {
        category: 'In Your Home',
        action: "Don’t buy a new home; renovate an old one.",
        description: 'Preservationists often say that the greenest home is the one that’s already built. That’s definitely true, but often, older housing stock is less energy efficient, so those seeking to lovingly restore and rehabilitate an old gem end up paying higher heating and cooling costs. The true green home, however, is an old house brought up to speed with 21st-century sustainability solutions. A new project by Harvard’s Center for Green Buildings and Cities seeks to transform an old stick-built home into a model for energy efficiency with an affordable retrofit. Inefficient existing buildings are one of the world’s biggest energy problems; the best place to start making a difference is at home.',
        completed: false

    },
    {
        category: 'In Your Home',
        action: "Xeriscape your yard.",
        description: 'Huge lawns use a lot of water to maintain, so consider adding drought-tolerant plants in order to reduce your water consumption by 50 to 75 percent.',
        completed: false

    },
    {
        category: 'In Your Home',
        action: "Hang-dry your clothes instead of using the dryer.",
        description: 'There are more than 90 million clothes dryers in the United States, and if all Americans line-dried for just half a year, it would save 3.3 percent of the country’s total residential output of carbon dioxide.',
        completed: false

    },
    {
        category: 'In Your Home',
        action: "Recycle.",
        description: 'According to the Environmental Protection Agency, in 2013 Americans generated about 254 million tons of trash and recycled and composted about 87 million tons of this material, equivalent to a 34.3 percent recycling rate. We need to do better.',
        completed: false

    },
    {
        category: 'On Your Table',
        action: "Plant a community garden.",
        description: 'Rolling up your sleeves and digging in the soil offers a great way to meet neighbors and collaboratively add something to your neighborhood. To get you started, the American Community Gardening Association offers a set of resources and recommendations on how to manage and maintain a public patch.',
        completed: false

    },
    {
        category: 'On Your Table',
        action: "Start or support an urban farm.",
        description: 'Talk about locally sourced: Supporting urban agriculture that’s not just in your region, but also down the block, can help cut carbon emissions and provide local employment while offering more chances to enjoy that just-picked freshness. From warehouse rooftops to urban orchards to innovative vertical farms, new ways to raise crops are taking root.',
        completed: false

    },
    {
        category: 'On Your Table',
        action: "Eat less meat.",
        description: 'Going local for food matters, but not as much as methane. Raising cattle and sheep creates vast amounts of methane, a powerful greenhouse gas. Cutting out meat, or even reducing consumption and favoring fish and chicken, can seriously save carbon. Studies at Carnegie Mellon suggest merely swapping red meat and dairy for a more balanced diet with fish, eggs, and fowl makes a big difference.',
        completed: false

    },
    {
        category: 'On Your Table',
        action: "Reduce food waste.",
        description: 'Whether it’s left on your plate or rotting in your fridge, wasted food is a big problem in the U.S.—to the tune of 38 million tons a year, according to the EPA. Luckily, small changes to your routine can make a big difference. Here’s a great list of ideas for saving food, including ways to be thrifty and smarter about storage and preservation.',
        completed: false

    },
    {
        category: 'On Your Table',
        action: "Don't drink bottled water.",
        description: 'Landfills already contain more than 2 million tons of plastic bottles. And 1.5 million barrels of oil are used to manufacture water bottle every year. And those bottles take more than 1,000 years to biodegrade. Yeah, that reusable water bottle does sound like a good idea.',
        completed: false

    },
    {
        category: 'On Your Table',
        action: "Plant your own vegetable garden.",
        description: 'It doesn’t get more local than fresh tomatoes from your backyard.',
        completed: false

    },
    {
        category: 'On Your Table',
        action: "Join a CSA.",
        description: 'Community-Supported Agriculture connects consumers with seasonal food sold directly from nearby farmers. You’ll help support farmers while also eating local—a proven way to reduce your carbon footprint.',
        completed: false

    },
    {
        category: 'On Your Table',
        action: "Start composting.",
        description: 'Transforming food scraps and lawn clippings into fresh, nutrient-rich soil gives home gardens a boost (and if done right, doesn’t create an olfactory offense). Roughly 20 to 30 percent of what we normally throw out can be composted. And the process offers huge benefits at the city level, too. New York City’s composting program creates “black gold” in the form of rich soil, saves money on shipping organic waste to landfills, and even generates energy from methane.',
        completed: false

    },
    {
        category: 'Along Your Commute',
        action: "Start walking.",
        description: 'Is there any single action that’s better for your mind, your body, and your planet?',
        completed: false

    },
    {
        category: 'Along Your Commute',
        action: "Work from home one day each week.",
        description: 'Studies show that 45 percent of the U.S. workforce has a job that’s suitable for full-time or part-time telecommuting. Working a few days from home each month means one less commuter on the road contributing to greenhouse gases.',
        completed: false

    },
    {
        category: 'Along Your Commute',
        action: "Make sure your tires are properly inflated.",
        description: 'The U.S. Department of Energy reports that under-inflated tires have a negative effect on fuel economy. You can improve your gas mileage by 0.6 percent on average—up to 3 percent in some cases—by keeping your tires inflated to the proper pressure. Better gas mileage means fewer trips to the pump and a reduction in carbon-dioxide emissions.',
        completed: false

    },
    {
        category: 'Along Your Commute',
        action: "Calculate your carbon footprint.",
        description: 'Use an online tool to calculate and track your carbon footprint, and prepare to be astounded by how much transportation contributes to your total.',
        completed: false

    },
    {
        category: 'Along Your Commute',
        action: "Check your gas cap.",
        description: 'A loose, cracked, or damaged gas cap wreaks havoc on the environment, allowing gas to escape from your tank as vapor. It also wastes fuel and your hard-earned gas money. Turn the gas cap until it clicks a few times and consider a replacement if it has logged more than 50,000 miles.',
        completed: false

    },
    {
        category: 'Along Your Commute',
        action: "Only wash your car in a self-serve car wash.",
        description: 'It may seem better to wash your car at home, but it’s worse for the environment. Washing your car in the driveway causes polluted water to run into sewers, and you’ll likely keep the hose running too long. The best way to wash a car is at a self-serve station where customers use a coin-operated spray device; these stations use around 12 to 18 gallons of water per vehicle, compared to up to 100 gallons at home.',
        completed: false

    },
    {
        category: 'Along Your Commute',
        action: "Take public transit.",
        description: 'Sure, public transportation helps reduce gridlock and carbon emissions. But many city dwellers incorrectly assume that buses and trains take longer. So give transit a try—it may just exceed your expectations.',
        completed: false

    },
    {
        category: 'Along Your Commute',
        action: "Buy carbon offsets when you fly.",
        description: 'Limiting your flights, or giving up flying altogether, would be best. The average American’s annual carbon footprint is 19 metric tons, yet one round-trip flight between New York and San Francisco contributes an outsized 2 million more. Buying offsets—which are offered by many carriers—does make a difference, and experts say it’s a valid way to even out. Even downsizing from business class to coach cuts down your carbon usage, if you can make do without the legroom.',
        completed: false

    },
    {
        category: 'Along Your Commute',
        action: "Bring your own shopping bags.",
        description: 'Plastic bags are incredibly destructive to the environment: They take hundreds of years to break down, contaminate soil and waterways, and cause widespread marine animal deaths. To combat the problem, cities and states around the country have enacted plastic-bag bans or fees on single-use bags. Switch to reusable bags and use them consistently.',
        completed: false

    },
    {
        category: 'Along Your Commute',
        action: "Pick up trash.",
        description: "Bring two small bags when you're out walking the dog or taking the kiddos to school. Pick up the trash you find on your way—dividing it into recyclables and trash destined for the landfill—and help keep debris from harming animals and ending up in our streams and waterways.",
        completed: false

    },
    {
        category: 'Along Your Commute',
        action: "Turn off your engine.",
        description: "If you’re stopped for more than 10 seconds (unless you’re in traffic), don’t idle. Idling is bad for your car, uses fuel, and contributes to air pollution.",
        completed: false

    },
    {
        category: 'Along Your Commute',
        action: "Start a carpool.",
        description: "In 2014, over 76 percent of commuters in the United States drove to work alone, most often in their own personal vehicle. Carpools save money on gas, reduce your carbon footprint, let you work during the drive, and get you access to specially designated carpool lanes that are reserved for high-occupancy vehicles.",
        completed: false

    },
    {
        category: 'Along Your Commute',
        action: "Replace your current car with an electric vehicle.",
        description: "Peak car—the point where car ownership starts to drop in the U.S.—could happen as soon as 2020. Get ahead of the trend by switching to an EV, which will not only reduce your emissions but will also save you money in the long run. Going electric also means you’re investing in the future of a clean grid.",
        completed: false

    },
    {
        category: 'In Your Neighborhood',
        action: "Plant a tree.",
        description: "Shade, serenity, sustainability—trees add so much to the urban landscape and ask so little. Many cities, such as Philadelphia, give away free trees, have planting services, or require tree planting permits, so check your local rules before you start digging.",
        completed: false

    },
    {
        category: 'In Your Neighborhood',
        action: "Shop local.",
        description: "It’s simple, straightforward, and an easy addition to your routine that supports local businesses, provides community jobs, and reduces transportation costs and carbon emissions.",
        completed: false

    },
    {
        category: 'In Your Neighborhood',
        action: "Pedestrianize a street.",
        description: " Take inspiration from car-free cities worldwide and transform a corridor into a walker’s haven, using ideas ranging from Barcelona’s superblock concept to this pretty shared street in Chicago.",
        completed: false

    },
    {
        category: 'In Your Neighborhood',
        action: "Buy vintage.",
        description: "Sustainable can be stylish. Our sister site Racked has a guide to buying vintage denim and highlights the best vintage stores to follow on Instagram.",
        completed: false

    },
    {
        category: 'In Your Neighborhood',
        action: "Put books about climate change in your nearest little free library.",
        description: "Walk down any neighborhood street in cities like Denver, Colorado, and you’re likely to see a small wooden box full of free books. These Little Free Libraries are the perfect place to donate books on climate change.",
        completed: false

    },
    {
        category: 'In Your Neighborhood',
        action: "Support your local river clean-up.",
        description: "From Los Angeles to Boston, cities across the U.S. are working to make their rivers cleaner and more enjoyable. There’s even a movement to create a designated swim park in Boston’s Charles River and to install a floating pool in New York City’s East River. Check out American Rivers for information on how to support a river clean-up near you.",
        completed: false

    },
    {
        category: 'In Your Neighborhood',
        action: "Preserve the night sky.",
        description: "Approximately 99 percent of people living in the United States and Europe live under light-polluted skies, and unnecessary lighting wastes energy and money. Reduce light waste by illuminating only the places that need it, putting shields on lights so they point down, and turning off unnecessary lights. You could also join over a dozen towns and cities that are official Dark Sky Communities.",
        completed: false

    },
    {
        category: 'In Your Neighborhood',
        action: "Attend a town hall.",
        description: "Ask your representatives about climate change in person by finding an upcoming town hall near you. The Sierra Club offers talking points for how to ask your congressperson about protecting the EPA and issues surrounding the U.S.’s withdrawal from the Paris agreement.",
        completed: false

    },


]

module.exports = earthseed;
