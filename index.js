/**
 * Main icon canvas
 * @type {HTMLCanvasElement}
 */
const canvas = document.getElementById("icon");

/**
 * Canvas context (2d)
 * @type {CanvasRenderingContext2D}
 */
const ctx = canvas.getContext("2d");

let whiteKeyRender;
let blackKeyRender;

let keys = [];

let scale = 4;

async function prerender() {
    whiteKeyRender = document.createElement("canvas");
    blackKeyRender = document.createElement("canvas");

    whiteKeyRender.width = canvas.width;
    whiteKeyRender.height = canvas.height;

    blackKeyRender.width = canvas.width;
    blackKeyRender.height = canvas.height;

    let whiteCtx = whiteKeyRender.getContext("2d");
    let blackCtx = blackKeyRender.getContext("2d");

    let keyStartPos = [17.5, 28];
    let whiteKeySize = [13.5, 74];
    let blackKeySize = [8, 40];

    whiteCtx.fillStyle = "white";
    whiteCtx.lineJoin = "round";
    whiteCtx.lineCap = "round";
    whiteCtx.lineWidth = 1 * scale;

    blackCtx.fillStyle = "black";
    blackCtx.lineJoin = "round";
    blackCtx.lineCap = "round";
    blackCtx.lineWidth = 1 * scale;

    for (let i = 0; i < 7; i++) {
        let x = keyStartPos[0] + whiteKeySize[0] * i;
        let y = keyStartPos[1];

        let w = whiteKeySize[0];
        let h = whiteKeySize[1];

        whiteCtx.fillRect(x * scale, y * scale, w * scale, h * scale);
        whiteCtx.strokeRect(x * scale, y * scale, w * scale, h * scale);

        if (i == 0 || i == 1 || i == 3 || i == 4 || i == 5) {
            let x = keyStartPos[0] + whiteKeySize[0] * i;
            let y = keyStartPos[1];

            x += whiteKeySize[0] / 1.75;

            let w = blackKeySize[0];
            let h = blackKeySize[1];

            blackCtx.fillRect(x * scale, y * scale, w * scale, h * scale);
            blackCtx.strokeRect(x * scale, y * scale, w * scale, h * scale);
        }
    }
}

async function draw() {
    ctx.save();

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
    ctx.shadowBlur = 3 * scale;
    ctx.shadowOffsetX = 8;
    ctx.shadowOffsetY = 8;
    ctx.fillRect(17 * scale, 27 * scale, 96 * scale, 76 * scale);

    ctx.shadowColor = "rgba(0, 0, 0, 0)";
    ctx.drawImage(whiteKeyRender, 0, 0);
    ctx.drawImage(blackKeyRender, 0, 0);

    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.lineWidth = 1.5 * scale;
    ctx.strokeRect(17 * scale, 27 * scale, 96 * scale, 76 * scale);

    ctx.restore();
}

prerender();
draw();
