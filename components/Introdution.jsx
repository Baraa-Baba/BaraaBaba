import Script from 'next/script'
import { useEffect } from 'react'
import Matter from './matter.js'
const Myname = () => {
    useEffect(() => {
        let engine = Matter.Engine.create();
        var Play = Play || {};
        var Engine = Matter.Engine,

            World = Matter.World,
            Bodies = Matter.Bodies,

            Composites = Matter.Composites,
            Common = Matter.Common,

            Render = Matter.Render,
            Runner = Matter.Runner
        var width = innerWidth
        var height = innerHeight

        let render = Matter.Render.create({
            element: document.querySelector('body'),
            engine: engine,
            options: {
                width: width,
                height: height,
                wireframes: false
            }
        });

        var X = 0
        var Y = 0
        Render.run(render);
        var runner = Runner.create();
        var isnotplay = false
        if (width < 800) {
            var scale = 0.5
        } else {
            var scale = 1
        }

        var url
        for (var i = 1; i < 27; i++) {
        /*B */    i == 1 || i == 6 || i == 8 ? url = 'https://i.ibb.co/93KcsPy/1.png' : null
         /*A*/   i == 2 || i == 4 || i == 5 || i == 7 || i == 9 ? url = 'https://i.ibb.co/XVWWghW/2.png' : null
          /*R*/  i == 3 || i == 11 || i == 26 ? url = 'https://i.ibb.co/DDczKbh/3.png' : null
        /*F*/ i == 10 ? url = 'https://i.ibb.co/N9cG02v/10.png' : null
        /*O*/ i == 12 || i == 23 ? url = 'https://i.ibb.co/w6cNWqC/12.png' : null
         /*N*/ i == 13 || i == 16 ? url = 'https://i.ibb.co/5cdJTnY/13.png' : null
         /*T*/ i == 14 ? url = 'https://i.ibb.co/hfck3DB/14.png' : null
         /*E*/ i == 15 || i == 19 || i == 21 || i == 25 ? url = 'https://i.ibb.co/mH6JqqS/15.png' : null
          /*D*/ i == 17 || i == 18 ? url = 'https://i.ibb.co/F6bKnt4/17.png' : null
            /*V*/ i == 20 ? url = 'https://i.ibb.co/7CfFfsB/20.png' : null
             /*L*/ i == 22 ? url = 'https://i.ibb.co/T13FtxR/22.png' : null
             /*P*/ i == 24 ? url = 'https://i.ibb.co/JCL187K/24.png' : null
            var letter = Matter.Bodies.rectangle((40 + X) * scale, 200 + Y, 80 * scale, 80 * scale, {
                friction: 0.3,
                torque: 0,
                render: {
                    sprite: {
                        texture: url,
                        xScale: scale,
                        yScale: scale,
                    }
                }
            })

            //space between letters
            X += 70
            Y
            if (i == 5 || i === 9 || i === 17) {
                //space between sentence
                Y += 100
                X = 30
            }
            if (i == 1) {
                X = 40
            }
            Matter.World.add(engine.world, letter);
        }
        let tip = Matter.Bodies.rectangle(innerWidth - 250, 100, 80, 80, {
            friction: 0.3,
            torque: 0,
            isStatic: true,
            render: {
                fillStyle: 'blue',
                sprite: {
                    texture: 'https://i.ibb.co/vXmPbMv/Frame-1-1.png',
                    xScale: 1,
                    yScale: 1,
                }
            }
        })
        Matter.World.add(engine.world, tip);
        window.onresize = () => {
            width = innerWidth
            height = innerHeight
            Engine.update(engine)
            Engine.update(engine)
            Matter.Render.run(render);
        }
        /*
        let jet = Matter.Bodies.rectangle(500, 200, 300, 300, {
            isStatic: true,
            render: {
                fillStyle: 'blue',
                sprite: {
                    texture: 'https://i.ibb.co/HPFkJLM/jet.png',
                    xScale: scale + 0.25,
                    yScale: scale + 0.25,
                }
            }
        })
        Matter.World.add(engine.world, jet);
        document.addEventListener('keydown', (event) => {
            console.log('====================================');
            if (event.keyCode == 37) {
                jet.position.x -= 15
                event.preventDefault()
                Matter.Body.setAngle(jet, 360);
            } if (event.keyCode == 38) {
                event.preventDefault()
                Matter.Body.setAngle(jet, 100);
                jet.position.y -= 15
            } if (event.keyCode == 39) {
                event.preventDefault()
                jet.position.x += 15
                Matter.Body.setAngle(jet, 100);
            } if (event.keyCode == 40) {
                event.preventDefault()
                jet.position.y += 15
                slowRotate(90)
            }
            Engine.update(engine)
        })
        function slowRotate(rotateangle) {
            for (var n = 0; n < rotateangle; n += 10) {
                setTimeout(() => {
                    Matter.Body.setAngle(jet, 10);
                    Engine.update(engine)
                }, 100);
            }
        }*/
        engine.gravity.scale = 0
        engine.gravity.y = 0
        engine.enableSleeping = true
        Matter.Sleeping = true
        Matter.World.add(engine.world, [
            Matter.Bodies.rectangle(width / 2, height * 2, width, height * 2, { isStatic: true }),
            Matter.Bodies.rectangle(width / 2, -height / 2 + 50, width, height * 0.75, { isStatic: true }),
            Matter.Bodies.rectangle(0 - width / 7, height / 2, width / 4, height, { isStatic: true }),
            Matter.Bodies.rectangle(width + width / 7, height / 2, width / 4, height, { isStatic: true })
        ]);
        let mouse = Matter.Mouse.create(render.canvas);
        let mouseConstraint = Matter.MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                render: { visible: false }
            }
        });
        render.mouse = mouse;

        Matter.World.add(engine.world, mouseConstraint);
        Matter.Runner.run(engine)
        Matter.Render.run(render);
    }, []);

    return (
        <div tabIndex={1} aria-label="Baraa Baba frontend developer">
            <Script src='./matter.js' strategy='beforeInteractive' />
        </div>
    );
}

export default Myname;