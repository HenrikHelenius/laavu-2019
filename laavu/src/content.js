const content = {
	carousel: [
		{
			name: 'Explore Finnish nature in its authenticity.',
			image: 'http://source.unsplash.com/sp-p7uuT0tw',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet at deleniti dolorum ducimus eum facilis fugiat fugit impedit.',
			path: ''
		},
		{
			name: 'Discover places you did not know existed.',
			image: 'http://source.unsplash.com/ym3vp_TeDLE',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet at deleniti dolorum ducimus eum facilis fugiat fugit impedit.',
			path: ''
		},
		{
			name: 'Collect experiences with like-minded people.',
			image: 'http://source.unsplash.com/sblp4evk2gs',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet at deleniti dolorum ducimus eum facilis fugiat fugit impedit.',
			path: ''
		},
		{
			name: 'Step into the wilderness whenever you feel so.',
			image: 'http://source.unsplash.com/VzwVyjlz2Z4',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet at deleniti dolorum ducimus eum facilis fugiat fugit impedit.',
			path: ''
		},
	],
	locations: [
		{
			id: 'haukkalampi',
			name: 'Haukkalampi',
			image: 'http://source.unsplash.com/8TJbrQGKFyU',
			subtitle: 'Haukankierros, Korpinkierros',
			description: `Spectacular landscapes created by the Ice Age: valleys and ravines as well as old-growth forests.`,
			content: [
				{
					type: 'text',
					content: `Start here your hiking journey to Nuuksio National Park. Haukkalampi is great starting point with Haukanpesä Guide Hut which has multiple services to offer: rent a rowing boat for the lake, enjoy traditional snacks from Cafe Silva or get a guided tour. Rent the equipment if you want to explore Nuuksio either by foot, bike or paddling.`,
				},
				{
					type: 'stats_weekly',
					content: {
						visitors: [
							0,
							32,
							42,
							33,
							52,
							52,
							43
						],
						xAxis: [
							"Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"
						]
					}
				},
				{
					type: 'coordinates',
					latitude: `60°18'32.378"`,
					longitude: `24°30'48.658"`,
				},
				{
					type: 'text',
					content: `Start the hike here if you prefer social and supportive environment to make sure that you have all the needed information and supplies. The personnel will help you if you have some questions about the national park.`,
				},
				{
					type: 'stats_monthly',
					content: {
						visitors: [
							0,
							0,
							0,
							0,
							55,
							124,
							75,
							0,
							0,
							0,
							0,
							0
						],
						xAxis: [
							"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
						]
					}
				},
				{
					type: 'image',
					content: `https://images.unsplash.com/photo-1486945007940-bebc06d5f289?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80`,
				},
				{
					type: 'text',
					content: `Haukkalammentie can become congested from time to time. Weekends from May to September are most crowded. 
						  Parking on the shoulder is strictly prohibited to ensure constant access for emergency vehicles. For visitors arriving by car, the best starting points for excursions are the parking areas of Kattila, Högbacka, and Siikaniemi. 
						  Haukkalampi can also be reached on foot from the Finnish Nature Centre Haltia, but the hiking trail is challenging.`,
				},
				{
					type: 'html',
					content: `<iframe width="560" height="315" src="https://www.youtube.com/embed/51paAlx3La4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
				},
				{
					type: 'text',
					content: `All the circle trails begin in front of the Nature Information Hut Haukanpesä. On the grounds there are dry toilets, a recycling point and tap water available which is purest in the world and safe to drink.`,
				},
				{
					type: 'html',
					content: `<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1t5nfrxZLK8xrpOclwcqLwFEiNHk4-3nW" width="640" height="480"></iframe>`
				},
				{
					type: 'text',
					content: `Within easy reach from Helsinki you can escape into wild natural settings and enjoy Finnish scenery at its best, with lakes, green forests and rigged crags. 
					Pack your backpack for a memorable family picnic or campout. The nearby Finnish Nature Centre Haltia spotlights the best of Finland's natural treasures what you may find interesting.`,
				}
			]
		},
		{
			id: 'solvalla',
			name: 'Solvalla',
			image: 'https://source.unsplash.com/Pckd-XeAd4U/1600x900',
			subtitle: 'Trail route',
			description: `Solvalla Sports Institute stands on the shores of lake Pitkäjärvi next to Nuuksio national park.`,
			content: [
				{
					type: 'text',
					content: `Solvalla is a national sports institution in Nuuksio, Espoo, beside Lake Pitkäjärvi. The local natural landscape is unique; the unspoiled nature of the Nuuksio national park is a unique wildlife area in southern Finland.`,
				},
				{
					type: 'stats_weekly',
					content: {
						visitors: [
							27502,
							21246,
							33982,
							51194,
							23684,
							31596,
							43484
						],
						xAxis: [
							"Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"
						]
					}
				},
				{
					type: 'coordinates',
					latitude: `60°18'12.692"`,
					longitude: `24°33'1.408"`,
				},
				{
					type: 'text',
					content: `The trail between Solvalla and Haukkalampi is one of the busiest paths of Nuuksio because of the services what Solvella provides in its area. If you're looking for a light 4.6 km hiking path this might be the solution for you to provide you a possibility to enjoy the beauty of the finnish nature.`,
				},
				{
					type: 'stats_monthly',
					content: {
						visitors: [
							18731,
							15968,
							21337,
							26880,
							12704,
							24074,
							14333,
							18986,
							23366,
							16637,
							20568,
							19104
						],
						xAxis: [
							"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
						]
					}
				},
				{
					type: 'image',
					content: `https://images.unsplash.com/photo-1486945007940-bebc06d5f289?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80`,
				},
				{
					type: 'text',
					content: `Solvalla National Sports Institution provides activities for each season of the year. Solvalla Sports Institute offers a wide range of sport activities, from aerobics to trekking. In the summer there is a possibility to hire canoes and rowing boats. Swing Hill, a downhill skiing centre, and the Finnish Nature Centre Haltia are located nearby the institute. There are also meeting facilities, accommodation and two lakeside saunas.`,
				},
				{
					type: 'html',
					content: `<iframe width="560" height="315" src="https://www.youtube.com/embed/opD8Uq62v5I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
				},
				{
					type: 'text',
					content: `Solvalla Sports Institute have five saunas of various sizes. Our two lakeside saunas, can hold 6 persons respective 15 persons. By the lakeside saunas there is a small beach where you can cool down in between your sauna sessions. Additionally, there are two Saunas in the main building and one attached to the accommodation in the Rinne building.`,
				},
				{
					type: 'html',
					content: `<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1t5nfrxZLK8xrpOclwcqLwFEiNHk4-3nW" width="640" height="480"></iframe>`
				},
				{
					type: 'text',
					content: `Within easy reach from Helsinki you can escape into wild natural settings and enjoy Finnish scenery at its best, with lakes, green forests and rigged crags. 
					Pack your backpack for a memorable family picnic or campout. Solvalla Sports Institute stands on the shores of lake Pitkäjärvi next to Nuuksio National Park. The nearby Finnish Nature Centre Haltia spotlights the best of Finland's natural treasures.`,
				}
			]
		},
		{
			id: 'veikkola',
			name: 'Veikkola',
			image: 'http://source.unsplash.com/SsIaLCKWnfM',
			subtitle: 'Kaarniaispolku, Trail route',
			description: `Explore the finnish landscape in miniature size..`,
			content: [
				{
					type: 'text',
					content: `Veikkola-Salmi connecting Trail (20 km) will lead you from Veikkola via Siikajärvi and Haukkalampi all the way to Salmi hiking area. You can choose the details of the trail yourself. You will also have an opportunity and start your journey over here to test the famous Trail 2000, 110 km long hiking trail. The trail goes through the national park and are suits for sports enthuasists that are looking for multi-day challenge. It is also suitable for biking.`,
				},
				{
					type: 'stats_weekly',
					content: {
						visitors: [
							8946,
							11684,
							14052,
							13696,
							11353,
							9764,
							8880
						],
						xAxis: [
							"Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"
						]
					}
				},
				{
					type: 'coordinates',
					latitude: `60°16'32.951"`,
					longitude: `24°27'49.281"`,
				},
				{
					type: 'text',
					content: `Start your trailblazing from Veikkola if you are interested heading towards Kirkkonummi which isn't actually that far away. The area has described to summarize the nature of Finland with it's mossy paths, duckboards, rocky and wild nature. `,
				},
				{
					type: 'stats_monthly',
					content: {
						visitors: [
							5205,
							3245,
							6163,
							6383,
							7357,
							7396,
							7553,
							7664,
							7110,
							7036,
							5533,
							7730
						],
						xAxis: [
							"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
						]
					}
				},
				{
					type: 'image',
					content: `https://images.unsplash.com/photo-1486945007940-bebc06d5f289?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80`,
				},
				{
					type: 'text',
					content: `The cultural heritage of Kirkkonummi, which is over 675 years old, is represented in the medieval stone church, the local history museums, the lush manor surroundings and the sights in the terrain on the Porkkala peninsula that date back to the period when it was leased to the Soviet Union in 1944–1956. To get a historical punch as part of the trip you can make pitstop to Kirkkonummi to learn more about this.   `,
				},
				{
					type: 'html',
					content: `<iframe width="560" height="315" src="https://www.youtube.com/embed/opD8Uq62v5I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
				},
				{
					type: 'text',
					content: `The literal meaning of the words "Kirkkonummi" and "Kyrkslätt" in English is "church heath". Geographically, Kirkkonummi has two famous peninsulas, namely Porkkala and Upinniemi, the latter one of which houses a major Finnish naval base. Kirkkonummi has been populated from the Stone Age to the present day as evidenced by the very first Stone Age rock paintings found in Finland that are located by lake Vitträsk in the central lake region of Kirkkonummi. `,
				},
				{
					type: 'html',
					content: `<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1t5nfrxZLK8xrpOclwcqLwFEiNHk4-3nW" width="640" height="480"></iframe>`
				},
				{
					type: 'text',
					content: `Within easy reach from Helsinki you can escape into nature of Finland and enjoy the scenery at its beauty.  Around 200 000 lakes, 40 national forests and rigged crags. 
					Pack your backpack for a memorable family picnic or campout. Solvalla Sports Institute stands on the shores of lake Pitkäjärvi next to Nuuksio National Park. The nearby Finnish Nature Centre Haltia spotlights the best of Finland's natural treasures.`,
				}
			]
		},
		{
			id: 'kesanki',
			name: 'Kesänki',
			image: 'http://source.unsplash.com/RdF3apSExR0',
			subtitle: 'Trail route, Canoeing',
			description: `Far away from traffic, total silence and amazing nature around you!`,
			content: [
				{
					type: 'text',
					content: `Fill your bottle with water from a spring in Lake Kesänkijärvi. Walk up the path to the old pine trees. Sit and take a break on a fallen dead tree near the forest border. Climb up Pirunkuru Ravine. From rock to rock. Step by step. Lean to the mass of rocks on the top. Breathtaking scenery. Restlessness is long gone. Time stands still. A raven flies by, breaks the spell and guides you to the Tahkokuru lean-to shelter. The flames dance in the campfire. On the way back, your step is light. A trip to Kesänkitunturi fell is a classic.`,
				},
				{
					type: 'stats_weekly',
					content: {
						visitors: [
							17733,
							18187,
							15879,
							18550,
							20288,
							15814,
							16359
						],
						xAxis: [
							"Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"
						]
					}
				},
				{
					type: 'coordinates',
					latitude: `67°36'13.363"`,
					longitude: `24°13'13.884"`,
				},
				{
					type: 'text',
					content: `Everybody may enjoy canoeing independently and Kesänki provides during the Summer season exceptional opportunity to rent one. Kesänki provides Enjoy the beauty of the wilderness with exceptional way. Lake Kesänki is connected to lake Äkäslompolo with a small and peaceful river Kesänki. During the day you may canoe from lake Kesänki to lake Äkäslompolo and finish your canoeing there.`,
				},
				{
					type: 'stats_monthly',
					content: {
						visitors: [
							6017,
							6924,
							14957,
							9616,
							2753,
							7659,
							12980,
							12162,
							32162,
							8675,
							2563,
							6342
						],
						xAxis: [
							"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
						]
					}
				},
				{
					type: 'image',
					content: `https://images.unsplash.com/photo-1486945007940-bebc06d5f289?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80`,
				},
				{
					type: 'text',
					content: `Go by skiing, walking or biking from Äkäslompolo or Ylläsjärvi. At the winter time you can walk to the lake of Kesänkijärvi without snow shoes, but by biking we recommend fatbike. Easiest way to find it is to buy "Ylläs - winter sport map". From Äkäslompolo village just follow the signs to Kesänkijärvi. `,
				},
				{
					type: 'html',
					content: `<iframe width="560" height="315" src="https://www.youtube.com/embed/opD8Uq62v5I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
				},
				{
					type: 'text',
					content: `Enjoy a spectacular view right next to the fell Ylläs. Lake Kesänki provides exceptional view to the silent Ylläs fell and the Lappish wilderness. Keep a break by the fireplace to grill sausages, eat local specialities and enjoy hot drinks. On the way back go down along the deepest canyon in Ylläs, Pirunkuru.`,
				},
				{
					type: 'html',
					content: `<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1t5nfrxZLK8xrpOclwcqLwFEiNHk4-3nW" width="640" height="480"></iframe>`
				},
				{
					type: 'text',
					content: `The trail named Tähtipolku (Finn. Star Trail), climbs Kesänki Fell through Pirunkuru Ravine. This is both exhausting and breathtaking beautiful path for the wanderers who want to enjoy the purest nature of Lapland.`,
				}
			]
		},
		{
			id: 'kahvikeidas',
			name: 'Kahvikeidas',
			image: 'http://source.unsplash.com/P8PlK2nGwqA',
			subtitle: 'Trail route',
			description: `Traditional lean-to shelter to satisfy your appetite`,
			content: [
				{
					type: 'text',
					content: `Lean-to shelter is in Finnish Laavu which has been a source of inspiration for the team behind the software to build a tool for social and environmentally responsible wanderers. It is a minimalistic structure to provide hikers after a long hike a resting place and shelter to get more energy for upcoming adventures. Kahvikeidas is small heartwarming cafeteria inside Laavu from a local lifestyle entrepreneur that gives you the power to continue your journey on your trails.`,
				},
				{
					type: 'stats_weekly',
					content: {
						visitors: [
							37451,
							35895,
							34337,
							37041,
							36713,
							35979,
							38689
						],
						xAxis: [
							"Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"
						]
					}
				},
				{
					type: 'coordinates',
					latitude: `67°33'40.616"`,
					longitude: `24°16'36.985"`,
				},
				{
					type: 'text',
					content: `Kahvikeidas is part of known Saalistusjotos trail which has get high interest among global and domestic travelers. It is most likely that you will meet other wanderers while going the path. Greet them warmly and take most out of the interactions.`,
				},
				{
					type: 'stats_monthly',
					content: {
						visitors: [
							12721,
							30666,
							85220,
							64535,
							2880,
							2844,
							5192,
							5599,
							15276,
							3983,
							3041,
							24148
						],
						xAxis: [
							"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
						]
					}
				},
				{
					type: 'image',
					content: `https://images.unsplash.com/photo-1486945007940-bebc06d5f289?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80`,
				},
				{
					type: 'text',
					content: `Saalistusjotos trail is all about the struggle between the prey and the hunter and the ways in which the creation has adapted to the survival situation. This trail shows the nature of northeast Lapland at its most beautiful. The signposts on the trail acquaint you with the fauna, geology and cultural history of the area.`,
				},
				{
					type: 'html',
					content: `<iframe width="560" height="315" src="https://www.youtube.com/embed/opD8Uq62v5I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
				},
				{
					type: 'text',
					content: `The trail is good for beginners, families or the ones that want to try Fatbike in the forest for the first time. The trail takes you from the fields towards the top of the fells. There may be a risk that some day the nature will limit the trailblazers for using the path wind that gusts at speeds of up to 15 m/s. However, the trail is known for its good condition during every season of the year.`,
				},
				{
					type: 'html',
					content: `<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1t5nfrxZLK8xrpOclwcqLwFEiNHk4-3nW" width="640" height="480"></iframe>`
				},
				{
					type: 'text',
					content: `In a few years Kahvikeidas will get it's second wilderness cafeteria which provides for the winter season more possibilities to recharge your batteries even better to keep you continuing your journey.`,
				}
			]
		},
		{
			id: 'varkaankuru',
			name: 'Varkaankuru',
			image: 'http://source.unsplash.com/QdSYuTtcGZE',
			subtitle: 'Trail route, Stream',
			description: `Authentic nature trail in the heart of Ylläs`,
			content: [
				{
					type: 'text',
					content: `If there were to be a ”Finland’s Most Beautiful Nature Trail” competition, one of the medals would have to be awarded in advance: the landscapes and nature of this nature trail on Varkaankuru Ravine are uniquely rich in variety. On Wizard’s Trail, natural phenomena and the world of superstitions go hand in hand. Because of its duckboards and steps, the trail is not physically demanding. Along the way, near the top of Varkaankuru Ravine, you will find a designated campfire spot. `,
				},
				{
					type: 'stats_weekly',
					content: {
						visitors: [
							21646,
							21272,
							14933,
							19746,
							23025,
							26080,
							24315
						],
						xAxis: [
							"Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"
						]
					}
				},
				{
					type: 'coordinates',
					latitude: `67°35'54.594"`,
					longitude: `24°12'17.89"`,
				},
				{
					type: 'text',
					content: `With a bit of imagination the practically ancient spruce trees seem like a group of wizards holding a meeting. In the midst of the murky and dense spruce forest the Downy Birch (Betula pubescens), the European Mountain-Ash (Sorbus aucuparia) and the Goat Willow (Salix caprea) bring a lighter vibe to the woods.`,
				},
				{
					type: 'stats_monthly',
					content: {
						visitors: [
							685,
							1785,
							3769,
							2344,
							2195,
							14480,
							28160,
							22611,
							55870,
							14453,
							2792,
							1873
						],
						xAxis: [
							"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
						]
					}
				},
				{
					type: 'image',
					content: `https://images.unsplash.com/photo-1486945007940-bebc06d5f289?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80`,
				},
				{
					type: 'text',
					content: `Metsähallitus has stated that "The herb-rich forest is so lush it seems like something out of a fairytale".`,
				},
				{
					type: 'html',
					content: `<iframe width="560" height="315" src="https://www.youtube.com/embed/opD8Uq62v5I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
				},
				{
					type: 'text',
					content: ` The Varkaankuru Nature Trail is usually in a good condition, and it is clearly marked with signposting. The area has its own micro climate, and is rich in flora and fauna. You can spot many, even rare species of plants, polyporaceae- and birds (eg. Angelica archangelica, Haploporus odorus and grey wagtail). Therefore, the area is in all respects a fascinating place to hike.`,
				},
				{
					type: 'html',
					content: `<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1t5nfrxZLK8xrpOclwcqLwFEiNHk4-3nW" width="640" height="480"></iframe>`
				},
				{
					type: 'text',
					content: `The trail also has Varkaanlampi Falls what is a series of four consecutive waterfalls in the Pallas-Yllästunturi National Park in Kolari. They are located in the herb-rich forest of the Varkaankuru Ravine, between the fells Ylläs and Kellostapuli. The falls flow near the small Varkaanlampi Pond in the southern end of the ravine.`,
				}
			]
		},
	],
	experiences: [
		{
			id: 'nightguide',
			name: 'The Northern Lights and the Magical Night Sky',
			image: 'https://source.unsplash.com/ZSMgNjYrHRM',
			subtitle: 'Tailored full-day experience',
			description: `Explore the Beauty of the Nights of Finland with Professional Guide.`,
		},
		{
			id: 'nature',
			name: 'Explore the Secrets of Finnish Nature, Berries and Herbs',
			image: 'https://source.unsplash.com/Se_eVdKit30',
			subtitle: 'Tailored half-day experience',
			description: `Learn about the Myths of Finnsh Nature and stories About it's Healing Natural Resources.`,
		},
		{
			id: 'iceskating',
			name: 'Nordic Skates on top of the Frozen Lake',
			image: 'https://source.unsplash.com/mnCdauXR3RE',
			subtitle: 'Tailored half-day experience',
			description: `Feel the Crisping Ice Under your Legs and The Freedom of Ice Skating on Top of The Frozen Lake.`,
		},
		{
			id: 'survival',
			name: 'Arctic Survival Mini Courses in National Park',
			image: 'https://source.unsplash.com/HqS2oz4S7W8',
			subtitle: 'Tailored full-day experience',
			description: `Explore the beauty of Finland with professional wanderer. Get the most out of your journey`,
		},
	],
};

export default content;
