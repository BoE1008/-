//content1 begin
window.onload = function () {
    /* 导航杭栏 start */
    var navChild = document.getElementsByClassName("child");
    var navCenter = document.getElementById("navCenter");
    var navCenterLi = navCenter.children;
    var b=navCenter.getElementsByTagName("b");
    var loginbox = document.getElementById("loginbox");
    for (var i = 0; i < navCenterLi.length; i++) {
        navCenterLi[i].index = i;
        navCenterLi[i].onmouseover = function () {
            for (var i = 0; i < navCenterLi.length; i++) {
                navCenterLi[i].children[1].style.visibility = "hidden";
                navChild[i].style.display = "none";
                b[this.index].style.display="none";
            }
            this.firstElementChild.style.color = "#765632";
            this.children[1].style.visibility = "visible";
            navChild[this.index].style.display = "block";
            b[this.index].style.display="none";
        };
        navCenterLi[i].onmouseout = function () {
            for (var i = 0; i < navCenterLi.length; i++) {
                navCenterLi[i].children[1].style.visibility = "hidden";
                navChild[i].style.display = "none";
                b[this.index].style.display="none";

            }
            navCenterLi[this.index].children[1].style.visibility = "visible";
            this.visibility="hidden"
            this.firstElementChild.style.color = "#707070";
            b[this.index].style.display="none";

        };
        navChild[i].onmouseover = function () {
            for (var i = 0; i < navChild.length; i++) {
                this.style.display = "block";
                b[i].style.display="none";
            }
        };
        navChild[i].onmouseout = function () {
            this.style.display = "none";
            b[i].style.display="none";
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

    var person = document.getElementsByClassName("person");
    var personOver = document.getElementById("personOver")
    var personOver1 = document.getElementById("personOver1")
    var personOver2 = document.getElementById("personOver2")
    var personOver3 = document.getElementById("personOver3")

    personOver.onmouseover = function over() {
        var hr = this.children[1];
        var tit2 = this.children[2];
        var personImg = this.children[3].children[0];
        hr.style.animation="myfirst"+" "+"5s";
        tit2.style.animation= "mytwice"+" "+"3s";
        personImg.style.transform="scale(1.2)";
    }
    personOver.onmouseout = function out() {
        var hr = this.children[1];
        var tit2 =  this.children[2];
        var personImg =this.children[3].children[0];
        hr.style.backgroundColor ="";
        tit2.style.color = "";
        hr.style.animation="myfirst1"+" "+"5s";
        tit2.style.animation= "mytwice1"+" "+"5s";
        personImg.style.transform="scale(1)";
    }
    personOver1.onmouseover = function over() {
        var hr = this.children[1];
        var tit2 = this.children[2];
        var personImg = this.children[3].children[0];
        hr.style.animation="myfirst"+" "+"5s";
        tit2.style.animation= "mytwice"+" "+"3s";
        personImg.style.transform="scale(1.2)";
    }
    personOver1.onmouseout = function out() {
        var hr = this.children[1];
        var tit2 =  this.children[2];
        var personImg =this.children[3].children[0];
        hr.style.backgroundColor ="";
        tit2.style.color = "";
        hr.style.animation="myfirst1"+" "+"5s";
        tit2.style.animation= "mytwice1"+" "+"5s";
        personImg.style.transform="scale(1)";
    }
    personOver2.onmouseover = function over() {
        var hr = this.children[1];
        var tit2 = this.children[2];
        var personImg = this.children[3].children[0];
        hr.style.animation="myfirst"+" "+"5s";
        tit2.style.animation= "mytwice"+" "+"3s";
        personImg.style.transform="scale(1.2)";
    }
    personOver2.onmouseout = function out() {
        var hr = this.children[1];
        var tit2 =  this.children[2];
        var personImg =this.children[3].children[0];
        hr.style.backgroundColor ="";
        tit2.style.color = "";
        hr.style.animation="myfirst1"+" "+"5s";
        tit2.style.animation= "mytwice1"+" "+"5s";
        personImg.style.transform="scale(1)";
    }
    personOver3.onmouseover = function over() {
        var hr = this.children[1];
        var tit2 = this.children[2];
        var personImg = this.children[3].children[0];
        hr.style.animation="myfirst"+" "+"5s";
        tit2.style.animation= "mytwice"+" "+"3s";
        personImg.style.transform="scale(1.2)";
    }
    personOver3.onmouseout = function out() {
        var hr = this.children[1];
        var tit2 =  this.children[2];
        var personImg =this.children[3].children[0];
        hr.style.backgroundColor ="";
        tit2.style.color = "";
        hr.style.animation="myfirst1"+" "+"5s";
        tit2.style.animation= "mytwice1"+" "+"5s";
        personImg.style.transform="scale(1)";
    }
    var jyButton = document.getElementById("jy-button");
    jyButton.onmouseover=function(){
        var smallBlock=document.getElementById("smallBlock");
        smallBlock.style.animation="mybutton"+" "+"0.5s";
    }
    jyButton.onmouseout=function(){
        var smallBlock=document.getElementById("smallBlock");
        smallBlock.style.animation="mybutton1"+" "+"0.5s";
    }

    $(function(){
        $("#bird").animate({"opacity":0.8,"top":30,"right":200},2000,function(){
                    $("#bird").animate({"opacity":0,"top":100,"right":400},2000,function(){

                    })
                })
        $(document).scroll(function(){
            console.log($(this).scrollTop());
            if($(this).scrollTop()>=1200){
               $("#play1").animate({"opacity":1,"right":645},1300)
            }
            if($(this).scrollTop()>=1600){
               $("#play2").animate({"opacity":1,"top":130},1300)
            }
            if($(this).scrollTop()>=2000){
               $("#play3").animate({"opacity":1,"right":635},1300)
            }
            if($(this).scrollTop()>=2400){
               $("#play4").animate({"opacity":1,"width":400,"height":220},1200)
            }
            if($(this).scrollTop()>=2800){
                $("#girl").animate({"opacity":1,"left":0},2000)
            }
        })
    })
    $(function(){
        $(".jy-fang").click(function(){
            console.log($(".jy-fang"));
            $(".headerImg").css({"display":"block"});
        })
        $(".close").click(function(){
            $(".headerImg").css({"display":"none"});
        })
    })
    ////导航右边部分
    //var dlBtn = document.getElementById("dlBtn");
    //var dl = document.getElementById("dl");
    //dlBtn.onmouseover = function () {
    //    dl.style.display = "block";
    //}
    //dlBtn.onmouseout = function () {
    //    dl.style.display = "none";
    //}
    //
    //var langBtn = document.getElementById("langBtn");
    //var language = document.getElementById("language");
    //langBtn.onmouseover = function () {
    //    language.style.display = "block";
    //}
    //langBtn.onmouseout = function () {
    //    language.style.display = "none";
    //}
    //
    //var souBtn = document.getElementById("souBtn");
    //var sou = document.getElementById("sou");
    //var souSuo = document.getElementById("souSuo");
    //souBtn.onmouseover = function () {
    //    sou.style.display = "block";
    //}
    //souBtn.onmouseout = function () {
    //    sou.style.display = "none";
    //}
    //souSuo.onfocus = function () {
    //    if (this.value = "搜索关键词...") {
    //        this.value = "";
    //    }
    //}
    //souSuo.onblur = function () {
    //    if (this.value == "") {
    //        this.value = "搜索关键词...";
    //    }
    //}
    //
    ////导航下拉部分
    //var show = document.getElementById("show");
    //var nav_child = document.getElementById("nav_child");
    //var jy = document.getElementById("jy");
    //jy.onmouseover = function () {
    //    show.style.display = "block";
    //    nav_child.style.display = "block";
    //}
    //nav_child.onmouseover = function () {
    //    show.style.display = "block";
    //    nav_child.style.display = "block";
    //}
    //jy.onmouseout = function () {
    //    show.style.display = "none";
    //    nav_child.style.display = "none";
    //}
    //nav_child.onmouseout = function () {
    //    show.style.display = "none";
    //    nav_child.style.display = "none";
    //}


    //故宫文创儿童体验店

}

