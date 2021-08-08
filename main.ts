namespace SpriteKind {
    export const tile = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    if (controller.A.isPressed()) {
        easy()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    if (controller.A.isPressed()) {
        myPaintbrush.setImage(img`
            . . . . . . . . . . . . . 2 . . 
            . . . . . . . . . . . . 2 2 . . 
            . . . . . . . . . . 2 2 2 2 . . 
            . . . . . . . . . 2 2 2 2 2 . . 
            . . . . . . . . 2 2 2 2 2 2 . . 
            . . . . . . . . 2 2 2 2 2 . . . 
            . . . . . . . . f 2 2 2 . . . . 
            . . . . . . . f b f . . . . . . 
            . . . . . . f b f . . . . . . . 
            . . . . . f b f . . . . . . . . 
            . . . . f b f . . . . . . . . . 
            . . . f b f . . . . . . . . . . 
            . . f b f . . . . . . . . . . . 
            . f b f . . . . . . . . . . . . 
            f b f . . . . . . . . . . . . . 
            f f . . . . . . . . . . . . . . 
            `)
        paintcolor = "Red"
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite, location) {
    if (controller.A.isPressed()) {
        myPaintbrush.setImage(img`
            . . . . . . . . . . . . . 9 . . 
            . . . . . . . . . . . . 9 9 . . 
            . . . . . . . . . . 9 9 9 9 . . 
            . . . . . . . . . 9 9 9 9 9 . . 
            . . . . . . . . 9 9 9 9 9 9 . . 
            . . . . . . . . 9 9 9 9 9 . . . 
            . . . . . . . . f 9 9 9 . . . . 
            . . . . . . . f b f . . . . . . 
            . . . . . . f b f . . . . . . . 
            . . . . . f b f . . . . . . . . 
            . . . . f b f . . . . . . . . . 
            . . . f b f . . . . . . . . . . 
            . . f b f . . . . . . . . . . . 
            . f b f . . . . . . . . . . . . 
            f b f . . . . . . . . . . . . . 
            f f . . . . . . . . . . . . . . 
            `)
        paintcolor = "Light blue"
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    if (controller.A.isPressed()) {
        myPaintbrush.setImage(img`
            . . . . . . . . . . . . . 8 . . 
            . . . . . . . . . . . . 8 8 . . 
            . . . . . . . . . . 8 8 8 8 . . 
            . . . . . . . . . 8 8 8 8 8 . . 
            . . . . . . . . 8 8 8 8 8 8 . . 
            . . . . . . . . 8 8 8 8 8 . . . 
            . . . . . . . . f 8 8 8 . . . . 
            . . . . . . . f b f . . . . . . 
            . . . . . . f b f . . . . . . . 
            . . . . . f b f . . . . . . . . 
            . . . . f b f . . . . . . . . . 
            . . . f b f . . . . . . . . . . 
            . . f b f . . . . . . . . . . . 
            . f b f . . . . . . . . . . . . 
            f b f . . . . . . . . . . . . . 
            f f . . . . . . . . . . . . . . 
            `)
        paintcolor = "Blue"
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile12`, function (sprite, location) {
    if (controller.A.isPressed()) {
        myPaintbrush.setImage(img`
            . . . . . . . . . . . . . c . . 
            . . . . . . . . . . . . c c . . 
            . . . . . . . . . . c c c c . . 
            . . . . . . . . . c c c c c . . 
            . . . . . . . . c c c c c c . . 
            . . . . . . . . c c c c c . . . 
            . . . . . . . . f c c c . . . . 
            . . . . . . . f b f . . . . . . 
            . . . . . . f b f . . . . . . . 
            . . . . . f b f . . . . . . . . 
            . . . . f b f . . . . . . . . . 
            . . . f b f . . . . . . . . . . 
            . . f b f . . . . . . . . . . . 
            . f b f . . . . . . . . . . . . 
            f b f . . . . . . . . . . . . . 
            f f . . . . . . . . . . . . . . 
            `)
        paintcolor = "Dark purple"
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    if (controller.A.isPressed()) {
        myPaintbrush.setImage(img`
            . . . . . . . . . . . . . 4 . . 
            . . . . . . . . . . . . 4 4 . . 
            . . . . . . . . . . 4 4 4 4 . . 
            . . . . . . . . . 4 4 4 4 4 . . 
            . . . . . . . . 4 4 4 4 4 4 . . 
            . . . . . . . . 4 4 4 4 4 . . . 
            . . . . . . . . f 4 4 4 . . . . 
            . . . . . . . f b f . . . . . . 
            . . . . . . f b f . . . . . . . 
            . . . . . f b f . . . . . . . . 
            . . . . f b f . . . . . . . . . 
            . . . f b f . . . . . . . . . . 
            . . f b f . . . . . . . . . . . 
            . f b f . . . . . . . . . . . . 
            f b f . . . . . . . . . . . . . 
            f f . . . . . . . . . . . . . . 
            `)
        paintcolor = "Orange"
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    if (controller.A.isPressed()) {
        myPaintbrush.setImage(img`
            . . . . . . . . . . . . . 7 . . 
            . . . . . . . . . . . . 7 7 . . 
            . . . . . . . . . . 7 7 7 7 . . 
            . . . . . . . . . 7 7 7 7 7 . . 
            . . . . . . . . 7 7 7 7 7 7 . . 
            . . . . . . . . 7 7 7 7 7 . . . 
            . . . . . . . . f 7 7 7 . . . . 
            . . . . . . . f b f . . . . . . 
            . . . . . . f b f . . . . . . . 
            . . . . . f b f . . . . . . . . 
            . . . . f b f . . . . . . . . . 
            . . . f b f . . . . . . . . . . 
            . . f b f . . . . . . . . . . . 
            . f b f . . . . . . . . . . . . 
            f b f . . . . . . . . . . . . . 
            f f . . . . . . . . . . . . . . 
            `)
        paintcolor = "Green"
    }
})
function easy () {
    if (paintcolor == "Yellow") {
        color = sprites.create(img`
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            `, SpriteKind.tile)
        grid.snap(color)
        grid.place(color, grid.getLocation(myPaintbrush))
    } else if (paintcolor == "Green") {
        color = sprites.create(img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            `, SpriteKind.tile)
        grid.snap(color)
        grid.place(color, grid.getLocation(myPaintbrush))
    } else if (paintcolor == "Red") {
        color = sprites.create(img`
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `, SpriteKind.tile)
        grid.snap(color)
        grid.place(color, grid.getLocation(myPaintbrush))
    } else if (paintcolor == "Eraser") {
        color = sprites.create(img`
            d d d d d d d d 1 1 1 1 1 1 1 1 
            d d d d d d d d 1 1 1 1 1 1 1 1 
            d d d d d d d d 1 1 1 1 1 1 1 1 
            d d d d d d d d 1 1 1 1 1 1 1 1 
            d d d d d d d d 1 1 1 1 1 1 1 1 
            d d d d d d d d 1 1 1 1 1 1 1 1 
            d d d d d d d d 1 1 1 1 1 1 1 1 
            d d d d d d d d 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 d d d d d d d d 
            1 1 1 1 1 1 1 1 d d d d d d d d 
            1 1 1 1 1 1 1 1 d d d d d d d d 
            1 1 1 1 1 1 1 1 d d d d d d d d 
            1 1 1 1 1 1 1 1 d d d d d d d d 
            1 1 1 1 1 1 1 1 d d d d d d d d 
            1 1 1 1 1 1 1 1 d d d d d d d d 
            1 1 1 1 1 1 1 1 d d d d d d d d 
            `, SpriteKind.tile)
        grid.snap(color)
        grid.place(color, grid.getLocation(myPaintbrush))
    } else if (paintcolor == "Orange") {
        color = sprites.create(img`
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            `, SpriteKind.tile)
        grid.snap(color)
        grid.place(color, grid.getLocation(myPaintbrush))
    } else if (paintcolor == "Blue") {
        color = sprites.create(img`
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            `, SpriteKind.tile)
        grid.snap(color)
        grid.place(color, grid.getLocation(myPaintbrush))
    } else if (paintcolor == "Light blue") {
        color = sprites.create(img`
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            `, SpriteKind.tile)
        grid.snap(color)
        grid.place(color, grid.getLocation(myPaintbrush))
    } else if (paintcolor == "Purple") {
        color = sprites.create(img`
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            `, SpriteKind.tile)
        grid.snap(color)
        grid.place(color, grid.getLocation(myPaintbrush))
    } else if (paintcolor == "Light purple") {
        color = sprites.create(img`
            b b b b b b b b b b b b b b b b 
            b b b b b b b b b b b b b b b b 
            b b b b b b b b b b b b b b b b 
            b b b b b b b b b b b b b b b b 
            b b b b b b b b b b b b b b b b 
            b b b b b b b b b b b b b b b b 
            b b b b b b b b b b b b b b b b 
            b b b b b b b b b b b b b b b b 
            b b b b b b b b b b b b b b b b 
            b b b b b b b b b b b b b b b b 
            b b b b b b b b b b b b b b b b 
            b b b b b b b b b b b b b b b b 
            b b b b b b b b b b b b b b b b 
            b b b b b b b b b b b b b b b b 
            b b b b b b b b b b b b b b b b 
            b b b b b b b b b b b b b b b b 
            `, SpriteKind.tile)
        grid.snap(color)
        grid.place(color, grid.getLocation(myPaintbrush))
    } else if (paintcolor == "Dark purple") {
        color = sprites.create(img`
            c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c 
            `, SpriteKind.tile)
        grid.snap(color)
        grid.place(color, grid.getLocation(myPaintbrush))
    } else {
        color = sprites.create(img`
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            `, SpriteKind.tile)
        grid.snap(color)
        grid.place(color, grid.getLocation(myPaintbrush))
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    if (controller.A.isPressed()) {
        myPaintbrush.setImage(img`
            . . . . . . . . . . . . . f . . 
            . . . . . . . . . . . . f f . . 
            . . . . . . . . . . f f . f . . 
            . . . . . . . . . f . . . f . . 
            . . . . . . . . f . . . . f . . 
            . . . . . . . . f . . . f . . . 
            . . . . . . . . f . f f . . . . 
            . . . . . . . f b f . . . . . . 
            . . . . . . f b f . . . . . . . 
            . . . . . f b f . . . . . . . . 
            . . . . f b f . . . . . . . . . 
            . . . f b f . . . . . . . . . . 
            . . f b f . . . . . . . . . . . 
            . f b f . . . . . . . . . . . . 
            f b f . . . . . . . . . . . . . 
            f f . . . . . . . . . . . . . . 
            `)
        paintcolor = "Eraser"
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    if (controller.A.isPressed()) {
        myPaintbrush.setImage(img`
            . . . . . . . . . . . . . 5 . . 
            . . . . . . . . . . . . 5 5 . . 
            . . . . . . . . . . 5 5 5 5 . . 
            . . . . . . . . . 5 5 5 5 5 . . 
            . . . . . . . . 5 5 5 5 5 5 . . 
            . . . . . . . . 5 5 5 5 5 . . . 
            . . . . . . . . f 5 5 5 . . . . 
            . . . . . . . f b f . . . . . . 
            . . . . . . f b f . . . . . . . 
            . . . . . f b f . . . . . . . . 
            . . . . f b f . . . . . . . . . 
            . . . f b f . . . . . . . . . . 
            . . f b f . . . . . . . . . . . 
            . f b f . . . . . . . . . . . . 
            f b f . . . . . . . . . . . . . 
            f f . . . . . . . . . . . . . . 
            `)
        paintcolor = "Yellow"
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    if (controller.A.isPressed()) {
        myPaintbrush.setImage(img`
            . . . . . . . . . . . . . a . . 
            . . . . . . . . . . . . a a . . 
            . . . . . . . . . . a a a a . . 
            . . . . . . . . . a a a a a . . 
            . . . . . . . . a a a a a a . . 
            . . . . . . . . a a a a a . . . 
            . . . . . . . . f a a a . . . . 
            . . . . . . . f b f . . . . . . 
            . . . . . . f b f . . . . . . . 
            . . . . . f b f . . . . . . . . 
            . . . . f b f . . . . . . . . . 
            . . . f b f . . . . . . . . . . 
            . . f b f . . . . . . . . . . . 
            . f b f . . . . . . . . . . . . 
            f b f . . . . . . . . . . . . . 
            f f . . . . . . . . . . . . . . 
            `)
        paintcolor = "Purple"
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    if (controller.A.isPressed()) {
        myPaintbrush.setImage(img`
            . . . . . . . . . . . . . 3 . . 
            . . . . . . . . . . . . 3 3 . . 
            . . . . . . . . . . 3 3 3 3 . . 
            . . . . . . . . . 3 3 3 3 3 . . 
            . . . . . . . . 3 3 3 3 3 3 . . 
            . . . . . . . . 3 3 3 3 3 . . . 
            . . . . . . . . f 3 3 3 . . . . 
            . . . . . . . f b f . . . . . . 
            . . . . . . f b f . . . . . . . 
            . . . . . f b f . . . . . . . . 
            . . . . f b f . . . . . . . . . 
            . . . f b f . . . . . . . . . . 
            . . f b f . . . . . . . . . . . 
            . f b f . . . . . . . . . . . . 
            f b f . . . . . . . . . . . . . 
            f f . . . . . . . . . . . . . . 
            `)
        paintcolor = "Pink"
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    if (controller.A.isPressed()) {
        myPaintbrush.setImage(img`
            . . . . . . . . . . . . . b . . 
            . . . . . . . . . . . . b b . . 
            . . . . . . . . . . b b b b . . 
            . . . . . . . . . b b b b b . . 
            . . . . . . . . b b b b b b . . 
            . . . . . . . . b b b b b . . . 
            . . . . . . . . f b b b . . . . 
            . . . . . . . f b f . . . . . . 
            . . . . . . f b f . . . . . . . 
            . . . . . f b f . . . . . . . . 
            . . . . f b f . . . . . . . . . 
            . . . f b f . . . . . . . . . . 
            . . f b f . . . . . . . . . . . 
            . f b f . . . . . . . . . . . . 
            f b f . . . . . . . . . . . . . 
            f f . . . . . . . . . . . . . . 
            `)
        paintcolor = "Light purple"
    }
})
let color: Sprite = null
let paintcolor = ""
let myPaintbrush: Sprite = null
myPaintbrush = sprites.create(img`
    . . . . . . . . . . . . . 7 . . 
    . . . . . . . . . . . . 7 7 . . 
    . . . . . . . . . . 7 7 7 7 . . 
    . . . . . . . . . 7 7 7 7 7 . . 
    . . . . . . . . 7 7 7 7 7 7 . . 
    . . . . . . . . 7 7 7 7 7 . . . 
    . . . . . . . . f 7 7 7 . . . . 
    . . . . . . . f b f . . . . . . 
    . . . . . . f b f . . . . . . . 
    . . . . . f b f . . . . . . . . 
    . . . . f b f . . . . . . . . . 
    . . . f b f . . . . . . . . . . 
    . . f b f . . . . . . . . . . . 
    . f b f . . . . . . . . . . . . 
    f b f . . . . . . . . . . . . . 
    f f . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
paintcolor = "Green"
scene.setBackgroundColor(1)
tiles.setTilemap(tilemap`level1`)
grid.moveWithButtons(myPaintbrush)
grid.snap(myPaintbrush)
myPaintbrush.setStayInScreen(true)
