const add_button = document.getElementById("add_button");
const get_button_1 = document.getElementById("get_button_1");
const delete_button_1 = document.getElementById("delete_button_1");
const delete_button_2 = document.getElementById("delete_button_2");
const get_button_2 = document.getElementById("get_button_2");


const showFromStorage = (key) => {
    const cookies = decodeURIComponent(document.cookie);
    const array = cookies.split("; ");
    const index = array.findIndex((element) => element.split("=")[0] === key);
    let value;
    if (!((array.length == 1 && array[0] == "") || index == -1))
        value = array[index].split("=")[1];
    else value = "";
    return value;
};


const addToStorage = () => {
    const sevenDays = 60 * 60 * 24 * 7;
    document.cookie = `key_1=value_1; max-age=${sevenDays}`;
    document.cookie = `key_2=value_2; max-age=${sevenDays}`;
};

const removeFromStorage1 = () => {
    document.cookie = `key_1=null; max-age=${0}`;
};

const removeFromStorage2 = () => {
    document.cookie = `key_2=null; max-age=${0}`;
}; 

add_button.addEventListener("click",addToStorage);

get_button_1.addEventListener("click",() => {
    console.log(showFromStorage("key_1"));
});

get_button_2.addEventListener("click",() => {
    console.log(showFromStorage("key_2"));
});

delete_button_1.addEventListener("click",removeFromStorage1);

delete_button_2.addEventListener("click",removeFromStorage2);