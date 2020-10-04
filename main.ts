controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    dart = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 9 . . . . . 8 . . . . . . . 
        . . . 9 . . . 2 8 8 8 . . . . . 
        . 5 5 . 9 . . 2 2 2 8 . . . . . 
        5 5 5 7 7 7 7 7 4 2 8 . . . . . 
        5 5 5 7 7 7 7 7 4 2 8 . . . . . 
        . . 5 . 9 . . 2 2 2 8 . . . . . 
        . . . 9 . . . 2 8 8 8 . . . . . 
        . . 9 . . . . . 8 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, spacePlane, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy(effects.fire, 100)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let bogey: Sprite = null
let dart: Sprite = null
let spacePlane: Sprite = null
spacePlane = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 9 9 . . . . . . . 
    . . . . . 9 9 9 9 . . . . . . . 
    . . . . . 9 9 . . . . . . . . . 
    . . . . . 9 8 8 8 . . . . . . . 
    . . . 8 8 8 7 8 7 8 8 8 . . . . 
    . 8 8 8 8 8 8 8 7 7 8 4 . . 4 . 
    8 8 8 8 8 8 8 8 8 8 8 4 4 4 . . 
    . 8 8 8 8 8 8 8 8 8 8 4 . . 4 . 
    . . . 8 8 8 8 8 8 8 8 8 . . . . 
    . . . . . 9 8 8 8 8 . . . . . . 
    . . . . . 9 9 9 . . . . . . . . 
    . . . . . . 9 9 9 9 . . . . . . 
    . . . . . . . . 9 9 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
spacePlane.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
controller.moveSprite(spacePlane, 200, 200)
game.onUpdateInterval(500, function () {
    bogey = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . 5 . . . . 
        . . . . 9 9 . . . . 5 5 . . . . 
        . . . . 9 9 . . . . 5 5 . . . . 
        . 2 2 2 9 9 2 2 2 2 f f 4 4 . . 
        . . 2 2 2 2 5 5 2 2 f f 4 4 4 . 
        . . . . . 5 5 5 . . . . . . . . 
        . . . . . 5 5 5 . . . . . . . . 
        . . . . . . 5 5 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    bogey.setVelocity(-100, 0)
    bogey.setPosition(180, randint(0, 120))
})
