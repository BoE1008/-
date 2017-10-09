//改变history_1中li的背景
var history_1_ul = document.getElementById("history_1_ul");
var history_1_lis = history_1_ul.children;
for (var i = 0; i < history_1_lis.length; i++) {
    history_1_lis[i].onmouseover = function () {
        for (var i = 0; i < history_1_lis.length; i++) {
            history_1_lis[i].className = "";
        }
        this.className = "red";
    };
    history_1_lis[i].onmouseout = function () {
        this.className = "";
    };
}


//建筑图片的显示和屋顶图片的显示
var circle = document.getElementById("circle");
var pic = document.getElementById("pic");
window.onload = function () {
    animate(circle, {"width": 167, "height": 185}, function () {
        animate(pic, {"width": 940, "height": 549});
    });
};


var cp = document.getElementById("cp");
var fx = document.getElementById("fx");
var wd = document.getElementById("wd");
var dj = document.getElementById("dj");
var books = document.getElementById("books");
var book1 = books.children[0];
var book2 = books.children[1];
var book3 = books.children[2];
var book4 = books.children[3];
var book5 = books.children[4];
var book6 = books.children[5];
var book7 = books.children[6];
var book8 = books.children[7];
var ww = document.getElementById("ww");

//鼠标滚动动画出现效果
window.onscroll = function () {
    if (scroll().scrollTop >= 320 && scroll().scrollTop < 850) {
        animate(cp, {"width": 180, "height": 196});
    }
    else if (scroll().scrollTop >= 850 && scroll().scrollTop < 1600) {
        animate(fx, {"top": 370, "opacity": 1});
    }
    else if (scroll().scrollTop >= 1600 && scroll().scrollTop < 2000) {
        animate(book1, {"margin-top": 76, "opacity": 1});
        animate(book2, {"margin-top": 76, "opacity": 1});
        animate(book3, {"margin-top": 76, "opacity": 1});
        animate(book4, {"margin-top": 76, "opacity": 1});
        animate(book5, {"margin-top": 76, "opacity": 1});
        animate(book6, {"margin-top": 76, "opacity": 1});
        animate(book7, {"margin-top": 76, "opacity": 1});
        animate(book8, {"margin-top": 76, "opacity": 1});
        animate(wd, {"bottom": 0, "opacity": 1}, function () {
            animate(dj, {"bottom": 92, "opacity": 1});
        });
    }
    else if (scroll().scrollTop > 1850 && scroll().scrollTop < 2450) {
        $("#history").animate({
            width: "167px",
            height: "179px",
            marginTop: "80px",
            opacity: 1
        }, 1000);
    }
    else if(scroll().scrollTop >2630){
        animate(ww, {
            "width": 156,
            "height": 164,
            "marginLeft": 145,
            "marginTop": 66
        });
    }
    else {
        animate(cp, {"width": 0, "height": 0});
        animate(fx, {"top": 570, "opacity": 0});
        animate(wd, {"bottom": -240, "opacity": 0}, function () {
            animate(dj, {"bottom": -50, "opacity": 0});
        });
        //animate($("#history")[0], {"width": 0, "height": 0, "margin-top": 0, "opacity": 0});
        animate(book1, {"margin-top": 50, "opacity": 0});
        animate(book2, {"margin-top": 30, "opacity": 0});
        animate(book3, {"margin-top": 0, "opacity": 0});
        animate(book4, {"margin-top": -20, "opacity": 0});
        animate(book5, {"margin-top": -40, "opacity": 0});
        animate(book6, {"margin-top": -60, "opacity": 0});
        animate(book7, {"margin-top": -80, "opacity": 0});
        animate(book8, {"margin-top": -100, "opacity": 0});
        animate(ww, {
            "width": 0,
            "height": 0,
            "marginLeft": 0,
            "marginTop": 0
        });
    };
};

function scroll() {
    return {
        scrollTop: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        scrollLeft: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
};


//永固杯图片效果
var ygb = document.getElementById("ygb");
ygb.onmouseover = function () {
    this.style.backgroundSize = "100%";
};
ygb.onmouseout = function () {
    this.style.backgroundSize = "120%";
};

//釉型大瓶图片效果
var yxdp = document.getElementById("yxdp");
yxdp.onmouseover = function () {
    this.style.backgroundSize = "100%";
};
yxdp.onmouseout = function () {
    this.style.backgroundSize = "120%";
};


//历史图片旋转
$(function () {
    $("#h_ul>li").mouseover(function () {
        $(this).rotate({animateTo: 90});
    });
    $("#h_ul>li").mouseout(function () {
        $(this).rotate({animateTo: 0});
    });
});


//导航栏经过显示,离开隐藏开始
var show = document.getElementById("show");
var t_box = document.getElementById("t_box");
show.onmouseover = function () {
    t_box.style.display = "block";
};
t_box.onmouseover = function () {
    t_box.style.display = "block";
};
show.onmouseout = function () {
    t_box.style.display = "none";
};
t_box.onmouseout = function () {
    t_box.style.display = "none";
};
//导航栏经过显示,离开隐藏结束
var box = document.getElementById("spi_box");
var screen = box.children[0];
var ul = screen.children[0];
var ulLis = ul.children;
var imgWidth = screen.offsetWidth;
var dian = document.getElementById("dian");
var d_left = document.getElementById("d_left");
var d_right = document.getElementById("d_right");

var firstImg = ulLis[0].cloneNode(true);
ul.appendChild(firstImg);

box.onmouseover = function () {
    clearInterval(timer);//停止自动播放
};
box.onmouseout = function () {
    timer = setInterval(d_right.onclick, 2000);//从新自动播放
};

var pic_1 = 0;
d_right.onclick = function () {
    if (pic_1 === ulLis.length - 1) {
        ul.style.left = 0 + "px";
        pic_1 = 0;
    }
    pic_1++;
    var target = -pic_1 * imgWidth;
    animate_1(ul, target);

};


d_left.onclick = function () {
    if (pic_1 === 0) {
        ul.style.left = -(ulLis.length - 1) * imgWidth + "px";
        pic_1 = ulLis.length - 1
    }
    pic_1--;
    var target = -pic_1 * imgWidth;
    animate_1(ul, target);
};


timer = setInterval(d_right.onclick, 1500);//自动播放


function animate_1(obj, target) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var leader = obj.offsetLeft;
        var step = 30;
        step = leader < target ? step : -step;//step有了正负
        if (Math.abs(leader - target) >= Math.abs(step)) {
            leader = leader + step;
            obj.style.left = leader + "px";
        } else {
            obj.style.left = target + "px";//手动放到终点
            clearInterval(obj.timer);
        }
    }, 15);
}


