/* 
To code for practice:

- add pop-up to page on time delay ✔️
- create form for user input, without default form behavior, with accessible labels ✔️
- gather form data ✔️
- create loading text ✔️
- create final destination text with optional laughing pirate ✔️
- disable close button until final destination loads ✔️
- switch Accept & Decline buttons on hover ✔️

*/

const modal = document.querySelector('.modal')
const modalCloseBtn = document.querySelector('#modal-close-btn')
const consentForm = document.querySelector('#consent-form')
const modalText = document.querySelector('#modal-text')
const modalBtns = document.querySelector('.modal-choice-btns')
const declineBtn = document.querySelector('#decline-btn')

setTimeout(()=> modal.style.display = "inline",
    1500
)

modalCloseBtn.addEventListener('click', ()=> modal.style.display = "none")

declineBtn.addEventListener('mouseenter', ()=>
    modalBtns.classList.toggle('reverse-btns')
)

consentForm.addEventListener('submit',
(e) => {e.preventDefault()
    
    const consentFormData = new FormData(consentForm)
    const name = consentFormData.get('fullName')

    modalText.innerHTML = `
        <div class="modal-inner-loading">
        <img src="images/loading.gif" class="loading">
        <p id="upload-text">Uploading your data to the dark web...</p>
        </div>
        `

    setTimeout(
        ()=> {document.querySelector('#upload-text').textContent = "Making the sale..."},
        2000
    )

    setTimeout(
        ()=> {
            document.querySelector('#modal-inner').innerHTML = `
            <div>
            <h2>Thanks, <span class="modal-display-name">${name}</span>, you sucker!</h2>
            <p>We've sold the rights to your eternal soul!</p>
            <img src="images/pirate-laughing.gif">
            </div>
            `
        modalCloseBtn.disabled = false
        },
        5000
    )


})





