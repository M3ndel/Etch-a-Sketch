const container = document.querySelector('.container')

function deleteGrid() {
	while (container.firstChild) {
		container.firstChild.remove()
	}
}

function createGrid() {
	let size = +prompt('Enter size of the grid', '')
	if(!Number.isInteger(size) || size <= 0) {
		alert('Invalid input. Please enter a number > 0.')
		return createGrid();
	}
	deleteGrid();

	for (let i = 0; i < size; i++) {
		let child = document.createElement('div')
		child.setAttribute('class', 'column')
		container.appendChild(child)
		for (let j = 0; j < size; j++) {
			let grandChild = document.createElement('div')
			grandChild.setAttribute('class', 'cell')
			grandChild.style.width = 800/size + 'px';
			grandChild.style.height = 800/size + 'px';
			child.appendChild(grandChild)
		}
	}

	const cells = document.querySelectorAll('.cell')
	for (const cell of cells) {
		cell.addEventListener('mouseover', () => {
			cell.style.backgroundColor = 'gray'
		})
	}
}

const button = document.querySelector('button')
button.addEventListener('click', () => {
	createGrid()
})

for (let i = 0; i < 16; i++) {
	let child = document.createElement('div')
	child.setAttribute('class', 'column')
	container.appendChild(child)
	for (let j = 0; j < 16; j++) {
		let grandChild = document.createElement('div')
		grandChild.setAttribute('class', 'cell')
		child.appendChild(grandChild)
	}
}

const cells = document.querySelectorAll('.cell')
for (const cell of cells) {
	cell.addEventListener('mouseover', () => {
		cell.style.backgroundColor = 'gray'
	})
}
