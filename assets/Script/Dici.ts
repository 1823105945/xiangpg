// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;
import tmpPlayer from './Player'
@ccclass
export default class Dici extends cc.Component {


    onLoad () {
        var self= this;
        var listener = {
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: function (touches, event) {
                var goAction= cc.moveBy(0.2,cc.p(0,140));
                self.node.runAction(goAction);
                return true; //这里必须要写 return true
            },

        }
        cc.eventManager.addListener(listener, this.node);
    }

    start () {

    }

    noteBox(){
        return this.node.getBoundingBoxToWorld();
    }

    update (dt) {
        var player = cc.find("Canvas/normal").getComponent(tmpPlayer);
        console.log(cc.rectIntersectsRect(player.node.getBoundingBoxToWorld(),this.noteBox()))
        if(cc.rectIntersectsRect(player.node.getBoundingBoxToWorld(),this.noteBox())){

            cc.director.loadScene('over');
            //cc.log('碰撞');
        }
    }
}
