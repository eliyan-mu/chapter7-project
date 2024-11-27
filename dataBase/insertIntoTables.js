// const fs = require("fs");
// var mysql = require("mysql");

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "z10mz10m",
//   database: "project7database",
// });

// function addToTable(tableName, columns, values) {
//   const sql = `INSERT INTO ${tableName} (${columns}) VALUES (${values})`;

//   con.query(sql, function (err, result) {
//     if (err) throw err;

//     console.table(result);
//   });
// }

// //users;
// addToTable(
//   "user",
//   "username, users_name, email",
//   '"user1", "Eliyan", "eliyan@gmail.com"'
// );
// addToTable(
//   "user",
//   "username, users_name, email",
//   '"user2", "Talia", "talia@example.com"'
// );
// addToTable(
//   "user",
//   "username, users_name, email",
//   '"user3", "Lucas", "lucas@example.com"'
// );

// //passwords;
// addToTable("user_password", "user_id, password", '"3", "123456"');
// addToTable("user_password", "user_id, password", '"4", "234567"');
// addToTable("user_password", "user_id, password", '"5", "345678"');

// //todos;
// const tasks3 = [
//   "Take out the trash",
//   "Buy groceries",
//   "Clean the house",
//   "Walk the dog",
//   "Do laundry",
//   "Read a book",
//   "Write an email",
//   "Pay bills",
//   //   "Call mom",
//   "Organize the garage",
// ];

// const getRandomBoolean = () => Math.random() > 0.5;

// for (let i = 0; i < tasks3.length; i++) {
//   const task = tasks3[i];
//   const completed = getRandomBoolean();

//   const values = `"3", "${task}", ${completed}`;
//   const columns = "user_id, title, completed";
//   addToTable("todo", columns, values);
// }

// const tasks4 = [
//   "Finish homework",
//   "Schedule dentist appointment",
//   "Buy birthday gift",
//   "Clean out email inbox",
//   "Organize workspace",
//   "Prepare for meeting",
//   "Fix broken shelf",
//   "Water the plants",
//   "Grocery shopping",
//   "Write blog post",
// ];

// for (let i = 0; i < tasks4.length; i++) {
//   const task = tasks4[i];
//   const completed = getRandomBoolean();

//   const values = `"4", "${task}", ${completed}`;
//   const columns = "user_id, title, completed";
//   addToTable("todo", columns, values);
// }

// const tasks5 = [
//   "Wash the car",
//   "Make doctor's appointment",
//   "Update resume",
//   "Buy new shoes",
//   "Clean the bathroom",
//   "Set up budget",
//   "Order lunch",
//   "Check emails",
//   "Buy concert tickets",
//   "Take a walk in the park",
// ];

// for (let i = 0; i < tasks5.length; i++) {
//   const task = tasks5[i];
//   const completed = getRandomBoolean();

//   const values = `"5", "${task}", ${completed}`;
//   const columns = "user_id, title, completed";
//   addToTable("todo", columns, values);
// }

