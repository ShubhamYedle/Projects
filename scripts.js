const icons = document.querySelectorAll('.icon');

icons.forEach(icon => 
	{
	icon.addEventListener('click', () =>
	 {
		window.open(icon.getAttribute('href'), '_blank');
	});
});