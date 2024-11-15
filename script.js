// Set up the scene
const scene = new THREE.Scene();

// Set up the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 5, 20); // Set the camera slightly above and looking down
camera.lookAt(0, 5, 0); // Ensure the camera looks at the center of the scene

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

// Load the texture for the floor (replace with your own texture if needed)
const textureLoader = new THREE.TextureLoader();
const groundTexture = textureLoader.load('texturesfloor/Ground037.png');

// Apply tiling (repeat) to the texture for the floor
groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping; // Enable tiling in both axes
groundTexture.repeat.set(1, 1); // Tile the texture once along the X-axis and Y-axis

// Create the floor geometry (a simple plane with size 20x20)
const floorGeometry = new THREE.PlaneGeometry(20, 20);
floorGeometry.rotateX(-Math.PI / 2); // Rotate the plane to make it horizontal

// Create a simpler material for the floor using MeshBasicMaterial
const floorMaterial = new THREE.MeshBasicMaterial({
    map: groundTexture,
    side: THREE.DoubleSide // Ensure the plane is visible from both sides
});  

// Create the floor mesh and add it to the scene
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
scene.add(floor);

// --- Makeshift Trees ---
// Tree 1
const trunkGeometry1 = new THREE.CylinderGeometry(0.5, 0.5, 3, 32);
const trunkMaterial1 = new THREE.MeshBasicMaterial({ color: 0x8B4513 });
const trunk1 = new THREE.Mesh(trunkGeometry1, trunkMaterial1);
trunk1.position.set(-5, 1.5, 0);
scene.add(trunk1);

const leavesGeometry1 = new THREE.ConeGeometry(2, 5, 32);
const leavesMaterial1 = new THREE.MeshBasicMaterial({ color: 0x228B22 });
const leaves1 = new THREE.Mesh(leavesGeometry1, leavesMaterial1);
leaves1.position.set(-5, 5, 0);
scene.add(leaves1);

// Tree 2
const trunkGeometry2 = new THREE.CylinderGeometry(0.5, 0.5, 3, 32);
const trunkMaterial2 = new THREE.MeshBasicMaterial({ color: 0x8B4513 });
const trunk2 = new THREE.Mesh(trunkGeometry2, trunkMaterial2);
trunk2.position.set(5, 1.5, 5);
scene.add(trunk2);

const leavesGeometry2 = new THREE.ConeGeometry(2, 5, 32);
const leavesMaterial2 = new THREE.MeshBasicMaterial({ color: 0x228B22 });
const leaves2 = new THREE.Mesh(leavesGeometry2, leavesMaterial2);
leaves2.position.set(5, 5, 5);
scene.add(leaves2);

// Tree 3
const trunkGeometry3 = new THREE.CylinderGeometry(0.5, 0.5, 3, 32);
const trunkMaterial3 = new THREE.MeshBasicMaterial({ color: 0x8B4513 });
const trunk3 = new THREE.Mesh(trunkGeometry3, trunkMaterial3);
trunk3.position.set(-7, 1.5, 7);
scene.add(trunk3);

const leavesGeometry3 = new THREE.ConeGeometry(2, 5, 32);
const leavesMaterial3 = new THREE.MeshBasicMaterial({ color: 0x228B22 });
const leaves3 = new THREE.Mesh(leavesGeometry3, leavesMaterial3);
leaves3.position.set(-7, 5, 7);
scene.add(leaves3);

// Tree 4
const trunkGeometry4 = new THREE.CylinderGeometry(0.5, 0.5, 3, 32);
const trunkMaterial4 = new THREE.MeshBasicMaterial({ color: 0x8B4513 });
const trunk4 = new THREE.Mesh(trunkGeometry4, trunkMaterial4);
trunk4.position.set(3, 1.5, -5);
scene.add(trunk4);

const leavesGeometry4 = new THREE.ConeGeometry(2, 5, 32);
const leavesMaterial4 = new THREE.MeshBasicMaterial({ color: 0x228B22 });
const leaves4 = new THREE.Mesh(leavesGeometry4, leavesMaterial4);
leaves4.position.set(3, 5, -5);
scene.add(leaves4);

