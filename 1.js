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

var Person2 = function(){
    //有没有this很重要
    this.name ='Robot';
    height = 1;
    this.run = function () {
        alert(this.name + ' is running...' + 'age is ' + this.age);
    }
};

var xiaoming = {
    name: '小明'
};
xiaoming.__proto__ = Person;

var xiaoming2 = Object.create(Person);

var xiaoming3 = new Person2();
xiaoming3.age = 100;

function doClick4(){
    xiaoming3.name = "HELLO";
    xiaoming3.run();
    //alert(xiaoming3.name);
}

/**
 * CLICK5
 */
'use strict';
function Cat(name) {
    this.name = name;
}
Cat.prototype.say = function(){
    return 'Hello, ' + this.name + '!';
}


// var Cat = function(name){
//     this.name = name;
//     this.say = function(){
//         return 'Hello, ' + this.name + '!';
//     }
// }

function doClick5(){
    var kitty = new Cat('Kitty');
    var doraemon = new Cat('哆啦A梦');
    if (kitty && kitty.name === 'Kitty' && kitty.say && typeof kitty.say === 'function' && kitty.say() === 'Hello, Kitty!' && kitty.say === doraemon.say) {
        console.log('测试通过!');
    } else {
        console.log('测试失败!');
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var A = {
    name: '张三',
    describe: function () {
      alert('姓名：'+ this.name);
    }
  };
  
  var name = '李四';
  var f = A.describe;
  var f2 = Person.run;
  function doClick6(){
      f2();
      //xiaoming2.run();
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

function getLabelInfo(){
    var buttons = document.getElementsByName('button Name');

    buttons.forEach(function(button, i, list){
        button.onclick = function(){
            alert("hello");
        };  
    });


    for(i in buttons) {  
        // buttons[i].onclick = function(){
        //     alert("hello");
        // };  
    };  

    for (var i = 0; i < buttons.length; i++) {
        // buttons[i].onclick = function(){
        //     alert("hello");
        // };

        //buttons[i].removeEventListener('click',);
        // buttons[i].addEventListener('click',function(){
        //     alert(1);
        // });

        //IE
        // buttons[i].attachEvent('click',function(){
        // alert(2);
        // });
      }
}

function changeStyle(){
    var label = document.getElementById('label1');
    label.setAttribute(
        'style',
        'display:inline-block;border-style:double; color:red;'
      );
}