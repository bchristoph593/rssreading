function invokeReader() {
	const node = document.getElementsByClassName("article-head__shorttext")[0]; 
	
	const selection = window.getSelection();
	const range = document.createRange();
	range.selectNodeContents(node);
	selection.removeAllRanges();
	selection.addRange(range);

	document.getElementsByClassName("article-head__shorttext")[0].style = "border-left:1px solid black; border-right:1px solid black; padding:5px;";
}