
const multiselect = document.querySelector('.multiselect')
// console.log(multiselect);
const dropdownHead = multiselect.querySelectorAll('input[type="text"]')[0]
// console.log(dropdownHead)
const dropdownBody = document.querySelector(".dropdown-body")
// console.log(dropdownBody);
const checkboxes = dropdownBody.querySelectorAll('input[type="checkbox"]')


let currentValue = []
let storeData = []
function hideDropDown() {
    dropdownBody.style.display = 'none'
}
function removeDuplicates(arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}


function expand() {
    dropdownHead.style.focus = 'none'

    let readonly = multiselect.getAttribute('readonly')
    if (readonly === 'true') {
        hideDropDown()
        multiselect.setAttribute('readonly', "false")

    } else {

        dropdownBody.style.display = 'flex'
        checkboxes.forEach((checkbox) => {
            checkbox.addEventListener('change', () => {
                if (checkbox.checked) {
                    
                    // console.log(checkbox.value);
                    currentValue.push(checkbox.value)
                    
                    
                } else {
                    let index = currentValue.indexOf(checkbox.value)
                    if (index > -1) {
                        currentValue.splice(index, 1)
                    }
                }
                currentValue = removeDuplicates(currentValue)
                let displayValue = currentValue.join(', ')
                dropdownHead.setAttribute('placeholder', displayValue)
                console.log(currentValue);
            })
        })
        multiselect.setAttribute('readonly', "true")
    }
}





