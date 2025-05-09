const rationData = {
    "is rice available": "Yes, rice is available for PHH and AAY cardholders.",
    "is sugar available": "Yes, sugar is available at Rs.13.50/kg.",
    "oil price": "Rs.25 per litre.",
    "dal price": "Varies by type.",
    "nearest ration shop": "Use the TNPDS portal to locate nearby shops.",
    "fps timing": "Fair Price Shops operate from 9 AM to 1 PM and 3 PM to 6 PM.",
    "hi": "Hello! How can I help you today?",
    "hello": "Hi there! Feel free to ask about ration availability, pricing, or shops.",
    "is rice available": "Yes, rice is available for PHH and AAY cardholders.",
    "is sugar available": "Yes, sugar is available at Rs.13.50/kg.",
    "oil price": "Rs.25 per litre.",
    "dal price": "Varies by type.",
    "nearest ration shop": "Use the TNPDS portal to locate nearby shops.",
    "fps timing": "Fair Price Shops operate from 9 AM to 1 PM and 3 PM to 6 PM.",
    "hi": "Hello! How can I help you today?",
    "hello": "Hi there! Feel free to ask about ration availability, pricing, or shops.",
    "rice available": "Yes, rice is available this month.",
    "can i get rice": "Yes, rice is being distributed.",
    "do we get rice": "Yes, rice is included this month.",
    "will rice come this month": "Yes, rice is included in this month's supply.",
    "any rice available": "Yes, rice is available.",
    "get rice from shop": "Yes, rice is distributed via ration shops.",
    "do i get free rice": "Yes, free rice for PHH/AAY cardholders.",
    "is free rice there": "Yes, rice is available for free.",
    "rice available now": "Yes, rice is available.",
    "arisi kidaikuma": "ஆம், இந்த மாதம் அரிசி கிடைக்கிறது.",
    "arisi iruka": "ஆம், அரிசி உள்ளது.",
    "arisi kadai la kidaikumaa": "ஆம், நியாயவிலைக் கடையில் அரிசி உள்ளது.",
    "arisi free ah": "ஆம், PHH மற்றும் AAY கார்டுக்கு இலவசம்.",
    
    // --- SUGAR ---
    "is sugar available": "Yes, sugar is available at Rs.13.50/kg.",
    "sugar price": "Rs.13.50 per kg.",
    "can i get sugar": "Yes, sugar is distributed.",
    "sarkkarai iruka": "ஆம், சர்க்கரை உள்ளது.",
    "sarkkarai vilai": "ஒரு கிலோ ரூ.13.50.",
    
    // --- OIL ---
    "is oil available": "Yes, edible oil is available at Rs.25/litre.",
    "oil price": "Rs.25 per litre.",
    "do we get oil": "Yes, oil is distributed.",
    "ennai iruka": "ஆம், எண்ணெய் உள்ளது.",
    
    // --- WHEAT ---
    "is wheat available": "Yes, wheat is available at Rs.7.50/kg.",
    "wheat price": "Rs.7.50 per kg.",
    "do we get wheat": "Yes, wheat is included.",
    "godhumai iruka": "ஆம், கோதுமை உள்ளது.",
    
    // --- DAL ---
    "is dal available": "Yes, dal is available.",
    "dal price": "Varies by type.",
    "paruppu iruka": "ஆம், பருப்பு கிடைக்கிறது.",
    
    // --- KEROSENE ---
    "is kerosene available": "Only for eligible cardholders.",
    "kerosene in ration": "Yes, for entitled card types.",
    
    // --- SALT ---
    "is salt available": "Yes, iodized salt is available.",
    "uppu iruka": "ஆம், உப்பு கிடைக்கிறது.",
    
    // --- TYPOS / FUZZY INPUTS ---
    "rice availabe": "Yes, rice is available.",
    "availabl rice": "Yes, rice is available.",
    "sugar avilable": "Yes, sugar is available.",
    "suagr price": "Rs.13.50 per kg.",
    "oil availbal": "Yes, oil is available.",
    "oill price": "Rs.25 per litre.",
    "wheat avalable": "Yes, wh eat is available.",
    "dal avilble": "Yes, dal is available.",
    "salt avaiable": "Yes, salt is available.",
    "kerosen availble": "Only for eligible cardholders.",
    
    // --- SHOP/ADDRESS QUERIES ---
    "nearest ration shop": "Use the TNPDS portal to locate nearby shops.",
    "ration shop address": "Visit www.tnpds.gov.in to check your assigned shop.",
    "fps near me": "Use location services on the TNPDS portal.",
    "shop timing": "Shops are open 9AM–1PM and 3PM–6PM.",
    "fps open today": "Most shops operate Monday to Saturday.",
    
    // --- MISC ---
    "total cost": "Please mention items to calculate total.",
    "all items available": "Rice, sugar, oil, wheat, dal, and salt are available.",
    "available items": "This month’s available items include rice, oil, sugar, etc.",
    "any item not available": "Availability may vary by region and card type.",
    "can i get rashan": "Yes, ration items are available based on your card.",
    "food items in card": "Rice, wheat, dal, sugar, oil are generally available.",
    "gov shop timing": "Fair Price Shop usually operates from 9 to 1 and 3 to 6.",
    "grocery price": "Rice is free, wheat Rs.7.50, sugar Rs.13.50, oil Rs.25.",
    "ration items cost": "The total cost depends on what you're eligible for.",
    "shop open now": "Shops are open 9AM–1PM, 3PM–6PM. Please check timing.",
    "aadhaar connekt": "You can link Aadhaar through the 'Update Card' section.",
    "family card app": "Family card is the same as ration card — apply via TNPDS.",
    "what is p h h": "PHH stands for Priority Household — eligible for subsidy.",
    "my card type aay": "AAY cards get more subsidy and free rice.",
    "அரிசி கிடையாதா": "ஆம், அரிசி இந்த மாதம் கிடைக்கிறது.",
    "ராஷன் பொருட் எது": "இந்த மாதம் அரிசி, எண்ணெய், பருப்பு கிடைக்கும்.",
    "எண்ணெய் விலை": "எண்ணெய் ரூ.25க்கு ஒரு லிட்டர் கிடைக்கும்.",
    "சர்க்கரை விலை": "ஒரு கிலோ சர்க்கரை ரூ.13.50 ஆகும்.",
    "ரேசன் கடை நேரம்": "கடைகள் காலை 9 முதல் 1, மாலை 3 முதல் 6 வரை திறந்திருக்கும்.",
    "ஆதார் இணைப்பு எப்படி": "TNPDS இணையதளத்தில் 'Card Update' பகுதியில் இணைக்கலாம்.",
    "புதிய ரேசன்": "புதிய ரேஷன் கார்டு TNPDS-ல் ஆன்லைனில் விண்ணப்பிக்கலாம்.",
    "raition card": "Did you mean 'ration card'? You can apply at www.tnpds.gov.in.",
    "ration crad": "It looks like a typo — for 'ration card', apply via www.tnpds.gov.in.",
    "rashan card": "To apply for a ration card, visit the TNPDS portal.",
    "rashin card apply": "You can apply online at www.tnpds.gov.in.",
    "rashan items": "You can check this month's items like rice, sugar, and wheat.",
    "oil avalable": "Yes, oil is available for Rs.25 per litre.",
    "sugr price": "Sugar is priced at Rs.13.50/kg this month.",
    "dal avilable": "Yes, dal is available based on card type.",
    "rice avilbale": "Yes, rice is available for eligible cardholders.",
    "weat price": "Wheat is available at Rs.7.50/kg.",
    "fps timingz": "Fair Price Shop timing is 9AM–1PM and 3PM–6PM.",
    "aadhar lin": "You can link Aadhaar via the TNPDS website.",
    "how to boke slot": "To book a slot, login to TNPDS and choose your date.",
    "shugur avalable": "Yes, sugar is available at subsidized rates.",
    "kerosen avlbl": "Kerosene is available for eligible cardholders.",
    "is rice there": "Yes, rice is available free for PHH and AAY cardholders.",
    "rice avlbl?": "Yes, rice is available this month.",
    "do we get sugur": "Yes, sugar is distributed at Rs.13.50/kg.",
    "sugar availeble": "Yes, sugar is available under the subsidized rate.",
    "edible oill availble": "Yes, edible oil is Rs.25/litre this month.",
    "is oil given": "Yes, oil is part of the ration items this month.",
    "pulses included?": "Yes, different dals are available depending on your card.",
    "is salt givn?": "Yes, iodized salt is usually provided.",
    "kerosene this mnth": "Kerosene is distributed for eligible cardholders.",
    "toor dal availabl": "Yes, toor dal is available in most zones.",
    "wheat this month?": "Yes, wheat is available at Rs.7.50/kg.",
    "whatt items we get": "Rice, sugar, wheat, oil, salt, and dal may be available.",
    "fps shop time": "Fair Price Shop timing is 9 AM–1 PM and 3 PM–6 PM.",
    "ration shop open now?": "Check your nearest shop — most operate 9–1 & 3–6.",
    "ration shop near me": "Please check TNPDS or Google Maps for location.",
    "fps addres": "Each card is linked to a specific FPS based on your locality.",
    "shop chnge option": "You can request to change your shop via the TNPDS portal.",
    "shopp change allowed?": "Yes, but with valid proof and online request.",
    "fps conplaint": "You can file a complaint with your local civil supplies office.",
    "my shop closed": "Try again during official hours or contact support.",
    "book slot in tnpds": "Go to Slot Booking section after login on the portal.",
    "how book my slot": "Login to www.tnpds.gov.in and go to 'Slot Booking'.",
    "slott not working": "Try off-peak hours. If issue persists, contact support.",
    "how reshedule slot": "Yes, rescheduling is allowed before your due date.",
    "my slot bookd?": "Check 'My Bookings' in your TNPDS account.",
    "slot avilable?": "Check available slots on the TNPDS portal after login.",
    "tnpds slote book": "Use your registered number to login and book your slot.",
    "can i change slot time": "Yes, within the allowed window you can reschedule.",
    "card status check": "Visit TNPDS and enter your reference number to track status.",
    "add member ration": "Use the Update section in the portal to add family member.",
    "aadhaar not updated": "Please update your Aadhaar on the TNPDS portal.",
    "aadhar liniking?": "Go to 'Update Details' section and link Aadhaar.",
    "aadhar connec fail": "Ensure Aadhaar details match and try again.",
    "card update": "You can update address, members, etc., on the website.",
    "what's my card type": "Card types are PHH, AAY, etc. Check your TNPDS account.",
    "remove someone from card": "Login to TNPDS and use the update option.",
    "card not work": "Try logging in again or visit the nearest service center.",
    "hi": "Hello! How can I help you today?",
    "hai": "Hi there! Feel free to ask anything about the ration system.",
    "வணக்கம்": "வணக்கம்! ரேஷன் தொடர்பான உதவிக்கு தயார்.",
    "is rice available": "Yes, rice is available for PHH and AAY cardholders.",
    "where to apply ration card": "You can apply at www.tnpds.gov.in or your nearest taluk office.",
    "fps timing": "Fair Price Shops operate from 9 AM to 1 PM and 3 PM to 6 PM.",
    "how to book slot": "Login to www.tnpds.gov.in and go to 'Slot Booking'.",

    // Add more specific responses as required
    // --- OIL PRICE ---
  "how much is oil": "Edible oil is priced at Rs.25 per litre.",
  "oil price today": "The price of oil is Rs.25 per litre.",
  "price of oil": "Rs.25 per litre.",
  "oil cost": "Rs.25 per litre.",
  "cost of oil": "Rs.25 per litre.",
  
  // --- SUGAR PRICE ---
  "what is the sugar price": "Sugar is available at Rs.13.50 per kg.",
  "how much sugar cost": "Sugar costs Rs.13.50 per kg.",
  
  // --- RICE PRICE ---
  "how much is rice": "Rice is available for free for PHH and AAY cardholders.",
  "rice cost": "Rice is free for PHH and AAY cardholders.",
  "price of rice": "Rice is available for free for eligible cardholders.",
  
  // --- NEAREST SHOP LOCATION ---
  "nearest ration shop in T. Nagar": "You can find the nearest ration shop in T. Nagar using the TNPDS portal.",
  "nearest ration shop in Anna Nagar": "Use the TNPDS portal to locate a ration shop in Anna Nagar.",
  "nearest ration shop in Chrompet": "Find your nearest ration shop in Chrompet through the TNPDS portal.",
  "nearest ration shop in Guindy": "You can locate the nearest ration shop in Guindy using the TNPDS portal.",
  "nearest ration shop in Tambaram": "Tambaram has several ration shops; check the TNPDS portal for exact locations.",
  "nearest ration shop in Adyar": "To find a ration shop in Adyar, visit the TNPDS portal for the closest location.",
  "ration shop near T. Nagar": "Use the TNPDS portal to locate a ration shop near T. Nagar.",
  "ration shop near Anna Nagar": "Check the TNPDS portal for a list of ration shops near Anna Nagar.",
  "ration shop near Chrompet": "Find a nearby ration shop in Chrompet via the TNPDS portal.",
  "ration shop near Guindy": "Visit the TNPDS portal to find a ration shop near Guindy.",
  "ration shop near Tambaram": "Check the TNPDS portal to find a ration shop near Tambaram.",
  "ration shop near Adyar": "Use the TNPDS portal to find your nearest ration shop in Adyar.",
  
  // --- FPS LOCATION ---
  "where is my fps": "To find your FPS location, visit the TNPDS portal and enter your details.",
  "how to find fps near me": "Use the TNPDS portal or Google Maps to find the nearest FPS.",
  "fps in T. Nagar": "Locate the Fair Price Shop in T. Nagar via the TNPDS portal.",
  "fps in Anna Nagar": "Use TNPDS to find the nearest FPS in Anna Nagar.",
  "fps in Chrompet": "Check the TNPDS portal for Fair Price Shops in Chrompet.",
  "fps in Guindy": "Visit the TNPDS portal to locate Fair Price Shops in Guindy.",
  "fps in Tambaram": "Find Fair Price Shops in Tambaram on the TNPDS portal.",
  "fps in Adyar": "The TNPDS portal can help you find FPS locations in Adyar.",
  
  // --- SLOT BOOKING ---
  "how do I book a slot": "Login to www.tnpds.gov.in and select 'Slot Booking' to reserve your time.",
  "how to book a slot for ration": "Go to www.tnpds.gov.in, login, and book your slot in the Slot Booking section.",
  "how to reschedule my slot": "Reschedule your slot by visiting the TNPDS portal and updating your booking.",
  "can I change my slot time": "Yes, you can reschedule your slot on the TNPDS portal before the assigned date.",
  "slot booking not working": "Try during off-peak hours. If the issue persists, contact TNPDS support.",
  
  // --- RATION CARD STATUS ---
  "what is my ration card status": "Visit the TNPDS portal and enter your reference number to check your card status.",
  "how to check ration card status": "Check the status of your ration card by logging into your TNPDS account.",
  
  // --- NEW FOOD ITEMS ---
  "can I get wheat": "Yes, wheat is available at Rs.7.50 per kg for eligible cardholders.",
  "is wheat available": "Yes, wheat is available at Rs.7.50 per kg.",
  "wheat price": "The price of wheat is Rs.7.50 per kg.",
  
  "can I get dal": "Yes, dal is available depending on your card type.",
  "is dal available": "Yes, dal is available in varying types.",
  
  // --- MISCELLANEOUS QUERIES ---
  "what is FPS timing": "Fair Price Shops are open from 9 AM to 1 PM and 3 PM to 6 PM.",
  "when is ration shop open": "Fair Price Shops operate from 9 AM to 1 PM and 3 PM to 6 PM.",
  "what time does ration shop open": "Shops open from 9 AM to 1 PM and 3 PM to 6 PM.",
  
  "is salt available": "Yes, iodized salt is available.",
  "salt price": "Salt is available at a subsidized price, check your nearest FPS.",
  
  // --- TYPOS & FUZZY INPUTS ---
  "rice avalabe": "Yes, rice is available for PHH and AAY cardholders.",
  "oil avilable": "Yes, edible oil is available at Rs.25 per litre.",
  "wheat avaiable": "Yes, wheat is available at Rs.7.50 per kg.",
  "dal avaialble": "Yes, dal is available depending on your eligibility.",
  
  "kerosene avalb": "Kerosene is available for eligible cardholders.",
  
  // --- CARD TYPE QUERIES ---
  "what is AAY card": "AAY stands for Antyodaya Anna Yojana — it provides extra subsidies, including free rice.",
  "how to apply for ration card": "You can apply online at www.tnpds.gov.in or visit the nearest taluk office.",
  
  // --- ADDITIONAL LOCATIONS ---
  "is there any ration shop in T. Nagar": "Yes, check the TNPDS portal for ration shops in T. Nagar.",
  "where to get ration in Anna Nagar": "Visit the TNPDS portal for a list of ration shops in Anna Nagar.",
  "get ration in Chrompet": "Find nearby ration shops in Chrompet via the TNPDS portal.",
  "where can I get ration in Guindy": "Check the TNPDS portal to locate ration shops in Guindy.",
  "where is my nearest ration shop in Tambaram": "Visit the TNPDS portal for your nearest ration shop in Tambaram.",
  "find ration shop in Adyar": "Use TNPDS to locate ration shops in Adyar.",
  
  // --- MISCELLANEOUS ---
  "are all food items available": "Rice, sugar, oil, wheat, dal, and salt are available this month.",
  "is food available for PHH": "Yes, eligible PHH cardholders can access rice, sugar, oil, wheat, dal, and salt.",
  "can I get free rice": "Yes, free rice is available for PHH and AAY cardholders.",
  "how to apply for a new ration card": "You can apply for a new ration card through the TNPDS website.",
  // --- OIL + RICE COMBO QUERIES ---
  "oil rice": "Yes, both oil and rice are available for distribution this month. Oil is priced at Rs.25 per litre, and rice is free for PHH and AAY cardholders.",
  "oil and rice availability": "Both oil and rice are available. Oil is Rs.25 per litre, and rice is available for free to PHH and AAY cardholders.",
  "oil and rice stock": "Rice and oil are available this month. Rice is free for PHH and AAY cardholders, and oil is available at Rs.25 per litre.",
  
  // --- OIL + SUGAR COMBO QUERIES ---
  "oil sugar": "Yes, oil and sugar are both available. Oil is Rs.25 per litre, and sugar is priced at Rs.13.50 per kg.",
  "oil and sugar availability": "Oil is available at Rs.25 per litre, and sugar is available at Rs.13.50 per kg.",
  "oil and sugar stock": "Oil is Rs.25 per litre, and sugar is Rs.13.50 per kg. Both are available for distribution this month.",
  
  // --- OIL + DAL COMBO QUERIES ---
  "oil dal": "Yes, both oil and dal are available. Oil is Rs.25 per litre, and dal is available based on card type.",
  "oil and dal availability": "Oil is Rs.25 per litre, and dal is available depending on your card type.",
  "oil and dal stock": "Oil is Rs.25 per litre, and dal is available based on your card eligibility. Check your nearest FPS for stock.",
  
  // --- RICE + SUGAR COMBO QUERIES ---
  "rice sugar": "Yes, rice and sugar are available. Rice is free for PHH and AAY cardholders, and sugar is Rs.13.50 per kg.",
  "rice and sugar availability": "Rice is free for eligible cardholders, and sugar is available at Rs.13.50 per kg.",
  "rice and sugar stock": "Rice is free for PHH and AAY cardholders, and sugar is available at Rs.13.50 per kg.",
  
  // --- RICE + DAL COMBO QUERIES ---
  "rice price": "Yes, the rice price is 30 per kg.",
  "rice and dal availability": "Rice is free for PHH and AAY cardholders, and dal is available depending on your card type.",
  "rice and dal stock": "Rice is available for PHH and AAY cardholders, and dal is available based on your card eligibility.",
  
  // --- SUGAR + DAL COMBO QUERIES ---
  "sugar dal": "Yes, both sugar and dal are available. Sugar is Rs.13.50 per kg, and dal is available depending on your card type.",
  "sugar and dal availability": "Sugar is Rs.13.50 per kg, and dal is available based on your eligibility.",
  "sugar and dal stock": "Sugar is Rs.13.50 per kg, and dal is available based on card type. Check availability at your nearest FPS.",
  
  // --- MULTIPLE ITEMS COMBO QUERIES ---
  "rice sugar oil": "Rice, sugar, and oil are all available. Rice is free for PHH and AAY cardholders, sugar is Rs.13.50 per kg, and oil is Rs.25 per litre.",
  "rice sugar dal": "Rice is free for eligible cardholders, sugar is Rs.13.50 per kg, and dal is available depending on your card type.",
  "rice dal oil": "Rice is free for PHH and AAY cardholders, dal is available based on your card type, and oil is Rs.25 per litre.",
  "oil dal wheat": "Oil is Rs.25 per litre, dal is available based on card eligibility, and wheat is available at Rs.7.50 per kg.",
  "rice sugar dal oil": "Rice is free for PHH and AAY cardholders, sugar is Rs.13.50 per kg, dal is available based on card eligibility, and oil is Rs.25 per litre.",
  
  // --- STOCK AVAILABILITY QUERIES ---
  "is oil in stock": "Yes, edible oil is in stock, priced at Rs.25 per litre.",
  "is rice in stock": "Yes, rice is in stock for PHH and AAY cardholders, available free of charge.",
  "is sugar in stock": "Yes, sugar is in stock, available at Rs.13.50 per kg.",
  "is dal in stock": "Yes, dal is available, depending on your card type.",
  "is wheat in stock": "Yes, wheat is in stock at Rs.7.50 per kg.",
  
  // --- MULTIPLE STOCK QUERIES ---
  "oil rice stock availability": "Yes, both oil and rice are in stock. Oil is Rs.25 per litre, and rice is free for eligible cardholders.",
  "sugar dal stock availability": "Yes, sugar and dal are in stock. Sugar is Rs.13.50 per kg, and dal is available based on card eligibility.",
  "rice dal wheat availability": "Yes, rice, dal, and wheat are available. Rice is free for eligible cardholders, dal depends on card type, and wheat is Rs.7.50 per kg.",
  
  // --- MISCELLANEOUS STOCK QUERIES ---
  "are all items in stock": "Yes, rice, sugar, oil, wheat, and dal are all available this month.",
  "is everything in stock": "Rice, sugar, oil, wheat, and dal are available for distribution. Check the TNPDS portal for more details.",
  
  // --- LOCATION-BASED STOCK QUERIES ---
  "oil rice stock in T. Nagar": "Oil and rice are both available in T. Nagar. Rice is free for eligible cardholders, and oil is Rs.25 per litre.",
  "oil rice availability in Anna Nagar": "Both oil and rice are available in Anna Nagar. Oil is priced at Rs.25 per litre, and rice is free for eligible cardholders.",
  "stock of oil rice in Chrompet": "Oil and rice are available in Chrompet. Rice is free for eligible cardholders, and oil is Rs.25 per litre.",
  "oil and rice stock in Guindy": "Both oil and rice are in stock in Guindy. Oil is Rs.25 per litre, and rice is free for eligible cardholders.",
  "oil rice stock in Tambaram": "In Tambaram, both oil and rice are available. Oil is Rs.25 per litre, and rice is free for eligible cardholders.",
  "oil rice stock in Adyar": "Oil and rice are both in stock in Adyar. Rice is free for eligible cardholders, and oil is Rs.25 per litre.",
   // --- OIL ---
   "oil": "Yes, edible oil is available for Rs.25 per litre.",
   "oil stock": "Yes, edible oil is in stock at Rs.25 per litre.",
   "oil availability": "Yes, oil is available for Rs.25 per litre.",
   
   // --- RICE ---
   "rice": "Yes, rice is available for PHH and AAY cardholders, free of charge.",
   "rice stock": "Yes, rice is in stock for PHH and AAY cardholders.",
   "rice availability": "Yes, rice is available this month for eligible cardholders.",
   
   // --- SUGAR ---
   "sugar": "Yes, sugar is available at Rs.13.50 per kg.",
   "sugar stock": "Yes, sugar is in stock at Rs.13.50 per kg.",
   "sugar availability": "Yes, sugar is available for Rs.13.50 per kg this month.",
   
   // --- DAL ---
   "dal": "Yes, dal is available, depending on your card type.",
   "dal stock": "Yes, dal is in stock. Availability depends on your card eligibility.",
   "dal availability": "Yes, dal is available for distribution based on card type.",
   
   // --- WHEAT ---
   "wheat": "Yes, wheat is available at Rs.7.50 per kg.",
   "wheat stock": "Yes, wheat is in stock at Rs.7.50 per kg.",
   "wheat availability": "Yes, wheat is available for Rs.7.50 per kg this month.",
   
   // --- KEROSENE ---
   "kerosene": "Kerosene is available only for eligible cardholders.",
   "kerosene stock": "Kerosene is available for eligible cardholders based on the card type.",
   "kerosene availability": "Kerosene is available for entitled cardholders.",
   
   // --- SALT ---
   "salt": "Yes, iodized salt is available.",
   "salt stock": "Yes, iodized salt is in stock.",
   "salt availability": "Yes, iodized salt is available this month.",
   
   // --- GENERAL STOCK QUERY ---
   "stock": "Rice, sugar, oil, wheat, dal, and salt are available for eligible cardholders this month.",
   "items stock": "The items available are rice, sugar, oil, wheat, dal, and salt. Availability may vary depending on card type and region.",
   
   // --- NEAREST SHOP QUERIES ---
   "nearest shop": "Use the TNPDS portal to locate nearby ration shops.",
   "shop address": "Visit www.tnpds.gov.in to check your assigned ration shop address.",
   "nearest ration shop": "Check the TNPDS portal or Google Maps for the nearest shop.",
   
   // --- PRICE QUERIES ---
   "price of oil": "Oil is priced at Rs.25 per litre.",
   "price of rice": "Rice is free for PHH and AAY cardholders.",
   "price of sugar": "Sugar is available at Rs.13.50 per kg.",
   "price of dal": "Dal price varies depending on the type.",
   "price of wheat": "Wheat is available at Rs.7.50 per kg.",
   
   // --- SHOP TIMING QUERIES ---
   "shop timing": "Fair Price Shops operate from 9 AM to 1 PM and 3 PM to 6 PM.",
   "shop open": "Shops are open from 9 AM to 1 PM and 3 PM to 6 PM. Check the portal for specific timings.",
   "fps timing": "Fair Price Shop operates from 9 AM to 1 PM and 3 PM to 6 PM.",
   
   // --- AADHAAR LINKING QUERIES ---
   "aadhar link": "You can link your Aadhaar through the TNPDS portal under the 'Update Card' section.",
   "aadhar update": "Go to the TNPDS portal to update your Aadhaar details.",
   
   // --- RATION CARD QUERIES ---
   "ration card": "You can apply for a ration card at www.tnpds.gov.in.",
   "apply for ration card": "Apply for a ration card online at www.tnpds.gov.in.",
   "family card": "The family card is the same as a ration card. Apply via TNPDS.",
   "ration card status": "Check your ration card status on the TNPDS website using your reference number.",
   
   // --- MISCELLANEOUS QUERIES ---
   "total cost": "Please mention the items you'd like to calculate the total cost for.",
   "all items available": "Rice, sugar, oil, wheat, dal, and salt are available this month.",
   "items available": "This month's available items include rice, sugar, oil, wheat, dal, and salt.",
   "government shop": "Fair Price Shops are government-operated and follow the official timing from 9 AM to 1 PM and 3 PM to 6 PM.",
   "food items in ration card": "Ration cards typically cover rice, sugar, oil, wheat, and dal.",
   "what is p h h": "PHH stands for Priority Household — eligible for subsidy on various items.",
   "what is aay": "AAY stands for Antyodaya Anna Yojana, which provides additional subsidies and free rice to eligible families."
 
  };
  async function sendMessage() {
    const input = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');
    const message = input.value.trim();
    if (!message) return;

    // User message
    const userBubble = document.createElement('div');
    userBubble.className = 'bubble user';
    userBubble.innerText = message;
    chatBox.appendChild(userBubble);
    input.value = '';  // Clear input after sending
    chatBox.scrollTop = chatBox.scrollHeight;

    // Typing animation (bot is thinking)
    const botBubble = document.createElement('div');
    botBubble.className = 'bubble bot';
    const typingSpan = document.createElement('span');
    typingSpan.className = 'typing';
    typingSpan.innerHTML = 'Typing<span class="dot">.</span><span class="dot">.</span><span class="dot">.</span>';
    botBubble.appendChild(typingSpan);
    chatBox.appendChild(botBubble);
    chatBox.scrollTop = chatBox.scrollHeight;

    // Check if message matches ration data
    let botResponse = rationData[message.toLowerCase()];

    // If no match, use Mistral model to get a response
    if (!botResponse) {
        botResponse = await getOllamaResponse(message);
    }

    // Remove typing animation and show response
    botBubble.removeChild(typingSpan);
    botBubble.innerText = botResponse;
    chatBox.scrollTop = chatBox.scrollHeight;
}

