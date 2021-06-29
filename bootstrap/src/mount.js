const CLASS_NAME = 'mounted-by-bootstrap';

/**
 * Move all elements to parent
 * @param {*} parent
 * @param {*} document
 * @returns
 */
function moveNodeToDocument(parent, document) {
	return function moveNode(node) {
		// Cloning or Adopting <scripts> nodes doesn't re-evaluate them
		// Read more here: https://stackoverflow.com/questions/28771542/why-dont-clonenode-script-tags-execute

		if (node.tagName === 'SCRIPT') {
			const clonedNode = document.createElement(node.tagName);

			[...node.attributes].forEach((attribute) =>
				clonedNode.setAttribute(attribute.name, attribute.value)
			);
			clonedNode.innerHTML = node.innerHTML;
			clonedNode.classList.add(CLASS_NAME);

			parent.appendChild(clonedNode);
			return;
		}

		const adoptedNode = document.adoptNode(node);
		adoptedNode.classList.add(CLASS_NAME);
		parent.appendChild(adoptedNode);
	};
}

/**
 * Create a base  element
 * @param {*} microFrontendName micro ui name
 */
function addOrUpdateBaseTag(microFrontendName) {
	const [existingBaseElement] = document.getElementsByTagName('base');

	if (existingBaseElement) {
		existingBaseElement.setAttribute('href', `/mui/${microFrontendName}/`);
		return;
	}

	const baseElement = document.createElement('base');
	baseElement.setAttribute('href', `/mui/${microFrontendName}/`);
	document.head.appendChild(baseElement);
}

/**
 * mount head and body elements
 * @param {*} microFrontendName
 * @param {*} microFrontendDocument
 */
function mountMicroFrontendInPage(microFrontendName, microFrontendDocument) {
	addOrUpdateBaseTag(microFrontendName);

	const microFrontendHeadNodes =
		microFrontendDocument.querySelectorAll('head>*');
	const microFrontendBodyNodes =
		microFrontendDocument.querySelectorAll('body>*');

	microFrontendHeadNodes.forEach(moveNodeToDocument(document.head, document));
	microFrontendBodyNodes.forEach(moveNodeToDocument(document.body, document));
}

function unmountMicroFrontendInPage() {
	const microFrontendElements = document.querySelectorAll(`.${CLASS_NAME}`);

	microFrontendElements.forEach((element) => {
		if (element.parentElement) {
			element.parentElement.removeChild(element);
		}
	});
}

export { mountMicroFrontendInPage, unmountMicroFrontendInPage };
