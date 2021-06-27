/**
 * config for micro ui endpoints
 * name service name
 * pathnameId path to the service
 */

const configuration = {
	microFrontends: [
		{
			name: 'welcome',
			pathnameId: 'hello',
		},
		{
			name: 'music',
			pathnameId: 'play',
		},
	],
};

export default configuration;
