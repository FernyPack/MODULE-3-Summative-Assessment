// Set up the scene
const scene = new THREE.Scene();

// Set up the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 5, 20); // Set the camera slightly above and looking down
camera.lookAt(0, 0, 0); // Make the camera look at the center of the scene

// Set up the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight); // Make renderer fill the screen
renderer.setClearColor(0xeeeeee, 1); // Set background color to light gray
document.body.appendChild(renderer.domElement); // Append the renderer to the DOM

// Add basic ambient lighting to make the scene visible
const ambientLight = new THREE.AmbientLight(0x404040, 1); // Soft white light
scene.add(ambientLight);

// Add directional light to illuminate the scene from above
const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Strong white light
directionalLight.position.set(10, 10, 10); // Position the light above the scene
scene.add(directionalLight);

// Load the texture (replace 'Ground037.png' with your texture file path)
const textureLoader = new THREE.TextureLoader();
const groundTexture = textureLoader.load('textures/Ground037.png', () => {
  console.log('Texture loaded successfully');
}, undefined, (error) => {
  console.error('Error loading texture:', error);
});

// Apply tiling (repeat) to the texture for the floor
groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping; // Enable tiling in both axes

// Set the tiling values (adjust to your preference)
groundTexture.repeat.set(1, 1); // Tile the texture 5 times along the X-axis and Y-axis

// Create the floor geometry (a simple plane with size 10x10)
const floorGeometry = new THREE.PlaneGeometry(20, 20);
floorGeometry.rotateX(-Math.PI / 2); // Rotate the plane to make it horizontal

// Create the material for the floor (using the loaded texture)
const floorMaterial = new THREE.MeshStandardMaterial({
  map: groundTexture, // Apply the texture
  roughness: 0.6,   // Some roughness for the floor
  metalness: 0.1,   // Slightly metallic surface
  side: THREE.DoubleSide // Ensure the plane is visible from both sides
});

// Create the floor mesh and add it to the scene
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
scene.add(floor);

// Animation loop to render the scene
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera); // Render the scene with the camera
}

animate();
