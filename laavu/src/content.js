const content = {
	carousel: [
		{
			name: 'Visit X',
			image: 'https://source.unsplash.com/collection/561941/400x200?xssdf',
		},
		{
			name: 'Experience Y',
			image: 'https://source.unsplash.com/collection/561941/400x200?xsfdf'
		},
		{
			name: 'Explore Z',
			image: 'https://source.unsplash.com/collection/561941/400x200?sasx'
		},
		{
			name: 'Fall in love with Ö',
			image: 'https://source.unsplash.com/collection/561941/400x200?fshhdx'
		},
	],
	locations: [
		{
			id: 'haukkalampi',
			name: 'Haukkalampi',
			image: 'https://source.unsplash.com/collection/561941/1200x600?aax',
			description: `Short description for card...`,
			content: [
				{
					type: 'text',
					content: `Haukkalampi basecamps of starting journey of trailblazing in Nuuksio National Park. Haukanpesä Guide Hut has multiple services for offer: rent a rowing boat for the lake, enjoy traditional snack and products from Cafe Silva or get a guided tour. You can decide if you want to explore Nuuksio either by foot, bike or paddling.`,
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
					type: 'text',
					content: `Starting your jouyney from the area is recommended if you prefer social and supportive environment to make sure that you have all the needed information and supplies. There you can find a cafe, guidance and equiptment renting. 
						  You can also buy for example outdoor maps and sleeve badges. The personnel will help you if you have some questions about the national park.`,
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
					content: `<iframe width="560" height="315" src="https://www.youtube.com/embed/opD8Uq62v5I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
				},
				{
					type: 'text',
					content: `All the circle trails begin in front of the Nature Information Hut Haukanpesä. On the grounds there are dry toilets, a recycling point and tap water available.`,
				},
				{
					type: 'html',
					content: `<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1t5nfrxZLK8xrpOclwcqLwFEiNHk4-3nW" width="640" height="480"></iframe>`
				},
				{
					type: 'text',
					content: `Within easy reach from Helsinki you can escape into wild natural settings and enjoy Finnish scenery at its best, with lakes, green forests and rigged crags. 
					Pack your backpack for a memorable family picnic or campout. The nearby Finnish Nature Centre Haltia spotlights the best of Finland's natural treasures.`,
				}
			]
		},
		{
			id: 'nuuksio',
			name: 'Nuuksio',
			image: 'https://source.unsplash.com/collection/561941/400x200?dsgsafx'
		},
		{
			id: 'pollas',
			name: 'Pölläs',
			image: 'https://source.unsplash.com/collection/561941/400x200?xfdssdf'
		},
		{
			id: 'helsinki',
			name: 'Helsinki',
			image: 'https://source.unsplash.com/collection/561941/400x200?sdsdffx'
		},
	],
	experiences: [
		{
			name: 'Ylläs',
			image: 'https://source.unsplash.com/collection/561941/400x200?x'
		},
		{
			name: 'Nuuksio',
			image: 'https://source.unsplash.com/collection/561941/400x200?y'
		},
		{
			name: 'Pölläs',
			image: 'https://source.unsplash.com/collection/561941/400x200?z'
		},
		{
			name: 'Helsinki',
			image: 'https://source.unsplash.com/collection/561941/400x200?r'
		},
	],
};

export default content;
