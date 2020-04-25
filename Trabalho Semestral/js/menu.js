var menuState = {
    create: function(){
        this.music = game.add.audio('music');
        this.music.loop = true;
        this.music.volume = .5;
        this.music.play();

        var txtTitutlo = game.add.text(game.world.centerX,150,'THE BOX',{font:'40px emulogic',fill:'#fff'});
            txtTitutlo.anchor.set(.5);

            var txtPressStart = game.add.text(game.world.centerX,550,'PRESS START',{font:'20px emulogic',fill:'#fff'});
                txtPressStart.anchor.set(.5);

            game.add.tween(txtPressStart).to({y:250},1000).start();

            game.time.events.add(1000,function(){
                var enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
                    enterKey.onDown.addOnce(this.startGame,this);
            },this);

    },

    startGame:function(){
        this.music.stop();
        game.state.start('stage1');
    }
};
