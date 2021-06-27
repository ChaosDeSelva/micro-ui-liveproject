import config from './config';
import download from './download';
import mountMicroFrontendInPage from './mount.js';

/**
 * Find the pathname of the current window location
 * @param {*} pathname window location pathname
 * @returns micro ui name
 */
function getMicroFrontendNameFromPathname(pathname = window.location.pathname) {
	const [, microFrontendId] = pathname.split('/');
	const microFrontend = config.microFrontends.find(
		(microFrontend) => microFrontend.pathnameId === microFrontendId
	);

	if (!microFrontend) {
		return;
	}

	return microFrontend.name;
}

/**
 * build the path to the micro ui from the name
 * @param {*} microFrontendName micro ui name
 * @returns micro ui path
 */
function getMicroFrontendEntryPointUrl(microFrontendName) {
	return `/mui/${microFrontendName}/index.html`;
}

// start by finding the ui name
let microFrontendName = getMicroFrontendNameFromPathname();

// if no name found then load the welcome page by default, maybe a 404 would be better?
if (!microFrontendName) {
	microFrontendName = config.microFrontends[0].name;
}

// get the path to the micro ui
const microFrontendEntryPointUrl =
	getMicroFrontendEntryPointUrl(microFrontendName);

// download the built ui package, mount the package contents
download(microFrontendEntryPointUrl).then((microFrontendDocument) => {
	mountMicroFrontendInPage(microFrontendName, microFrontendDocument);
});
