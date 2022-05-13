const contacts = document.querySelector(".contacts");
const stickyHeader = document.querySelector(".stickyHeader");
const items = contacts.getElementsByClassName("contact");
let count = 3;

function addContacts(init) {
  if (init){
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < 50; i++) {
      const child = document.createElement("div");
      child.textContent = i;
      child.classList.add("contact");
      fragment.appendChild(child);
    }
    contacts.appendChild(fragment);
  } else{
    for (let i = 0; i < 50; i++) {
      const child = document.createElement("div");
      child.textContent = contacts.childElementCount + 1;
      child.classList.add("contact");
      contacts.appendChild(child);  
    } 
  }
}

contacts.addEventListener("scroll", (e) => {
  const topItemIndex = Math.round(contacts.scrollTop / 20);
  stickyHeader.textContent = items[topItemIndex].textContent;
  if (count > 0){
    count--;
  } else{
    count = 3;
    addContacts(false);
  }
});

addContacts(true);