window.addEventListener("load", () => {
    console.log("landing-page.js loaded");
    let wordElements = new Array(
        { ele: document.getElementById("web-word"), col:0, row:0},              //0
        { ele: document.getElementById("software-word"), col:0, row:0},         //1
        { ele: document.getElementById("front-end-word"), col:0, row:0},        //2
        { ele: document.getElementById("back-end-word"), col:0, row:0},         //3
        { ele: document.getElementById("database-word"), col:0, row:0},         //4
        { ele: document.getElementById("game-word"), col:0, row:0},             //5
        { ele: document.getElementById("developer-word"), col:0, row:0},        //6
        { ele: document.getElementById("designer-word"), col:0, row:0},         //7
        { ele: document.getElementById("manager-word"), col:0, row:0},          //8
        { ele: document.getElementById("writer-word"), col:0, row:0},           //9
        { ele: document.getElementById("programmer-word"), col:0, row:0},       //10
        { ele: document.getElementById("project-word"), col:0, row:0},          //11
        { ele: document.getElementById("html-word"), col:0, row:0},             //12
        { ele: document.getElementById("css-word"), col:0, row:0},              //13
        { ele: document.getElementById("javascript-word"), col:0, row:0},       //14
        { ele: document.getElementById("sql-word"), col:0, row:0},              //15
        { ele: document.getElementById("csharp-word"), col:0, row:0},           //16
        { ele: document.getElementById("typescript-word"), col:0, row:0},       //17
        { ele: document.getElementById("c-word"), col:0, row:0},                //18
        { ele: document.getElementById("cplusplus-word"), col:0, row:0},        //19
        { ele: document.getElementById("dotnet-word"), col:0, row:0},           //20
        { ele: document.getElementById("angular-word"), col:0, row:0},          //21
        { ele: document.getElementById("php-word"), col:0, row:0},              //22
        { ele: document.getElementById("administrator-word"), col:0, row:0}     //23
    );
    let columns = 2;
    let columnWidth = (100/columns).toFixed(2);
    let rows = wordElements.length / columns;
    let rowHeight = (100/rows).toFixed(2);
    let firstWord = 12;
    let secondWord = 13;
    let firstLocation = {col:0, row:0};
    let secondLocation = {col:0, row:0};
    
    let wordSet = new Array(
        {a:0,b:6},
        {a:1,b:6},
        {a:2,b:6},
        {a:3,b:6},
        {a:5,b:6},
        {a:15,b:6},
        {a:20,b:6},
        {a:21,b:6},
        {a:0,b:7},
        {a:5,b:7},
        {a:11,b:8},
        {a:5,b:9},
        {a:4,b:23},
        {a:12,b:10},
        {a:13,b:10},
        {a:14,b:10},
        {a:16,b:10},
        {a:17,b:10},
        {a:18,b:10},
        {a:19,b:10},
        {a:22,b:10}
    )

    for(i=0;i<wordElements.length;i++){
        let col=i%columns;
        let row=Math.floor(i/columns);

        if(i == firstWord) {
            firstLocation.col = col;
            firstLocation.row = row;
        }

        if(i == secondWord) {
            secondLocation.col = col;
            secondLocation.row = row;
        }

        wordElements[i].col = col;
        wordElements[i].row = row;
        wordElements[i].ele.style.top = `${wordElements[i].row*rowHeight}%`;
        if (wordElements[i].col%columns != 0) {
            wordElements[i].ele.style.left = `${wordElements[i].col*columnWidth}%`;
        } else {
            wordElements[i].ele.style.left = `calc(${columnWidth}% - ${wordElements[i].ele.offsetWidth}px)`;
        }

    }

    function SwapWords(number1, number2) {
        let placeHolder1 = { col:0, row:0};
        let placeHolder2 = { col:0, row:0};

        if ( number1 != firstWord && number2 != secondWord ) {
            placeHolder1.col = wordElements[number2].col;
            placeHolder1.row = wordElements[number2].row;
            placeHolder2.col = wordElements[number1].col;
            placeHolder2.row = wordElements[number1].row;
        } else {
            placeHolder1.col = wordElements[number1].col;
            placeHolder1.row = wordElements[number1].row;
            placeHolder2.col = wordElements[number2].col;
            placeHolder2.row = wordElements[number2].row;
        }

        if(number1 != firstWord) {
            wordElements[firstWord].ele.classList.remove("featured");
            console.log(wordElements[number1].ele.offsetWidth);
            wordElements[number1].ele.classList.add("featured");
            console.log(wordElements[number1].ele.offsetWidth);
            wordElements[number1].col = firstLocation.col;
            wordElements[number1].row = firstLocation.row;
            wordElements[number1].ele.style.top = `${wordElements[number1].row*rowHeight}%`;
            wordElements[number1].ele.style.left = `calc(${columnWidth}% - ${wordElements[number1].ele.offsetWidth}px)`;
            wordElements[firstWord].col = placeHolder1.col;
            wordElements[firstWord].row = placeHolder1.row;
            wordElements[firstWord].ele.style.top = `${wordElements[firstWord].row*rowHeight}%`;
            if (wordElements[firstWord].col%columns != 0) {
                wordElements[firstWord].ele.style.left = `${wordElements[firstWord].col*columnWidth}%`;
            } else {
                wordElements[firstWord].ele.style.left = `calc(${columnWidth}% - ${wordElements[firstWord].ele.offsetWidth}px)`;
            }
            firstWord = number1;
            console.log(wordElements[number1].ele.offsetWidth);
        }
        console.log(wordElements[number1].ele.offsetWidth);


        if(number2 != secondWord) {
            wordElements[secondWord].ele.classList.remove("featured");
            wordElements[number2].ele.classList.add("featured");
            wordElements[number2].col = secondLocation.col;
            wordElements[number2].row = secondLocation.row;
            wordElements[number2].ele.style.top = `${wordElements[number2].row*rowHeight}%`;
            wordElements[number2].ele.style.left = `${wordElements[number2].col*columnWidth}%`;
            wordElements[secondWord].col = placeHolder2.col;
            wordElements[secondWord].row = placeHolder2.row;
            wordElements[secondWord].ele.style.top = `${wordElements[secondWord].row*rowHeight}%`;
            if (wordElements[secondWord].col%columns != 0) {
                wordElements[secondWord].ele.style.left = `${wordElements[secondWord].col*columnWidth}%`;
            } else {
                wordElements[secondWord].ele.style.left = `calc(${columnWidth}% - ${wordElements[secondWord].ele.offsetWidth}px)`;
            }
            secondWord = number2;
        }
    }

    setTimeout(SwapWords.bind(null,1,6),500);
    setTimeout(checkWidth,600);

    function checkWidth() {
        console.log(wordElements[1].ele.offsetWidth);
    }
    
    function rotateWords() {
        let index = Math.floor(Math.random()*wordSet.length);
        SwapWords(wordSet[index].a,wordSet[index].b);
    }

    setTimeout(setInterval.bind(null, rotateWords, 2500), 3000);
});