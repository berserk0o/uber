const scrollButton = document.getElementById("scroll__button")

const vebinar = document.getElementById('vebinar')

const toTopButton = document.getElementById('to-top-button')

const promo = document.getElementById('promo')


// onClick
function onClick() {

	vebinar.scrollIntoView({
		behavior: 'smooth'
	})

}

scrollButton.addEventListener('click', onClick)



// onClickTopButton
function onClickTopButton() {

	promo.scrollIntoView({
		behavior: 'smooth'
	})

}

toTopButton.addEventListener('click', onClickTopButton)


// onScroll
function onScroll() {

	if (window.scrollY > 700) { 
		toTopButton.style.display = 'flex'
	} else {
		toTopButton.style.display = 'none'
	}
	
}

window.addEventListener('scroll', onScroll)












