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

@ccclass
export default class WelcomeCame extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property(cc.Node)
    startButton: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        var scaleTo=cc.scaleTo(0.8,0.9)
        var reverse=cc.scaleTo(0.8,1)
        var seq=cc.sequence(scaleTo,reverse)
        var repeat=cc.repeatForever(seq)
        this.startButton.runAction(repeat);
    }

    start () {

    }

    //开始游戏
    onStateGame () {
        cc.director.loadScene("main");

    }
    // update (dt) {}
}
