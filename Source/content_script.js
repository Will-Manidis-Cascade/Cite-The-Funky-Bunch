walk(document.body);

function walk(node)
{
	// I stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;
	if (node.nodeName.toLowerCase() == 'input' || node.nodeName.toLowerCase() == 'textarea') {

		return;
	}

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)
{
	var v = textNode.nodeValue;

	v = v.replace(/\bet al.\b/ig, "and the funky bunch");
	v = v.replace(/et al\b/ig, "and the funky bunch");
	v = v.replace(/Et Al.\b/ig, "and the funky bunch");

	textNode.nodeValue = v;
}
