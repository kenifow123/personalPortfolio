
import { useEffect, useRef } from 'react';

const pipeCount = 30;
const pipePropCount = 8;
const pipePropsLength = pipeCount * pipePropCount;

const TO_RAD = Math.PI / 180;
const HALF_PI = Math.PI / 2;
const TAU = Math.PI * 2;

const turnCount = 8;
const turnAmount = (360 / turnCount) * TO_RAD;
const turnChanceRange = 58;

const baseSpeed = 0.5;
const rangeSpeed = 1;
const baseTTL = 100;
const rangeTTL = 300;
const baseWidth = 2;
const rangeWidth = 4;
const baseHue = 180;
const rangeHue = 60;

const backgroundColor = 'hsla(150,80%,1%,1)';

const rand = (max) => Math.random() * max;
const round = Math.round;

const fadeInOut = (life, ttl) => {
    const fadeDuration = Math.min(30, ttl / 2);
    return Math.min(
        1,
        life / fadeDuration,
        (ttl - life) / fadeDuration
    );
};

export default function PipeBackground() {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const canvas = document.createElement('canvas');
        const trailCanvas = document.createElement('canvas');

        canvas.style.position = 'absolute';
        canvas.style.inset = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.pointerEvents = 'none';

        container.appendChild(canvas);

        const ctx = canvas.getContext('2d');
        const trailCtx = trailCanvas.getContext('2d');

        if (!ctx || !trailCtx) {
            canvas.remove();
            return;
        }

        let center = [0, 0];
        let tick = 0;
        let animationId;
        let pipeProps = new Float32Array(pipePropsLength);

        function resize() {
            const width = container.clientWidth;
            const height = container.clientHeight;

            canvas.width = width;
            canvas.height = height;
            trailCanvas.width = width;
            trailCanvas.height = height;

            center = [width / 2, height / 2];
        }

        function initPipe(i) {
            pipeProps.set([
                rand(canvas.width),
                center[1],
                round(rand(1)) ? HALF_PI : TAU - HALF_PI,
                baseSpeed + rand(rangeSpeed),
                0,
                baseTTL + rand(rangeTTL),
                baseWidth + rand(rangeWidth),
                baseHue + rand(rangeHue),
            ], i);
        }

        function initPipes() {
            for (let i = 0; i < pipePropsLength; i += pipePropCount) {
                initPipe(i);
            }
        }

        function drawPipe(x, y, life, ttl, width, hue) {
            trailCtx.save();
            trailCtx.strokeStyle =
                `hsla(${hue},75%,50%,${fadeInOut(life, ttl) * 0.125})`;
            trailCtx.lineWidth = 1;
            trailCtx.beginPath();
            trailCtx.arc(x, y, width, 0, TAU);
            trailCtx.stroke();
            trailCtx.restore();
        }

        function updatePipe(i) {
            const xIndex = i;
            const yIndex = i + 1;
            const directionIndex = i + 2;
            const speedIndex = i + 3;
            const lifeIndex = i + 4;
            const ttlIndex = i + 5;
            const widthIndex = i + 6;
            const hueIndex = i + 7;

            let x = pipeProps[xIndex];
            let y = pipeProps[yIndex];
            let direction = pipeProps[directionIndex];
            const speed = pipeProps[speedIndex];
            let life = pipeProps[lifeIndex];
            const ttl = pipeProps[ttlIndex];
            const width = pipeProps[widthIndex];
            const hue = pipeProps[hueIndex];

            drawPipe(x, y, life, ttl, width, hue);

            life++;
            x += Math.cos(direction) * speed;
            y += Math.sin(direction) * speed;

            const turnInterval = Math.max(1, round(rand(turnChanceRange)));
            const shouldTurn =
                !(tick % turnInterval) &&
                (!(round(x) % 6) || !(round(y) % 6));

            if (shouldTurn) {
                direction += turnAmount * (round(rand(1)) ? -1 : 1);
            }

            // Wrap pipes around the edges.
            if (x > canvas.width) x = 0;
            if (x < 0) x = canvas.width;
            if (y > canvas.height) y = 0;
            if (y < 0) y = canvas.height;

            pipeProps[xIndex] = x;
            pipeProps[yIndex] = y;
            pipeProps[directionIndex] = direction;
            pipeProps[lifeIndex] = life;

            if (life > ttl) initPipe(i);
        }

        function render() {
            ctx.fillStyle = backgroundColor;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.save();
            ctx.filter = 'blur(12px)';
            ctx.drawImage(trailCanvas, 0, 0);
            ctx.restore();

            ctx.drawImage(trailCanvas, 0, 0);
        }

        function draw() {
            tick++;

            for (let i = 0; i < pipePropsLength; i += pipePropCount) {
                updatePipe(i);
            }

            render();
            animationId = requestAnimationFrame(draw);
        }

        resize();
        initPipes();
        draw();

        window.addEventListener('resize', resize);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', resize);
            canvas.remove();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            aria-hidden="true"
            style={{
                position: 'absolute',
                inset: 0,
                overflow: 'hidden',
                pointerEvents: 'none',
                zIndex: 0,
            }}
        />
    );
}
