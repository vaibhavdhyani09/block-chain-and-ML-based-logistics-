// TruckGame.jsx
import React, { useEffect, useRef, useState } from 'react';

const TruckGame = () => {
  const canvasRef = useRef(null);
  const animationIdRef = useRef(null);
  const gameStateRef = useRef({
    gameOver: false,
    score: 0,
    truck: null,
    obstacles: [],
    obstacleTimer: 0
  });
  
  const [displayScore, setDisplayScore] = useState(0);
  const [displayGameOver, setDisplayGameOver] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      let animationId;
      
      const state = gameStateRef.current;
      
      // Load high score from localStorage
      const savedHighScore = localStorage.getItem('truckGameHighScore');
      state.highScore = savedHighScore ? parseInt(savedHighScore) : 0;

    
    // Initialize truck (smaller size)
    state.truck = {
      x: 50,
      y: canvas.height - 50,
      width: 40,
      height: 40,
      velocityY: 0,
      jumping: false,
      gravity: 0.6,
      jumpPower: -12
    };
    
    // Jump function
    const jump = () => {
      if (!state.truck.jumping && !state.gameOver) {
        state.truck.velocityY = state.truck.jumpPower;
        state.truck.jumping = true;
      }
    };
    
    // Handle keypress and click
    const handleKeyPress = (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        if (state.gameOver) {
          resetGame();
        } else {
          jump();
        }
      }
    };
    
    const handleClick = () => {
      if (state.gameOver) {
        resetGame();
      } else {
        jump();
      }
    };
    
    // Create obstacle (smaller size)
    const createObstacle = () => {
      state.obstacles.push({
        x: canvas.width,
        y: canvas.height - 45,
        width: 20,
        height: 45,
        speed: 5
      });
    };
    
    // Reset game
    const resetGame = () => {
      state.truck.y = canvas.height - 50;
      state.truck.velocityY = 0;
      state.truck.jumping = false;
      state.obstacles.length = 0;
      state.obstacleTimer = 0;
      state.score = 0;
      state.gameOver = false;
      setDisplayScore(0);
      setDisplayGameOver(false);
      gameLoop(); // Restart the game loop
    };
    
    // Collision detection
    const checkCollision = (truck, obstacle) => {
      return (
        truck.x < obstacle.x + obstacle.width &&
        truck.x + truck.width > obstacle.x &&
        truck.y < obstacle.y + obstacle.height &&
        truck.y + truck.height > obstacle.y
      );
    };
    
    // Game loop
    const gameLoop = () => {
      // Stop loop if game over
      if (state.gameOver) {
        cancelAnimationFrame(animationIdRef.current);
        return;
      }
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw ground line at bottom
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(0, canvas.height - 5);
      ctx.lineTo(canvas.width, canvas.height - 5);
      ctx.stroke();
      
      // Update truck physics
      state.truck.velocityY += state.truck.gravity;
      state.truck.y += state.truck.velocityY;
      
      // Ground collision
      if (state.truck.y >= canvas.height - 50) {
        state.truck.y = canvas.height - 50;
        state.truck.velocityY = 0;
        state.truck.jumping = false;
      }
      
      // Draw truck
      ctx.fillStyle = '#fff';
      ctx.fillRect(state.truck.x, state.truck.y, state.truck.width, state.truck.height);
      
      // Create obstacles
      state.obstacleTimer++;
      if (state.obstacleTimer > 100) {
        createObstacle();
        state.obstacleTimer = 0;
      }
      
      // Update and draw obstacles
      for (let i = state.obstacles.length - 1; i >= 0; i--) {
        const obs = state.obstacles[i];
        obs.x -= obs.speed;
        
        // Draw obstacle
        ctx.fillStyle = '#fff';
        ctx.fillRect(obs.x, obs.y, obs.width, obs.height);
        
        // Check collision
        if (checkCollision(state.truck, obs)) {
          state.gameOver = true;
          setDisplayGameOver(true);

          if (state.score > state.highScore) {
         state.highScore = state.score;
         localStorage.setItem('truckGameHighScore', state.score);
    }
          
          // Draw game over text
          ctx.fillStyle = '#fff';
          ctx.font = '36px Arial';
          ctx.fillText('GAME OVER', canvas.width / 2 - 110, canvas.height / 2);
          ctx.font = '18px Arial';
          ctx.fillText('Click to restart', canvas.width / 2 - 60, canvas.height / 2 + 35);
          
          cancelAnimationFrame(animationIdRef.current);
          return;
        }
        
        // Remove off-screen obstacles
        if (obs.x + obs.width < 0) {
          state.obstacles.splice(i, 1);
          state.score++;
          setDisplayScore(state.score);
        }
      }
      
      // Display score
      ctx.fillStyle = '#fff';
      ctx.font = '20px Arial';
      ctx.fillText(`Score: ${state.score}`, 20, 35);
      
      animationIdRef.current = requestAnimationFrame(gameLoop);
    };
    
    // Start game
    window.addEventListener('keydown', handleKeyPress);
    canvas.addEventListener('click', handleClick);
    gameLoop();
    
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      canvas.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationIdRef.current);
    };
  }, []);
  
  return (
  <div style={{ 
    textAlign: 'center', 
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20px'  // Add top margin here
  }}>
    <canvas 
      ref={canvasRef} 
      width={800} 
      height={400}
      style={{ 
        borderBottom: '4px solid white',
        backgroundColor: 'transparent',
        cursor: 'pointer'
      }}
    />
    <p style={{ color: 'white', marginTop: '1rem', fontSize: '14px' }}>
      Press SPACE or Click to Jump
    </p>
  </div>
);

};

export default TruckGame;
