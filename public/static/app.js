// Saints data will be fetched from the API
let saintsData = [];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', async () => {
    await loadSaints();
    hideLoading();
});

// Load saints from API
async function loadSaints() {
    try {
        const response = await fetch('/api/saints');
        const data = await response.json();
        saintsData = data.saints;
        renderSaintsGrid();
        updateSaintsCount();
    } catch (error) {
        console.error('Error loading saints:', error);
        showError();
    }
}

// Render saints grid
function renderSaintsGrid() {
    const grid = document.getElementById('saints-grid');
    grid.innerHTML = '';
    
    saintsData.forEach(saint => {
        const card = createSaintCard(saint);
        grid.appendChild(card);
    });
}

// Create individual saint card
function createSaintCard(saint) {
    const card = document.createElement('div');
    card.className = 'saint-card card-gradient rounded-lg overflow-hidden cursor-pointer group';
    card.onclick = () => openModal(saint);
    
    card.innerHTML = `
        <div class="relative">
            <!-- Portrait Container -->
            <div class="aspect-[3/4] overflow-hidden bg-gray-800 relative">
                <img src="${saint.imageUrl}" 
                     alt="${saint.name}" 
                     class="saint-portrait w-full h-full transform group-hover:scale-110 transition-transform duration-700"
                     loading="lazy"
                     onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 500%22%3E%3Crect fill=%22%232a2a4e%22 width=%22400%22 height=%22500%22/%3E%3Ctext x=%22200%22 y=%22250%22 font-family=%22Arial%22 font-size=%2224%22 fill=%22%236a6a8a%22 text-anchor=%22middle%22%3EImage Loading...%3C/text%3E%3C/svg%3E'">
                
                <!-- Overlay gradient -->
                <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-60"></div>
                
                <!-- Feast Day Badge -->
                <div class="absolute top-2 right-2 bg-black bg-opacity-70 px-2 py-1 rounded">
                    <p class="text-xs text-yellow-400 sans-text">
                        <i class="fas fa-calendar-alt mr-1"></i>${saint.feastDay}
                    </p>
                </div>
            </div>
            
            <!-- Card Content -->
            <div class="p-4 space-y-2">
                <!-- Title/Role -->
                <p class="text-xs text-yellow-400 sans-text uppercase tracking-wider">
                    ${saint.title}
                </p>
                
                <!-- Saint Name -->
                <h3 class="serif-heading text-xl font-bold text-gray-100">
                    ${saint.name}
                </h3>
                
                <!-- Known For -->
                <p class="text-sm text-gray-400 sans-text italic">
                    ${saint.knownFor}
                </p>
                
                <!-- Divider -->
                <div class="border-t border-gray-600 opacity-30 my-2"></div>
                
                <!-- Life Dates -->
                <p class="text-xs text-gray-500 sans-text">
                    <i class="fas fa-hourglass-half mr-1"></i>
                    ${saint.lifespan}
                </p>
                
                <!-- Patron Of -->
                <p class="text-xs text-gray-400 sans-text">
                    <i class="fas fa-shield-alt mr-1 text-yellow-500"></i>
                    <span class="italic">Patron of:</span> ${saint.patronOf}
                </p>
                
                <!-- Biography Preview -->
                <p class="text-sm text-gray-300 serif-text leading-relaxed line-clamp-3 mt-3">
                    ${saint.shortBio}
                </p>
                
                <!-- Read More Indicator -->
                <div class="flex items-center justify-end mt-3 text-yellow-400 group-hover:text-yellow-300 transition-colors">
                    <span class="text-xs sans-text mr-1">Read Full Story</span>
                    <i class="fas fa-arrow-right text-xs"></i>
                </div>
            </div>
        </div>
    `;
    
    return card;
}

