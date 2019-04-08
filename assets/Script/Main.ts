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
export default class Main extends cc.Component {

    @property(cc.Node)
    player:cc.Node=null;

    @property(cc.Prefab)
    dici:cc.Prefab=null;

    @property(cc.Label)
    timeLable:cc.Label=null;

    @property(cc.Label)
    scoreLable:cc.Label=null;

    diciCount=0;
    score=0;
    dc_duration=140;//地刺的间隔距离
    wallWidth=80;

    onLoad () {
        this.setInputControl();
        // 玩家的初始位置
        this.player.setPosition(-this.node.width/2+80,this.node.height/2-175)
    //    创建8个地刺
        for (var i=0;i<8;i++){
            this.newDiciAction()
        }
    }

    //封装地刺
    newDiciAction(){
        this.diciCount+=1;
        var newDici=cc.instantiate(this.dici)
        this.node.addChild(newDici);
        var randD=cc.random0To1();
        if (randD>=0.5){
            newDici.rotationY=0
        } else {
            newDici.rotationY=180
        }
        newDici.setPosition(this.diciPostion(randD))
    }

    //地刺位置
    diciPostion(randD){
        var randX=0;
        var randY=0;
    //    大于0.5在右边，小于0.5在左边出现
        if (randD>=0.5){
            randX=this.node.width/2-this.wallWidth;
        }else {
            randX=-this.node.width/2+this.wallWidth;
        }
        if (this.diciCount<=8){
            randY=(this.node.height/2)-(this.dc_duration*this.diciCount)-this.dc_duration*1;
        }else {
            randY=(this.node.height/2)-(this.dc_duration*8)-this.dc_duration*1;
        }
        return cc.p(randX,randY);
    }

    setInputControl(){
        // 添加触摸事件
        this.node.on(cc.Node.EventType.TOUCH_START,this.on_touch_One,this);

    }

    //触摸事件
    on_touch_One(t){
        var locationInNode = t.getLocation();
        if (locationInNode.x>this.node.width/2){
            this.playerMoveRight();
        } else {
            console.log('zuoy');
        }
    }

    //player向右移动
    playerMoveRight(){
        var goRight=cc.moveTo(0.2,cc.p(this.node.width/2-this.wallWidth,this.player.getPositionY()))
    }

    //player向左移动
    playerMoveLeft(){

    }

    // update (dt) {}
}
