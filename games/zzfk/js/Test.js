/**
 * Created by Administrator on 2016/8/3.
 * author yaoqianfeng
 */
//测试文件
function test(){

}

(function(){
    var touche=new touch();
    touche.eventHandle("add",$$("start-btn"),"touchstart",function(e){
        stopBubble(e);
        console.info("启动按钮");
    },false);
    touche.eventHandle("add",$$("pause-btn"),"touchstart",function(e){
        stopBubble(e);
        console.info("暂停按钮");
    },false);
    touche.eventHandle("add",$$("stop-btn"),"touchstart",function(e){
        stopBubble(e);
        console.info("停止按钮");
    },false);
    touche.eventHandle("add",$$("restart-btn"),"touchstart",function(e){
        stopBubble(e);
        console.info("重启按钮");
    },false);

})();