// Open modal with saint details
function openModal(saint) {
    const modal = document.getElementById('saint-modal');
    const modalContent = modal.querySelector('.modal-content');
    
    modalContent.innerHTML = `
        <!-- Close Button -->
        <button onclick="closeModal()" 
                class="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10">
            <i class="fas fa-times text-2xl"></i>
        </button>
        
        <!-- Modal Header with Image -->
        <div class="relative">
            <!-- Full Image Container -->
            <div class="h-96 overflow-hidden bg-gray-800 cursor-pointer" onclick="showFullImage('${saint.imageUrl}', '${saint.name}')">
                <img src="${saint.imageUrl}" 
                     alt="${saint.name}" 
                     class="w-full h-full object-cover object-top">
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent"></div>
                
                <!-- Click to Expand Indicator -->
                <div class="absolute top-4 left-4 bg-black bg-opacity-70 px-3 py-2 rounded">
                    <p class="text-xs text-yellow-400 sans-text">
                        <i class="fas fa-expand mr-1"></i>Click image to view full size
                    </p>
                </div>
            </div>
            
            <!-- Saint Name Overlay -->
            <div class="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-900">
                <p class="text-sm text-yellow-400 sans-text uppercase tracking-wider mb-2">
                    ${saint.title}
                </p>
                <h2 class="serif-heading text-4xl font-bold text-white mb-2">
                    ${saint.name}
                </h2>
                <p class="text-lg text-gray-300 italic serif-text">
                    ${saint.knownFor}
                </p>
            </div>
        </div>
        
        <!-- Modal Body -->
        <div class="p-6 space-y-6">
            <!-- Key Information Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 bg-black bg-opacity-30 rounded-lg p-4">
                <div class="text-center">
                    <i class="fas fa-calendar-alt text-yellow-400 text-xl mb-2"></i>
                    <p class="text-xs text-gray-400 sans-text uppercase">Feast Day</p>
                    <p class="text-sm text-gray-200 font-semibold">${saint.feastDay}</p>
                </div>
                <div class="text-center">
                    <i class="fas fa-hourglass-half text-yellow-400 text-xl mb-2"></i>
                    <p class="text-xs text-gray-400 sans-text uppercase">Lived</p>
                    <p class="text-sm text-gray-200 font-semibold">${saint.lifespan}</p>
                </div>
                <div class="text-center">
                    <i class="fas fa-shield-alt text-yellow-400 text-xl mb-2"></i>
                    <p class="text-xs text-gray-400 sans-text uppercase">Patron Of</p>
                    <p class="text-sm text-gray-200 font-semibold">${saint.patronOf}</p>
                </div>
            </div>
            
            <!-- Full Biography -->
            <div>
                <h3 class="serif-heading text-2xl font-bold text-yellow-400 mb-4">
                    <i class="fas fa-book-open mr-2"></i>Life & Legacy
                </h3>
                <div class="serif-text text-gray-300 leading-relaxed space-y-4">
                    ${saint.fullBio.split('\n\n').map(paragraph => 
                        `<p>${paragraph}</p>`
                    ).join('')}
                </div>
            </div>
            
            <!-- Miracles Section -->
            ${saint.miracles && saint.miracles.length > 0 ? `
                <div>
                    <h3 class="serif-heading text-2xl font-bold text-yellow-400 mb-4">
                        <i class="fas fa-star mr-2"></i>Miracles & Signs
                    </h3>
                    <ul class="space-y-3">
                        ${saint.miracles.map(miracle => `
                            <li class="flex items-start">
                                <i class="fas fa-cross text-yellow-500 text-xs mt-1.5 mr-3"></i>
                                <span class="serif-text text-gray-300">${miracle}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            ` : ''}
            
            <!-- Prayer Request -->
            <div class="bg-black bg-opacity-30 rounded-lg p-6 text-center">
                <i class="fas fa-praying-hands text-3xl text-yellow-400 mb-3"></i>
                <p class="serif-text text-lg text-gray-300 italic">
                    "${saint.name}, pray for us"
                </p>
            </div>
        </div>
    `;
    
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('saint-modal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Show full size image
function showFullImage(imageUrl, altText) {
    // Create fullscreen image overlay
    const overlay = document.createElement('div');
    overlay.className = 'fixed inset-0 z-[60] bg-black bg-opacity-95 flex items-center justify-center p-4';
    overlay.onclick = () => overlay.remove();
    
    overlay.innerHTML = `
        <div class="relative max-w-full max-h-full">
            <img src="${imageUrl}" 
                 alt="${altText}" 
                 class="max-w-full max-h-full object-contain">
            <button onclick="this.parentElement.parentElement.remove()" 
                    class="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-70 transition-colors">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    document.body.appendChild(overlay);
}

// Update saints count
function updateSaintsCount() {
    document.getElementById('saints-count').textContent = saintsData.length;
}

// Hide loading screen
function hideLoading() {
    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
    }, 500);
}

// Show error message
function showError() {
    const grid = document.getElementById('saints-grid');
    grid.innerHTML = `
        <div class="col-span-full text-center py-12">
            <i class="fas fa-exclamation-triangle text-4xl text-yellow-400 mb-4"></i>
            <p class="text-xl text-gray-300">Unable to load saints data</p>
            <p class="text-gray-400 mt-2">Please refresh the page to try again</p>
        </div>
    `;
    hideLoading();
}

// Handle escape key to close modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});