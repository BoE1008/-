/**
 * Created by Jayce_ on 2017/5/21.
 */
/*���� -----B*/
window.onload = function () {
    var s_box = document.getElementById("s_box");
    var show = document.getElementById("show");
    show.onmouseover = function () {
        s_box.style.display = "block";
    };
    s_box.onmouseover = function () {
        s_box.style.display = "block";
    };
    show.onmouseout = function () {
        s_box.style.display = "none";
    };
    s_box.onmouseout = function () {
        s_box.style.display = "none";
    };


    $(function () {
        $("#lang").mouseover(function () {
            $(".language").css("display", "block");
        });

        $("#lang").mouseout(function () {
            $(".language").css("display", "none");
        })

        $("#looFor").mouseover(function () {
            $(".search").css("display", "block");
        });

        $("#looFor").mouseout(function () {
            $(".search").css("display", "none");
        })


        var popWindow = document.getElementById("popWindow");
        var menutool = document.getElementById("menutool");
        menutool.onclick = function () {
            popWindow.style.display = "block";
        };
        var close = document.getElementById("close");
        close.onmouseover = function () {
            close.onclick = function () {
                popWindow.style.display = "none";
            };
        };

    });
    /*����------ E*/

    /*�ֲ�ͼ -----B*/
    var timer = null;
    var box = document.getElementById("box");
    var anniu = document.getElementById("anniu");
    var anniuS = document.getElementById("anniuS");
    var a_left = document.getElementById("a_left");
    var a_middle = document.getElementById("a_middle");
    var a_right = document.getElementById("a_right");
    var screen = box.children[0];
    var ul = screen.children[0];
    var ulLis = ul.children;
    var imgWidth = screen.offsetWidth;

    var allAnniu = anniuS.children; //���еİ�ť
    allAnniu[0].className = "current";

    var firstImg = ulLis[0].cloneNode(true);
    ul.appendChild(firstImg);    //��¡��һ��ͼ�����


    for (var j = 0; j < allAnniu.length; j++) {
        allAnniu[j].index = j;
        allAnniu[j].onclick = function () {
            //��ť����
            //�ɵ�������
            for (var k = 0; k < allAnniu.length; k++) {
                console.log(allAnniu[k].children[0]);
                allAnniu[k].children[0].style.background = "url(images/dian2.png) no-repeat left"
            }
            //�������Լ�
            console.log("this" + this.children[0]);
            this.children[0].style.background = "url(images/dian2.png) no-repeat right";
            //���������� ͨ�����������ƶ�ul
            //ͼƬ�ƶ���λ�� �� ��ǰ��ť������ �� ͼƬ����й� �����Ǹ���
            var target = -this.index * imgWidth;
            animate(ul, target);
        }
    }

    var pic = 0;
    var square = 0;
    timer = setInterval(function () {
        //���ж� ��������һ��ͼƬ ����ul˲�����Ὺʼλ�� Ȼ������ҲҪ����
        if (pic === ulLis.length - 1) {
            ul.style.left = 0 + "px";
            pic = 0;//����ҲҪ����
        }
        pic++;//�������Ҫ��ʾ��ͼƬ������
        //Ŀ�� ��pic�й� �� ͼƬ����й� �����Ǹ���
        var target = -pic * imgWidth;
        animate(ul, target);
        //��ťҲҪ������
        if (square < ulLis.length - 1) {
            square++;
        } else {
            square = 0;
        }
        //�ɵ�������
        for (var i = 0; i < ulLis.length; i++) {
            ulLis[i].className = "";
        }
        //���¶�Ӧ��
        ulLis[square].className = "current";
    }, 3000);//�Զ�����


    screen.onmouseover = function () {
        clearInterval(timer);//ֹͣ�Զ�����
    };
    screen.onmouseout = function () {
        timer = setInterval(function () {
            if (pic === ulLis.length - 1) {
                ul.style.left = 0 + "px";
                pic = 0;
            }
            pic++;
            var target = -pic * imgWidth;
            animate(ul, target);
            if (square < ulLis.length - 1) {
                square++;
            } else {
                square = 0;
            }
            for (var i = 0; i < ulLis.length; i++) {
                ulLis[i].className = "";
            }
            ulLis[square].className = "current";
        }, 3000);
    };

    function animate(obj, target) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var leader = obj.offsetLeft;
            var step = 30;
            step = leader < target ? step : -step;//step��������
            if (Math.abs(leader - target) >= Math.abs(step)) {
                leader = leader + step;
                obj.style.left = leader + "px";
            } else {
                obj.style.left = target + "px";//�ֶ��ŵ��յ�
                clearInterval(obj.timer);
            }
        }, 20);
    }

    /*�ֲ�ͼ------E*/

    /*list--------B*/
    $(function () {
        $(".num1").click(function () {
            $(this).addClass("circle").nextAll().removeClass("circle");
            $(".one").css("display","block");
            $(".two,.three").css("display","none");
        });

        $(".num2").click(function () {
            $(this).addClass("circle").prev().removeClass("circle").end().next().removeClass("circle");
            $(".two").css("display","block");
            $(".one,.three").css("display","none");
        });

        $(".num3").click(function () {
            $(this).addClass("circle");
            $(this).prevAll().removeClass("circle");
            $(".three").css("display","block");
            $(".one,.two").css("display","none");
        });
    });

    $(window).scroll(function () {
        //console.log($(window).scrollTop());
        if($(window).scrollTop()>=800){
            $(".leftSword").animate({"left":1258},1800);
            $(".rightSword").animate({"right":1258},1800);
        }
    });
    $("leftSword")
};