// --- Makeshift Tank ---
const tankBodyGeometry = new THREE.BoxGeometry(4, 2, 6);
const tankBodyMaterial = new THREE.MeshBasicMaterial({ color: 0x355E3B });
const tankBodyGeometry1 = new THREE.BoxGeometry(2.5, 1.5, 6);
const tankBodyMaterial1 = new THREE.MeshBasicMaterial({ color: 0x228B22 });
const tankBody = new THREE.Mesh(tankBodyGeometry, tankBodyMaterial);
const tankBody1 = new THREE.Mesh(tankBodyGeometry1, tankBodyMaterial1);
tankBody.position.set(0, 1, 0);
tankBody1.position.set(0, 2.5, -1);
scene.add(tankBody,tankBody1);

const cannonGeometry = new THREE.CylinderGeometry(0.3, 0.3, 5, 32);
const cannonMaterial = new THREE.MeshBasicMaterial({ color: 0x696969 });
const cannon = new THREE.Mesh(cannonGeometry, cannonMaterial);
cannon.rotation.y = Math.PI / 2;
cannon.rotation.z = Math.PI / 2;
cannon.position.set(0, 2.5, 3);
scene.add(cannon);

// --- Tank Tracks (using Cylinders) ---
const trackMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
const trackRadius = 1; // Adjust the radius
const trackThickness = 0.5; // Thickness of the tracks

// Left side tracks
const leftTrack1 = new THREE.Mesh(new THREE.CylinderGeometry(trackRadius, trackRadius, trackThickness, 32), trackMaterial);
leftTrack1.position.set(-2, 0.5, -3.5);
leftTrack1.rotation.z = Math.PI / 2; // Rotate to align horizontally
scene.add(leftTrack1);

const leftTrack2 = new THREE.Mesh(new THREE.CylinderGeometry(trackRadius, trackRadius, trackThickness, 32), trackMaterial);
leftTrack2.position.set(2, 0.5, -3.5);
leftTrack2.rotation.z = Math.PI / 2;
scene.add(leftTrack2);

// Right side tracks
const rightTrack1 = new THREE.Mesh(new THREE.CylinderGeometry(trackRadius, trackRadius, trackThickness, 32), trackMaterial);
rightTrack1.position.set(-2, 0.5, 2.5);
rightTrack1.rotation.z = Math.PI / 2;
scene.add(rightTrack1);

const rightTrack2 = new THREE.Mesh(new THREE.CylinderGeometry(trackRadius, trackRadius, trackThickness, 32), trackMaterial);
rightTrack2.position.set(2, 0.5, 2.5);
rightTrack2.rotation.z = Math.PI / 2;
scene.add(rightTrack2);

// Mouse Control Variables
let isMouseDown1 = false; // Left Mouse Button (forward)
let isMouseDown2 = false; // Right Mouse Button (backward)

// Variables to handle camera movement
const movementSpeed = 0.1; // Camera movement speed

// Mouse movement tracking
let mouseX = 0;
let mouseY = 0;

// Event listeners for mouse
window.addEventListener('mousemove', onMouseMove, false);
window.addEventListener('mousedown', onMouseDown, false);
window.addEventListener('mouseup', onMouseUp, false);

// Mouse move event handler
function onMouseMove(event) {
    // Get the mouse position normalized from -1 to 1 (centered)
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

    // Update camera direction based on mouse position (cursor movement)
    camera.lookAt(mouseX * 10, mouseY * 10, 0);
}

// Mouse button down event handler
function onMouseDown(event) {
    if (event.button === 0) {
        // Left-click (forward movement)
        isMouseDown1 = true;
    } else if (event.button === 2) {
        // Right-click (backward movement)
        isMouseDown2 = true;
    }
}

// Mouse button up event handler
function onMouseUp(event) {
    if (event.button === 0) {
        // Left-click release
        isMouseDown1 = false;
    } else if (event.button === 2) {
        // Right-click release
        isMouseDown2 = false;
    }
}

// Update camera position based on mouse controls
function updateCameraMovement() {
    // Forward movement (left-click)
    if (isMouseDown1) {
        camera.position.z -= movementSpeed; // Move forward along Z-axis
    }

    // Backward movement (right-click)
    if (isMouseDown2) {
        camera.position.z += movementSpeed; // Move backward along Z-axis
    }
}

// Prevent right-click context menu
window.addEventListener('contextmenu', (event) => event.preventDefault(), false);

// Animation loop to render the scene
function animate() {
    requestAnimationFrame(animate);

    // Update camera movement
    updateCameraMovement();

    // Render the scene with the camera
    renderer.render(scene, camera);
}

animate();