async function getOllamaResponse(message) {
    // Instead of sending all shop data, use a simplified message for faster response
    const prompt = `You are a helpful assistant for a Smart Ration System. Answer concisely. A user has asked: "${message}".`;

    try {
        const response = await fetch('http://localhost:11434/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: 'mistral',
                messages: [
                    { role: 'system', content: prompt },
                    { role: 'user', content: message }
                ]
            })
        });

        const reader = response.body.getReader();
        const decoder = new TextDecoder('utf-8');
        let botResponse = '';
        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            const chunk = decoder.decode(value, { stream: true });
            const lines = chunk.trim().split('\n');
            for (const line of lines) {
                if (!line) continue;
                const data = JSON.parse(line);
                if (data.message?.content) {
                    botResponse += data.message.content;
                }
            }
        }
        return botResponse || "Sorry, I couldn't understand that. Please ask something else.";
    } catch (error) {
        console.error('Error connecting to Ollama or API:', error);
        return '⚠️ Error connecting to Ollama or API.';
    }
}

// Enter key functionality: trigger sendMessage on "Enter" key press
document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();  // Prevent form submission or other default actions
        sendMessage();  // Call sendMessage function
    }
});

// Send button functionality: trigger sendMessage when clicked
document.getElementById('send-btn').addEventListener('click', function () {
    sendMessage();  // Call sendMessage function when the send button is clicked
    
});

  