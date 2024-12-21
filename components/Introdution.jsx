import { useEffect } from "react";
import Matter from "./matter.js";
import { useState } from "react";
const Myname = () => {
  const [isGravityEnabled,setIsGravityEnabled] =useState(true);
  useEffect(() => {
    let engine = Matter.Engine.create();
    Matter.Events.on(engine, "load", function () {
      setTimeout(() => {
        window.scrollTo(0, document.body.clientHeight);
      }, 100);
    });

    var Play = Play || {};
    var Engine = Matter.Engine,
      World = Matter.World,
      Bodies = Matter.Bodies,
      Composites = Matter.Composites,
      Common = Matter.Common,
      Render = Matter.Render,
      Runner = Matter.Runner;
    var width = innerWidth;
    var height = innerHeight;
    if (innerHeight > 600) {
      var height = innerHeight;
    } else {
      var height = 600;
    }
    let render = Matter.Render.create({
      element: document.querySelector("#introduction"),
      engine: engine,
      options: {
        width: innerWidth,
        height: height,
        wireframes: false,
        background: "transparent",
      },
    });

    var X = 0;
    var Y = 0;
    Render.run(render);
    var runner = Runner.create();
    var isnotplay = false;
    if (width < 800) {
      var scale = 0.5;
    } else {
      var scale = 1;
    }

    if (innerWidth > 600) {
      var tipX = innerWidth - 250;
      var tipscale = 1;
      var frictionD = 2;
      var torqueD = 0.5;
    } else {
      var frictionD = 0;
      var torqueD = 0;
      var tipX = 175;
      var tipscale = 0.75;
    }
    var url;
    var letters = [];
    for (var i = 1; i < 27; i++) {
      /*B */ i == 1 || i == 6 || i == 8
        ? (url = "https://i.ibb.co/93KcsPy/1.png")
        : null;
      /*A*/ i == 2 || i == 4 || i == 5 || i == 7 || i == 9
        ? (url = "https://i.ibb.co/XVWWghW/2.png")
        : null;
      /*R*/ i == 3 || i == 11 || i == 26
        ? (url = "https://i.ibb.co/DDczKbh/3.png")
        : null;
      /*F*/ i == 10 ? (url = "https://i.ibb.co/N9cG02v/10.png") : null;
      /*O*/ i == 12 || i == 23
        ? (url = "https://i.ibb.co/w6cNWqC/12.png")
        : null;
      /*N*/ i == 13 || i == 16
        ? (url = "https://i.ibb.co/5cdJTnY/13.png")
        : null;
      /*T*/ i == 14 ? (url = "https://i.ibb.co/hfck3DB/14.png") : null;
      /*E*/ i == 15 || i == 19 || i == 21 || i == 25
        ? (url = "https://i.ibb.co/mH6JqqS/15.png")
        : null;
      /*D*/ i == 17 || i == 18
        ? (url = "https://i.ibb.co/F6bKnt4/17.png")
        : null;
      /*V*/ i == 20 ? (url = "https://i.ibb.co/7CfFfsB/20.png") : null;
      /*L*/ i == 22 ? (url = "https://i.ibb.co/T13FtxR/22.png") : null;
      /*P*/ i == 24 ? (url = "https://i.ibb.co/JCL187K/24.png") : null;

      var letter = Matter.Bodies.rectangle(
        (40 + X) * scale,
        200 + Y,
        80 * scale,
        80 * scale,
        {
          render: {
            sprite: {
              texture: url,
              xScale: scale,
              yScale: scale,
            },
          },
        }
      );

      letters.push(letter);
      //space between letters
      X += 70;
      Y;
      if (i == 5 || i === 9 || i === 17) {
        //space between sentence
        Y += 100;
        X = 30;
      }
      if (i == 1) {
        X = 40;
      }
      Matter.World.add(engine.world, letters[i - 1]);
    }
    window.onresize = () => {
      width = innerWidth;
      height = innerHeight;
      render.options.width = innerWidth;
      render.options.height = innerHeight;
      Engine.update(engine);
      Engine.update(engine);
      Matter.Runner.run(engine);
      Matter.Render.run(render);
      Matter.Render.run(render);
    };
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
    engine.gravity.scale = 0;
    engine.gravity.y = 0;
    var enabledgravity = false;
    var endedwaiting = true;
    document.getElementById("enable-gravity").addEventListener("click", () => {
      if (endedwaiting) { 
          endedwaiting = true; 
        if (!enabledgravity) { 
          enabledgravity = true;
          engine.gravity.y = 7;
          frictionD = 20;
          setIsGravityEnabled(false)
        } else {
          setIsGravityEnabled(true)

          enabledgravity = false;
          engine.gravity.y = -0.003;
          frictionD = 20;
          Matter.Runner.run(engine);
          Matter.Render.run(render);
        }
      }
    });
    engine.gravity.scale = 0.0001;
    Matter.World.add(engine.world, [
      Matter.Bodies.rectangle(width / 2, height * 2, width, height * 2, {
        isStatic: true,
      }),
      Matter.Bodies.rectangle(0 - width / 7, height / 2, width / 4, height, {
        isStatic: true,
      }),
      Matter.Bodies.rectangle(
        width + width / 7,
        height / 2,
        width / 4,
        height,
        { isStatic: true }
      ),
    ]);
    let mouse = Matter.Mouse.create(render.canvas);
    let mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        render: { visible: false },
      },
    });
    render.mouse = mouse;

    Matter.World.add(engine.world, mouseConstraint);
    Matter.Runner.run(engine);
    Matter.Render.run(render);
    setTimeout(() => {
      window.scrollTo(0, document.body.clientHeight);
    }, 1000);
  }, []);

  return (
    <div
      tabIndex={1}
      id="introduction"
      className="p-0  m-0 relative "
      aria-label="Baraa El Baba frontend developer"
    >
      <button
        id="enable-gravity"
        className="top-32 sm:top-16 right-0 text-white text-bolder text-3xl 
            bg-opacity-30 
             border-0 border-white absolute "
      >
       {isGravityEnabled?
        <svg width="100" height="100" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="36" r="8" stroke="white" strokeWidth="2"/>
          <line x1="16" y1="8" x2="16" y2="24" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <line x1="24" y1="8" x2="24" y2="24" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <line x1="32" y1="8" x2="32" y2="24" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        :
        <svg width="100" height="100" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="36" r="8" fill="white"/>
        <rect x="15" y="8" width="2" height="16" fill="white"/>
        <rect x="23" y="8" width="2" height="16" fill="white"/>
        <rect x="31" y="8" width="2" height="16" fill="white"/>
      </svg>
      
}
      
      </button>
      <style jsx>{`
        .bg-gap {
          background: linear-gradient(transparent 20%, black 30%, blue);
        }
      `}</style>
    </div>
  );
};

export default Myname;
