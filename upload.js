// Upload functionality for Med Detect - MRI Analysis
const fileInput = document.getElementById('file-input');
const fileUploadArea = document.getElementById('file-upload-area');
const uploadSection = document.getElementById('upload-section');
const previewSection = document.getElementById('preview-section');
const uploadedImage = document.getElementById('uploaded-image');
const startAnalysisBtn = document.getElementById('start-analysis-btn');
const backBtn = document.getElementById('back-btn');
const loadingSection = document.getElementById('loading-section');
const analysisSection = document.getElementById('analysis-section');
const originalImage = document.getElementById('original-image');
const highlightedImage = document.getElementById('highlighted-image');
const confidenceDisplay = document.getElementById('confidence-display');
const confidenceValue = document.getElementById('confidence-value');
const downloadBtn = document.getElementById('download-btn');
const backToUploadBtn = document.getElementById('back-to-upload-btn');
const fileNameDisplay = document.getElementById('file-name-display');

let selectedFile = null;
let originalImageData = null;
let highlightedImageData = null;
let confidenceScore = 0;

// Drag and drop functionality
if (fileUploadArea) {
	fileUploadArea.addEventListener('dragover', (e) => {
		e.preventDefault();
		fileUploadArea.classList.add('drag-over');
	});

	fileUploadArea.addEventListener('dragleave', () => {
		fileUploadArea.classList.remove('drag-over');
	});

	fileUploadArea.addEventListener('drop', (e) => {
		e.preventDefault();
		fileUploadArea.classList.remove('drag-over');
		const files = Array.from(e.dataTransfer.files);
		if (files.length > 0) {
			handleFile(files[0]);
		}
	});
}

// File input change
if (fileInput) {
	fileInput.addEventListener('change', (e) => {
		if (e.target.files.length > 0) {
			handleFile(e.target.files[0]);
		}
	});
}

// Handle single file upload
function handleFile(file) {
	// Check if it's an image
	if (!file.type.startsWith('image/')) {
		alert('Please upload an image file (JPG, PNG)');
		return;
	}

	selectedFile = file;
	originalImageData = null;

	// Update file name display
	if (fileNameDisplay) {
		fileNameDisplay.textContent = file.name;
	}

	// Read and display the image
	const reader = new FileReader();
	reader.onload = (e) => {
		originalImageData = e.target.result;
		uploadedImage.src = e.target.result;
		
		// Show preview section, hide upload section
		uploadSection.style.display = 'none';
		previewSection.style.display = 'block';
		
		// Scroll to preview
		previewSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};
	reader.readAsDataURL(file);
}

// Start Analysis button
if (startAnalysisBtn) {
	startAnalysisBtn.addEventListener('click', async () => {
		if (!selectedFile) return;

		// Hide preview, show loading
		previewSection.style.display = 'none';
		loadingSection.style.display = 'block';
		loadingSection.scrollIntoView({ behavior: 'smooth', block: 'center' });

		// Prepare form data for backend
		const formData = new FormData();
		formData.append('image', selectedFile);

		try {
			// TODO: Replace with your actual backend API endpoint
			// Example backend connection:
			// const response = await fetch('http://localhost:5000/analyze', {
			// 	method: 'POST',
			// 	body: formData
			// });
			// const result = await response.json();
			// 
			// Then use the result:
			// highlightedImageData = result.highlighted_image; // Base64 or URL
			// confidenceScore = result.confidence; // e.g., 92
			// displayResults();

			// Simulate API call for now (remove this when connecting to real backend)
			await simulateAnalysis();

		} catch (error) {
			console.error('Analysis error:', error);
			alert('Error analyzing image. Please try again.');
			loadingSection.style.display = 'none';
			previewSection.style.display = 'block';
		}
	});
}

// Simulate analysis (remove this when connecting to real backend)
async function simulateAnalysis() {
	// Simulate processing time
	await new Promise(resolve => setTimeout(resolve, 3000));

	// For demo: create a mock highlighted image
	// In real implementation, this will come from backend
	const canvas = document.createElement('canvas');
	const img = new Image();
	img.onload = () => {
		canvas.width = img.width;
		canvas.height = img.height;
		const ctx = canvas.getContext('2d');
		ctx.drawImage(img, 0, 0);
		
		// Add red overlay to simulate tumor detection
		ctx.fillStyle = 'rgba(255, 0, 0, 0.4)';
		ctx.fillRect(canvas.width * 0.3, canvas.height * 0.3, canvas.width * 0.4, canvas.height * 0.4);
		
		highlightedImageData = canvas.toDataURL('image/png');
		confidenceScore = 92; // Mock confidence score

		// Display results
		displayResults();
	};
	img.src = originalImageData;
}

// Display analysis results
function displayResults() {
	// Hide loading, show results
	loadingSection.style.display = 'none';
	analysisSection.style.display = 'block';

	// Set images
	originalImage.src = originalImageData;
	highlightedImage.src = highlightedImageData;

	// Display confidence
	confidenceValue.textContent = `${confidenceScore}%`;
	confidenceDisplay.style.display = 'block';

	// Scroll to results
	analysisSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Download result image
if (downloadBtn) {
	downloadBtn.addEventListener('click', () => {
		if (!highlightedImageData) return;

		// Create download link
		const link = document.createElement('a');
		link.download = `tumor-analysis-${Date.now()}.png`;
		link.href = highlightedImageData;
		link.click();
	});
}

// Back to upload button (from preview)
if (backBtn) {
	backBtn.addEventListener('click', () => {
		previewSection.style.display = 'none';
		uploadSection.style.display = 'block';
		selectedFile = null;
		originalImageData = null;
		if (fileInput) fileInput.value = '';
		if (fileNameDisplay) fileNameDisplay.textContent = 'No file chosen';
		
		uploadSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
	});
}

// Back to upload button (from results)
if (backToUploadBtn) {
	backToUploadBtn.addEventListener('click', () => {
		analysisSection.style.display = 'none';
		uploadSection.style.display = 'block';
		selectedFile = null;
		originalImageData = null;
		highlightedImageData = null;
		confidenceScore = 0;
		if (fileInput) fileInput.value = '';
		if (fileNameDisplay) fileNameDisplay.textContent = 'No file chosen';
		
		uploadSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
	});
}
