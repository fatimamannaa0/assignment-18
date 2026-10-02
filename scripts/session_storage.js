const add_button = document.getElementById("add_button");
const get_button = document.getElementById("get_button");
const delete_button_1 = document.getElementById("delete_button_1");
const delete_button_2 = document.getElementById("delete_button_2");
const clear_button = document.getElementById("clear_button");


const addToStorage = () => {
    sessionStorage.setItem("key_1","value_1");
    sessionStorage.setItem("key_2","value_2");
};

const showFromStorage = () => {
    console.log(sessionStorage.getItem("key_1"));
    console.log(sessionStorage.getItem("key_2"));
};

const removeFromStorage1 = () => {
    sessionStorage.removeItem("key_1");    
};

const removeFromStorage2 = () => {
    sessionStorage.removeItem("key_2");
};

const clearStorage = () => {
    sessionStorage.clear();
};

add_button.addEventListener("click", addToStorage);
get_button.addEventListener("click", showFromStorage);
delete_button_1.addEventListener("click", removeFromStorage1);
delete_button_2.addEventListener("click", removeFromStorage2);
clear_button.addEventListener("click", clearStorage);