$(document).ready(function() {

    // drop_down事件

    $(".menu ul li").hover(function() {
        let index = $(this).index();
        console.log(index)
        $(".drop_downB1").eq(index).stop(true, true).slideDown();

    }, function() {
        let index = $(this).index();
        $(".drop_downB1").eq(index).stop(true, true).css("display", "none")
    })

    // 移入drop_down内部
    $(".drop_downB1").hover(function() {
        $(this).css("display", "block")
    }, function() {
        $(this).css("display", "none")
    })

    // 移入内部li的背景颜色
    $(".sort1 li").hover(function() {
        // 修改背景颜色
        $(this).addClass("sort_bg").siblings().removeClass("sort_bg");
        // 修改变化的图片
        $(this).children(".sort_img").addClass("none").removeClass("block");
        $(this).siblings().children(".sort_img").addClass("block").removeClass("none");
        $(this).children(".sort_img2").addClass("block").removeClass("none");
        $(this).siblings().children(".sort_img2").addClass("none").removeClass("block");
    })

    // 移入内部li的背景颜色  ---变化右边的div

    $(".sort1 ul li").hover(function() {
            console.log("W")
            let index = $(this).index();
            $(this).parents(".sort1").siblings(".sort2").children("ul").eq(index).css("display", "block").siblings().css("display", "none");
        })
        // $(".sort1 li").hover(function() {
        //     let index = $(this).index();
        //     $(".sort2 ul").eq(index).css("display", "block").siblings().css("display", "none");
        // })































})