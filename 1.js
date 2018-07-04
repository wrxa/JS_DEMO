function doClick(){
    //alert('Hello, world');
    name = $('#button1')[0].name;
    alert(name);
    top:
    for (var i = 0; i < 3; i++){
        for (var j = 0; j < 3; j++){
            if (i === 1 && j === 1){
                break top;   
            } 
            console.log('i=' + i + ', j=' + j);
        }
    }
}

function doClick2(){
    //alert('Hello, world');
    name = $('#button1')[0].name;
    alert(4 - '3');
}

//
var Person = {
    name: 'Robot',
    height: 1.6,
    run: function () {
        alert(this.name + ' is running...');
    }
};

var xiaoming = {
    name: '小明'
};

xiaoming.__proto__ = Person;

var xiaoming2 = Object.create(Person);

function doClick4(){
    xiaoming2.name = "大黑";
    xiaoming2.run();
}

function doClick3(){
    // 选择<p>JavaScript</p>:
    var js = document.querySelector('#test-p');

    // 选择<p>Python</p>,<p>Ruby</p>,<p>Swift</p>:
    var arr = document.getElementsByClassName("c-red c-green")[0].children;

    // 选择<p>Haskell</p>:
    var haskell = document.getElementsByClassName("c-green")[0].children;

    // 测试:
    if (!js || js.innerText !== 'JavaScript') {
        alert('选择JavaScript失败!');
    } else if (!arr || arr.length !== 3 || !arr[0] || !arr[1] || !arr[2] || arr[0].innerText !== 'Python' || arr[1].innerText !== 'Ruby' || arr[2].innerText !== 'Swift') {
        alert('选择Python,Ruby,Swift失败!');
    } else if (!haskell || haskell.innerText !== 'Haskell') {
        alert('选择Haskell失败!');
    } else {
        alert('测试通过!');
    }
}