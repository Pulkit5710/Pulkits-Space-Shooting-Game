controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 3 3 3 3 2 . . . . 
        . 2 2 2 3 3 1 1 1 1 1 3 2 . . . 
        . 1 1 1 1 1 1 1 1 1 1 1 2 . . . 
        . 2 2 2 3 3 1 1 1 1 1 3 2 . . . 
        . . . . . 2 2 2 3 3 3 2 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, spacePlane, 200, 0)
})
info.onLifeZero(function () {
    spacePlane.destroy()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    bogey.destroy(effects.fire, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
let bogey: Sprite = null
let projectile: Sprite = null
let spacePlane: Sprite = null
info.setLife(100)
spacePlane = sprites.create(img`
    8 8 . . . . . . . . . . . . . . 
    8 8 8 . . . . . . . . . . . . . 
    8 8 8 8 . . . . . . . . . . . . 
    8 8 8 f . . . . . . . . . . . . 
    8 8 8 f 8 . . . . . . . . . . . 
    8 8 6 f 8 c . . . . . . . . . . 
    6 6 6 c 7 c 8 8 . . . . . . . . 
    6 6 7 c 7 c 7 8 8 f c f c c c c 
    7 7 7 6 7 6 5 5 7 f 7 f b d d d 
    7 7 7 6 5 6 6 6 . . . . . . . . 
    7 7 7 f 6 6 . . . . . . . . . . 
    7 5 5 f 6 . . . . . . . . . . . 
    5 7 7 6 . . . . . . . . . . . . 
    7 7 6 6 . . . . . . . . . . . . 
    6 6 6 . . . . . . . . . . . . . 
    6 6 . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(spacePlane, 200, 200)
spacePlane.setStayInScreen(true)
game.onUpdateInterval(1000, function () {
    bogey = sprites.create(img`
        . . . . . . . . . . . . . . e e 
        . . . . . . . . . . . . . e e e 
        . . . . . . . . . . . . e e 2 2 
        . . . . . . . . . . . . e 2 2 4 
        . . . . . . . . . . . e f 4 4 2 
        . . . . . . . . . . e e f 2 2 2 
        . . . . . . . . e e e 4 e 2 2 2 
        d d d b f 2 f 2 4 4 e 2 e 2 2 2 
        c c c c f c f e e 2 c 2 c 2 e e 
        . . . . . . . . e e c 2 c e e e 
        . . . . . . . . . . c e f e c c 
        . . . . . . . . . . . e f c c c 
        . . . . . . . . . . . . f c c c 
        . . . . . . . . . . . . c c c c 
        . . . . . . . . . . . . . c c c 
        . . . . . . . . . . . . . . c c 
        `, SpriteKind.Enemy)
    bogey.setVelocity(-100, 0)
    bogey.setPosition(160, randint(5, 115))
    bogey.setFlag(SpriteFlag.AutoDestroy, true)
})
