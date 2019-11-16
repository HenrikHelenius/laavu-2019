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
					content: `sdffsdfs Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consectetur doloribus fugit id illum
\t\t\t\t\t\tlabore libero nihil quasi quidem quo, reprehenderit repudiandae! Aliquam hic molestiae molestias odit
\t\t\t\t\t\tomnis possimus quae.`,
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
					content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consectetur doloribus fugit id illum
\t\t\t\t\t\tlabore libero nihil quasi quidem quo, reprehenderit repudiandae! Aliquam hic molestiae molestias odit
\t\t\t\t\t\tomnis possimus quae.`,
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
					content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consectetur doloribus fugit id illum
\t\t\t\t\t\tlabore libero nihil quasi quidem quo, reprehenderit repudiandae! Aliquam hic molestiae molestias odit
\t\t\t\t\t\tomnis possimus quae.`,
				},
				{
					type: 'html',
					content: `<iframe width="560" height="315" src="https://www.youtube.com/embed/opD8Uq62v5I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
				},
				{
					type: 'text',
					content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consectetur doloribus fugit id illum
\t\t\t\t\t\tlabore libero nihil quasi quidem quo, reprehenderit repudiandae! Aliquam hic molestiae molestias odit
\t\t\t\t\t\tomnis possimus quae.`,
				},
				{
					type: 'html',
					content: `<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1t5nfrxZLK8xrpOclwcqLwFEiNHk4-3nW" width="640" height="480"></iframe>`
				},
				{
					type: 'text',
					content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consectetur doloribus fugit id illum
\t\t\t\t\t\tlabore libero nihil quasi quidem quo, reprehenderit repudiandae! Aliquam hic molestiae molestias odit
\t\t\t\t\t\tomnis possimus quae.`,
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
