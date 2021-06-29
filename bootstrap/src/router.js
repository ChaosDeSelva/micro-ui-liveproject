import config from './config';
import download from './download';
import { mountMicroFrontendInPage, unmountMicroFrontendInPage } from './mount';

/**
 * Find the pathname of the current window location
 * @param {*} pathname window location pathname
 * @returns micro ui name
 */
function getMicroFrontendNameFromPathname(pathname) {
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

const navigationHistory = [];

function navigateTo(pathname) {
	if (navigationHistory.length > 0) {
		unmountMicroFrontendInPage();
	}

	const microFrontendName = getMicroFrontendNameFromPathname(pathname);

	// if no name found then load the welcome page by default, maybe a 404 would be better?
	if (!microFrontendName) {
		console.warn('Route not found.');
		microFrontendName = config.microFrontends[0].name;
	}

	navigationHistory.push(pathname);
	window.history.pushState({}, '', pathname);

	const microFrontendEntryPointUrl =
		getMicroFrontendEntryPointUrl(microFrontendName);

	// download the built ui package, mount the package contents
	return download(microFrontendEntryPointUrl).then((microFrontendDocument) =>
		mountMicroFrontendInPage(microFrontendName, microFrontendDocument)
	);
}

export { navigateTo };
