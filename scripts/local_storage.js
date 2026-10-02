const add_button = document.getElementById("add_button");
const get_button = document.getElementById("get_button");
const delete_button_1 = document.getElementById("delete_button_1");
const delete_button_2 = document.getElementById("delete_button_2");
const clear_button = document.getElementById("clear_button");


const addToStorage = () => {
    localStorage.setItem("key_1","value_1");
    localStorage.setItem("key_2","value_2");
};

const showFromStorage = () => {
    console.log(localStorage.getItem("key_1"));
    console.log(localStorage.getItem("key_2"));
};

const removeFromStorage1 = () => {
    localStorage.removeItem("key_1");    
};

const removeFromStorage2 = () => {
    localStorage.removeItem("key_2");
};

const clearStorage = () => {
    localStorage.clear();
};

add_button.addEventListener("click", addToStorage);
get_button.addEventListener("click", showFromStorage);
delete_button_1.addEventListener("click", removeFromStorage1);
delete_button_2.addEventListener("click", removeFromStorage2);
clear_button.addEventListener("click", clearStorage);