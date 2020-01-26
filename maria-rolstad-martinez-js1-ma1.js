// JavaScript 1 - Module 1 Assignment


// question 1

const cat = {
    complain: function () {
        console.log("Meow!");
    }
};

// question 2

const heading = document.querySelector("h3");

// question 3

heading.style.fontsize = "2em";

// question 4
heading.classList.add("subheading");

// question 5
const paragraphs = document.querySelectorAll("p");

// question 6

const resultsContainer = document.querySelector("div");
resultsContainer.innerHTML = "<p>New paragraph</>";

// question 7

const cats = [
    {
        name: "Blob",
        age: 10

    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function catNames(catArray) {
    for (let i = 0; i < catArray.length; i++) {
        console.log(catArray[i].name);
    }
}

catNames(cats);

// question 8

function catNames(catArray) {
    let catNamesh5 = "";

    for (let i = 0; i < catArray.length; i++) {
        catNamesh5 += `<h5>${catArray[i].name}</h5>`;
    }

    return catNamesh5;
}

// question 9

resultContainer.innerHTML = catNames(cats);

// question 10

function catNames(catArray) {
    let htmlCats = "";

    for (let i = 0; i < catArray.length; i++) {

        let age = "Age unkown";

        if (catArray[i].age) {
            age = catArray;
        }
    }

    htmlCats += `<div>
                 <h5>${catArray[i].name}</h5>
                 <p>${age}</p>
                 </div>`;
}

consolge.log(htmlCats);

return htmlCats;

}