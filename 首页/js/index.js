/**
 * Created by melissa on 2017/5/21.
 */
function animates(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var k in json) {
            if (k === "opacity") {
                var leader = getStyle(obj, k) * 100;
                var target = json[k] * 100;
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader / 100;
            } else if (k === "zIndex") {
                obj.style.zIndex = json[k];
            } else {
                var leader = parseInt(getStyle(obj, k)) || 0;
                var target = json[k];
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader + "px";
            }
            if (leader != target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        }
    }, 15);
}
function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj, null)[attr];
    } else {
        return obj.currentStyle[attr];
    }
}


window.onload = function () {

    /**
     *
     */
    /* 导航杭栏 start */
    var navChild = document.getElementsByClassName("child");
    var navCenter = document.getElementById("navCenter");
    var navCenterLi = navCenter.children;
    var loginbox = document.getElementById("loginbox");
    for (var i = 0; i < navCenterLi.length; i++) {
        navCenterLi[i].index = i;
        navCenterLi[i].onmouseover = function () {
            for (var i = 0; i < navCenterLi.length; i++) {
                navCenterLi[i].firstElementChild.style.color = "white";
                navCenterLi[i].children[1].style.visibility = "hidden";
                navChild[i].style.display = "none";
            }
            this.firstElementChild.style.color = "#765632";
            this.children[1].style.visibility = "visible";
            navChild[this.index].style.display = "block";
        };
        navCenterLi[i].onmouseout = function () {
            for (var i = 0; i < navCenterLi.length; i++) {
                navCenterLi[i].firstElementChild.style.color = "white";
                navCenterLi[i].children[1].style.visibility = "hidden";
                navChild[i].style.display = "none";
            }
            navCenterLi[this.index].children[1].style.visibility = "visible";
        };
        navChild[i].onmouseover = function () {
            for (var i = 0; i < navChild.length; i++) {
                this.style.display = "block";
            }
        };
        navChild[i].onmouseout = function () {
            this.style.display = "none";
        }
    }
    /**
     *
     * @type {Element}
     */
    var login = document.getElementById("login");
    var lang = document.getElementById("lang");
    var scBtn = document.getElementById("scBtn");
    var popWindow = document.getElementById("popWindow");
    var menutool = document.getElementById("menutool");
    showOrHid(login);
    showOrHid(lang);
    showOrHid(scBtn);
    function showOrHid(ele) {
        ele.onmouseover = function () {
            ele.children[1].style.display = "block";
        };
        ele.onmouseout = function () {
            ele.children[1].style.display = "none";
        };
    }

    menutool.onclick = function () {
        popWindow.style.display = "block";
    };
    var close = document.getElementById("close");
    close.onmouseover = function () {
        close.onclick = function () {
            popWindow.style.display = "none";
        };
    };

    var itemA = document.getElementsByClassName("itemA");
    for (var j = 0; j < itemA.length; j++) {
        itemA[j].onmouseover = function () {
            for (var i = 0; i < itemA.length; i++) {
                itemA[i].style.color = "#eaa1a1";
            }
            this.style.color = "#fff";
        };
        itemA[j].onmouseout = function () {
            this.style.color = "#eaa1a1";
        }
    }


    /**
     * 替换类名
     * @param ele
     * @param oldStr
     * @param newStr
     */
    //可以对任意对象的类名进行替换
    function replaceClassName(ele, oldStr, newStr) {
        ele.className = ele.className.replace(oldStr, newStr);
    }

    /* 导航栏部分 end */


    /* 春夏秋冬 变换特效 start */
    var season = document.getElementById("season");
    var seasonBtn = season.children;
    var gameImg = document.getElementsByClassName("gameImg");
    var cellectionL = document.getElementsByClassName("cellectionL")[0];
    var palaceGaeL = document.getElementsByClassName("palaceGaeL")[0];
    var notice = document.getElementsByClassName("notice ")[0];
    var top = document.getElementsByClassName("top")[0];
    var seasonImg = top.children;
    var cont=document.getElementsByClassName("cont")[0];
    for (var m = 0; m < seasonBtn.length; m++) {
        seasonBtn[m].index = m;
        seasonBtn[m].onclick = function () {
            cellectionL.style.backgroundImage = "url(images/home" + this.index + ".jpg)";
            palaceGaeL.style.backgroundImage = "url(images/h" + (this.index + 1) + (this.index + 1) + (this.index + 1) + ".jpg)";
            notice.style.backgroundImage = "url(images/chu" + (this.index + 1) + ".jpg)";
            cont.style.backgroundImage = "url(images/gg" + this.index + ".jpg)";
            for (var i = 0; i < seasonImg.length; i++) {
                seasonImg[i].style.backgroundImage = "url(images/"+this.index+this.index+"" + (i + 1) + ".jpg)";
            }
            for (var x = 0; x < gameImg.length; x++) {
                $(gameImg[x]).children().css("display", "none");
                gameImg[x].children[this.index].style.display = "block";
            }
        }
    }

    /* 春夏秋冬 变换特效 end */

    /*底部特效 start*/
    /**
     *
     * @type {Element}
     */
    var footer = document.getElementById("footer");
    var wrap = footer.children[0];
    var btns = wrap.children[3];
    var footerA = footer.getElementsByTagName("a");
    var propasal = footer.children[1];
    var wbWx = footer.children[0].children[0].children;
    var timer = null;
    for (var i = 0; i < footerA.length; i++) {
        footerA[i].onmouseover = function () {
            for (var i = 0; i < footerA.length; i++) {
                footerA[i].style.color = "white";
            }
            this.style.color = "#c4c4c4";
            propasal.style.bottom = "-60px";
        };
        footerA[i].onmouseout = function () {
            this.style.color = "white";
        };
    }
    for (var k = 0; k < wbWx.length; k++) {
        wbWx[k].onmouseover = function () {
            for (var j = 0; j < wbWx.length; j++) {
                wbWx[j].style.backgroundColor = "#404040";
            }
            this.style.backgroundColor = "#4c4c4c";
        };
        wbWx[k].onmouseout = function () {
            this.style.backgroundColor = "#404040";
        }
    }
    btns.onclick = function () {
        timer = animates(propasal, {"bottom": 0});
    };
    propasal.onmouseover = function () {
        propasal.style.bottom = 0;
    };
    propasal.onmouseout = function () {
        propasal.style.bottom = "-60px";
    };
    /*底部特效 end*/

    /*活动部分 START*/
    var palaceGaeR = document.getElementById("palaceGaeR");
    var palaceGaeRImg = palaceGaeR.children[0].children[0];
    palaceGaeR.onmouseover = function () {
        animates(palaceGaeRImg, {"width": "90%", "height": "90%"});
    };
    palaceGaeR.onmouseout = function () {
        animates(palaceGaeRImg, {"width": "100%", "height": "100%"});
    };
    /*活动部分 END*/

    /*鼠标进入盒子遮罩跟着进入 start*/
    var sHoverItem = document.getElementsByClassName('sHoverItem');
    var mask = document.getElementsByClassName('mask');
    for (var g = 0; g < sHoverItem.length; g++) {
        sHoverItem[g].index = g;
        var hoverDir = function (e) {
            var e = e || window.event;
            var w = sHoverItem[this.index].offsetWidth;
            var h = sHoverItem[this.index].offsetHeight;
            var top = sHoverItem[this.index].offsetTop;                    //包含滚动条滚动的部分
            var left = sHoverItem[this.index].offsetLeft;
            var scrollTOP = document.body.scrollTop || document.documentElement.scrollTop;
            var scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft;
            var offTop = top - scrollTOP;
            var offLeft = left - scrollLeft;
            //console.log(offTop+";"+offLeft)
            // e.pageX|| e.clientX;
            //pageX 是从页面0 0 点开始  clientX是当前可视区域0 0开始  即当有滚动条时clientX  小于  pageX
            //ie678不识别pageX
            //PageY=clientY+scrollTop-clientTop;页面上的位置=可视区域位置+页面滚动条切去高度-自身border高度
            var ex = (e.pageX - scrollLeft) || e.clientX;
            var ey = (e.pageY - scrollTOP) || e.clientY;
            var x = (ex - offLeft - w / 2) * (w > h ? (h / w) : 1);
            var y = (ey - offTop - h / 2) * (h > w ? (w / h) : 1);
            var direction = (Math.round((Math.atan2(y, x) * (180 / Math.PI) + 180) / 90) + 3) % 4; //atan2返回的是弧度 atan2(y,x)
            if (e.type == 'mouseover' || e.type == 'mouseenter') {
                switch (direction) {
                    case 0://from top
                        mask[this.index].style.left = 0;
                        mask[this.index].style.top = "-100%";
                        animates(mask[this.index], {"top": 0, "left": 0});
                        break;
                    case 1://from right
                        mask[this.index].style.left = "100%";
                        mask[this.index].style.top = "0";
                        animates(mask[this.index], {"top": 0, "left": 0});
                        break;
                    case 2://from bottom
                        mask[this.index].style.left = 0;
                        mask[this.index].style.top = "100%";
                        animates(mask[this.index], {"top": 0, "left": 0});
                        break;
                    case 3://from left
                        mask[this.index].style.left = "-100%";
                        mask[this.index].style.top = "0";
                        animates(mask[this.index], {"top": 0, "left": 0});
                        break;
                }
            }
            else if (e.type == 'mouseout' || e.type == 'mouseleave') {
                switch (direction) {
                    case 0://out top
                        animates(mask[this.index], {"top": -h, "left": 0});
                        break;
                    case 1://out right
                        animates(mask[this.index], {"top": 0, "left": w});
                        break;
                    case 2://out bottom
                        animates(mask[this.index], {"top": h, "left": 0});
                        break;
                    case 3://out left
                        animates(mask[this.index], {"top": 0, "left": -w});
                        break;
                }
            }
        };
        if (window.addEventListener) {
            sHoverItem[g].addEventListener('mouseenter', hoverDir, false);
            sHoverItem[g].addEventListener('mouseleave', hoverDir, false);
        }
        else if (window.attachEvent) {
            sHoverItem[g].attachEvent('onmouseenter', hoverDir);
            sHoverItem[g].attachEvent('onmouseleave', hoverDir);
        }
    }

    /*鼠标进入盒子遮罩跟着进入 end*/


    /* 鼠标移动到“更多” start */
    $(".link").mouseenter(function(){
       $(this).animate({"fontSize":"20px","color":"#66666"});
    }).mouseleave(function(){
        $(this).css("fontSize","16px");
    });

    /* 鼠标移动到“更多” end */


    /**
     * Created by Administrator on 2017/5/21 0021.
     */
    /*banner部分js*/
//获取对象
    var banner = document.getElementById("banner");
    var focus = document.getElementById("focus");
    var focusUl = focus.children[0];
    var focusLis = focusUl.children;
    var navIcons = focus.children[1].children;
    var prev = document.getElementById("arrLeft");
    var next = document.getElementById("arrRight");


//为banner 设值图片路径
    for (var i = 0; i < focusLis.length; i++) {
        focusLis[i].children[0].style.backgroundImage = "url(xu_images/banner0" + (i + 1) + ".jpg)";
    }

    var liIndex = 1;
    var pic=0;
//nav icon 按钮 点击事件注册
    navIcons[0].className = "now";
    for (var nav_i = 0; nav_i < navIcons.length; nav_i++) {
        navIcons[nav_i].index = nav_i;
        navIcons[nav_i].onclick = function () {
            for (var i = 0; i < navIcons.length; i++) {
                navIcons[i].className = "";

            }
            this.className = "now";
            /*操作显示图片*/
            //1先把所有的类名清除， 2把上一次的liIndex的添加test类名 ，3把当前的显示出来f-zindex类名。
            //pic与this.index对应， liIndex 与pic对应
            // liIndex 1234   pic 0123 this.index 0123;
            $("#focus>ul>li").removeClass("test f-zindex");
            $("#playli"+liIndex).addClass("test");
            $("#playli"+(this.index+ 1)).addClass("f-zindex");
            liIndex=this.index+1;
            pic=this.index;

        }
    }


//初始化图片的属性配置
//箭头移入移出事件

    prev.onmouseover = function () {
        animates(prev.children[0], {"opacity": 1});
    };
    next.onmouseover = function () {
        animates(next.children[0], {"opacity": 1});

    };
    prev.onmouseout = function () {
        animates(prev.children[0], {"opacity": 0});
    };
    next.onmouseout = function () {
        animates(next.children[0], {"opacity": 0});
    };

    /*自动播放*/
    setInterval(function(){
        displayGo("#playli");
        $("#focus>.nav>i").removeClass("now");
        $("#focus>.nav>i:eq("+pic+")").addClass("now");
    },3000);

//轮播
    $(prev).click(function () {
        displayBack("#playli");
        $("#focus>.nav>i").removeClass("now");
        $("#focus>.nav>i:eq("+pic+")").addClass("now");
    });
    $(next).click(function () {
        displayGo("#playli");
        $("#focus>.nav>i").removeClass("now");
        $("#focus>.nav>i:eq("+pic+")").addClass("now");

    });

    function displayBack(ele) {
        $("#focus>ul>li").removeClass("test f-zindex");
        $(ele + liIndex).addClass("test");
        if (liIndex == 1) {
            liIndex = 5
        }
        $(ele + (liIndex - 1)).addClass("f-zindex");
        liIndex--;
        pic=liIndex-1;

    }
    function displayGo(ele) {
        $("#focus>ul>li").removeClass("test f-zindex");
        $(ele + liIndex).addClass("test");
        if (liIndex == 4) {
            liIndex = 0
        }
        $(ele + (liIndex + 1)).addClass("f-zindex");
        liIndex++;
        pic=liIndex-1;
    }

    /*banner 结束*/


    /*右侧sliedbar开始*/

    var slideBar = document.getElementById("slidebar");
    var slideUl = document.getElementById("slideUl");
    var slideLis = slideUl.children;
    var slideGoto = slideBar.firstElementChild;
    var slideClose = slideBar.lastElementChild;
    var ulHeight = null;

    var openTime = document.getElementById("opentime");        //offsetParent是right
    var contRight = opentime.parentNode.parentNode.parentNode;  //offsetParent是是body
    var openUl = openTime.children[0];
    var openLis = openUl.children;
    var openLiWidth = openLis[0].offsetWidth;
    var num1 = 0;
    var num2 = 0;
    var timerm = null;
    var cellNum = document.getElementById("cellNum");
    var flaggle = true;
    /*滚动栏到相应位置，侧边栏出现，或消失*/
    $(".palaceGaeL").slideUp();
    $(".palaceGaeR").slideUp();
    window.onscroll = function () {
        var bodyH = document.body.offsetHeight;
        if (window.pageYOffset > bodyH / 2) {
            clearInterval(timerm);
            if (flaggle) {
                timerm = setInterval(function () {
                    num1 = num1 + 2;
                    num2 = num2 + 3;
                    cellNum.innerText = 01 + "," + num1 + "," + num2;
                    if (num1 > 862 || num2 > 690) {
                        clearInterval(timerm);
                        flaggle = false;
                    }
                }, 1);
            }

            slideBar.style.display = "block";
            if (ulHeight == null) {
                ulHeight = slideUl.offsetHeight; //如果为ulHeight赋了值，不择不再改变他
            }

        }
        else if (window.pageYOffset > bodyH / 3) {
            $(".palaceGaeL").slideDown(5000);
            $(".palaceGaeR").slideDown(5000);
        }
        else {
            slideBar.style.display = "none";
        }
        //时间弹出来
        if (window.pageYOffset > contRight.offsetTop) {
            for (var i = 0; i < openLis.length; i++) {

                animates(openLis[i], {"left": openLiWidth * i});
            }
        }
        //xContent的内容向上弹出
        if (window.pageYOffset > $("#xContent")[0].offsetTop / 4) {
            console.log(111);
            $("#xContent>div>div").animate({top: '0'}, 2000);
        }

    };
    $("#xContent .globe").animate({left: 1000}, 2000, function () {
        $("#xContent .globe").animate({left: 0}, 5000);
    });
    /*单击慢慢回到顶部*/
    slideGoto.onclick = function () {
        scrollTopTo(document.body, 0);
    };
    /*缩短侧边栏*/
    slideUl.flag = true;   //记录单击close时的状态
    slideClose.onclick = function () {
        if (slideUl.flag) {
            animates(slideUl, {"height": 0}, function () {
                slideUl.style.display = "none";
            });
            slideUl.style.overflow = "hidden";
            slideClose.className = "closeup";
        } else {
            animates(slideUl, {"height": ulHeight}, function () {
                slideUl.style.overflow = "visible";
            });
            slideUl.style.display = "block";
            slideClose.className = "close";
        }
        slideUl.flag = !slideUl.flag;
    };
    /*显示侧边栏鼠标移动到上面显示数据*/
    for (var ci = 0; ci < slideLis.length; ci++) {
        slideLis[ci].children[0].firstElementChild.style.padding = "3px";
        slideLis[ci].children[0].lastElementChild.style.display = "none";

        for (var j = 0; j < slideLis.length; j++) {
            slideLis[j].onmouseover = function (event) {
                this.children[0].firstElementChild.style.display = "none";
                this.children[0].lastElementChild.style.display = "block";
                this.children[0].style.backgroundColor = "#977343";
            }
        }
        for (var ii = 0; ii < slideLis.length; ii++) {
            slideLis[ii].onmouseout = function (event) {
                this.children[0].firstElementChild.style.display = "block";
                this.children[0].lastElementChild.style.display = "none";
                this.children[0].style.backgroundColor = null;
            }
        }

    }

    /*右侧sliedbar结束*/
    /*更多龙旋转 开始*/
    var drags = document.getElementsByClassName("drag");
    for (var drI = 0; drI < drags.length; drI++) {
        drags[drI].onmouseover = function () {
            this.style.animationPlayState = "paused";
        };
        drags[drI].onmouseout = function () {
            this.style.animationPlayState = "running";
        };

    }
    /*更多龙旋转 结束*/

    $("#xMap").mouseover(function () {
        $(this).find("img").css({"transform": "scale(1,1)"}).css("transition", "transform 0.5s linear");
    }).mouseout(function () {
        $(this).find("img").css({"transform": "scale(1.2,1.2)"}).css("transition", "transform 0.5s linear");

    });
    /*故宫map放大 结束*/

    /**
     *
     * @param obj
     * @param target
     */
    function scrollTopTo(obj, target) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var leader = obj.scrollTop;
            var step = (target - leader) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            leader = leader + step;
            obj.scrollTop = leader;
            if (leader === target) {
                console.log(leader);
                clearInterval(obj.timer);
            }
        }, 15);
    }
};