// // post
// addToTable(
//   "post",
//   "user_id, title, body",
//   "3, 'tour', 'I’m planning an exciting tour to the mountains. I’ve heard so many great things about the views, the fresh air, and the hiking trails. Can’t wait to explore new peaks, take some breathtaking photos, and disconnect from the hustle of city life.'"
// );
// addToTable(
//   "post",
//   "user_id, title, body",
//   "3,'vacation','After months of hard work, I’m finally taking a vacation! I plan to relax, recharge, and enjoy some well-deserved time away. I’m looking forward to spending my days lounging by the beach and my evenings watching sunsets with good food and great company.'"
// );
// addToTable(
//   "post",
//   "user_id, title, body",
//   "3,'adventure','I’ve always wanted to go on an adrenaline-filled adventure, and this weekend I’m finally trying bungee jumping! I’m both terrified and excited, but I’m sure it’ll be an unforgettable experience. It’s time to face my fears and embrace the thrill.'"
// );
// addToTable(
//   "post",
//   "user_id, title, body",
//   "3,'workout','It’s time to get serious about my health. I’ve started a new fitness regimen that includes a mix of cardio, weightlifting, and yoga. I’m determined to get stronger, fitter, and more flexible. Here’s to staying consistent and pushing my limits!'"
// );
// addToTable(
//   "post",
//   "user_id, title, body",
//   "3,'recipe','I’ve been experimenting with cooking new recipes lately, and today I’m trying something special! It’s a new pasta dish with fresh ingredients, spices, and a twist on traditional flavors. Can’t wait to taste the result and share it with my friends for dinner tonight.'"
// );
// addToTable(
//   "post",
//   "user_id, title, body",
//   "3,'reading','Just finished reading a novel I’ve been putting off for months. It’s amazing how much a great book can change your perspective. Now I’m diving into a new one, eager to lose myself in another world. There’s something magical about escaping reality between the pages of a good story.'"
// );
// addToTable(
//   "post",
//   "user_id, title, body",
//   "3,'party','I’m throwing a party this weekend! It’s going to be a fun celebration with friends, good music, and lots of dancing. I’ve been planning the details for weeks, from the playlist to the snacks, and I’m excited to see everyone enjoying themselves and making memories.'"
// );
// addToTable(
//   "post",
//   "user_id, title, body",
//   "3,'celebration','This week, I’m celebrating my birthday, and it’s going to be a memorable one. I’m throwing a casual get-together with close friends and family. We’ll have food, drinks, and plenty of laughs. I’m so grateful for all the wonderful people in my life!'"
// );
// addToTable(
//   "post",
//   "user_id, title, body",
//   "3,'photography','Lately, I’ve been focusing on photography as a creative outlet. I love capturing the beauty of nature, especially the way the light changes during sunset. There’s something so peaceful about stopping for a moment to take it all in and preserve it in a photograph.'"
// );
// addToTable(
//   "post",
//   "user_id, title, body",
//   "3,'shopping','I spent the day shopping for new clothes to freshen up my wardrobe for the season. It’s always exciting to find new styles, colors, and trends that make me feel confident. I ended up getting some cozy sweaters, stylish boots, and a few accessories to complete the look!'"
// );
// addToTable(
//   "post",
//   "user_id, title, body",
//   "4,'tour','I’ve always dreamed of going on a mountain tour. The breathtaking views, the crisp air, and the challenging hikes are just a few reasons why this trip is at the top of my bucket list. I can’t wait to get outdoors, explore the scenery, and reconnect with nature.'"
// );
// addToTable(
//   "post",
//   "user_id, title, body",
//   "4,'vacation','After months of work, it’s finally time to unwind. I’ve booked a vacation to a quiet coastal town where I can relax by the water, enjoy fresh seafood, and recharge. It’s going to be a perfect escape from the stress of everyday life.'"
// );
// addToTable(
//   "post",
//   "user_id, title, body",
//   "4,'adventure','This weekend, I’m taking the plunge—literally! I’ve booked a bungee jumping experience, and I’m excited (and a little nervous). It’s all about conquering my fear and embracing the thrill of the unknown. Can’t wait to share the adventure with friends!'"
// );
// addToTable(
//   "post",
//   "user_id, title, body",
//   "4,'workout','I’ve started a new fitness routine and I’m feeling more motivated than ever. Whether it’s running, weightlifting, or doing yoga, I’m committed to improving my health and strength. It’s about feeling good both physically and mentally.'"
// );
// addToTable(
//   "post",
//   "user_id, title, body",
//   "4,'recipe','Lately, I’ve been trying to master some new recipes. Today, I’m making a homemade lasagna from scratch! It’s a bit time-consuming, but the result is worth it. I love experimenting with new dishes and sharing them with my family.'"
// );
// addToTable(
//   "post",
//   "user_id, title, body",
//   "4,'reading','Books are my escape from reality, and I’ve just finished an incredible novel. Now, I’m diving into another one—a fantasy adventure that promises to be full of twists and turns. There’s something magical about immersing yourself in a new world between the pages.'"
// );
// addToTable(
//   "post",
//   "user_id, title, body",
//   "4,'party','I’m throwing a party this weekend, and it’s going to be amazing! With great friends, fun games, and plenty of food, it’s the perfect way to unwind and have a good time. I’m so looking forward to making memories and celebrating with the people I care about.'"
// );
// addToTable(
//   "post",
//   "user_id, title, body",
//   "4,'celebration','My birthday is coming up, and I’m planning a small celebration with my closest friends. We’ll have delicious food, music, and of course, cake! It’s going to be a wonderful time to reflect on the past year and look forward to what’s next.'"
// );
// addToTable(
//   "post",
//   "user_id, title, body",
//   "4,'photography','Photography has become one of my favorite hobbies, especially nature photography. There’s something so peaceful about capturing the perfect sunset or the delicate details of a flower. I’m always learning new techniques to improve my shots and get the best out of every moment.'"
// );
// addToTable(
//   "post",
//   "user_id, title, body",
//   "4,'shopping','I spent the day shopping for new clothes, and I’m loving my new wardrobe additions! From cozy sweaters to trendy jackets, I’m ready for the colder weather. It’s always fun to freshen up your style and treat yourself to a little shopping spree.'"
// );
// addToTable(
//   "post",
//   "user_id, title, body",
//   "5, 'tour' ,'I’m planning a thrilling tour of the countryside this weekend. I’ve always wanted to explore the quiet roads, visit charming small towns, and enjoy the scenic views. The plan is to disconnect from everything and just enjoy the simplicity of nature and good company.'"
// );
// addToTable(
//   "post",
//   "user_id, title, body",
//   "5,'vacation','Finally, after working hard for so long, I’ve booked a much-needed vacation to a beautiful tropical island. I can already imagine the soft sand, the sound of the waves, and the warm sunshine. It’s the perfect way to relax, enjoy some peace, and recharge my energy.'"
// );
// addToTable(
//   "post",
//   "user_id, title, body",
//   "5,'adventure','This weekend, I’m taking on the challenge of skydiving! It’s something I’ve always wanted to do, and I’m both excited and a bit nervous. The thrill of jumping out of a plane and experiencing the world from above is going to be incredible.'"
// );
// addToTable(
//   "post",
//   "user_id, title, body",
//   "5,'workout','I’ve decided to take my fitness journey seriously. I’ve set up a new workout routine, and I’m going all in! Whether it’s running, weight training, or yoga, I’m focused on getting stronger, staying motivated, and feeling better every day.'"
// );
// addToTable(
//   "post",
//   "user_id, title, body",
//   "5,'recipe','I love trying out new recipes, and today I’m attempting to make a classic French dish. It’s going to take some time, but I’m excited to see how it turns out. Cooking is one of my favorite ways to relax and enjoy some creative time in the kitchen.'"
// );
// addToTable(
//   "post",
//   "user_id, title, body",
//   "5,'reading','Books have always been my favorite escape. Right now, I’m reading a mystery novel that’s keeping me on the edge of my seat. There’s something so captivating about getting lost in a story, and I’m already looking forward to my next read.'"
// );
// addToTable(
//   "post",
//   "user_id, title, body",
//   "5,'party','I’m hosting a fun get-together at my place this weekend. It’s going to be a night full of laughter, music, and delicious food. I can’t wait to see everyone enjoying themselves and making new memories together.'"
// );
// addToTable(
//   "post",
//   "user_id, title, body",
//   "5,'celebration','It’s my birthday soon, and I’m planning a small gathering to celebrate. I’m excited to spend time with close friends, enjoy some good food, and reflect on the past year. Birthdays are a great reminder to appreciate the people around you and the moments you’ve shared.'"
// );
// addToTable(
//   "post",
//   "user_id, title, body",
//   "5,'photography','Photography is a hobby I’ve grown to love more and more. I enjoy capturing the beauty of everyday moments, whether it’s a stunning sunset, a quiet street, or a moment of joy with friends. Each picture tells a story, and I’m always learning new techniques to improve my shots.'"
// );
// addToTable(
//   "post",
//   "user_id, title, body",
//   "5,'shopping','I had a blast shopping for new clothes today! I picked out a few stylish outfits to update my wardrobe for the season. It’s always fun to try on new styles, and I can’t wait to show off my new looks at an upcoming event.'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "1,'Alice','That sounds like an amazing trip! I’ve always wanted to go on a mountain tour. Do you have any specific places you’re visiting?'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "1,'Bob','I love hiking in the mountains! The views are just breathtaking. I hope you take lots of photos! Let us know how it goes!'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "1,'Charlie','Mountain tours are always so peaceful. Enjoy the quiet and the beauty of nature. It’s a perfect way to clear your mind.'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "1,'Diana','This sounds incredible! I’m curious, which trails are you planning to hike? I’ve heard some spots are challenging but worth it.'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "1,'Eva','I did a mountain tour last year and it was life-changing. I hope you have the same amazing experience! What time of year are you going?'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "1,'Frank','That sounds like such a great way to get away from the chaos of city life. Wishing you a safe and unforgettable adventure!'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "1,'Grace','I hope you enjoy every moment! Don’t forget to pack some comfy shoes for the hikes. Can’t wait to hear all about it.'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "1,'Henry','Sounds like an amazing adventure! The fresh mountain air will be so refreshing. Let us know how the scenery compares to what you imagined!'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "1,'Isla','I love hiking! There’s something so energizing about it. Make sure to bring enough water, and enjoy the journey!'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "1,'Jack','I’ve been wanting to go on a mountain tour myself. Can you share your itinerary when you get back? I’d love to plan something similar!'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "2,'Alice','That sounds like the perfect vacation! I hope you enjoy your time away and get to relax. Where exactly are you going? The beach sounds amazing!'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "2,'Bob','A beach vacation is exactly what everyone needs after working hard! Have fun, and make sure to soak up the sun!'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "2,'Charlie','A tropical island getaway sounds incredible. I hope you make lots of memories there! Don’t forget to take a lot of photos.'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "2,'Diana','Sounds like a dream! I’m sure you’ll come back feeling completely refreshed. Do you have any fun activities planned while you’re there?'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "2,'Eva','That sounds so relaxing! I hope you find some time for a little adventure, like snorkeling or exploring the local markets. Have a great time!'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "2,'Frank','Enjoy every second of your well-deserved vacation! I bet it’s going to be an amazing experience. Can’t wait to hear about your adventures when you return!'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "2,'Grace','I’m so happy for you! It’s so important to take a break and recharge. Have fun exploring the island and relaxing by the water.'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "2,'Henry','Sounds like the perfect escape from everyday life. I’m sure you’ll have a blast. Make sure to try some local dishes while you’re there!'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "2,'Isla','That sounds like paradise! I’m sure you’ll come back with so many stories to tell. Make sure to take some time to enjoy the simple moments too.'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "2,'Jack','A tropical island is the best place to recharge. I’m sure the sunsets are going to be stunning. Have a fantastic time, and make the most of every moment!'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "3,'Alice','Wow, skydiving sounds incredible! I’m so excited for you. I’m sure it’s going to be such an unforgettable experience. How do you feel about it now?'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "3,'Bob','That’s awesome! Skydiving has always been on my bucket list. I can’t wait to hear all about your jump! How are you preparing for it?'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "3,'Charlie','Skydiving sounds terrifying, but I’m sure it’ll be an incredible experience. You’re so brave for doing it! Keep us posted on how it goes.'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "3,'Diana','That’s amazing! I can’t imagine the rush you’ll feel. Be safe, and don’t forget to take some photos or videos of the experience if you can!'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "3,'Eva','You’re going to love it! The adrenaline rush is like nothing else. It’s one of the most exciting experiences I’ve had. Best of luck with your jump!'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "3,'Frank','Skydiving sounds so thrilling! I’ve heard the views from up there are breathtaking. Make sure to enjoy the freefall moment, it’s something you’ll never forget.'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "3,'Grace','That’s one brave adventure! I’ve heard it’s such an exhilarating experience. I hope you have a great time and enjoy the rush!'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "3,'Henry','Skydiving is definitely on my list too! Can’t wait to hear how it goes. I bet it’s going to be an epic story to tell!'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "3,'Isla','That’s an adventure of a lifetime! I’m sure it’ll be one of those moments you’ll never forget. Have fun and be safe out there!'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "3,'Jack','Skydiving is such a bucket-list activity. I admire your courage! Don’t forget to take in the views, it’s supposed to be breathtaking.'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "4,'Alice','I’m so proud of you for sticking to your fitness routine! Consistency is key, and you’re definitely on the right track. Keep going strong!'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "4,'Bob','That’s awesome! I’ve been working out too, and it’s amazing how much better I feel. Keep up the great work and stay motivated!'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "4,'Charlie','I love that you’re getting into fitness! It really makes such a difference in how you feel day-to-day. Keep pushing yourself—you’ve got this!'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "4,'Diana','Fitness is such a great journey! I’m sure you’re going to see amazing results soon. What kind of workouts are you doing at the moment?'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "4,'Eva','I love that you’re incorporating yoga into your routine! It’s great for flexibility and stress relief. Keep up the hard work!'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "4,'Frank','I can feel the motivation from your post! Fitness really improves your mood and energy. You’re doing great, just keep pushing!'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "4,'Grace','You’re doing amazing! It’s so inspiring to see someone so dedicated to their fitness goals. Keep it up, and don’t forget to rest when you need to!'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "5,'Alice','That’s such a great accomplishment! Your progress is so inspiring. Keep going—you’re going to hit your goals in no time!'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "5,'Bob','Wow, look at you go! Your progress is impressive. I’m sure your hard work will pay off even more soon!'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "5,'Charlie','It’s amazing to see the dedication you’re putting into your fitness journey. Keep up the great work—you’re on the right path!'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "5,'Diana','Such an amazing transformation! It’s really motivating to see your hard work and consistency pay off. You’ve got this!'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "5,'Eva','Your progress is incredible! It’s so important to celebrate the small wins along the way. You’re doing amazing!'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "5,'Frank','It’s clear that all your effort is paying off! Keep pushing forward, and I’m sure you’ll see even greater results soon.'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "5,'Grace','Such an inspiring journey! It’s amazing to see how consistent you’ve been. I’m sure you’ll hit all your fitness goals soon!'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "5,'Henry','Great progress! You’re working hard and it’s showing. Keep it up, and stay strong—your results will continue to improve!'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "5,'Isla','So proud of your progress! It’s incredible to see how far you’ve come. Keep going—you’re doing awesome!'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "5,'Jack','Your dedication is amazing! I can tell you’re really focused on your goals, and it’s inspiring to see the progress you’ve made. Keep it up!'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "6,'Alice','That’s so exciting! It’s great that you’re trying something new. I’d love to hear more about how you’re finding the experience so far.'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "6,'Bob','It’s always awesome to learn something new! I’m sure you’ll enjoy the process. Let me know if you need any tips or advice along the way!'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "6,'Charlie','I love that you’re trying out new hobbies! It’s a great way to grow and learn new skills. Keep us posted on how it’s going!'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "6,'Diana','New hobbies are always so fun to start. I’m curious, what inspired you to pick this one? I can’t wait to see what you create or learn!'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "6,'Eva','Starting a new hobby is always a great way to break out of your routine. I hope you enjoy every moment and discover something new about yourself!'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "6,'Frank','It’s great to see you challenging yourself with new experiences! Keep it up—I’m sure you’re going to excel at this new hobby.'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "6,'Grace','New hobbies are the best! I’m so glad you’re giving it a try. Stay curious, and remember it’s all about enjoying the process!'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "6,'Henry','I’m so excited to hear about your journey with this new hobby! Have you learned anything cool so far? Keep going—you’re doing great!'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "6,'Isla','It’s always so refreshing to try something new. You never know what amazing things you might discover! I’m looking forward to hearing about it.'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "6,'Jack','I love seeing people try new things! It’s such a great way to grow and expand your horizons. Keep it up, and enjoy the learning process!'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "7,'Alice','I absolutely love that book! It’s such a classic. What was your favorite part of the story?'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "7,'Bob','Such a great choice! That book really left an impact on me too. What did you think of the ending?'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "7,'Charlie','I’ve heard so many good things about that book! What was the most memorable moment for you while reading it?'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "7,'Diana','That’s one of my favorites too! The author really knows how to keep you hooked. What did you think about the characters?'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "7,'Eva','Great pick! I remember reading it in one sitting—it was so hard to put down. What themes stood out to you the most?'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "7,'Frank','One of the best books I’ve ever read! The plot twists kept me on the edge of my seat. Did you find the ending satisfying?'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "7,'Grace','I love when books can completely captivate you. That one definitely did! Which character did you relate to the most?'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "7,'Henry','What an incredible book! The writing style is so captivating. I couldn’t stop thinking about it after finishing. Did you love it as much as I did?'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "7,'Isla','Such a great read! The story is so compelling, and the themes are really thought-provoking. I can’t wait to read it again!'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "7,'Jack','I’m so glad you shared this book! It’s definitely on my reading list now. What was your takeaway from it?'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "8,'Alice','This is such good advice! I really needed to hear this today. I’m going to try to implement these changes in my life.'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "8,'Bob','Great perspective! Life is all about finding balance, and I love the way you phrased it. I’m definitely going to keep this in mind.'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "8,'Charlie','So true! Sometimes we get so caught up in the little things, we forget to focus on what really matters. This advice really resonates with me.'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "8,'Diana','I needed this reminder today. Life can get overwhelming, but focusing on the positives is such a good way to reset your mindset.'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "8,'Eva','I love how you framed this! It’s easy to lose track of what’s important, but this advice makes it clear. I’m going to apply it right away.'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "8,'Frank','Such powerful words! It’s great to get a new perspective on life. Thanks for sharing this—it really changed the way I think about my own journey.'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "8,'Grace','I completely agree with you! Life’s little setbacks shouldn’t stop us. This was just the reminder I needed to keep pushing forward.'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "8,'Henry','Such a great message! I think sometimes we all need to slow down and reassess. This post definitely made me reflect on my own life goals.'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "9,'Alice','Such helpful tips! I’ve been planning my next trip and these will definitely come in handy. Thanks for sharing your experience!'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "9,'Bob','I always forget to pack chargers and extra batteries. These tips are really practical. I’ll definitely be more prepared next time!'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "9,'Charlie','Great advice! I’ve traveled a lot, but these are some things I hadn’t thought of before. Especially the tip about local SIM cards—such a time-saver!'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "9,'Diana','I love how you focus on the little details that make travel smoother. I’ll definitely be following your tips for my upcoming trip! Keep sharing more of these!'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "9,'Eva','This is exactly what I needed! Travel tips that actually make a difference. I can’t wait to put them into practice on my next adventure!'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "9,'Frank','I always struggle with keeping my luggage organized. Thanks for the tip on packing cubes—I’ll definitely give them a try next time!'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "9,'Grace','These are great tips! I especially love the idea of downloading maps offline. I’ve been lost so many times without Wi-Fi. Very useful advice!'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "9,'Henry','So many great ideas here! I’m bookmarking this post for future trips. I never thought to keep a copy of my passport and travel docs separate from my wallet!'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "9,'Isla','These tips are so practical! The one about packing snacks for the flight is a lifesaver. Can’t wait to try these out next time I travel!'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "9,'Jack','This is super helpful! The advice on managing jet lag will come in handy during my long flights. Thanks for sharing all these pro tips!'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "10,'Alice','That sounds delicious! I love how you described the flavors. I’ll have to try making this dish myself—do you have a recipe to share?'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "10,'Bob','I’ve been craving something like this! Your post makes me want to cook this right now. What do you usually pair it with for a side dish?'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "10,'Charlie','This looks amazing! It’s so fun to try new recipes and meals. I love the combination of ingredients you used here.'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "10,'Diana','Yum, this sounds like the perfect comfort meal! I love the idea of adding extra spices to give it a kick. I’ll definitely try this out next weekend.'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "10,'Eva','That looks mouth-watering! I love meals that are hearty and satisfying like this one. What’s your favorite part of this dish? The sauce or the protein?'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "10,'Frank','I can practically taste this meal just from reading your description! How long did it take to prepare? It looks pretty quick and easy to make!'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "10,'Grace','Your meal sounds so flavorful! I love experimenting with spices too. This is definitely going on my to-make list. Do you have any tips for making it even better?'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "10,'Henry','This sounds like the perfect meal for a cozy night in! I’ll be sure to give it a try soon. Can I make it with ingredients I already have in my kitchen?'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "10,'Isla','I love how you combined all those flavors! This meal looks so comforting. It’s making me hungry just reading about it!'"
// );
// addToTable(
//   "comment",
//   "post_id,name,body",
//   "10,'Jack','This is definitely my kind of meal! It’s making me want to whip it up for dinner tonight. Thanks for the inspiration!'"
// );
